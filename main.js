const { app, BrowserWindow, Menu } = require("electron");

function main() {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
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
  Menu.setApplicationMenu(null);
});
