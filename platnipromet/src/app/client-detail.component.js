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
var client_1 = require("./client");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_service_1 = require("./client.service");
var account_1 = require("./account");
var address_1 = require("./address");
var transaction_1 = require("./transaction");
var account_number_1 = require("./account.number");
require("rxjs/add/operator/switchMap");
//pozivamo ,a ne importujemo klasu
var ClientDetailComponent = (function () {
    function ClientDetailComponent(clientService, route, location, router) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.clientService.getClient(+params['id']); })
            .subscribe(function (client) { return _this.client = client; });
    };
    ClientDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ClientDetailComponent.prototype.onSelectAddress = function (address) {
        this.selectedAddress = address;
    };
    ClientDetailComponent.prototype.onSelectAccount = function (account) {
        this.selectedAccount = account;
    };
    ClientDetailComponent.prototype.onSelectAccountNumber = function (accountNumber) {
        this.selectedAccountNumber = accountNumber;
    };
    ClientDetailComponent.prototype.getAddress = function () {
        var _this = this;
        this.clientService.getAddress(this.client.id).then(function (address) { return _this.address = address; });
    };
    ClientDetailComponent.prototype.getAccounts = function () {
        var _this = this;
        this.clientService.getAccounts(this.client.id).then(function (accounts) { return _this.accounts = accounts; });
    };
    ClientDetailComponent.prototype.addressClick = function () {
        this.onSelectAddress(this.address);
        this.getAddress();
    };
    ClientDetailComponent.prototype.goToPay = function () {
        this.router.navigate(['/payment']);
    };
    ClientDetailComponent.prototype.getPayInTrans = function (id) {
        var _this = this;
        this.clientService.getPayInTrans(this.client.id).then(function (transactions) { return _this.transactions = transactions; });
        this.router.navigate(['/payintrans', this.client.id]);
    };
    ClientDetailComponent.prototype.deleteAccount = function (account) {
        var _this = this;
        this.clientService
            .deleteAccount(this.account.id)
            .then(function () {
            _this.accounts = _this.accounts.filter(function (ac) { return ac !== account; });
            if (_this.account === account) {
                _this.account = null;
            }
        });
        this.goBack();
    };
    return ClientDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", client_1.Client)
], ClientDetailComponent.prototype, "client", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", address_1.Address)
], ClientDetailComponent.prototype, "address", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", account_1.Account)
], ClientDetailComponent.prototype, "account", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", transaction_1.Transaction)
], ClientDetailComponent.prototype, "transaction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", account_number_1.AccountNumber)
], ClientDetailComponent.prototype, "accountNumber", void 0);
ClientDetailComponent = __decorate([
    core_1.Component({
        selector: 'client-detail',
        templateUrl: './client-detail.component.html',
        styleUrls: ['./client-detail.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], ClientDetailComponent);
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map