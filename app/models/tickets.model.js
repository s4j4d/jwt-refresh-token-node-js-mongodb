const {mongoose} = require("mongoose");

const Tickets = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    fromLocation  :String,
    toLocation    :String,   
    arrivalDate   :Date,
    departureDate :Date,
    unitPrice     :Number,
    stock         :Number,
    createdAt :Date,
    updatedAt :Date,
  })
);

module.exports = Tickets;
