const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
      state_id: {
        type: String
      }
});

module.exports = new mongoose.model('City', citySchema);
