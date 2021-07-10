const { ipcRenderer } = require("electron");

const nameController = "clientController";
const controller = [
  "$scope",
  function ($scope) {
    $scope.data = ipcRenderer.sendSync("findAllClient", "");
    $scope.title = "Lista de clientes";
  },
];

export { nameController, controller };
