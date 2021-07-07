/* ESPERANDO QUE LA VENTANA CARGUE */
window.onload = () => {
  let listElements = document.querySelectorAll(".list__button--click");

  console.log(listElements);
  listElements.forEach((listElement) => {
    listElement.addEventListener("click", () => {
      listElement.classList.toggle("arrow");
      let height = 0;
      let menu = listElement.nextElementSibling;
      if (menu.clientHeight == 0) {
        height = menu.scrollHeight;
      }

      menu.style.height = `${height}px`;
    });
  });
};
