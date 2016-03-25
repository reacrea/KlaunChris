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
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var navbar_1 = require('./navbar/navbar');
var route_config_1 = require('./route.config');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <navbar></navbar>\n    <router-outlet></router-outlet>\n  ",
            styles: [
                "\n    "
            ],
            directives: [router_1.ROUTER_DIRECTIVES, navbar_1.Navbar]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.js.map
