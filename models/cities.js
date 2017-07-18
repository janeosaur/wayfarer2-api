'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./comments')

var CitySchema = new Schema({
  name: String,
  description: String,
  country: String,
  image: String,
  image2: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('City', CitySchema);
