import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Shoping } from '../types/shoping';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrl: './shoping.component.css'
})
export class ShopingComponent implements OnInit {


  dataProduct: Shoping[] | undefined;
  currentProduct: any;
  productList: Shoping[] | undefined;
  isLoading: boolean = true;
  allPrice: number = 0;

  constructor(private apiService: ApiService,private router:Router) {}
  

  ngOnInit(): void {
    this.getProduct();
  }

    getProduct(){
    this.dataProduct = this.apiService.getProduct();
    
    this.dataProduct?.forEach((product: Shoping) => {
      this.allPrice += (Number(product.price)*Number(product.count))})
     this.isLoading = false
  }

  delete(id: string): void {
    console.log(this.allPrice);
    const sum = Number(this.apiService.getCurrentProduct(id));
    this.allPrice = this.allPrice - sum;
    this.apiService.deleteProduct(id);
    this.dataProduct = this.apiService.getProduct();
  }

  orderProduct(){
    this.apiService.finishOrder();   
    this.router.navigate(['/menu']);
    this.getProduct();
    this.allPrice = 0;
  }

  refreshProduct(){
    this.allPrice = 0;
    this.getProduct();
  }
}
