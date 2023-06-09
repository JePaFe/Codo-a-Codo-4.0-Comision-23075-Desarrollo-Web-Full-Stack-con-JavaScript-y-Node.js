const path = require("path");

const notFound = (req, res, next) => {
  //   console.log(__dirname);
  //   console.log(path.join(__dirname, "/../../public/404.html"));
  res.status(404).sendFile(path.join(__dirname, "/../../public/404.html"));
  //   res.status(404).send("Recurso no encontrado");
};

module.exports = notFound;
