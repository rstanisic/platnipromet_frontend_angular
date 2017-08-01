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
var core_1 = require("@angular/core");
var client_service_1 = require("./client.service");
var common_1 = require("@angular/common");
var TransactionComponent = (function () {
    function TransactionComponent(clientService, location) {
        this.clientService = clientService;
        this.location = location;
        this.transactions = [];
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getTransactions().then(function (transactions) { return _this.transactions = transactions; });
    };
    TransactionComponent.prototype.goBack = function () {
        this.location.back();
    };
    return TransactionComponent;
}());
TransactionComponent = __decorate([
    core_1.Component({
        selector: 'my-transactions',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        common_1.Location])
], TransactionComponent);
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map