const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

  txt: {
    type: String,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  }
  
});
  
module.exports = mongoose.model('Note', noteSchema, 'notes');
  