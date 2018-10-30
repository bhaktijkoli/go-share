import {ipcMain} from 'electron'
import WebSocket from 'ws'
import os from 'os'

ipcMain.on('portal-create', (event, args)=> {
  console.log("Creating Portal");
  const wss = new WebSocket.Server({ port: 8080 }, ()=> {
    console.log("Portal created");
    event.sender.send("portal-created")
  });
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
    ws.send(JSON.stringify(getInfo()));
  });
});


let getInfo = () => {
  return {
    name: os.hostname()
  }
}
