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
var transaction_1 = require("./transaction");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var client_1 = require("./client");
var PayInTransComponent = (function () {
    function PayInTransComponent(clientService, route, location, router) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.transactions = [];
    }
    PayInTransComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.clientService.getClient(+params['id']); })
            .subscribe(function (client) { return _this.client = client; });
    };
    PayInTransComponent.prototype.getPayInTrans = function () {
        var _this = this;
        this.clientService.getPayInTrans(this.client.id).then(function (transactions) { return _this.transactions = transactions; });
        this.router.navigate(['/payintrans', this.client.id]);
    };
    PayInTransComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PayInTransComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", transaction_1.Transaction)
], PayInTransComponent.prototype, "transaction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", client_1.Client)
], PayInTransComponent.prototype, "client", void 0);
PayInTransComponent = __decorate([
    core_1.Component({
        selector: 'my-payInTrans',
        templateUrl: './payin-trans.component.html',
        styleUrls: ['./payin-trans.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], PayInTransComponent);
exports.PayInTransComponent = PayInTransComponent;
//# sourceMappingURL=payin-trans.component.js.map