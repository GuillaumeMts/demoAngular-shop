import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss']
})
export class SecondpageComponent implements OnInit {

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
