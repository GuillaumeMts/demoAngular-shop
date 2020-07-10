import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  name: string = 'DefaultProduct';
  price: number = -1;
  photo: string;
  coll: string;
  size: string;
  product;
  myCart;

  constructor(private productService: ProductService, 
              private route: ActivatedRoute, 
              private cartService: CartService) {

    this.myCart = cartService.cartProductList;

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(+id);

    this.price = this.product.price;
    this.name = this.product.name;
    this.photo = this.product.photo;
    this.coll = this.product.coll;
    this.size = this.product.size;
  }

  onClickMe():void
  {
    this.cartService.addItem(this.product);
    this.myCart=this.cartService.cartProductList;
  }

  onSizeXS(): void {
    this.product.size = 'xs';
  }

  onSizeS(): void {
    this.product.size = 's';
  }

  onSizeM(): void {
    this.product.size = 'm';
  }

  onSizeL(): void {
    this.product.size = 'l';
  }

  onSizeXL(): void {
    this.product.size = 'xl';
  }

}
