const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  title: {type: String, required: true},
  description: {type: String},
  deadline: {type: String, required: true, default: '24'},
  priority: {type: String},
  state: {type: String}
})

module.exports = model('Link', schema)