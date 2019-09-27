

  
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

    CREATE TABLE games(
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    release_date DATETIME NOT NULL,
    PRIMARY KEY (`id`));

    CREATE TABLE usersgames(
      users_id bigint NOT NULL,
      game_id int NOT NULL,
      constraint fk_users_id foreign key (users_id) references users (id),
      constraint fk_game_id foreign key (game_id) references games (id)
    );