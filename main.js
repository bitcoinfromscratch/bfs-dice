// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

const store = require('store')
store.set('s-lang', 'fa-ir')
store.set('version-number', 'v0.1.0')


// set express app and routes
require('./express-route-module')()

const os = require('os')
// console.log(os.platform().toLowerCase())
var window_height;
switch (os.platform().toLowerCase()) {
  case 'darwin':
    window_height=660 
    break;
  case 'win32':
      window_height=680  
      break;
  default: // linux
    window_height=640
    break;
}


// const fs = require('fs');
// let rawdata = fs.readFileSync(__dirname+'/translations/fa-ir/resources.json');
// let resources = JSON.parse(rawdata);
// console.log(resources);


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: window_height
    // webPreferences: {
    //   // preload: path.join(__dirname, 'preload.js')
    // }
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setResizable(false)
  mainWindow.isFullScreenable(false)

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'app/main.html'))
  mainWindow.loadURL('http://localhost:3000')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()



  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


