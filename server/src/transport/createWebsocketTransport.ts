import { Server } from "http";
import socketio from "socket.io";

function createWebsocketTransport(server: Server) {
  const io = socketio(server);

  io.on("connect", () => {
    console.log("connected...");
  });

}
