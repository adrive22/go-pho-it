#Schema

CREATE DATABASE pho_db;

USE pho_db;

CREATE TABLE phoTypes
(
	id int NOT NULL AUTO_INCREMENT,
	pho_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
	PRIMARY KEY (id) 

);
