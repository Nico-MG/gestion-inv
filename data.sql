create database gestion;
-- drop schema public cascade;
-- create schema public;

create table usuario(
  rut varchar(20) primary key,
  correo varchar(320),
  contrasena varchar(16),
  nombre varchar(20),
  apellido varchar(20)
);

create table producto(
    id int primary key,
    nombre varchar(20),
    stock int,
    precio float
  );

create table proveedor(
  rut varchar(20) primary key,
  nombre varchar(20),
  direccion varchar(50),
  numero varchar(50),
  tipo varchar(20)
  );

create table notificacion(
  fecha timestamp primary key,
  titulo varchar(50),
  descripcion text
);

create table cliente(
  rut varchar(20) primary key,
  nombre varchar(20),
  apellido varchar(20)
);



create table pedido_usuario(
  id serial primary key,
  rut_usuario varchar(20),
  rut_proveedor varchar(20),
  id_producto int,
  cantidad int,
  precio_unitario float,
  precio_total float,
  estado varchar(20),
  foreign key (rut_usuario) references usuario(rut) on delete cascade on update cascade,
  foreign key (rut_proveedor) references proveedor(rut) on delete cascade on update cascade,
  foreign key (id_producto) references producto(id) on delete cascade on update cascade
);

create table venta(
  numero_folio varchar(20),
  id_producto int,
  rut_cliente varchar(20),
  rut_usuario varchar(20),
  fecha timestamp,
  cantidad int,
  precio_unitario float,
  precio_total float,
  foreign key (id_producto) references producto(id) on delete cascade on update cascade,
  foreign key (rut_cliente) references cliente(rut) on delete cascade on update cascade,
  foreign key (rut_usuario) references usuario(rut) on delete cascade on update cascade,
  primary key (numero_folio, id_producto)
);

create table devolucion(
  numero_folio varchar(20),
  id_producto int,
  rut_cliente varchar(20),
  rut_usuario varchar(20),
  fecha timestamp,
  cantidad int,
  precio_unitario float,
  precio_total float,
  foreign key (id_producto) references producto(id) on delete cascade on update cascade,
  foreign key (rut_cliente) references cliente(rut) on delete cascade on update cascade,
  foreign key (rut_usuario) references usuario(rut) on delete cascade on update cascade,
  foreign key (numero_folio) references venta(numero_folio) on delete cascade,
  primary key (numero_folio, id_producto)
);