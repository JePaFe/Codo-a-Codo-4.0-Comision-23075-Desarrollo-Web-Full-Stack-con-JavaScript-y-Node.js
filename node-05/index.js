const methodOverride = require("method-override");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require("./src/routes/mainRouter");
app.use("/", mainRouter);

const productosRouter = require("./src/routes/productosRouter");
app.use("/productos", productosRouter);

const productosAPIRouter = require("./src/routes/api/productosAPIRouter");
app.use("/api/productos", productosAPIRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
