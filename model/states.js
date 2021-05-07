const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
      country_id: {
        type: String
      }
});

module.exports = new mongoose.model('State', stateSchema);
