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
var http_1 = require("@angular/http");
var platform_browser_1 = require('@angular/platform-browser');
var create_component_1 = require("./create.component");
var join_component_1 = require("./join.component");
var chat_api_clent_component_1 = require("./chat.api.clent.component");
var more_chat_routing_1 = require('./more.chat.routing');
var chat_api_service_1 = require("./chat.api.service");
var MoreChatModule = (function () {
    function MoreChatModule() {
    }
    MoreChatModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, more_chat_routing_1.moreChatRouting],
            declarations: [create_component_1.CreateComponent, join_component_1.JoinComponent, chat_api_clent_component_1.ChatApiClient],
            bootstrap: [chat_api_clent_component_1.ChatApiClient],
            providers: [
                chat_api_service_1.ChatApiService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MoreChatModule);
    return MoreChatModule;
}());
exports.MoreChatModule = MoreChatModule;
//# sourceMappingURL=more.chat.module.js.map