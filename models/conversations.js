const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  studendtSender: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  teacherSender: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  text: {
    type: String,
    required: true
  },
  status: {
    enum: ["seen", "unseen", "notDelivered"],
    default: "notDelivered"
  }
})

const conversationSchema = new Schema({
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  request: {
    type: Schema.Types.ObjectId,
    ref: 'Request'
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  link: {
    type: String
  },
  messages: [messageSchema]
})

const Conversations = mongoose.model('Conversation', conversationSchema);

module.exports = Conversations;