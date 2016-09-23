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
var RX_1 = require('rxjs/RX');
var http_1 = require("@angular/http");
var ChatApiService = (function () {
    function ChatApiService(http) {
        this.http = http;
        this.chatApiUrl = 'api/chat';
        this.innerUpdate = new RX_1.Subject();
        this.update = this.innerUpdate.asObservable();
    }
    ChatApiService.prototype.createNewChat = function (name, userName) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        var data = {
            'ChatName': name,
            'UserName': userName
        };
        return this.http.post(this.chatApiUrl, data, options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ChatApiService.prototype.addToChat = function (id, userName) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        var data = {
            'ChatId': +id,
            'UserName': userName
        };
        return this.http.post(this.chatApiUrl + '/add', data, options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ChatApiService.prototype.newChat = function () {
        this.innerUpdate.next(null);
    };
    ChatApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChatApiService);
    return ChatApiService;
}());
exports.ChatApiService = ChatApiService;
//# sourceMappingURL=chat.api.service.js.map