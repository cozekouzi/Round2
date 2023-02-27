const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      discription:{
        type:String
      }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Admin", adminSchema);
