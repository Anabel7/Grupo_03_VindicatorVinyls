DROP DATABASE IF EXISTS db_vinyls;
CREATE DATABASE db_vinyls;
USE db_vinyls;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(25) NOT NULL,
   `user` VARCHAR(25) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(20) NOT NULL,
   `avatar_path` VARCHAR(255) NOT NULL,
   `rol` VARCHAR(10) NOT NULL,
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `product_id` INT NOT NULL,
   `artist_id` INT NOT NULL,
   `genre_id` INT NOT NULL,
   `product_title` VARCHAR(50) NOT NULL,
   `product_info` MEDIUMTEXT NOT NULL,
   `price` DECIMAL(10,2) NOT NULL,
   `tracklist` MEDIUMTEXT NOT NULL,
   `stock` INT NOT NULL,
   `release_date` DATE NOT NULL,
   `label_id` INT NOT NULL,
   `cover_path` VARCHAR(255) NOT NULL,
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`product_id`)
);

CREATE TABLE `genres` (
   `genre_id` INT NOT NULL,
   `genre_name` VARCHAR(50) NOT NULL,
   `genre_info` MEDIUMTEXT NOT NULL,
   `genre_path` VARCHAR(255) NOT NULL,
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`genre_id`)
);

CREATE TABLE `user_products` (
   `carrito_id` INT AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`carrito_id`)
);

CREATE TABLE `labels` (
   `label_id` INT NOT NULL,
   `label_name` VARCHAR(50) NOT NULL,
   `label_info` MEDIUMTEXT NOT NULL,
   `label_path` VARCHAR(255),
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`label_id`)
);

CREATE TABLE `artists` (
   `artist_id` INT NOT NULL,
   `artist_name` VARCHAR(50) NOT NULL,
   `artist_info` MEDIUMTEXT NOT NULL,
   `artist_path` VARCHAR(255) NOT NULL,
   `created_at` DATETIME,
   `updated_at` DATETIME,
   PRIMARY KEY (`artist_id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_5b204e1a-0382-470d-a52b-d9fe2e704c08` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`artist_id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_e1f16e94-918c-49bc-a9a8-2e74a1bc8966` FOREIGN KEY (`label_id`) REFERENCES `labels`(`label_id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_4da40f4c-3a56-4d56-ab56-75f8d1383d0a` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`genre_id`)  ;

ALTER TABLE `user_products` ADD CONSTRAINT `FK_04b1cb78-314d-4d77-9ca2-02ecc8339d99` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `user_products` ADD CONSTRAINT `FK_7eae830e-03cf-4473-98db-98f241187d1a` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)  ;
