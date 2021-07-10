class Helper {
  json() {
    return JSON.parse(JSON.stringify(this));
  }

  queryAdd(table) {
    /* columnas a las que se van agregar datos */
    let columns = `(`;
    /* Valores de la columna */
    let values = `(`;
    /* Obteniendo los keys */
    const keys = Object.keys(this);
    /* Obteniendo el ultimo valor */
    let lastItem = keys[keys.length - 1];

    /* Recorriendo los datos y agregando a las cadenas recpectivas */
    keys.forEach((v) => {
      /* Si es "id" sigue a la siguiente dato */
      if (v == "id") return false;
      /* Verificando si es el ultimo dato para cerrar el ")" */
      if (lastItem == v) {
        columns += `${v})`;
        values += `@${v})`;
        return 0;
      }
      /* Agregando a las cadenas respectivas */
      columns += `${v},`;
      values += `@${v},`;
    });
    /* Completando la cadena */
    let query = `INSERT INTO ${table} ${columns} VALUES ${values}`;
    console.log("query:", query);
    return query;
  }
}

module.exports = Helper;
