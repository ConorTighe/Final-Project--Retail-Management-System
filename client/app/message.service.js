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
var message_model_1 = require("./message.model");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/messages')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                message = new message_model_1.Message(element.firstName, element.lastName, element.empId, element.num, element.job);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        console.log(message);
        var body = JSON.stringify(message);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/message', body, { headers: headers });
    };
    MessageService.prototype.deleteServiceWithId = function (key, val) {
        console.log(key);
        console.log(val);
        return this.http
            .delete('http://localhost:3000/messagedelete' + "/?" + key + "=" + val);
    };
    MessageService.prototype.updateServiceWithId = function (key, val) {
        console.log(key);
        console.log(val);
        var body = JSON.stringify(val);
        console.log(val);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .patch('http://localhost:3000/messageupdate' + "/?" + key + "=" + val, body, { headers: headers });
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map