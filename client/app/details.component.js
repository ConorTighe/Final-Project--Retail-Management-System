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
var DetailsComponent = (function () {
    function DetailsComponent(messageService, storeService) {
        this.messageService = messageService;
        this.storeService = storeService;
        this.messages = [];
        this.stores = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
        console.log(this.messages);
        this.storeService.getStores()
            .subscribe(function (stores) {
            _this.stores = stores;
            console.log('GET from employees');
        }, function (error) { return console.error(error); });
    };
    DetailsComponent.prototype.onDeleteMessage = function (id) {
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            this.messageService
                .deleteServiceWithId("empId", id)
                .subscribe(function (result) { return console.log('DELETE from employees'); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    DetailsComponent.prototype.onUpdateMessage = function (id) {
        var atSymbol = this.email.includes("@");
        var dotCom = this.email.endsWith(".com");
        if (atSymbol == false || dotCom == false) {
            alert("Email must contain @ and end with .com");
            return;
        }
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            var message = new employee_model_1.Message(this.fname, this.lname, id, this.number, this.occu, this.storeN, this.email);
            this.messages.push(message);
            this.messageService.updateServiceWithId(message)
                .subscribe(function () { return console.log('POST from employees'); }, function (error) { return console.error(error); });
        }
        else {
            alert("Edit cancled!");
            return false;
        }
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deta',
        templateUrl: 'details.component.html',
        providers: [employee_service_1.MessageService, store_service_1.StoreService]
    }),
    __metadata("design:paramtypes", [employee_service_1.MessageService, store_service_1.StoreService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map