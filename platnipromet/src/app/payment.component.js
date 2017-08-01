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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_service_1 = require("./client.service");
var transaction_1 = require("./transaction");
require("rxjs/add/operator/switchMap");
//pozivamo ,a ne importujemo klasu
var PaymentComponent = (function () {
    function PaymentComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getTransactions().then(function (transactions) { return _this.transactions = transactions; });
    };
    PaymentComponent.prototype.goBack = function () {
        this.location.back();
    };
    PaymentComponent.prototype.addTransaction = function () {
        var _this = this;
        this.clientService.createTransaction(this.transaction)
            .then(function (transaction) {
            _this.transactions.push(transaction);
            _this.transaction = null;
        });
        this.goBack();
    };
    return PaymentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", transaction_1.Transaction)
], PaymentComponent.prototype, "transaction", void 0);
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'my-payment',
        templateUrl: './payment.component.html',
        styleUrls: ['./payment.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location])
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map