import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from "../product";
import { Cart } from "../cart"
import { ProductService } from './product.service'


@Injectable({ providedIn: 'root' })
export class CartService {

    cartProductList: Product[] = [];
    quantity = 0;
    dataReceived = false;
    localDataTested = false;
    totalPrice = 0;
    totalChange: Subject<number> = new Subject<number>();


    constructor(private productService: ProductService) {

        this.totalPrice = 0;
        this.quantity = 0
        for (var prod of this.cartProductList) {
            this.totalPrice += prod.price;
            this.quantity += 1;
        }
        this.getData();
        this.updateCart();
        // this.cartProductList=getData;
    }


    saveData() {
        localStorage.setItem("myCart", JSON.stringify(this.cartProductList));
    }

    getData() {
        var returnValue = JSON.parse(localStorage.getItem("myCart"));
        this.localDataTested = true;
        if (returnValue != null) {
            this.dataReceived = true;
            for (let prod of returnValue) {
                this.cartProductList.push(prod);
            }
        }
        //console.log("Get data : ",this.cartProductList);
    }

    updateCart() {

        this.totalPrice = 0;
        this.quantity = 0
        for (var prod of this.cartProductList) {
            this.totalPrice += prod.price;
            this.quantity += 1;
        }

        this.saveData();

        this.totalChange.next(this.totalPrice);
    }

    ngOnInit() {

    }

    addItem(product) {

        this.cartProductList.push(product);
        this.updateCart();

    }

    getCart() {
        return this.cartProductList;
    }

    emptyCart() {
        this.cartProductList = [];
        this.updateCart();
    }

    getItemInCartById(id) {
        var i;
        for (i = 0; i < this.cartProductList.length; i++) {
            if (this.cartProductList[i].id == id) {
                return this.cartProductList[i];
            }
        }
    }

}
