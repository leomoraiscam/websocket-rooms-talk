import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const httpServer = createServer(app);

app.use(express.static(path.join(__dirname, '..', 'public')))

const io = new Server(httpServer);

io.on("connection", async (socket) => {
  console.log(`Socket: ${socket.id}`)
})

app.get('/', (request, response) => {
  return response.json({
    message: "Hello word"
  })
})

export { httpServer, io }