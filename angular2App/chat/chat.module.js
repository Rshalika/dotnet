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
var chat_component_1 = require("./chat.component");
var chat_routing_1 = require("./chat.routing");
var ChatService_1 = require("./ChatService");
var chat_list_component_1 = require("./chat.list.component");
var chat_messaging_1 = require("./chat.messaging");
var chat_socket_1 = require("./chat.socket");
var channel_service_1 = require("./channel.service");
var signalr_window_1 = require("./signalr.window");
var loading_component_1 = require("./loading.component");
var create_component_1 = require("./morechat/create.component");
var join_component_1 = require("./morechat/join.component");
var chat_api_clent_component_1 = require("./morechat/chat.api.clent.component");
var chat_api_service_1 = require("./morechat/chat.api.service");
var create_response_component_1 = require("./morechat/create.response.component");
var join_response_component_1 = require("./morechat/join.response.component");
var empty_1 = require("./morechat/empty");
var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, chat_routing_1.chatRouting],
            declarations: [empty_1.EmptyComponent, create_response_component_1.CreateResponse, join_response_component_1.JoinResponse, chat_list_component_1.ChatListComponent, chat_api_clent_component_1.ChatApiClient, chat_component_1.ChatComponent, chat_messaging_1.ChatMessaging, loading_component_1.LoadingComponent, create_component_1.CreateComponent, join_component_1.JoinComponent],
            bootstrap: [chat_component_1.ChatComponent, chat_api_clent_component_1.ChatApiClient],
            providers: [
                ChatService_1.ChatService, chat_socket_1.ChatSocketService, channel_service_1.ChannelService, signalr_window_1.SignalrWindow, chat_api_service_1.ChatApiService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map