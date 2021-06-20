import { injectable } from 'tsyringe';
import { ChatRoom } from '../schemas/ChatRoom';

@injectable()
class CreateChatRommService {
  async execute(idUsers: string[]) {
    const room = await ChatRoom.create({
      idUsers
    });


    return room;
  }
}

export default CreateChatRommService;