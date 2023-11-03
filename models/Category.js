const mongoose = require("mongoose");

//define schema
const CategorySchema = new mongoose.Schema(
  {
    Cname: {
      type: String,
      require: true,
    },
   
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      }
    }
    },{ timestams: true });

//create  collection

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;