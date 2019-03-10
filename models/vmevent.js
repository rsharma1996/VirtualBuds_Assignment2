const mongoose = require('mongoose');

// VM Event Schema
const VMEventSchema = mongoose.Schema({
  vm_id: {
    type: Number,
    required: true
  },
  cc_id: {
    type: Number,
    required: true
  },
  vm_type: {
    type: String,
    required: true
  },
  event_type: {
    type: String,
    required: true
  },
  event_time_stamp: {
    type: String,
    required: true
  }
});

const VMEvent = module.exports = mongoose.model('VMEvent', VMEventSchema);

