const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>My Node.js App</h1>
    <p><strong>Full Name:</strong> ARCILLAS, MA. CARMELA U. </p>
    <p><strong>Class Section:</strong> BSIT - BA - 4102 </p>
    <p><strong>Inspirational Quote:</strong> "BELIEVE YOU CAN AND YOU WILL!"</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
