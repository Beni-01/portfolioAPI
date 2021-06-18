CREATE DATABASE IF NOT EXISTS MyPortfolioDB;
CREATE TABLE IF NOT EXISTS Projet (
  id_projet int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
  img varchar(200) NOT NULL,
  titre varchar(40) NOT NULL,
  description text NOT NULL,
  mention int NOT NULL,
  lien varchar(150) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
