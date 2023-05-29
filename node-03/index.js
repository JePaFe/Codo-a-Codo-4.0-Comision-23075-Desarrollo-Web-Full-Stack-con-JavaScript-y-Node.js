const express = require("express");
const app = express();

app.use(express.static("public"));

// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.get("/nosotros", (req, res) => {
  res.sendFile(__dirname + "/nosotros.html");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
