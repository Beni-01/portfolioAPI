const selectAllProjet = (connexion, res) => {
  connexion.query("SELECT * FROM Projet", (err, result) => {
    if (err) {
      return console.log("votre requete a échoué");
    }
    res.status(200).send(result);
  });
};

const insertProjet = (connexion, resource, res) => {
  // const { img, title, description, mention, lien } = body;
  connexion.query(
    "INSERT INTO Projet(img,titre,description,mention,lien) VALUES (?,?,?,?,?)",
    resource,
    (err) => {
      if (err) {
        return console.error(
          "une erreur s'est produite lors de l'enregistrement"
        );
      }
      res.status(200).send("succé");
    }
  );
};

const deleteProject = (connexion, id, res) => {
  connexion.query("DELETE FROM Projet WHERE id_projet=?", id, (err) => {
    if (err) {
      return console.error("une erreur est détecté");
    }
    res.status(200).send("succé");
  });
};

const updateProject = (connexion, resource, res) => {
  connexion.query(
    "UPDATE Projet SET description=? WHERE id_projet=?",
    resource,
    (err) => {
      if (err) {
        return console.error("erreur a été détecté");
      }
      res.status(200).send("succé");
    }
  );
};

module.exports = {
  selectAllProjet,
  insertProjet,
  deleteProject,
  updateProject,
};
