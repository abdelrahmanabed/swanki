const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
   label:{type: String},
   Price:{type: Number},
   itemSize:{type:Array},
   Color:{type:Array},
   itemNumber:{type:Number},
   itemImage:{type: Array},
   typeofI:{type: String},
   Category:{type: Array},
   date: {
      type: Date,
      default: Date.now
    }
})
const ItemModel = mongoose.model("items", ItemSchema)
module.exports = ItemModel