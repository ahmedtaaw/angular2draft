//this service will provide only product data
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
//3-import what we need
var core_1 = require("@angular/core");
///////1-http service import
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
///////6-Exception handling imports
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
//2- Define the metadata with a decorator
var ProductService = (function () {
    ///////2-identify Http dependeny in constructor
    function ProductService(_http) {
        this._http = _http;
        ///////3-identify location of our server
        this._productUrl = 'api/products/products.json';
    }
    ///////5-change the reurn type to Observable array
    ProductService.prototype.getProducts = function () {
        ///////4-call get http method here passing to it defined URL 
        ///////and we use map operator to map http response to our product array
        return this._http.get(this._productUrl).map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError); ///////7-use catch opererator to call error handle method
        ///////9-Do operator let us speak with the response data we use json stringify to display data in a nice format
    };
    ///////8-in this method we can log and handle errors any way we want
    ProductService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map