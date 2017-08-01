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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_1 = require("./client");
var PayInTransComponent = (function () {
    function PayInTransComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
    }
    PayInTransComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.clientService.getPayInTrans(+params['id']); })
            .subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    PayInTransComponent.prototype.getPayInTrans = function () {
        var _this = this;
        this.clientService.getPayInTrans(this.client.id).then(function (transactions) { return _this.transactions = transactions; });
    };
    return PayInTransComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", client_1.Client)
], PayInTransComponent.prototype, "client", void 0);
PayInTransComponent = __decorate([
    core_1.Component({
        selector: 'my-payInTrans',
        template: './payin-trans.component.html',
        styleUrls: ['./payin-trans.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location])
], PayInTransComponent);
exports.PayInTransComponent = PayInTransComponent;
//# sourceMappingURL=pay-in.trans.component.js.map