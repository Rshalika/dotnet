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
var ChatApiClient = (function () {
    function ChatApiClient(chatApiService, router) {
        this.chatApiService = chatApiService;
        this.router = router;
    }
    ChatApiClient = __decorate([
        core_1.Component({
            selector: 'chat-api-client',
            template: "\n<style></style>\n<div>\n\nI want more chats! \n<span> \n    <a routerLink=\"/chat/morechat/create\" routerLinkActive=\"active\"> cratre </a>\n \n</span> \nor \n<span> \n    <a routerLink=\"/chat/morechat/join\" routerLinkActive=\"active\"> join </a>\n \n</span>\n one \n \n\n</div>\n\n\n<router-outlet></router-outlet>\n\n\n"
        }), 
        __metadata('design:paramtypes', [chat_api_service_1.ChatApiService, router_1.Router])
    ], ChatApiClient);
    return ChatApiClient;
}());
exports.ChatApiClient = ChatApiClient;
//# sourceMappingURL=chat.api.clent.component.js.map