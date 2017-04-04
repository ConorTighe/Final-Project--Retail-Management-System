import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Product } from "./product.model";

@Injectable()
export class ProductService {
    constructor(private http: Http) {}

    getProducts(): Observable<any> {
        return this.http.get('http://localhost:3000/products')
            .map( (data: Response) => {
                console.log("got here products!");
                const extracted = data.json();
                const msgArray: Product[] = [];
                console.log("got products here!");
                let product;
                for (let element of extracted.data) {
                    product = new Product(element.productName, element.qty, element.price);
                    msgArray.push(product);
                }
                return msgArray;
            });
    }

}