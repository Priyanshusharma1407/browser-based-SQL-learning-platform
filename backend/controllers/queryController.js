const pool = require("../config/postgres");

exports.executeQuery = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({
      message: "Query is required",
    });
  }

  const lowerQuery = query.toLowerCase();

  // Basic validation - allow only SELECT
  if (!lowerQuery.trim().startsWith("select")) {
    return res.status(400).json({
      message: "Only SELECT queries are allowed",
    });
  }

  try {
    const result = await pool.query(query);

    res.json({
      columns: result.fields.map((field) => field.name),
      rows: result.rows,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
