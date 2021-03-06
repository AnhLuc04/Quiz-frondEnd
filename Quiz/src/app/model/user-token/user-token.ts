import {Role} from '../role/role';

export interface UserToken {
  id?: any;
  username?: string;
  password?: string;
  email?: string;
  gender?: string;
  phone?: string;
  title?: string;
  imageSource?: string;
  token?: string;
  isDeleted?: number;
  roles: Role[];
  createdAt?: any;
  updatedAt?: any;
  confirmPassword?: any;
  newPassword?: any;
}
