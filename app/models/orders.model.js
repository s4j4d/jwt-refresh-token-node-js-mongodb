const {mongoose,SchemaType} = require("mongoose");
const User = require("./user.model");

const Orders = mongoose.model(
  "Order",
  new mongoose.Schema({
    items:{type:Schema.Types.Array},
    user:{type:Schema.Types.ObjectId , ref:User},
    expireTime:Number
  })
);

module.exports = Orders;
