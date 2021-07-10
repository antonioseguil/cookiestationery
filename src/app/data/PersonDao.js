const db = require("../bd/db.js");
const Persona = require("../model/Persona.js");

/* devuelve todo los datos */
function findAll() {
  const data = db.prepare("SELECT * FROM persona").all();
  return data;
}

function add(obj) {
  /* Entregando datos al modelo */
  const persona = new Persona(obj);
  /* Ejecutando query */
  console.log(persona.json());
  db.prepare(persona.queryAdd("persona")).run(persona.json());
}

module.exports = {
  findAll,
  add,
};
