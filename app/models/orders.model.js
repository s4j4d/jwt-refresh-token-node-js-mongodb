const {mongoose,SchemaType} = require("mongoose");

const Orders = mongoose.model(
  "Order",
  new mongoose.Schema({
    items:{type:Array},
    user:{type:}
    expireTime:Number
  })
);

module.exports = Orders;
