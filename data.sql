create database gestion

create table usuario(
       rut_usuario varchar(20) primary key,
       correo varchar(50),
       contrasena varchar(60),
       nombre varchar(20),
       apellido varchar(20)
);

create table producto(
       id_producto varchar(20) primary key,
       nombre varchar(20),
       categoria varchar(20),
       cantidad int,
       min_cantidad int,
       precio_venta int
);


create table proveedor(
       rut_proveedor varchar(20) primary key,
       nombre  varchar(20),
       direccion varchar(20),
       numero varchar(20),
       tipo varchar(20)
);


create table cliente(
       rut_cliente varchar(20) primary key,
       nombre varchar(20),
       apellido varchar(20)
);


create table pedido(
       id_pedido varchar(20) primary key,
       rut_proveedor varchar(20),
       rut_usuario varchar(20),
       fecha TIMESTAMP,
       compra_total int,
       foreign key (rut_proveedor) references proveedor(rut_proveedor) on delete cascade on update cascade,
       foreign key (rut_usuario) references usuario(rut_usuario) on delete cascade on update cascade

);

create table detalle_pedido(
       id_pedido varchar(20),
       id_producto varchar(20),
       cantidad int,
       precio_total int, 
       foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade,
       foreign key (id_pedido) references pedido(id_pedido) on delete cascade on update cascade,
       primary key(id_pedido, id_producto)
);

create table notificacion(
       id_notificacion SERIAL primary key,
       fecha TIMESTAMP,
       id_producto varchar(20),
       titulo varchar(20),
       descripcion TEXT,
       foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade

);


create table venta(
       id_venta varchar(20) primary key,
       rut_cliente varchar(20),
       rut_usuario varchar(20),
       fecha TIMESTAMP,
       venta_total int,
       foreign key (rut_cliente) references cliente(rut_cliente) on delete cascade on update cascade,
       foreign key (rut_usuario) references usuario(rut_usuario) on delete cascade on update cascade

);


create table detalle_venta(
       id_venta varchar(20),
       id_producto varchar(20),
       cantidad int,
       precio_total int,
       foreign key (id_venta) references venta(id_venta) on delete cascade on update cascade,
       foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade,
       primary key(id_venta, id_producto)

);

create table devolucion(
       id_devolucion varchar(20) primary key,
       id_venta varchar(20),
       fecha TIMESTAMP,
       descripcion text,
       foreign key (id_venta) references venta(id_venta) on delete cascade on update cascade
       

);


create table detalle_devolucion(
       id_devolucion varchar(20),
       id_producto varchar(20),
       cantidad int,
       foreign key (id_devolucion) references devolucion(id_devolucion) on delete cascade on update cascade,
       foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade,
       primary key(id_devolucion,id_producto)


);







