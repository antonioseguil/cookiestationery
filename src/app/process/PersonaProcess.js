const { ipcMain } = require("electron");
const person = require("./../data/PersonDao");

function processClient() {
  ipcMain.on("findAllClient", (event, args) => {
    let dataClient = person.findAll();
    event.returnValue = dataClient;
  });

  ipcMain.on("addClient", (event, args) => {
    const newClient = person.addOrUpdate(args);
    event.returnValue = newClient;
  });

  ipcMain.on("deletingClient", (event, args) => {
    const change = person.deleting(args);
    event.returnValue = change;
  });
}

module.exports = {
  processClient,
};
