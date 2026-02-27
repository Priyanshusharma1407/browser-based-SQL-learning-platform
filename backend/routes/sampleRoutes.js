const express = require("express");
const router = express.Router();

const { getSampleData } = require("../controllers/sampleController");

router.get("/:table", getSampleData);

module.exports = router;
