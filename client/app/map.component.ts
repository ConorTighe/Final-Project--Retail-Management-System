import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { StoreService } from "./store.service";
import { Store } from "./store.model";
import { ProductService } from "./products.service";
import { Product } from "./product.model";
import { Message } from "./employee.model";
import { MessageService } from "./employee.service";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  providers: [StoreService,ProductService,MessageService]
})
export class MapsComponent implements OnInit {
   stores: Store[] = [];
   products: Product[] = [];
   
   constructor(private storeService: StoreService, private productService: ProductService, private messageService: MessageService) {}
   map: any;
   twittergrid: string;
   newQty: number;
   emps: string;
   pname: string;
   qty: Number;
   price: Number;
   
   
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
    
     google.maps.event.addListener(this.map, 'click', (event)=> {
        console.log(event.latLng);
        var lt = event.latLng.lat;
        var ln = event.latLng.lng;
        console.log(lt());
        console.log(ln());
        this.onStoreMarker(event.latLng.lat(),event.latLng.lng());
    });
    
    }
    
    onStoreMarker(lt: number,ln: number) {
        var newStore = prompt("Please enter your store name", "Store Name");
        console.log(newStore);
        if(newStore != null){
        var location = {lat: lt, lng: ln};
        var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: newStore,
        });
        
        const newStorePost = new Store(newStore,lt,ln);
        this.storeService.saveStore(newStorePost)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
            
        marker.addListener('click', ()=> {
              this.onListEmp(newStore);
            });
        }
    }
    
    onAddMarker(name: string,lt: string,ln: string) {
            var lat = lt;
            var long = ln;
            var myLatLng = {lat: lat, lng: long},
                map = this.map,
                marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: name,
                });
                
                marker.addListener('click', ()=> {
                    this.onListEmp(name);
            });
        }
        
    onListEmp(name : string){
    this.emps = "Employees working here:\n";
        this.messageService.getMessagesByStore(name)
                    .subscribe(
               stores => {
               stores.forEach(store => {
                  this.emps += store.job + " - " + store.firstName + " " + store.lastName + "\n";
            })
               console.log(this.emps);
               alert(this.emps);
            },
            error => console.error(error)
        );
    }
    
    onPlusQty(qty: number){
        this.newQty = qty + 1;
        this.productService.patchQty(this.newQty)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
        }
        
    onMinusQty(qty: number){
        this.newQty = qty - 1;
        this.productService.patchQty(this.newQty)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    
        }
        
    onAddProduct(){
    
        const product = new Product(this.pname,this.qty,this.price);
        this.products.push(product);
        this.productService.saveProduct(product)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    
        }

    }
    