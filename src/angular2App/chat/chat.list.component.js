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
var ChatService_1 = require("./ChatService");
var chat_api_service_1 = require("./morechat/chat.api.service");
var ChatListComponent = (function () {
    function ChatListComponent(chatService, chatApiService, zone, router) {
        this.chatService = chatService;
        this.chatApiService = chatApiService;
        this.zone = zone;
        this.router = router;
        this.chats = new Array();
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getChats();
        this.chatApiService.update.subscribe(function (a) {
            _this.getChats();
        });
    };
    ChatListComponent.prototype.getChats = function () {
        var _this = this;
        this.chatService.getChats().subscribe(function (res) {
            _this.zone.run(function () {
                _this.chats = res;
            });
            console.log(_this.chats);
        });
    };
    ChatListComponent.prototype.onChatChange = function (id, myNum) {
        this.router.navigate(['chat', 'messaging', id, myNum]);
    };
    ChatListComponent = __decorate([
        core_1.Component({
            selector: 'chat-list',
            template: "   \n \n<style>\n.card-wide.mdl-card {\n   \n}\n\n.chat-button{\n    background: inherit;\n    cursor: pointer;\n}\n</style>\n<div  class=\"mdl-list\" style=\"height: 600px;\n    margin-right: 50;\n    overflow-y: auto\">\n    <div *ngFor=\"let chat of chats\" class=\"mdl-list__item  mdl-shadow--2dp chat-button \">\n           <div class = \"mdl-list__item-primary-content\" (click)=\"onChatChange(chat.id,chat.myNum)\">\n                {{chat.name}}\n           </div>\n    </div>            \n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [ChatService_1.ChatService, chat_api_service_1.ChatApiService, core_1.NgZone, router_1.Router])
    ], ChatListComponent);
    return ChatListComponent;
}());
exports.ChatListComponent = ChatListComponent;
//# sourceMappingURL=chat.list.component.js.map