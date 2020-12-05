const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const reviewSchema = require('./teachers');


const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    set: titleCase,
    match: /[a-zA-Z ]+/
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    index: { unique: true, sparse: true },
    validate: (value) => {
      return !value || validator.isEmail(value);
    }
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
    minlength: 11,
    maxlength: 14,
    set: addCountryCode,
    validate: validator.isMobilePhone
  },
  image: {
    type: String
  },
  preferredTeachers: [{
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
  }],

  class: {
    type: String,
    trim: true
  },
  group: {
    type: String,
    trim: true
  },
  reviews: [reviewSchema],
  address: {
    type: {
      country: {
        type: String,
        trim: true
      },
      district: {
        type: String,
        trim: true
      }
    }
  }

}, {
  timestamps: true
})


const Students = mongoose.model('Student', studentSchema);
module.exports = Students;