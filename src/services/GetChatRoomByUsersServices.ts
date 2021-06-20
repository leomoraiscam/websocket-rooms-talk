import { injectable } from 'tsyringe';
import { ChatRoom } from '../schemas/ChatRoom';
import { ObjectId } from 'mongoose';
 
@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    const room = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers
      }
    }).exec();

    return room;
  }
}

export default GetChatRoomByUsersService;