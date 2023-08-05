const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
   firstName:{type: String,required:true},
   lastName:{type: String},
   Email:{type: String,
      required: true},
   Phone:{type: Number,
      required: true},
   Password:{type: String,
            required: true,
            default: 'password'

            },
   Address:{type: Array},
   Favourits:{type: Array},
   Cart:{type: Array},
   date: {
      type: Date,
      default: Date.now
    }

})


const User = mongoose.model("users", UserSchema)

module.exports = User