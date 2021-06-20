import { injectable } from 'tsyringe';
import { Message } from '../schemas/Message';
import { ObjectId } from 'mongoose';
 
@injectable()
class GetMessageByChatRoomService {
  async execute(roomId: string) {
    const messages = await Message.find({
      roomId
    }).populate("to").exec();

    return messages;
  }
}

export default GetMessageByChatRoomService;