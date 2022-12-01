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
	VALUES ("Cavaleiro da Colmeia",0),
    ("O Colecionador",0),
    ("Defensor do Esterco",0),
    ("Falso Cavaleiro",0),
    ("Flukemarm",0),
    ("Guerreiro das Almas",0),
    ("Gorb",0),
    ("Grimm",3),
    ("Guardião Cristalizado",0),
    ("Hornet",0),
    ("Hu",0),
    ("Imenso Batedor Musgoso",0),
    ("Irmãos Oro & Mato",0),
    ("Lordes Louva Deus",0),
    ("Mãe Mosca",0),
    ("Marmu",0),
    ("Mawlek Incubador",0),
    ("Mestre das Almas",0),
    ("Mestre do Ferrão Oro",0),
    ("Mestre da Pintura Sheo",0),
    ("Nosk",0),
    ("Rei Vengemosca",0),
    ("Receptáculo Quebrado",0),
    ("Xero",0);

INSERT INTO usuario(nome,email,senha)
	VALUES ("Tayná","tayna@gmail.com",sha2("123456",256)),
			("Daniel","daniel@gmail.com",sha2("daniel123",256)),
			("Nicole","nicole@gmail.com",sha2("nicole123",256)),
			("Eduardo","eduardo.dev@gmail.com",sha2("eduardo123",256)),
			("Matheus","matheus@gmail.com",sha2("matheus123",256)),
			("Robson","robson@gmail.com",sha2("robson",256)),
			("Michela","michela@gmail.com",sha2("michela",256)),
			("Lucas","lucas@gmail.com",sha2("lucas",256)),
			("Gabriel","gabriel@gmail.com",sha2("gabriel",256)),
			("Rafael","rafael@gmail.com",sha2("rafael",256)),
			("Douglas","douglas@gmail.com",sha2("douglas",256));
            
INSERT INTO comentario(comentario,fkUsuario)
	VALUES("Site incrivel, esse jogo mudou minha vida!",1),
			("Virei noites jogando esse jogo muito bom!",2),
            ("Comprei ele na promoção e não me arrependi.",3),
            ("Site está mt lindo, parabens!",4),
            ("O ranking ficou incrivel demais!!!:)",5);