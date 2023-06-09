const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  companyId : {
    type: Number,
  },
  primarytext: {
    type: String,
  },
  description: {
    type: String,
  },
  headline: {
    type: String,
  },
  cta: {
    type: String,
  },
  imageurl: {
    type: String,
  },
});

const Task = mongoose.model("Task", Schema);

module.exports = Task;
