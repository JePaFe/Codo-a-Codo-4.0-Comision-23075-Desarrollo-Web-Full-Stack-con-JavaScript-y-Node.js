require("dotenv").config();
const express = require("express");
const app = express();
var expressLayouts = require("express-ejs-layouts");

const session = require("cookie-session");

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);

const isLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }

  next();
};

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(expressLayouts);
app.set("layout", "./layouts/public");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { msg: "Hola ejs ..." });
});

app.use("/users", isLogin, require("./src/routes/userRouter"));
app.use("/products", isLogin, require("./src/routes/productRouter"));

app.use("/", require("./src/routes/authRouter"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
