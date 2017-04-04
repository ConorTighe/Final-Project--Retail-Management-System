"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_service_1 = require("./store.service");
var products_service_1 = require("./products.service");
var MapsComponent = (function () {
    function MapsComponent(storeService, productService) {
        this.storeService = storeService;
        this.productService = productService;
        this.stores = [];
        this.products = [];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ireLatLng = { lat: 53.1424, lng: -7.6921 };
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: ireLatLng
        });
        this.storeService.getStores()
            .subscribe(function (stores) {
            _this.stores = stores;
            console.log(stores);
            stores.forEach(function (store) {
                _this.onAddMarker(store.storeName, store.lat, store.long);
                console.log(store.storeName + "added");
            });
        }, function (error) { return console.error(error); });
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            console.log(products);
        }, function (error) { return console.error(error); });
    };
    MapsComponent.prototype.onAddMarker = function (name, lt, ln) {
        var lat = parseInt(lt);
        var long = parseInt(ln);
        var myLatLng = { lat: lat, lng: long }, map = this.map, marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: name,
        });
        marker.addListener('click', function () {
            console.log(name);
            alert("Store Name: " + name + "\n" + "Latitude: " + lt + "\n" + "Longitude: " + ln + "\n");
        });
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: 'map.component.html',
        providers: [store_service_1.StoreService, products_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService, products_service_1.ProductService])
], MapsComponent);
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=map.component.js.map