import { Injectable } from '@angular/core';
import { Product } from '../product';


@Injectable({ providedIn: 'root' })

export class ProductService {

    products: Product[] = [
        //Accessories
        new Product(1,  'Sac à dos',                60,     'accessorie',   'none', './assets/images/access-1.jpg'),
        new Product(2,  'Lunettes de soleil',       15,     'accessorie',   'none', './assets/images/access-2.jpg'),
        new Product(3,  'Casquette',                25,     'accessorie',   'none', './assets/images/access-3.jpg'),
        new Product(5,  'Chaussettes de foot',      10,     'accessorie',   'none', './assets/images/access-5.jpg'),
        new Product(6,  'Chaussettes fantaisie',    7,      'accessorie',   'none', './assets/images/access-6.jpg'),
        new Product(6,  'Guitare acoustique',       110,    'accessorie',   'none', './assets/images/access-7.jpg'),
        //Sweatshirts
        new Product(7,  'Pull "Team bananas"',      25,     'sweat',        'm',    './assets/images/sweatvert-1.jfif'),
        new Product(8,  'Crewneck classique',       35,     'sweat',        'm',    './assets/images/sweatvert-2.jfif'),
        new Product(9,  'Hoodie classique',         30,     'sweat',        'm',    './assets/images/sweatvert-3.jfif'),
        new Product(10, 'Crewneck Champion',        40,     'sweat',        'm',    './assets/images/sweatvert-4.jfif'),
        new Product(11, 'Pull Kenzo',               20,     'sweat',        'm',    './assets/images/sweatvert-5.jfif'),
        //Shirts
        new Product(12, 'T-shirt Luigi',            20,     'shirt',        'm',    './assets/images/tshirt-1.jpg'),
        new Product(13, 'T-shirt "crapule"',        10,     'shirt',        'm',    './assets/images/tshirt-2.jpg'),
        new Product(14, 'T-shirt Carhartt',         20,     'shirt',        'm',    './assets/images/tshirt-3.jpg')
    ];

    errorProduct = new Product(0, 'Error', -1, 'error', 'none', './images/error.jpg');

    constructor() { }

    getProductById(id: number) {

        for (let prod of this.products) {
            if (prod.id == id) {
                return prod;
            }
        }
        return this.errorProduct;
    }

    getProductByName(name: string) {

        for (let prod of this.products) {
            if (prod.name === name) {
                return prod;
            }
        }
        return this.errorProduct;
    }

    getAll() {
        return this.products;
    }

    changeSize(prod: Product, size: string): void {
        prod.size = size;
    }
}

