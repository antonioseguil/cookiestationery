const { ipcRenderer } = require("electron");

const nameController = "clientController";
const controller = [
  "$scope",
  function ($scope) {
    $scope.data = ipcRenderer.sendSync("findAllClient", "");
    $scope.title = "Lista de clientes";
    $scope.cliente = {};

    /* Eventos */
    $scope.addCliente = function () {
      /* Capturando valor */
      let data = $scope.cliente;
      /* Enviando al proceso principal */
      const newCliente = ipcRenderer.sendSync("addClient", data);
      console.log(newCliente);
      /* Agregando nuevo valor al array */
      $scope.data.push(newCliente);
      /* Limpiando inputs */
      $scope.clean();
    };

    /* helpers */
    $scope.clean = function () {
      $scope.cliente = {};
    };

    $scope.toast = function () {
      //toast.show();
    };
  },
];

export { nameController, controller };
