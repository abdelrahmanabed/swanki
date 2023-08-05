const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
 userId:String,
   date: {
    type: Date,
    default: Date.now
  }
  ,
  totalPrice:Number
  ,
  items:[]
  ,
  userAdd:{firstName:String,
    lastName:String,
    country:String,
    region:String,
    area:String,
    Address:String,
    phone:Number},

})
const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel