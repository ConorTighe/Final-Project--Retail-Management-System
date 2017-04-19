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
var employee_model_1 = require("./employee.model");
var employee_service_1 = require("./employee.service");
var store_service_1 = require("./store.service");
var EmployeesComponent = (function () {
    function EmployeesComponent(messageService, storeService) {
        this.messageService = messageService;
        this.storeService = storeService;
        this.messages = [];
        this.stores = [];
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.getStores()
            .subscribe(function (stores) {
            _this.stores = stores;
            console.log(stores);
        }, function (error) { return console.error(error); });
    };
    EmployeesComponent.prototype.onAddMessage = function () {
        var message = new employee_model_1.Message(this.fname, this.lname, this.empId, this.num, this.job, this.storeN, this.email);
        console.log(message);
        console.log(this.storeN);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'Employees',
        templateUrl: 'employees.component.html',
        providers: [employee_service_1.MessageService, store_service_1.StoreService]
    }),
    __metadata("design:paramtypes", [employee_service_1.MessageService, store_service_1.StoreService])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map