import { User } from "../schemas/User";
import { injectable } from 'tsyringe';

interface ICreateUserDTO {
  email: string;
  socket_id: string;
  avatar: string;
  name: string;
}

@injectable()
class CreateUserService {
  async execute({ avatar, email, name, socket_id }: ICreateUserDTO) {
    const userAlreadyExist = await User.findOne({
      email
    }).exec();

    if (userAlreadyExist) {
      const user = await User.findOneAndUpdate(
        {
          _id: userAlreadyExist._id
        },
        {
          $set: {
            socket_id,
            avatar,
            name
          }
        },
        {
          new: true
        }
      );
      return user
    } else {
      const user = await User.create({
        avatar, 
        email, 
        name, 
        socket_id
      })

      return user
    }
  }
}

export default CreateUserService;