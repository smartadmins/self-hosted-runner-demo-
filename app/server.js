const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from Self-Hosted GitHub Runner Web App!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP", time: new Date() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
