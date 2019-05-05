import {User} from 'firebase';

export class Session {
  public id: string;
  public user: User;
  constructor(user: User) {
    this.id = user.uid;
    this.user = user;
  }
}
