"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var client_update_component_1 = require("./client-update.component");
var client_component_1 = require("./client.component");
var top_clients_component_1 = require("./top-clients.component");
var client_detail_component_1 = require("./client-detail.component");
var add_client_component_1 = require("./add-client.component");
var address_component_1 = require("./address.component");
var payment_component_1 = require("./payment.component");
var payin_trans_component_1 = require("./payin-trans.component");
var transaction_component_1 = require("./transaction.component");
var bank_component_1 = require("./bank.component");
var client_service_1 = require("./client.service");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            client_update_component_1.ClientUpdateComponent,
            client_component_1.ClientComponent,
            top_clients_component_1.TopClientsComponent,
            client_detail_component_1.ClientDetailComponent,
            add_client_component_1.AddClientComponent,
            address_component_1.AddressComponent,
            payment_component_1.PaymentComponent,
            payin_trans_component_1.PayInTransComponent,
            transaction_component_1.TransactionComponent,
            bank_component_1.BankComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: client_service_1.ClientService, useClass: client_service_1.ClientService }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map