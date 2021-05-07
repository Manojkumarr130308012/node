const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
      country_id: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
      }
});

module.exports = new mongoose.model('State', stateSchema);
