const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
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
   Favourites: [{ itemId: String, itemImage: Array, label: String, Price: Number }],
   Cart: [{ itemId: String, itemImage: Array, label: String, Price: Number, itemSize: String, Color: String, otherColors:[],otherSizes:[]}],
   date: {
      type: Date,
      default: Date.now
    }

})


const AdminModel = mongoose.model("admin",AdminSchema)

module.exports = AdminModel