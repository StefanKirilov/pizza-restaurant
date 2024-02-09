import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User } from '../types/user';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { Shoping } from '../types/shoping';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers: any = [];
  uid: string = '';
  user: User | undefined;
  order: Shoping | undefined;
  USER_KEY = '[user]';
  ORDER_KEY = '[order]';

  ERROR_KEY = '[error]';
  error: string = '';

  get isLogged(): boolean { 
    return !!this.user;
  }

  constructor(public auth: Auth, private fs: Firestore) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
   }

  register(email: string, name: string, password: string): void {
        createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.uid = userCredential.user.uid;

      this.user = {
        email: email,
        name: name,
        uid: this.uid,
      }

      this.createUser(this.user);
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

      alert('user created!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

  }

  login(email: string, password: string): void {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.uid = userCredential.user.uid;

      this.getUser().subscribe((addedUser) => {
        this.allUsers = addedUser;  
      });

      setTimeout(() => {
        this.user = this.allUsers.filter((x: User) => x.uid === this.uid)[0]
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))},1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

  }

  logout(): void {

    signOut(this.auth).then(() => {

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
    this.order = undefined;
    localStorage.removeItem(this.ORDER_KEY);

    alert('user logout!');
    this.error = 'user logout!';
    // localStorage.setItem(this.ERROR_KEY, JSON.stringify(this.error))
  }

  createUser(user: User) {
    let userCollection = collection(this.fs, 'users');
    return addDoc(userCollection, user);
  }

  getUser() {
    let userCollection = collection(this.fs, 'users');
    return collectionData(userCollection, {idField: 'id'});
  }

}
