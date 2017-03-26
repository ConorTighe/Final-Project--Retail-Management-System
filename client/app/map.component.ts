import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { StoreService } from "./store.service";
import { Store } from "./store.model";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  providers: [StoreService]
})
export class MapsComponent implements OnInit {
   stores: Store[] = [];

   constructor(private storeService: StoreService) {}
    
  ngOnInit() {
        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        
         this.storeService.getStores()
            .subscribe(
                stores => this.stores = stores,
                error => console.error(error)
            );
            console.log(this.stores);
      }
      
}