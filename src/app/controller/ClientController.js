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
    /* Objeto cliente */
    $scope.cliente = {};

    /* Eventos para agregar nuevo cliente*/
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
        icon: "Cliente Guardado.",
        title: "¡El cliente fue guardado con exito!",
      });
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
