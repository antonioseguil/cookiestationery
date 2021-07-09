const Database = require("better-sqlite3");
const db = new Database("./cookie.sqlite", {
  verbose: console.log,
});

module.exports = {
  db,
};
