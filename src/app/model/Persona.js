class Persona {
  constructor(obj, id = 0) {
    this.id = id;
    this.nombre = obj.nombre;
    this.apellido_paterno = obj.apellido_paterno;
    this.apellido_materno = obj.apellido_materno;
    this.dni = obj.dni;
    this.celular = obj.celular;
    this.direccion = obj.direccion;
  }
}
