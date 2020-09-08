const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = Router()

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует'})
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword})

    await user.save()
    res.status(201).json({ message: 'Пользователь создан' })

  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

// /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body
    console.log(email, password)

    const user = await User.findOne({ email })

    if(!user) {
      return res.status(400).json({ message: 'Пользователь не найден'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль'})
    }

    const token = jwt.sign(
      { userEmail: email },
      'jwtSecret',
      { expiresIn: '1h' }
    )

    res.status(201).json({ token, userId: user.id })

  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

// /api/auth/getInfo
router.post('/getInfo', async (req, res) => {
  try {
    const {token} = req.body
    const decoded = jwt.verify(token, 'jwtSecret')
    const email = decoded.userEmail

    const newData = await User.findOne({ email })

    const data = newData.links

    res.status(200).json({data})

  } catch (e) {
    console.error(e)
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

// /api/auth/uploadInfo
router.post('/uploadInfo', async (req, res) => {
  try {
    const {token, links} = req.body
    const decoded = jwt.verify(token, 'jwtSecret')
    const email = decoded.userEmail

    await User.updateOne({ email }, {
      links: [...links]
    })

    res.status(201).json({message: 'База по пользователю обновлена'})

  } catch (e) {
    console.error(e)
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

module.exports = router