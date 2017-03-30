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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var store_model_1 = require("./store.model");
var StoreService = (function () {
    function StoreService(http) {
        this.http = http;
    }
    StoreService.prototype.getStores = function () {
        return this.http.get('http://localhost:3000/stores')
            .map(function (data) {
            console.log("got here 1!");
            var extracted = data.json();
            var msgArray = [];
            console.log("got extracted here!");
            var store;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                store = new store_model_1.Store(element.storeName, element.lat, element.long);
                msgArray.push(store);
            }
            return msgArray;
        });
    };
    return StoreService;
}());
StoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map