use skill2;

select * from pets;

drop table pets;

select users.id, pets.pet_name, users.username
from users
inner join pets on users.id = pets.user_id;

select * from users;

/*Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`skill`.`pets`, CONSTRAINT `user_id` FOREIGN KEY (`id`) REFERENCES `users` (`id`))*/

create database skill2;
use skill2;

create table users(
  id bigint AUTO_INCREMENT,
  username varchar(255),
  email varchar(100),
  CONSTRAINT pk_user_id PRIMARY KEY (id)
);

create table pets(
	id bigint auto_increment,
    user_id bigint,
    pet_name varchar(255),
    constraint pk_pets_id primary key (id),
    constraint fk_user_id foreign key (user_id) references users(id)
);

desc pets;


insert into users (username, email) value ('Micky', 'micky@gmail.com');
insert into users (username, email) value ('Gabriel', 'gabriel@gmail.com');
insert into users (username, email) value ('Pepe', 'pepe@gmail.com');
insert into users (username, email) value ('Marce', 'asdsd@gmail.com');

insert into pets (pet_name, user_id) value ('Lolo','1');
insert into pets (pet_name, user_id) value ('Juan','2');
insert into pets (pet_name, user_id) value ('jere','3');
insert into pets (pet_name, user_id) value ('PETDSFS54545FSD','4');
insert into pets (pet_name, user_id) value ('PETDSFSF656565SD','4');
insert into pets (pet_name, user_id) value ('PETDSFS767676FSD','4');

