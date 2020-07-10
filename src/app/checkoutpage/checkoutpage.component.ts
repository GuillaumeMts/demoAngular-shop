import { Component, OnInit } from '@angular/core';
import { Cart} from "../cart"
import { CartService } from '../services/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit {

  cartList: Product[] = [];
  total = 0;
  quantity = 0;
  _subscription;

  constructor(private cartService: CartService) {

    this.cartList = this.cartService.cartProductList;
    this.total = this.cartService.totalPrice;
    this.quantity = this.cartService.quantity;

    this._subscription = cartService.totalChange.subscribe(
      (value) => {
        this.total = value;
      }
    );
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartList=this.cartService.getCart();
  }

  checkoutClick()
  {
    alert("Checkout not implemented\nYour cart has been cleared");
    this.cartService.emptyCart();
    this.cartList=this.cartService.cartProductList;
  }

}
