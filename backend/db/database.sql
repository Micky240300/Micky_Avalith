CREATE DATABASE skill;
USE skill;

CREATE TABLE `skill`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(60) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`));

  
CREATE TABLE `skill`.`pets` (
  `idpets` INT NOT NULL AUTO_INCREMENT,
  `petname` VARCHAR(60) NOT NULL,
  `username` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idpets`));

  CREATE TABLE `skill`.`pets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`id`)
    REFERENCES `skill`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


    -----------------------------------------
    create database skill2
    use skill2

    create table users(
      id bigint AUTO_INCREMENT,
      username varchar(255)
      email varchar(100),
      CONSTRAINT pk_user_id PRIMARY KEY (id)
    );

    create table pets(

    );


insert into pets (name, user_id) value ('Lolo','1');
insert into pets (name, user_id) value ('Juan','2');
insert into pets (name, user_id) value ('jere','4');