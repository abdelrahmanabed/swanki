const mongoose = require("mongoose")

const AitemSchema = new mongoose.Schema({
   label:{type: String},
   Price:{type: Number},
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
const AitemModel = mongoose.model("aitems", AitemSchema)
module.exports = AitemModel