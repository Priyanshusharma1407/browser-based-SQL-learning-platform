const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectMongo = require("./config/mongo");

const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectMongo();
const queryRoutes = require("./routes/queryRoutes");

app.use("/api/assignments", assignmentRoutes);
app.use("/api/query", queryRoutes);
const PORT = process.env.PORT || 5000;

const hintRoutes = require("./routes/hintRoutes");
app.use("/api/hint", hintRoutes);

console.log("API KEY:", process.env.GEMINI_API_KEY);

const sampleRoutes = require("./routes/sampleRoutes");

app.use("/api/sample", sampleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
