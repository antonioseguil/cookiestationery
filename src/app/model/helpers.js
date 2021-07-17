class Helper {
  json() {
    return JSON.parse(JSON.stringify(this));
  }

  queryAddOrUpdate(table) {
    /* verificamos si el "id" del modelo es diferente del 0 */
    if (this.id != 0) return this.queryUpdate(table);
    /* Por defecto devuelve el query para agregar elemento */
    return this.queryAdd(table);
  }

  /* Query para agregar un nuevo dato */
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
    /* Retornando datos */
    return query;
  }

  /* Query para actualizar un dato */
  queryUpdate(table) {
    /* variable que contiene los campos */
    let setUpdate = ``;
    /* Obteniendo los campos */
    const keys = Object.keys(this);
    /* Obteniendo el ultimo campo */
    let lastItem = keys[keys.length - 1];
    /* recorriendo el array de campos del modelo */
    keys.forEach((campo) => {
      /* si el campo es "id" salta de linea */
      if (campo == "id") return false;
      /* Al último campo no se le agrega "," */
      if (campo == lastItem) {
        setUpdate += `${campo} = @${campo}`;
        return false;
      }
      /* Se concate las cadenas con "," */
      setUpdate += `${campo} = @${campo},`;
    });
    /* Cadena query para actualizar */
    let query = ` UPDATE ${table} SET ${setUpdate} WHERE id=${this.id}`;
    return query;
  }

  /* Query para borrar */
  static queryDelete(table, id) {
    let query = `delete from ${table} where id=${id}`;
    return query;
  }

  static queryAll(table) {
    let query = `SELECT * FROM ${table}`;
    return query;
  }

  static queryFindById(table, id) {
    let query = `SELECT * FROM ${table} WHERE id = ${id}`;
    return query;
  }

  static queryFindByColumn(table, column, value) {
    let query = `SELECT * FROM ${table} WHERE ${column} = ${value}`;
  }
}

module.exports = Helper;
