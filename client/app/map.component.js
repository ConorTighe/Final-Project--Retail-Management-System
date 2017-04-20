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
var store_model_1 = require("./store.model");
var products_service_1 = require("./products.service");
var product_model_1 = require("./product.model");
var employee_service_1 = require("./employee.service");
var MapsComponent = (function () {
    function MapsComponent(storeService, productService, messageService) {
        this.storeService = storeService;
        this.productService = productService;
        this.messageService = messageService;
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
        google.maps.event.addListener(this.map, 'click', function (event) {
            console.log(event.latLng);
            var lt = event.latLng.lat;
            var ln = event.latLng.lng;
            console.log(lt());
            console.log(ln());
            _this.onStoreMarker(event.latLng.lat(), event.latLng.lng());
        });
    };
    MapsComponent.prototype.onStoreMarker = function (lt, ln) {
        var _this = this;
        var newStore = prompt("Please enter your store name", "Store Name");
        console.log(newStore);
        if (newStore != null) {
            var location = { lat: lt, lng: ln };
            var marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: newStore,
            });
            var newStorePost = new store_model_1.Store(newStore, lt, ln);
            this.storeService.saveStore(newStorePost)
                .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
            marker.addListener('click', function () {
                _this.onListEmp(newStore);
            });
        }
    };
    MapsComponent.prototype.onAddMarker = function (name, lt, ln) {
        var _this = this;
        var lat = lt;
        var long = ln;
        var myLatLng = { lat: lat, lng: long }, map = this.map, marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: name,
        });
        marker.addListener('click', function () {
            _this.onListEmp(name);
        });
    };
    MapsComponent.prototype.onListEmp = function (name) {
        var _this = this;
        this.emps = "Employees working here:\n";
        this.messageService.getMessagesByStore(name)
            .subscribe(function (stores) {
            stores.forEach(function (store) {
                _this.emps += store.job + " - " + store.firstName + " " + store.lastName + "\n";
            });
            console.log(_this.emps);
            alert(_this.emps);
        }, function (error) { return console.error(error); });
    };
    MapsComponent.prototype.onPlusQty = function (qty) {
        this.newQty = qty + 1;
        this.productService.patchQty(this.newQty)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    MapsComponent.prototype.onMinusQty = function (qty) {
        this.newQty = qty - 1;
        this.productService.patchQty(this.newQty)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    MapsComponent.prototype.onAddProduct = function () {
        var product = new product_model_1.Product(this.pname, this.qty, this.price);
        this.products.push(product);
        this.productService.saveProduct(product)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    MapsComponent.prototype.onDeleteProduct = function (name) {
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            this.productService
                .deleteServiceWithName(name)
                .subscribe(function (result) { return console.log(result); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: 'map.component.html',
        providers: [store_service_1.StoreService, products_service_1.ProductService, employee_service_1.MessageService]
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService, products_service_1.ProductService, employee_service_1.MessageService])
], MapsComponent);
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=map.component.js.map