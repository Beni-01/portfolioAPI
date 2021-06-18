const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 5401;
app.use(cors());
app.use(express.json());

const {
  selectAllProjet,
  insertProjet,
  deleteProject,
  updateProject,
} = require("../model/functions.data");

const connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "beniebeni",
  database: "MyPortfolioDB",
});

connexion.connect((err) => {
  if (err) {
    return console.error("error is detected");
  }
  console.log("success");
});

app.get("/projects/", (req, res) => {
  selectAllProjet(connexion, res);
});

app.post("/projects/add/", (req, res) => {
  const { titre, description, img, mention, lien } = req.body;
  const resource = [img, titre, description, mention, lien];
  insertProjet(connexion, resource, res);
});

app.delete("/projects/delete/:id", (req, res) => {
  if (/^[1-9]{1,}$/.test(req.params.id)) {
    deleteProject(connexion, req.params.id, res);
  } else {
    res.status(402).send({ message: "saisissez un chiffre ou nombre entier" });
  }
});

app.put("/projects/update", (req, res) => {
  const { id, description } = req.body;
  if (/^[1-9]{1,}$/.test(id) && /^[0-9A-Z]{10,250}/i.test(description)) {
    const userData = [description, id];
    updateProject(connexion, userData, res);
  } else {
    res
      .status(402)
      .send({ message: "vous devez ecrire au moins dix carateres" });
  }
});

app.listen(PORT, () => {
  console.log(PORT);
});
