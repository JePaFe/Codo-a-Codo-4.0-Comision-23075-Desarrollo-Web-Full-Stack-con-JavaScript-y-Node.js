require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { msg: "Hola ejs ..." });
});

app.use("/users", require("./src/routes/userRouter"));
app.use("/products", require("./src/routes/productRouter"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
