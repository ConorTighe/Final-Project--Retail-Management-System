import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Product } from "./product.model";

@Injectable()
export class ProductService {
    constructor(private http: Http) {}

    getProducts(): Observable<any> {
        return this.http.get('http://localhost:3000/RMS/products')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Product[] = [];
                let product;
                for (let element of extracted.data) {
                    product = new Product(element.productName, element.qty, element.price);
                    msgArray.push(product);
                }
                return msgArray;
            });
    }
    
    saveProduct(product: Product): Observable<any> {
        const body = JSON.stringify(product);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/RMS/addproduct', body, {headers: headers});
    }
    
    deleteServiceWithName(val: string): Observable<any> {
    console.log(val);
    return this.http
      .delete('http://localhost:3000/RMS/productdelete/'+ val);
  }
    
    patchQty(qty: number): Observable<any> {
        console.log(qty);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/RMS/product/' + qty, {headers: headers});
    }

}