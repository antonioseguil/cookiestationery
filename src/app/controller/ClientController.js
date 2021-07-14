const { ipcRenderer } = require("electron");
const Swal = require("sweetalert2");

const nameController = "clientController";
const controller = [
  "$scope",
  function ($scope) {
    /* Conectando con el proceso principal */
    $scope.data = ipcRenderer.sendSync("findAllClient", "");
    /* Titulo de la vista */
    $scope.title = "Lista de clientes";
    /* Variable para habilitar la vista */
    $scope.viewAdd = false;
    /* Objeto cliente */
    $scope.cliente = {
      id: 0,
    };

    /* Eventos para agregar nuevo cliente*/
    $scope.addCliente = function () {
      /* Capturando valor */
      let data = $scope.cliente;
      /* Enviando al proceso principal */
      const newCliente = ipcRenderer.sendSync("addClient", data);
      /* Agregando nuevo valor al array */
      data.id == 0 ? $scope.data.push(newCliente) : "";
      console.log(data.id);
      /* Limpiando inputs */
      $scope.clean();
      /* Enviando alerta */
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    };

    $scope.updateCliente = function (oldObj) {
      /* Se entrega el modelo que se desea actualizar */
      $scope.cliente = oldObj;
      /* Se habilita la vista para editar */
      $scope.viewAdd = true;
    };

    /* helpers */
    $scope.clean = function () {
      $scope.cliente = {
        id: 0,
      };
      /* Se ocultara la vista para editar */
      $scope.viewAdd = false;
    };
  },
];

export { nameController, controller };
