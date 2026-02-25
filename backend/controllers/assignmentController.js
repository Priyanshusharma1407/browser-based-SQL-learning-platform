const Assignment = require("../models/Assignment");

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();

    res.json(assignments);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
