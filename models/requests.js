const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const requestSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  subject: {
    type: String,
    trim: true
  },
  topic: {
    type: String,
    trim: true
  },
  question: {
    type: String,
    trim: true
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  }],
  assignedTeacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  amount: {
    type: Number
  }
}, {
  timestamps: true
})

const Requests = mongoose.model('Request', requestSchema);

module.exports = Requests;