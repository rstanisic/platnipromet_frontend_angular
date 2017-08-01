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
var ClientComponent = (function () {
    function ClientComponent(clientService, router, location, route) {
        this.clientService = clientService;
        this.router = router;
        this.location = location;
        this.route = route;
    }
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().then(function (clients) { return _this.clients = clients; });
    };
    //napravi funkciju koja prima nekog clienta onda(then) moze da traje ...
    ClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
    };
    ClientComponent.prototype.goToUpdate = function () {
        this.router.navigate(['/update', this.selectedClient.id]);
    };
    ClientComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedClient.id]);
    };
    ClientComponent.prototype.goToAddClient = function () {
        this.router.navigate(['/addclient']);
    };
    ClientComponent.prototype.deleteClient = function (client) {
        var _this = this;
        this.clientService
            .deleteClient(this.selectedClient.id)
            .then(function () {
            _this.clients = _this.clients.filter(function (c) { return c !== client; });
            if (_this.selectedClient === client) {
                _this.selectedClient = null;
            }
        });
        this.goBack();
    };
    ClientComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    core_1.Component({
        selector: 'my-clients',
        templateUrl: './client.component.html',
        styleUrls: ['./client.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.Router,
        common_1.Location,
        router_1.ActivatedRoute])
], ClientComponent);
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map