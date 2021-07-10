const clientProcess = require("./PersonaProcess.js");

function allMainProcess() {
  clientProcess.processClient();
}

module.exports = {
  allMainProcess: allMainProcess,
};
