import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { StoreService } from "./store.service";
import { Store } from "./store.model";
import { ProductService } from "./products.service";
import { Product } from "./product.model";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  providers: [StoreService,ProductService]
})
export class MapsComponent implements OnInit {
   stores: Store[] = [];
   products: Product[] = [];
   
   constructor(private storeService: StoreService, private productService: ProductService) {}
   map: any;
   twittergrid: string;
   
  ngOnInit() {
   
   var ireLatLng = {lat: 53.1424, lng: -7.6921};   
   this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: ireLatLng
   });

    this.storeService.getStores()
       .subscribe(
           stores => {
               this.stores = stores;
               console.log(stores);
               
               stores.forEach(store => {
                  this.onAddMarker(store.storeName, store.lat, store.long);
                  console.log(store.storeName + "added");
               })  
           },
           error => console.error(error)
    );
    
       this.productService.getProducts()
       .subscribe(
           products => {
               this.products = products;
               console.log(products);
           },
           error => console.error(error)
    );
    
    }
    
    onAddMarker(name: string,lt: string,ln: string) {
            var lat = parseInt(lt);
            var long = parseInt(ln);
            var myLatLng = {lat: lat, lng: long},
                map = this.map,
                marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: name,
                });
                
                marker.addListener('click', function() {
                    console.log(name);
                    alert("Store Name: " + name + "\n" + "Latitude: " + lt + "\n" + "Longitude: " + ln + "\n");
                });
        }
    
}