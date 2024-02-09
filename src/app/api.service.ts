import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnChanges, SimpleChanges, input } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Pizza } from './types/pizza';
import { Observable } from 'rxjs';
import { deleteDoc, doc, documentId, getDoc, updateDoc } from 'firebase/firestore';
import * as firebase from 'firebase/app';
import { Shoping } from './types/shoping';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pizzaData!: Observable<any>;
  drinksData!: Observable<any>;
  sauceData!: Observable<any>;
  singlePizza!: Observable<any>;
  productData!: Observable<any>;
  ORDER_KEY = '[order]';
  order: any;
  isHave: any;
  newOrder: any;

  constructor(private http: HttpClient, private firestore: Firestore) { }

  getPizza() {
    const collectionInstance = collection(this.firestore, 'pizza');
    return this.pizzaData = collectionData(collectionInstance)
  }

  getSinglePizza() {
    const docInstance = collection(this.firestore, 'pizza');
    return this.pizzaData = collectionData(docInstance);
  }

  getDrinks() {
    const collectionInstance = collection(this.firestore, 'drinks');
    return this.drinksData = collectionData(collectionInstance)

  }

  getSauce() {
    const collectionInstance = collection(this.firestore, 'sauce');
    return this.sauceData = collectionData(collectionInstance)
  }

  updateFavorites(id: string | undefined, favorite: string[] | undefined) {
    const docRef = doc(this.firestore, 'pizza/' + id);
    return updateDoc(docRef, { favorite: [`${favorite}`] });
  }

  addProduct(data: Shoping) {
    this.order = localStorage.getItem(this.ORDER_KEY);
    if (this.order) {
      this.order = JSON.parse(this.order);
      this.isHave = this.order.filter((x: any) => x.id === data.id);
      if(this.isHave.length > 0) {
        console.log(this.isHave);
        
        const dataCount = data.count;
        const orderCount = this.isHave[0]?.count;
        const newCount = dataCount + orderCount;

        data = {...data, count: newCount}     
        this.newOrder = this.order.filter((x: any) => x.id !== data.id);
        this.order = this.newOrder;
        
      }
      this.order.push(data);
    }
    else {
      this.order = [data];
    }
    
    localStorage.setItem(this.ORDER_KEY, JSON.stringify(this.order));
  }

  getProduct() {
    this.order = localStorage.getItem(this.ORDER_KEY);
    if (this.order) {
      return this.order = JSON.parse(this.order);
    }
  }

  getCurrentProduct(id: string) {
    this.order = localStorage.getItem(this.ORDER_KEY);
      this.order = JSON.parse(this.order);
      const currentProduct = this.order.filter((x: any) => x.id === id)[0];
   
      const sum = (Number(currentProduct.price)*Number(currentProduct.count));
      
      return sum;
    }

  deleteProduct(id: string) {
    this.order = localStorage.getItem(this.ORDER_KEY);
      this.order = JSON.parse(this.order);
      const refreshData = this.order.filter((x: any) => x.id !== id);
      
    localStorage.setItem(this.ORDER_KEY, JSON.stringify(refreshData));
  }


  finishOrder() {
    this.order = undefined;
    localStorage.removeItem(this.ORDER_KEY);
  
  }
}
