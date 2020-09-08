// const express = require('express')

// // Create express instance
// const app = express()

// // Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')

// // Import API Routes
// app.use(users)
// app.use(test)

// // Export express app
// module.exports = app

// // Start standalone server if directly running
//   const port = process.env.PORT || 3001
//   app.listen(port, () => {
//     console.log(`API server listening on port ${port}`)
//   })


const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3001

// Create express instance
const app = express()

const jsonParser = bodyParser.json()

app.use(cors())
app.use('/api/auth',jsonParser, require('./routes/auth.routes'))
app.use('/api/links',jsonParser, require('./routes/link.routes'))

// // Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')

// // Import API Routes
// app.use(users)
// app.use(test)

// Export express app
// module.exports = app

// // Start standalone server if directly running
// if (require.main === module) {
//   const port = process.env.PORT || 3001
//   app.listen(port, () => {
//     console.log(`API server listening on port ${port}`)
//   })
// }

async function start() {
  try {
    await mongoose.connect('mongodb+srv://mongoMav:12345@cluster0.jursa.mongodb.net/app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1)
  }
}

start()