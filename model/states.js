const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    _id: {
        type: String
      },
      name: {
        type: String
      },
      country_id: {
        type: String
      }
});

module.exports = new mongoose.model('State', stateSchema);
