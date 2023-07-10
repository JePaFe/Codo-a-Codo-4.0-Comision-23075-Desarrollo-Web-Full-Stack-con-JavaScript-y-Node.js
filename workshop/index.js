require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

// const session = require("express-session");
const session = require("cookie-session");

// app.use(
//   session({
//     secret: "S3cr3t01",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(expressLayouts);
app.set("layout", "./layouts/public");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

const isLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }

  next();
};

// Public

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/profiles", require("./src/routes/profileRouter"));

// Auth

app.use("/", require("./src/routes/authRouter"));

// Private

app.get("/admin", isLogin, (req, res) => {
  res.render("admin/index", { layout: "./layouts/private" });
});

app.use("/admin/users", isLogin, require("./src/routes/admin/userRouter"));
app.use("/admin/roles", isLogin, require("./src/routes/admin/roleRouter"));

app.use(
  "/admin/products",
  isLogin,
  require("./src/routes/admin/productRouter")
);

app.use(
  "/admin/categories",
  isLogin,
  require("./src/routes/admin/categoryRouter")
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
