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
require("rxjs/add/operator/switchMap");
//pozivamo ,a ne importujemo klasu
var AddClientComponent = (function () {
    function AddClientComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
        this.clients = [];
        this.client = {
            id: 0,
            name: "",
            dateOfBirth: "",
            email: "",
            password: "",
            brojLk: 0,
            jmbg: 0,
            brojTel: ""
        };
    }
    AddClientComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddClientComponent.prototype.addClient = function () {
        var _this = this;
        this.clientService.createClient(this.client)
            .then(function (client) {
            _this.clients.push(client);
            _this.client = null;
            console.log(client);
        });
        this.goBack();
    };
    return AddClientComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", client_1.Client)
], AddClientComponent.prototype, "client", void 0);
AddClientComponent = __decorate([
    core_1.Component({
        selector: 'client-add',
        templateUrl: './add-client.component.html',
        styleUrls: ['./client-update.component.css'],
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.ActivatedRoute,
        common_1.Location])
], AddClientComponent);
exports.AddClientComponent = AddClientComponent;
//# sourceMappingURL=add-client.component.js.map