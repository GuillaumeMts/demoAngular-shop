import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  myCart;

  constructor(private cartService: CartService) {

    this.myCart = cartService.cartProductList;
    //default value
    this.product = new Product(61, 'Error product', 999, 'Error', 'none', '../images/error.jpg');
  }

  ngOnInit(): void {
  }

}
