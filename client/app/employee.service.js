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
var employee_model_1 = require("./employee.model");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/RMS/employees')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                message = new employee_model_1.Message(element.firstName, element.lastName, element.empId, element.num, element.job, element.storeName, element.email);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.getMessagesByStore = function (store) {
        return this.http.get('http://localhost:3000/RMS/employees/' + store)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                message = new employee_model_1.Message(element.firstName, element.lastName, element.empId, element.num, element.job, element.storeName, element.email);
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
        return this.http.post('http://localhost:3000/RMS/employee', body, { headers: headers });
    };
    MessageService.prototype.deleteServiceWithId = function (key, val) {
        console.log(key);
        console.log(val);
        return this.http
            .delete('http://localhost:3000/RMS/messagedelete/' + val);
    };
    MessageService.prototype.updateServiceWithId = function (message) {
        console.log(message);
        var body = JSON.stringify(message);
        console.log(body);
        var emp = message.empId;
        console.log(emp);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/RMS/employeeupdate/' + emp, body, { headers: headers });
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=employee.service.js.map