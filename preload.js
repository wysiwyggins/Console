const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getSharedState: () => ipcRenderer.invoke('get-shared-state'),
  setSharedState: (newState) => ipcRenderer.invoke('set-shared-state', newState),
  navigate: (url) => ipcRenderer.send('navigate', url),
  reloadWindow: () => ipcRenderer.send('reload-window'),
  quitApp: () => ipcRenderer.send('quit-app'),
});