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
var address_1 = require("./address");
var router_1 = require("@angular/router");
var client_service_1 = require("./client.service");
var client_1 = require("./client");
var common_1 = require("@angular/common");
var AddressComponent = (function () {
    function AddressComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
    }
    AddressComponent.prototype.getAddress = function () {
        var _this = this;
        this.clientService.getAddress(this.client.id).then(function (address) { return _this.address = address; });
    };
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.clientService.getAddress(+params['id']); })
            .subscribe(function (address) { return _this.address = address; });
    };
    AddressComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddressComponent.prototype.onSelectAddress = function (address) {
        this.selectedAddress = address;
    };
    return AddressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", address_1.Address)
], AddressComponent.prototype, "address", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", client_1.Client)
], AddressComponent.prototype, "client", void 0);
AddressComponent = __decorate([
    core_1.Component({
        selector: 'my-address',
        templateUrl: './address.component.html',
        styleUrls: ['./address.component.css']
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location])
], AddressComponent);
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map