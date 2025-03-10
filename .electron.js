const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    title: "application-name",
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadURL("http://localhost:7002");

  // Create a custom 'Reload' button
  let reloadButton = { label: "⟳ Reload", click: () => win.reload() };

  // Define the menu with just one option
  let menuTemplate = [ reloadButton ];

  // Create the menu from the template and set it as the window's menu
  let menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);
