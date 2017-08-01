"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<div class=\"header\">\n<h1>Platni Promet</h1>\n</div>\n<div class=\"absolute\">\n <nav>\n   <a routerLink=\"/clients\" routerLinkActive=\"active\">List Of Clients</a>\n  <a routerLink=\"/topclients\" routerLinkActive=\"active\">List of Top Clients</a>\n  <a routerLink=\"/transactions\" routerLinkActive=\"active\">List of Transactions</a>\n  <a routerLink=\"/banks\" routerLinkActive=\"active\">List Of Banks</a>\n  <router-outlet></router-outlet>\n</nav>\n</div>\n",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//u bootstrap-u podeseno da kad se pokrene otvara AppComponent
//selector koji je to tag'<my-app>'
//template sablon kako ce app izgledati
//{{}} interpolacija sta god da pise u name u klasi AppComponent
//videce se u interfejsu
//znaci AppComponent ce biti interfejs aplikacije
//# sourceMappingURL=app.component.js.map