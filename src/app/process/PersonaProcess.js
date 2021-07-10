const person = require("./../data/PersonDao");

function findAll() {
  console.log(person.findAll());
}

function add() {
  const obj = {
    nombre: "Sol Celeste",
    apellido_paterno: "Rodríguez",
    apellido_materno: "Montalván",
    dni: "-",
    celular: "-",
    direccion: "-",
  };

  person.add(obj);
}

findAll();

module.exports = {
  findAll,
  add,
};
