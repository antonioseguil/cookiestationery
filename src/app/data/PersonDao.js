const db = require("../bd/db.js");
const Persona = require("../model/Persona.js");

/* devuelve todo los datos */
function findAll() {
  const data = db.prepare(Persona.queryAll("persona")).all();
  return data;
}

/* Agregando o actualizando una nueva persona una nueva persona */
function addOrUpdate(obj) {
  /* Entregando datos al modelo */
  const persona = new Persona(obj, obj.id);
  /* Ejecutando query, se llama a la funcion que devuelve el query segun se requiera */
  const result = db
    .prepare(persona.queryAddOrUpdate("persona"))
    .run(persona.json());
  /* el id se llenara segun tenga la acción que se haya realizado */
  persona.id = persona.id != 0 ? persona.id : result.lastInsertRowid;
  console.log(result);
  return persona;
}

/* Eliminando un dato de la base de dato */
function deleting(id) {
  /* Llamando a la funcion para eliminar */
  const result = db.prepare(Persona.queryDelete("persona", id)).run();
  /* enviando resultado */
  return result.changes;
}

module.exports = {
  findAll,
  addOrUpdate,
  deleting,
};
