const { app, BrowserWindow, Menu } = require("electron");
const process = require("./src/app/process/MainProcess");

function main() {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("./src/view/index.html");
}

/* function getMenu() {
  return [
    {
      label: "File",
      submenu: [
        {
          label: "new producto",
          accelerator: "Ctrl + N",
          click() {
            alert("click a new producto");
          },
        },
      ],
    },
  ];
} */

app.whenReady().then(() => {
  main();
  process.allMainProcess();
  /* Menu.setApplicationMenu(null); */
});
