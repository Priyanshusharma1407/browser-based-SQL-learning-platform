const pool = require("../config/postgres");

exports.getSampleData = async (req, res) => {
  const { table } = req.params;

  try {
    // basic protection: allow only letters
    if (!/^[a-zA-Z_]+$/.test(table)) {
      return res.status(400).json({
        message: "Invalid table name",
      });
    }

    const result = await pool.query(`SELECT * FROM ${table} LIMIT 5`);

    res.json({
      columns: result.fields.map((f) => f.name),
      rows: result.rows,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
