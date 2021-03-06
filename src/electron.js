const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize();

const createWindow = () => {
    
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
    });

    win.loadURL('http://skola.localhost/adventure/public/');

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.whenReady().then(createWindow);
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
