-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jan-2024 às 22:19
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `darciowebteutimbre`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `acervousers`
--

CREATE TABLE `acervousers` (
  `id_acervouser` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `acervo_id` int(11) NOT NULL,
  `nome_disco` varchar(255) NOT NULL,
  `nome_artista` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `acervousers`
--

INSERT INTO `acervousers` (`id_acervouser`, `user_id`, `acervo_id`, `nome_disco`, `nome_artista`, `foto`) VALUES
(1, 2, 2, 'Abbey Road', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/3/3d/Abbey_Road.jpg'),
(2, 2, 6, 'Help!', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/7/73/The_Beatles_-_Help%21.jpg'),
(3, 2, 18, '1', 'The Beatles', 'https://m.media-amazon.com/images/I/71P954cAYcL._AC_SL1500_.jpg'),
(4, 5, 14, 'Yellow Submarine', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/a/af/Yellow-submarine.jpg'),
(5, 5, 10, 'The Beatles (White Album)', 'The Beatles', 'https://i.discogs.com/ZeoF7OFrKZ78lH5qrDAnDvqAzJRWL9pjoVfblM8_sng/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTQ5/Njk4LTE1MDk1OTgy/MTMtMzE3Mi5qcGVn.jpeg'),
(7, 6, 9, 'With The Beatles', 'The Beatles', 'https://i.discogs.com/SXqgIvvgFeLcdS-lpy8vGVKrYxW7orXE3X5Q8o_kuBI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjQ0/NjkzLTE1MDE3Nzkw/OTUtNTI3MC5qcGVn.jpeg'),
(8, 6, 16, 'The Beatles 1962–1966', 'The Beatles', 'https://m.media-amazon.com/images/I/61PjnnFqWFL._AC_SX679_.jpg'),
(9, 6, 17, 'The Beatles 1967-1970', 'The Beatles', 'https://m.media-amazon.com/images/I/91qrzimmN3L._AC_SX679_.jpg'),
(10, 5, 7, 'Beatles for Sale', 'The Beatles', 'https://i.discogs.com/QdKth0XB-lh88VU1qMTF56xMAh-GvYCAlZLYxeQvW0Y/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjEw/NDMxLTE0OTM0NjAx/NDAtMzA3OS5qcGVn.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `admusers`
--

CREATE TABLE `admusers` (
  `id_adm` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `matricula` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `admusers`
--

INSERT INTO `admusers` (`id_adm`, `nome`, `sobrenome`, `matricula`, `senha`) VALUES
(1, 'Admin', 'Admin', '12345', '12345'),
(3, 'Darcio', 'Miranda', '8888', '8888');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id_acervo` int(11) NOT NULL,
  `nome_disco` varchar(255) NOT NULL,
  `nome_artista` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id_acervo`, `nome_disco`, `nome_artista`, `foto`) VALUES
(2, 'Abbey Road', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/3/3d/Abbey_Road.jpg'),
(3, 'Let It Be', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/3/3f/The_Beatles_-_Let_It_Be.jpg'),
(5, 'Revolver', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/2/24/Revolver_%C3%A1lbum.jpg'),
(6, 'Help!', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/7/73/The_Beatles_-_Help%21.jpg'),
(7, 'Beatles for Sale', 'The Beatles', 'https://i.discogs.com/QdKth0XB-lh88VU1qMTF56xMAh-GvYCAlZLYxeQvW0Y/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjEw/NDMxLTE0OTM0NjAx/NDAtMzA3OS5qcGVn.jpeg'),
(8, 'Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles', 'https://i.discogs.com/JNbAKGFjLM_LrPZVRlNtWlYTgpUwXTZcqbC5okuCP-M/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5OTQ5/Ny0xNDU2MDQ3Mzgz/LTk0ODkuanBlZw.jpeg'),
(9, 'With The Beatles', 'The Beatles', 'https://i.discogs.com/SXqgIvvgFeLcdS-lpy8vGVKrYxW7orXE3X5Q8o_kuBI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjQ0/NjkzLTE1MDE3Nzkw/OTUtNTI3MC5qcGVn.jpeg'),
(10, 'The Beatles (White Album)', 'The Beatles', 'https://i.discogs.com/ZeoF7OFrKZ78lH5qrDAnDvqAzJRWL9pjoVfblM8_sng/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTQ5/Njk4LTE1MDk1OTgy/MTMtMzE3Mi5qcGVn.jpeg'),
(11, 'A Hard Day\'s Night', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/2/2f/A-hard-days-night.jpg'),
(13, 'Please Please Me', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/49/The_Beatles_-_Please_Please_Me.jpg/220px-The_Beatles_-_Please_Please_Me.jpg'),
(14, 'Yellow Submarine', 'The Beatles', 'https://upload.wikimedia.org/wikipedia/pt/a/af/Yellow-submarine.jpg'),
(15, 'Past Masters', 'The Beatles', 'https://static3.tcdn.com.br/img/img_prod/316663/91_1_20210120112835.jpg'),
(16, 'The Beatles 1962–1966', 'The Beatles', 'https://m.media-amazon.com/images/I/61PjnnFqWFL._AC_SX679_.jpg'),
(17, 'The Beatles 1967-1970', 'The Beatles', 'https://m.media-amazon.com/images/I/91qrzimmN3L._AC_SX679_.jpg'),
(18, '1', 'The Beatles', 'https://m.media-amazon.com/images/I/71P954cAYcL._AC_SL1500_.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id_user`, `nome`, `sobrenome`, `email`, `senha`) VALUES
(2, 'Darcio', 'Miranda', '289108@mesquita.com.br', '12345'),
(5, 'Maria', 'Joaquina', 'maria@gmail.com', '0000'),
(6, 'Pedro', 'da Silva', 'pedrodasilva@gmail.com', 'pedro');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `acervousers`
--
ALTER TABLE `acervousers`
  ADD PRIMARY KEY (`id_acervouser`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `acervo_id` (`acervo_id`);

--
-- Índices para tabela `admusers`
--
ALTER TABLE `admusers`
  ADD PRIMARY KEY (`id_adm`),
  ADD UNIQUE KEY `matricula` (`matricula`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_acervo`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `acervousers`
--
ALTER TABLE `acervousers`
  MODIFY `id_acervouser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `admusers`
--
ALTER TABLE `admusers`
  MODIFY `id_adm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id_acervo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `acervousers`
--
ALTER TABLE `acervousers`
  ADD CONSTRAINT `acervousers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `acervousers_ibfk_2` FOREIGN KEY (`acervo_id`) REFERENCES `products` (`id_acervo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
