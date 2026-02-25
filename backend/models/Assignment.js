const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  question: String,
  tables: [String],
});

module.exports = mongoose.model("Assignment", assignmentSchema);
