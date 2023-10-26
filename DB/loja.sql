create database  loja;

use loja;

create table artista(
id int auto_increment,
nomeArtista varchar(255) not null,
genero varchar(255),
primary key(id)
);

create table vinil(
id int auto_increment,
nomevinil varchar(255) not null,
preco decimal(10,2),
primary key(id),
artistaID int,
foreign key (artistaID) references artista(id),
primary key (id)
);

create table pedido(
id int auto_increment,
Datapedido date,
total decimal(10,2),
primary key (id)
);

create table itenPedido(
id int auto_increment,
qntd int,
pedidoID int,
vinilID int,
subtotal decimal (10,2),
foreign key (pedidoID) references pedido(id),
foreign key (vinilID) references vinil(id),
primary key (id)
);