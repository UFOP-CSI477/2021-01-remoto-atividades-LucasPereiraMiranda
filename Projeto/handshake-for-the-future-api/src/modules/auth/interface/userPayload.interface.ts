import { UserType } from '../../users/entities/user.entity';

export interface UserPayload {
  username: string;
  sub: number;
  userType: UserType;
}
