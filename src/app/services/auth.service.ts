import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register(user: IUser) {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      ).catch(() => false);
      return createdUser;
    } catch (err) {
      throw new Error(err);
    }
  }

  async login(user: IUser) {
    try {
      const authUser = await signInWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      ).catch(() => false);
      return authUser;
    } catch (err) {
      throw new Error(err);
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
