const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const { titleCase, addCountryCode } = require('../lib/utils');
const reviewSchema = require('./reviews');


const teacherSchema = new Schema({
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
    unique: true,
    required: true,
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
  mobileBankingNumber: {
    type: [{
      bankingName: String,
      bankingNumber: String
    }]
  },
  bio: {
    type: String,
    trim: true
  },
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
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Teachers = mongoose.model('Teacher', teacherSchema);

module.exports = Teachers;
