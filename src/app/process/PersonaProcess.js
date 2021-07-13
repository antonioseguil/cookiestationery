const { ipcMain } = require("electron");
const person = require("./../data/PersonDao");

function processClient() {
  ipcMain.on("findAllClient", (event, args) => {
    let dataClient = person.findAll();
    event.returnValue = dataClient;
  });

  ipcMain.on("addClient", (event, args) => {
    console.log(args);
    const newClient = person.add(args);
    event.returnValue = newClient;
  });
}

module.exports = {
  processClient,
};
