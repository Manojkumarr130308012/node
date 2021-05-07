const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    _id: {
    type: Number
  },
  sortname: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = new mongoose.model('Country', countrySchema);
