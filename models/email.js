const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  date: String,
  sender: String,
  subject: String
});


module.exports = mongoose.model('Email', EmailSchema);