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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.clientsUrl = 'http://localhost:8080/platnipromet/clients';
        this.clientAddressUrl = 'http://localhost:8080/platnipromet/clients/clientaddress';
        this.clientAccountsUrl = 'http://localhost:8080/platnipromet/clients/clientaccounts';
        this.payInTransUrl = 'http://localhost:8080/platnipromet/transactions/payinclienttrans';
        this.payOutTransUrl = 'http://localhost:8080/platnipromet/transactions/payoutclienttrans';
        this.transactionsUrl = 'http://localhost:8080/platnipromet/transactions';
        this.banksUrl = 'http://localhost:8080/platnipromet/banks';
        this.accountsUrl = 'http://localhost:8080/platnipromet/accounts';
        this.addAccountUrl = 'http://localhost:8080/platnipromet/accounts/client';
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientsUrl).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getAccounts = function (id) {
        var url = this.clientAccountsUrl + "/" + id;
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ClientService.prototype.getClient = function (id) {
        var url = this.clientsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getAddress = function (id) {
        var url = this.clientAddressUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getPayInTrans = function (id) {
        var url = this.payInTransUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getPayOutTrans = function (id) {
        var url = this.payOutTransUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.updateClient = function (client) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.clientsUrl + "/" + client.id;
        return this.http
            .put(url, JSON.stringify(client), options)
            .toPromise()
            .then(function () { return client; })
            .catch(this.handleError);
    };
    ClientService.prototype.createClient = function (client) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.clientsUrl, JSON.stringify(client), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.createTransaction = function (transaction) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.transactionsUrl, JSON.stringify(transaction), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.deleteClient = function (id) {
        var url = this.clientsUrl + "/" + id;
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ClientService.prototype.deleteAccount = function (id) {
        var url = this.accountsUrl + "/" + id;
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ClientService.prototype.getTransactions = function () {
        return this.http.get(this.transactionsUrl).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.getBanks = function () {
        return this.http.get(this.banksUrl).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map