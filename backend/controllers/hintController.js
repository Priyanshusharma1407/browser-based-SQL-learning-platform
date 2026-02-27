exports.getHint = async (req, res) => {
  const { question, userQuery, error } = req.body;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `
You are a SQL tutor.

STRICT RULES:
- Do NOT write SQL queries.
- Do NOT mention subquery, join, group by, or specific SQL keywords.
- Do NOT describe exact solution structure.
- Only give a high-level thinking direction.
- Maximum 2 sentences.

Your goal is to guide, not solve.
`,
            },
            {
              role: "user",
              content: `
Question:
${question}

Student Query:
${userQuery}

Error:
${error}
              `,
            },
          ],
          temperature: 0.5,
        }),
      }
    );

    const data = await response.json();

    console.log("Groq Raw Response:", JSON.stringify(data, null, 2));

    const hint = data.choices?.[0]?.message?.content || "No hint generated.";

    res.json({ hint });
  } catch (err) {
    console.error("Groq Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};
