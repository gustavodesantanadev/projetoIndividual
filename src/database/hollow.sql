CREATE DATABASE hollow;

USE hollow;

CREATE TABLE chefe(
	idChefe INT PRIMARY KEY AUTO_INCREMENT
    , nome VARCHAR(30) NOT NULL 
    , votos INT NOT NULL
);

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT
    , nome VARCHAR(45) NOT NULL
    , email VARCHAR(80) NOT NULL 
    , senha VARCHAR(80) NOT NULL
    , fkChefe INT
    , FOREIGN KEY (fkChefe) REFERENCES chefe(idChefe)
);

CREATE TABLE comentario(
	idComentario INT PRIMARY KEY AUTO_INCREMENT
    , comentario TEXT NOT NULL
    , fkUsuario INT
    , FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO chefe (nome,votos)
	VALUES ("batedorMusgo",0),
  ("cavaleiroDaColmeia",0),
  ("colecionador",0),
  ("defensorDoEsterco",0),
  ("falsoCavaleiro",0),
  ("flukemarm",0),
  ("gorb",0),
  ("grimm",0),
  ("guardiaoCristalizado",0),
  ("guerreiroDasAlmas",0),
  ("hornet",0),
  ("hu",0),
  ("incubador",0),
  ("lordesLouvaDeus",0),
  ("maeMosca",0),
  ("marmu",0),
  ("mestreDasAlmas",0),
  ("nosk",0),
  ("oro",0),
  ("oro&mato",0),
  ("radianca",0),
  ("receptaculoQuebrado",0),
  ("reiVegemosca",0),
  ("sheo",0),
  ("xero",0);
            