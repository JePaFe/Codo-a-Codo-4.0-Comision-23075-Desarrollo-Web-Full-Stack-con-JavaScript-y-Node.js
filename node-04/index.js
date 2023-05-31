const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const personajes = JSON.parse(
  fs.readFileSync(__dirname + "/data/personajes.json")
);

app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.get("/personajes", (req, res) => {
  //   console.log(__dirname + "/data/personajes.json");
  //   console.log(path.join(__dirname, "/data/personajes.json"));

  //   const personajes = fs.readFileSync(__dirname + "/data/personajes.json")
  //   res.send(JSON.parse(personajes));
  console.log(req.query.status);

  if (req.query.status) {
    const filtrados = personajes.filter(
      (personaje) =>
        personaje.status.toLowerCase() == req.query.status.toLocaleLowerCase()
    );

    res.send(filtrados);
  } else {
    res.send(personajes);
  }
});

app.get("/personajes/:id", (req, res) => {
  //   console.log(req.params.id);
  //   const buffer = fs.readFileSync(__dirname + "/data/personajes.json");
  //   console.log(buffer);
  //   console.log(JSON.parse(buffer));
  //   const personajes = JSON.parse(buffer);

  const id = req.params.id;

  const personaje = personajes.find((personaje) => personaje.id == id);

  res.send(personaje);
});

app.post("/personajes", (req, res) => {
  res.send("Crear un personaje");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
