const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timetamp:{
    type: String,
    default: Date.now,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
