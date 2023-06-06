import { IEntity } from '../types'

export interface IUser extends IEntity{
  name: string;
  email: string;
  hashedPassword: string;
  profilePicture: string;
}
