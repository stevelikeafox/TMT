const mongoose = require("mongoose");

const customersCollection = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  recipiant: [
    {
      title: { type: String, required: false },
      firstName: { type: String, required: false },
      lastName: { type: String, required: false },
      email: { type: String, required: false },
      phone: { type: Number, required: false },
      mobile: { type: Number, required: false }
    }
  ],

  consigneeAddress: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
      required: false
    },
    address3: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
      //   ^[0-9A-Z]+([ -]?[0-9A-Z]+)*$
    }
  }
});

module.exports = mongoose.model("customers", customersCollection);
