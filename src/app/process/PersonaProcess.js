const { ipcMain } = require("electron");
const person = require("./../data/PersonDao");

function processClient() {
  ipcMain.on("findAllClient", (event, arg) => {
    let dataClient = person.findAll();
    event.returnValue = dataClient;
  });
}

module.exports = {
  processClient,
};
