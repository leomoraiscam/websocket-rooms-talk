import { Message } from "../schemas/Message";
import { injectable } from 'tsyringe';

interface ICreateMessageDTO {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {
  async execute({ to, text, roomId }: ICreateMessageDTO) {
    const message = await Message.create({
      to, 
      text, 
      roomId
    });

    return message;  
  }
}

export default CreateMessageService;