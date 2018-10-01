const wsUri = "wss://echo.websocket.org/";        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function init() {        // WebSocket.Org api socket not implemented
  testWebSocket();        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function testWebSocket() {        // WebSocket.Org api socket not implemented
  websocket = new WebSocket(wsUri);        // WebSocket.Org api socket not implemented
  websocket.onopen = function (evt) { onOpen(evt) };        // WebSocket.Org api socket not implemented
  websocket.onclose = function (evt) { onClose(evt) };        // WebSocket.Org api socket not implemented
  websocket.onmessage = function (evt) { onMessage(evt) };        // WebSocket.Org api socket not implemented
  websocket.onerror = function (evt) { onError(evt) };        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function onOpen(evt) {        // WebSocket.Org api socket not implemented
  doSend("test message");        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function onClose(evt) {        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function onMessage(evt) {        // WebSocket.Org api socket not implemented
  websocket.close();        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function onError(evt) {        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
function doSend(message) {        // WebSocket.Org api socket not implemented
  websocket.send(message);        // WebSocket.Org api socket not implemented
}        // WebSocket.Org api socket not implemented
// WebSocket.Org api socket not implemented
window.addEventListener("load", init, false);        // WebSocket.Org api socket not implemented