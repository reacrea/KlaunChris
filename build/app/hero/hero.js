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
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_model_1 = require('./hero.model');
exports.Hero = hero_model_1.Hero;
var heroes_component_2 = require('./heroes.component');
exports.Heroes = heroes_component_2.Heroes;
var hero_detail_component_2 = require('./hero-detail.component');
exports.HeroDetail = hero_detail_component_2.HeroDetail;
var heroes_const_1 = require('./heroes.const');
exports.HEROES = heroes_const_1.HEROES;
var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-component',
            template: "\n    <div class=\"parallax\" style=\"background-image: url(../src/app/hero/KCregistro.jpg);\">\n      <h2>Yes ... you are invited</h2>\n      \n    </div>\n  ",
            styleUrls: ['app/hero/hero.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/detail',
                as: 'Detail',
                component: hero_detail_component_1.HeroDetail
            },
            {
                path: '/',
                as: 'List',
                component: heroes_component_1.Heroes
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;

//# sourceMappingURL=hero.js.map
