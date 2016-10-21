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
/**
 * Created by Alexey on 10/13/2016.
 */
var core_1 = require('@angular/core');
var Item = (function () {
    function Item(framework, year, used) {
        this.framework = framework;
        this.year = year;
        this.used = used;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { framework: "Angular", year: 2009, used: true },
            { framework: "Angular2", year: 2016, used: true },
            { framework: "Aurelia", year: 2016, used: true },
            { framework: "React", year: 2015, used: false }
        ];
    }
    AppComponent.prototype.addItem = function (name, year, used) {
        if (name == null || name == undefined || name.trim() == "")
            return;
        if (year == null || year == undefined)
            return;
        this.items.push(new Item(name, year, used));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'frameworks',
            //templateUlr
            template: "<div class=\"page-header\">\n        <h1> List of js frameworks  </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"name\" placeholder = \"Name\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"year\" placeholder=\"Year\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"used\" placeholder=\"Using\" />\n            </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(name, year, used)\">Add</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                   <th> Name </th>\n                   <th> Year </th>\n                   <th> Are you use it ?</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.framework}}</td>\n                    <td>{{item.year}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.used\" /></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map