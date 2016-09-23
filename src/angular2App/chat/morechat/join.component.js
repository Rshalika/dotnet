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
var chat_api_service_1 = require("./chat.api.service");
var JoinComponent = (function () {
    function JoinComponent(chatApiService, router) {
        this.chatApiService = chatApiService;
        this.router = router;
        this.shouldShowResponse = false;
        this.shouldShowFrorm = !this.shouldShowResponse;
    }
    JoinComponent.prototype.onAddToChat = function (chatId, userName) {
        var _this = this;
        this.chatApiService.addToChat(chatId, userName)
            .then(function (res) {
            console.log(res.success);
            if (res.success) {
                _this.chatApiService.newChat();
            }
            _this.response = res;
            _this.shouldShowResponse = true;
            _this.shouldShowFrorm = false;
        });
    };
    JoinComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    JoinComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'join-chat',
            template: "\n\n<div *ngIf=\"shouldShowFrorm\">\n<h2> Join chat</h2>\n<h5> you will need unique chat id</h5>\n\n\n<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n    <input #chatName class=\"mdl-textfield__input\" type=\"text\" id=\"chatName\">\n    <label class=\"mdl-textfield__label\" for=\"chatName\">unique id</label>\n  </div>\n\n\n<h3> now choose your name in it</h3>\n<h5> it can be anything . like Obama or Trump or whatever</h5>\n\n<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n    <input #userName1 class=\"mdl-textfield__input\" type=\"text\" id=\"userName1\">\n    <label class=\"mdl-textfield__label\" for=\"userName1\">your name</label>\n  </div>\n<div>\n    your name in this new chat will be {{userName1.value}}\n</div>\n\n<button (click)=\"onAddToChat(chatName.value,userName1.value)\"\n class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n  JOIN\n</button>\n</div>\n<div *ngIf=\"shouldShowResponse\">\n\n<join-response\n[response] = \"response\"\n>\n    \n</join-response>\n\n</div>\n\n   \n"
        }), 
        __metadata('design:paramtypes', [chat_api_service_1.ChatApiService, router_1.Router])
    ], JoinComponent);
    return JoinComponent;
}());
exports.JoinComponent = JoinComponent;
//# sourceMappingURL=join.component.js.map