import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Store } from "./store.model";

@Injectable()
export class StoreService {
    constructor(private http: Http) {}

    getStores(): Observable<any> {
        return this.http.get('http://localhost:3000/stores')
            .map( (data: Response) => {
                console.log("got here 1!");
                const extracted = data.json();
                const msgArray: Store[] = [];
                console.log("got extracted here!");
                let store;
                for (let element of extracted.data) {
                    store = new Store(element.storeName, element.lat, element.long);
                    msgArray.push(store);
                }
                return msgArray;
            });
    }
    
    saveStore(store: Store): Observable<any> {
        console.log(store);
        const body = JSON.stringify(store);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/store', body, {headers: headers});
    }

}