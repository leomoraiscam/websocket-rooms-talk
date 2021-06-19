import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

const httpServer = createServer(app);

mongoose.connect("mongodb://localhost:15017/conversations", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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