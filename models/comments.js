'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  name: String,
  user: String,
  image: String,
  text: String,
  date: String,
  title: String,
  city: String
});

module.exports = mongoose.model('Comment', CommentsSchema);
