
export class Product {
    id : number;
    name : string;
    price : number;
    coll : string;
    size : string;
    photo : string;
  
    constructor(_id:number,_name:string,_price:number,_coll:string,_size:string,_photo:string) {
      this.id = _id;
      this.name = _name;
      this.price = _price;
      this.coll = _coll;
      this.size = _size;
      this.photo = _photo;
    }
  }
  