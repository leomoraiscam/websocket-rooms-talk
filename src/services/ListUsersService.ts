import { injectable } from 'tsyringe';
import { User } from '../schemas/User';

@injectable()
class ListUsersServices {
  async execute() {
    const users = await User.find();

    return users;
  }
}

export default ListUsersServices;