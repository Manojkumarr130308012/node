const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
      state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
});

module.exports = new mongoose.model('City', citySchema);
