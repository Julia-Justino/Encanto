CREATE DATABASE Encanto;
USE Encanto;

CREATE TABLE tbLivros(
	idLivros INT PRIMARY KEY AUTO_INCREMENT,
    genero VARCHAR(50),
    autor VARCHAR(60),
    qtdLivrosMes INT
);
CREATE TABLE tbEmail(
	idEmail INT,
    fkUsuario INT,
    PRIMARY KEY (idEmail, fkUsuario),
    email VARCHAR(60)
);
CREATE TABLE tbUsuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    fkLivros INT,
    FOREIGN KEY (fkLivros) REFERENCES tbLivros(idLivros)
)