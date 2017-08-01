"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var client_update_component_1 = require("./client-update.component");
var client_component_1 = require("./client.component");
var top_clients_component_1 = require("./top-clients.component");
var client_detail_component_1 = require("./client-detail.component");
var add_client_component_1 = require("./add-client.component");
var payment_component_1 = require("./payment.component");
var payin_trans_component_1 = require("./payin-trans.component");
var transaction_component_1 = require("./transaction.component");
var bank_component_1 = require("./bank.component");
var routes = [
    {
        path: 'clients',
        component: client_component_1.ClientComponent
    },
    {
        path: 'topclients',
        component: top_clients_component_1.TopClientsComponent
    },
    {
        path: '',
        redirectTo: '/clients',
        pathMatch: 'full'
    },
    {
        path: 'update/:id',
        component: client_update_component_1.ClientUpdateComponent
    },
    {
        path: 'detail/:id',
        component: client_detail_component_1.ClientDetailComponent
    },
    {
        path: 'addclient',
        component: add_client_component_1.AddClientComponent
    },
    {
        path: 'payment',
        component: payment_component_1.PaymentComponent
    },
    {
        path: 'payintrans/:id',
        component: payin_trans_component_1.PayInTransComponent
    },
    {
        path: 'transactions',
        component: transaction_component_1.TransactionComponent
    },
    {
        path: 'banks',
        component: bank_component_1.BankComponent
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map