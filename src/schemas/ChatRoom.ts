import mongoose, { Document, Schema } from 'mongoose';
import { User } from './User';
import { v4 as uuidv4 } from 'uuid';

type ChatRoom = Document & {
  idUsers: User[],
  idChatRoom: String
}

const ChatRoomSchema = new Schema({
  idUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  idChatRoom: {
    Type: String,
    default: uuidv4()
  }
})

const ChatRoom = mongoose.model<ChatRoom>('ChatRoom', ChatRoomSchema)

export { ChatRoom }