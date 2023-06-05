CREATE DATABASE Encanto;
USE Encanto;

CREATE TABLE tbLivros(
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
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
    fkLivro INT,
    FOREIGN KEY (fkLivro) REFERENCES tbLivros(idLivro), 
    email VARCHAR(60)
);
SELECT * FROM tbUsuario;
select * from tbLivros;

select 
        genero, 
        qtdLivrosMes
                    from tbLivros;
                  
select genero,  qtdLivrosMes
                    from tbLivros
                    order by idLivro desc limit 7;
                    
                    
                    select genero,  qtdLivrosMes
                    from tbLivros 
                    order by idLivro desc limit 1;





INSERT INTO tbLivros (genero, autor, qtdLivrosMes) VALUES
('Ficção Científica', 'Isaac Asimov', 100),
('Romance', 'Jane Austen', 80),
('Fantasia', 'J.R.R. Tolkien', 75),
('Suspense', 'Gillian Flynn', 60),
('Biografia', 'Michelle Obama', 50),
('Autoajuda', 'Dale Carnegie', 45),
('História', 'Yuval Noah Harari', 70),
('Mistério', 'Agatha Christie', 55),
('Drama', 'Khaled Hosseini', 40),
('Aventura', 'Jules Verne', 65),
('Literatura Clássica', 'William Shakespeare', 30),
('Policial', 'Lee Child', 20),
('Terror', 'Stephen King', 25),
('Autoconhecimento', 'Eckhart Tolle', 35),
('Ensaios', 'Michel de Montaigne', 15);

INSERT INTO tbLivros (genero, autor, qtdLivrosMes) VALUES
('Terror', 'Autor do Livro de Terror 1', 10),
('Drama', 'Autor do Livro de Drama 1', 15),
('Romance', 'Autor do Livro de Romance 1', 20),
('Comédia', 'Autor do Livro de Comédia 1', 5),
('Ficção', 'Autor do Livro de Ficção 1', 8),
('Terror', 'Autor do Livro de Terror 2', 12),
('Drama', 'Autor do Livro de Drama 2', 18),
('Romance', 'Autor do Livro de Romance 2', 25),
('Comédia', 'Autor do Livro de Comédia 2', 3),
('Ficção', 'Autor do Livro de Ficção 2', 6);

INSERT INTO tbLivros (genero, autor, qtdLivrosMes) VALUES
('Terror', 'Autor do Livro de Terror 1', 10),
('Drama', 'Autor do Livro de Drama 1', 15),
('Romance', 'Autor do Livro de Romance 1', 20),
('Comédia', 'Autor do Livro de Comédia 1', 5),
('Ficção', 'Autor do Livro de Ficção 1', 8),
('Terror', 'Autor do Livro de Terror 2', 12),
('Drama', 'Autor do Livro de Drama 2', 18),
('Romance', 'Autor do Livro de Romance 2', 25),
('Comédia', 'Autor do Livro de Comédia 2', 3),
('Ficção', 'Autor do Livro de Ficção 2', 6),
('Terror', 'Autor do Livro de Terror 3', 7),
('Drama', 'Autor do Livro de Drama 3', 14),
('Romance', 'Autor do Livro de Romance 3', 22),
('Comédia', 'Autor do Livro de Comédia 3', 9),
('Ficção', 'Autor do Livro de Ficção 3', 11),
('Terror', 'Autor do Livro de Terror 4', 16),
('Drama', 'Autor do Livro de Drama 4', 13),
('Romance', 'Autor do Livro de Romance 4', 19),
('Comédia', 'Autor do Livro de Comédia 4', 4),
('Ficção', 'Autor do Livro de Ficção 4', 10),
('Terror', 'Autor do Livro de Terror 5', 8),
('Drama', 'Autor do Livro de Drama 5', 17),
('Romance', 'Autor do Livro de Romance 5', 21),
('Comédia', 'Autor do Livro de Comédia 5', 6),
('Ficção', 'Autor do Livro de Ficção 5', 9),
('Terror', 'Autor do Livro de Terror 6', 11),
('Drama', 'Autor do Livro de Drama 6', 20),
('Romance', 'Autor do Livro de Romance 6', 15),
('Comédia', 'Autor do Livro de Comédia 6', 7),
('Ficção', 'Autor do Livro de Ficção 6', 12);

INSERT INTO tbLivros (genero, autor, qtdLivrosMes) VALUES
('Terror', 'Autor do Livro de Terror 1', 10),
('Drama', 'Autor do Livro de Drama 1', 15),
('Romance', 'Autor do Livro de Romance 1', 20),
('Comédia', 'Autor do Livro de Comédia 1', 5),
('Ficção', 'Autor do Livro de Ficção 1', 8),
('Terror', 'Autor do Livro de Terror 2', 12),
('Drama', 'Autor do Livro de Drama 2', 18),
('Romance', 'Autor do Livro de Romance 2', 25),
('Comédia', 'Autor do Livro de Comédia 2', 3),
('Ficção', 'Autor do Livro de Ficção 2', 6),
('Terror', 'Autor do Livro de Terror 3', 9),
('Drama', 'Autor do Livro de Drama 3', 14),
('Romance', 'Autor do Livro de Romance 3', 17),
('Comédia', 'Autor do Livro de Comédia 3', 7),
('Ficção', 'Autor do Livro de Ficção 3', 11),
('Terror', 'Autor do Livro de Terror 4', 13),
('Drama', 'Autor do Livro de Drama 4', 16),
('Romance', 'Autor do Livro de Romance 4', 22),
('Comédia', 'Autor do Livro de Comédia 4', 4),
('Ficção', 'Autor do Livro de Ficção 4', 9),
('Terror', 'Autor do Livro de Terror 5', 8),
('Drama', 'Autor do Livro de Drama 5', 12),
('Romance', 'Autor do Livro de Romance 5', 19),
('Comédia', 'Autor do Livro de Comédia 5', 6),
('Ficção', 'Autor do Livro de Ficção 5', 10),
('Terror', 'Autor do Livro de Terror 6', 11),
('Drama', 'Autor do Livro de Drama 6', 13),
('Romance', 'Autor do Livro de Romance 6', 18),
('Comédia', 'Autor do Livro de Comédia 6', 2),
('Ficção', 'Autor do Livro de Ficção 6', 7);


  select (select count(genero) from tbLivros where genero = 'Terror')Terror,
  (select count(genero) from tbLivros where genero = 'Drama') Drama,
   (select count(genero) from tbLivros where genero = 'Romance')Romance,
    (select count(genero) from tbLivros where genero = 'Comédia')Comédia,
     (select count(genero) from tbLivros where genero = 'Ficção')Ficção;
  
  