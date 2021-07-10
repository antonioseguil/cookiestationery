const Helper = require("./helpers.js");

class Persona extends Helper {
  constructor(obj, id = 0) {
    super();
    this.id = id;
    this.nombre = obj.nombre;
    this.apellido_paterno = obj.apellido_paterno;
    this.apellido_materno = obj.apellido_materno;
    this.dni = obj.dni;
    this.celular = obj.celular;
    this.direccion = obj.direccion;
  }
}

module.exports = Persona;
