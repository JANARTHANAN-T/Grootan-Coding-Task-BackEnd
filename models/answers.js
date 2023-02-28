const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answersSchema = new Schema({
  name: String,
  email: String,
  age: String,
  mobile: String,
  role:String
});

module.exports = mongoose.model("Answers", answersSchema);
