var uri ="ws://localhost";

var ws = null;

function init() {
  open();
  var send = document.getElementById('send');
  console.log( send );

  send.addEventListener('click', function() {
    ws.send(Date.now());
  });
}

function open() {
  if( ws == null ) {
    ws = new WebSocket(uri);
    ws.onmessage = onMessage;
    ws.onclose= onClose;
  }
}

function onMessage(event) {
  console.log( event );
  var res = document.getElementById('res');
  if( event && event.data ) {
    res.innerHTML = event.data;
  }
}

function onClose() {
  var res = document.getElementById('res');
  res.innerHTML = "websocket connection closed";
}

init();
