const {Router} = require('express')
const Links = require('../models/links')
const router = Router()

router.post('/generate', async (req, res) => {
  try {
    

  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

router.get('/', async (req, res) => {
  try {
    
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так'})
  }
})

module.exports = router