create database pedido_doces;
use pedido_doces;

create table clientes (
id_cliente int primary key auto_increment,
nome_cliente varchar(45) not null,
endereco varchar(40) not null
);

select * from clientes; 

create table pedidos(
id_pedido int primary key auto_increment,
descricao_pedido varchar(45) not null,
valor_total varchar(45)not null,
id_cliente int not null,
foreign key (id_cliente) references clientes(id_cliente)
);

select * from pedidos;