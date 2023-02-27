const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    last_name: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
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
