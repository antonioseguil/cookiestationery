const { ipcRenderer } = require("electron");
import * as alert from "./AlertHelper.js";

/* Nombre de la clase */
const nameController = "clientController";

/* Controlador */
const controller = [
  "$scope",
  function ($scope) {
    /* Conectando con el proceso principal */
    $scope.data = ipcRenderer.sendSync("findAllClient", "");
    /* Titulo de la vista */
    $scope.title = "Lista de clientes";
    /* Variable para habilitar la vista */
    $scope.viewAdd = false;
    /* Variable para buscar en la tabla */
    $scope.search = "";
    /* Objeto cliente */
    $scope.cliente = {
      id: 0,
    };

    /* Eventos para agregar nuevo cliente*/
    $scope.addCliente = function () {
      /* Capturando valor */
      let data = $scope.cliente;
      /* Mensaje del toast */
      let msg = "¡Se agrego un nuevo cliente con éxito!";
      /* Enviando al proceso principal */
      const newCliente = ipcRenderer.sendSync("addClient", data);
      /* Agregando nuevo valor al array */
      data.id == 0
        ? $scope.data.push(newCliente)
        : (msg = "¡Se actualizo los datos del cliente con exito!");
      /* Limpiando inputs */
      clear();
      /* Enviando alerta */
      alert.getToast({ title: msg, icon: "success" });
    };

    /* Función para actualizar un dato */
    $scope.updateCliente = function (oldObj) {
      /* Se entrega el modelo que se desea actualizar */
      $scope.cliente = oldObj;
      /* Se habilita la vista para editar */
      $scope.viewAdd = true;
    };

    /* Función para borrar un dato */
    $scope.delete = async function (id) {
      /* Levantando el alert para aceptar */
      const estado = await alert.getAlertDelete({
        title: "¿Quiere borrar este cliente?",
        icon: "warning",
      });
      /* Sincronizando la lista con la función asincrona */
      $scope.$apply(() => {
        if (estado.isConfirmed) {
          /* Borrando dato de la BD */
          const change = ipcRenderer.sendSync("deletingClient", parseInt(id));
          /* Borrando dato el array */
          change ? dropData(id) : console.log("No se borro ningun dato");
          /* Enviando alerta */
          alert.getToast({
            icon: "info",
            title: "El cliente se borro con exito.",
          });
        }
      });
    };

    /* helpers */

    /* Función para limpiar inputs */
    function clear() {
      $scope.cliente = {
        id: 0,
      };
      /* Se ocultara la vista para editar */
      $scope.viewAdd = false;
    }

    /* Función para buscar un dato en la lista */
    function searchrData(id) {
      let index = $scope.data.findIndex((cliente) => cliente.id == id);
      return index;
    }

    /* Función para borrar un dato de array */
    function dropData(id) {
      const index = searchrData(id);
      $scope.data.splice(index, 1);
    }
  },
];

export { nameController, controller };
