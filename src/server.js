import dotenv from "dotenv";
import app from "./app.js";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { boardHandler } from "./handlers/board_handler.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

const onConnection = (socket) => {
  boardHandler(io, socket);
}

io.on("connection", onConnection);

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

export default io;