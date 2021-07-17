const Swal = require("sweetalert2");

const getToast = (obj = { icon: "success", title: "Mensaje por defecto." }) => {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: true,
    confirmButtonText: "Aceptar",
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  toast.fire(obj);
};

const getAlertDelete = (
  config = {
    title: "¿Quiere borrar este dato?",
    icon: "warning",
  }
) => {
  /* Configruación de la alerta */
  const swalEdit = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  /* Mandando la alerta */
  const resultado = swalEdit.fire({
    title: config.title,
    text: "Esta acción no se puede revertir.",
    icon: config.icon,
    showCancelButton: true,
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "No, cancelar",
    reverseButtons: true,
  });

  return resultado;
};

export { getToast, getAlertDelete };
