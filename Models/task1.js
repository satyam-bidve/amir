const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  companyId: {
    type: Number,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Task1 = mongoose.model("Task1", Schema);

module.exports = Task1;
