import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {

  @Input() Price: number;
  @Input() Size: string;
  @Input() Name: string;
  @Input() Coll: string;
  @Input() Id: number;
  @Input() TotalPrice: number;

  constructor(private cartService: CartService)
  {
    // this.cartService = cartService;

  }
  ngOnInit(): void {
  }

}
