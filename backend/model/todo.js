const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  isCompleted: {
    type: Boolean,
  }
}, { timestamps: true })

const Todo = mongoose.model('todo', todoSchema)
module.exports = Todo