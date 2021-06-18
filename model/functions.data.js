const selectAllProjet = (connexion, res) => {
  connexion.query("SELECT * FROM Projet", (err, result) => {
    if (err) {
      return console.log("votre requete a échoué");
    }
    res.status(200).send(result);
  });
};

const insertProjet = (connexion, body, res) => {
  // const { img, title, description, mention, lien } = body;
  connexion.query(
    "INSERT INTO Projet(img,titre,description,mention,lien) VALUES (?,?,?,?,?,?)",
    body,
    (err) => {
      if (err) {
        return console.error(
          "une erreur s'est produite lors de l'enregistrement"
        );
      }
      res.status(200).send("success");
    }
  );
};

const deleteProject = (connexion, id, res) => {
  connexion.query("DELETE FROM Projet WHERE id=?", id, (err) => {
    if (err) {
      return console.error("une erreur est détecté");
    }
    res.status(200).send("success");
  });
};
