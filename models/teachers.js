const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const reviewSchema = Schema({
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request',
    },
    rating: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    description: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});


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

module.exports = reviewSchema;

const Teachers = mongoose.model('Teacher', teacherSchema);

module.exports = Teachers;
