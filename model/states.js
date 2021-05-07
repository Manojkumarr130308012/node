const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
      cities: [
        {
          type: Schema.Types.ObjectId,
          ref: 'City'
        }
      ],
      country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
      }
});

module.exports = new mongoose.model('State', stateSchema);
