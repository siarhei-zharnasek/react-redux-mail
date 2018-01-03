const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  date: String,
  sender: String,
  subject: String
});

module.exports.ShortEmail = {
  subject: true,
  date: true
};

module.exports.EmailModel = mongoose.model('Email', EmailSchema);