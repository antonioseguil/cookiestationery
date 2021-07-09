create table producto(
	id int primary key not null,
	nombre text not null,
	stock numeric default 0,
	precio_venta real not null,
	precio_compra real not null
);

create table persona(
	id int primary key not null,
	nombre text not null,
	apellido_paterno text not null,
	apellido_materno text not null,
	DNI text default null,
	celular text default null,
	direccion text default null
);