import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.products = this.productService.getAll();
  }

  filterItemsOfType(condition: string): void {
    return this.products.filter(x => x.coll == condition);
  }
}
