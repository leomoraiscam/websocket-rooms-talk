import { httpServer } from './http';
import './websocket/ChatService';

httpServer.listen(3333, () => {
  console.log('🚀 server is running on port 3333')
})