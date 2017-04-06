var mongoose = require('mongoose');

var rsvpSchema = mongoose.Schema({
  Guest:{
    type: String,
    required: true,
  },
  Attending: {
    type: Boolean,
    required: true
  },
  Attendees: {
    type: Number,
    required: true
  },
  Hotel: {
    type: Boolean,
    required: true
  }
});

var Rsvp = mongoose.model('Rsvp', rsvpSchema);
module.exports = Rsvp;
