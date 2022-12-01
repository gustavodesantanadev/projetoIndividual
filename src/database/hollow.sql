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
	VALUES ("Imenso Batedor Musgoso",0),
  ("Cavaleiro da Colmeia",0),
  ("O Colecionador",0),
  ("Defensor do Esterco",2),
  ("Falso Cavaleiro",0),
  ("Flukemarm",0),
  ("Gorb",0),
  ("Grimm",10),
  ("Guardião Cristalizado",0),
  ("Guerreiro das Almas",5),
  ("Hornet",8),
  ("Hu",0),
  ("Mawlek Incubador",0),
  ("Lordes Louva Deus",9),
  ("Mãe Mosca",0),
  ("Marmu",0),
  ("Mestre das Almas",0),
  ("Nosk",0),
  ("Mestre do Ferrão Oro",0),
  ("Irmãos Oro & Mato",0),
  ("Receptáculo Quebrado",0),
  ("Rei Vengemosca",0),
  ("Mestre da Pintura Sheo",7),
  ("Xero",0);
            