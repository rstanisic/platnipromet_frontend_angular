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
var account_1 = require("./account");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_service_1 = require("./client.service");
require("rxjs/add/operator/switchMap");
//pozivamo ,a ne importujemo klasu
var AddAccounComponent = (function () {
    function AddAccounComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
    }
    AddAccounComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AddAccounComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", account_1.Account)
], AddAccounComponent.prototype, "account", void 0);
AddAccounComponent = __decorate([
    core_1.Component({
        selector: 'account-add',
        templateUrl: './add-account.component.html',
        styleUrls: ['./client-update.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location])
], AddAccounComponent);
exports.AddAccounComponent = AddAccounComponent;
//# sourceMappingURL=add-account.component.js.map