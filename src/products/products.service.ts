import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
    /** "..." is a spread oporator in Jarva and Type-Script. It pulls out all the elements of the array and ads them to the new array */
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return { ...product };
  }
}
