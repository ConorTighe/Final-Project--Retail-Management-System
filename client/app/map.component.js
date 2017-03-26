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
var MapsComponent = (function () {
    function MapsComponent(storeService) {
        this.storeService = storeService;
        this.stores = [];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myLatLng = { lat: -25.363, lng: 131.044 };
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
            .subscribe(function (stores) { return _this.stores = stores; }, function (error) { return console.error(error); });
        console.log(this.stores);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: 'map.component.html',
        providers: [store_service_1.StoreService]
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], MapsComponent);
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=map.component.js.map