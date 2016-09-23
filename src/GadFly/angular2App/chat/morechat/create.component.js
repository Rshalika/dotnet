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
var CreateComponent = (function () {
    function CreateComponent(chatApiService, router) {
        this.chatApiService = chatApiService;
        this.router = router;
        this.shouldShowResponse = false;
        this.shouldShowFrorm = !this.shouldShowResponse;
    }
    CreateComponent.prototype.onCreateChat = function (name, userName) {
        var _this = this;
        this.chatApiService.createNewChat(name, userName).then(function (res) {
            console.log(res);
            if (res.success) {
                _this.chatApiService.newChat();
            }
            _this.creationResponse = res;
            _this.shouldShowResponse = true;
            _this.shouldShowFrorm = false;
        });
    };
    CreateComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    CreateComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'create-chat',
            template: "\n\n<div *ngIf=\"shouldShowFrorm\">\n\n<h2> Ok lets create new chat</h2>\n\n\n<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n    <input #newChat class=\"mdl-textfield__input\" type=\"text\" id=\"newChat\">\n    <label class=\"mdl-textfield__label\" for=\"newChat\">name of chat</label>\n  </div>\n\n\n<h3> now choose your name in it</h3>\n<h5> it can be anything . like Obama or Trump or whatever</h5>\n\n<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n    <input #userName class=\"mdl-textfield__input\" type=\"text\" id=\"userName\">\n    <label class=\"mdl-textfield__label\" for=\"userName\">name of chat</label>\n  </div>\n<div>\n    your name in this new chat will be {{userName}}\n</div>\n\n<button (click)=\"onCreateChat(newChat.value,userName.value)\"\n class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n  CREATE\n</button>\n   \n</div>\n\n<div *ngIf=\"shouldShowResponse\">\n    <create-response\n    [response] = \"creationResponse\"\n    >\n</create-response>\n\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [chat_api_service_1.ChatApiService, router_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map