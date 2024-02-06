DROP DATABASE IF EXISTS vinyls;
CREATE DATABASE vinyls;
USE vinyls;

CREATE TABLE `user` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(25) NOT NULL,
   `user` VARCHAR(25) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(20) NOT NULL,
   `avatar_url` VARCHAR(50) NOT NULL,
   `rol` VARCHAR(10) NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product` (
   `product_id` SMALLINT NOT NULL AUTO_INCREMENT,
   `artist_id` SMALLINT NOT NULL,
   `genre_id` SMALLINT NOT NULL,
   `product_title` VARCHAR(50) NOT NULL,
   `product_info` MEDIUMTEXT NOT NULL,
   `price` DECIMAL(10.2) NOT NULL,
   `tracklist` MEDIUMTEXT NOT NULL,
   `stock` TINYINT NOT NULL,
   `anio` DATE NOT NULL,
   `label_id` TINYINT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`product_id`)
);

CREATE TABLE `genre` (
   `genre_id` SMALLINT NOT NULL AUTO_INCREMENT,
   `genre_name` VARCHAR(50) NOT NULL,
   `genre_info` MEDIUMTEXT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`genre_id`)
);

CREATE TABLE `user_product` (
   `carrito_id` INT AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` SMALLINT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`carrito_id`)
);

CREATE TABLE `label` (
   `label_id` TINYINT NOT NULL AUTO_INCREMENT,
   `label_name` VARCHAR(50) NOT NULL,
   `label_info` MEDIUMTEXT NOT NULL,
   `product_id` SMALLINT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`label_id`)
);

CREATE TABLE `artist` (
   `artist_id` SMALLINT NOT NULL,
   `product_id` SMALLINT NOT NULL,
   `artist_name` VARCHAR(50) NOT NULL,
   `artist_info` MEDIUMTEXT NOT NULL,
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   PRIMARY KEY (`artist_id`)
);


ALTER TABLE `product` ADD CONSTRAINT `FK_5b204e1a-0382-470d-a52b-d9fe2e704c08` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`artist_id`)  ;

ALTER TABLE `product` ADD CONSTRAINT `FK_e1f16e94-918c-49bc-a9a8-2e74a1bc8966` FOREIGN KEY (`label_id`) REFERENCES `label`(`label_id`)  ;

ALTER TABLE `product` ADD CONSTRAINT `FK_4da40f4c-3a56-4d56-ab56-75f8d1383d0a` FOREIGN KEY (`genre_id`) REFERENCES `genre`(`genre_id`)  ;

ALTER TABLE `user_product` ADD CONSTRAINT `FK_04b1cb78-314d-4d77-9ca2-02ecc8339d99` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)  ;

ALTER TABLE `user_product` ADD CONSTRAINT `FK_7eae830e-03cf-4473-98db-98f241187d1a` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`)  ;

ALTER TABLE `label` ADD CONSTRAINT `FK_f74e2faf-edc5-49f4-b743-6180707c2824` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`)  ;

ALTER TABLE `artist` ADD CONSTRAINT `FK_295cc8e6-4716-475d-9983-53b68f75ca33` FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`)  ;
