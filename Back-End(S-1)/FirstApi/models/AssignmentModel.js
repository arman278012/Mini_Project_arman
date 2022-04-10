const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  teacherName: String,
  title: String,
  description: String,
  batch: String,
  instructions: String,
  file: String,
  createdAt: { type: Date, default: new Date() },
  submissionDate: Date,
});

const assignmentModel = mongoose.model("assignment", mySchema);
module.exports = assignmentModel;
