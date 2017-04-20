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
var product_model_1 = require("./product.model");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/RMS/products')
            .map(function (data) {
            console.log("got here products!");
            var extracted = data.json();
            var msgArray = [];
            console.log("got products here!");
            var product;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                product = new product_model_1.Product(element.productName, element.qty, element.price);
                msgArray.push(product);
            }
            return msgArray;
        });
    };
    ProductService.prototype.saveProduct = function (product) {
        var body = JSON.stringify(product);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/RMS/addproduct', body, { headers: headers });
    };
    ProductService.prototype.patchQty = function (qty) {
        console.log(qty);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/RMS/product/' + qty, { headers: headers });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map