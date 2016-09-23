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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var chat_1 = require("../chat");
var JoinResponse = (function () {
    function JoinResponse(router) {
        this.router = router;
    }
    JoinResponse.prototype.onNavigate = function (id, mid) {
        console.log("asdasd");
        this.router.navigate(['chat/messaging', id, mid]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', chat_1.ChatCreationResponse)
    ], JoinResponse.prototype, "response", void 0);
    JoinResponse = __decorate([
        core_1.Component({
            selector: 'join-response',
            template: "\n<div *ngIf=\"response.success\"> \n            you have joined the chat named \n            <span class=\"alert-success\" style=\"mergin:auto 0\">{{response.chat.name}}</span>\n            \n            <a  style=\"cursor:pointer;\" (click) =\"onNavigate(response.chat.id,response.chat.myNum)\"> enter to it </a>\n        \n</div>\n<div *ngIf = \"!response.success\">\n    can't join\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], JoinResponse);
    return JoinResponse;
}());
exports.JoinResponse = JoinResponse;
//# sourceMappingURL=join.response.component.js.map