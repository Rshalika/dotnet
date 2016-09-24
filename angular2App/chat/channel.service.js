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
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
    ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(exports.ConnectionState || (exports.ConnectionState = {}));
var ConnectionState = exports.ConnectionState;
var ChannelConfig = (function () {
    function ChannelConfig() {
    }
    return ChannelConfig;
}());
exports.ChannelConfig = ChannelConfig;
var ChannelEvent = (function () {
    function ChannelEvent() {
        this.Timestamp = new Date();
    }
    return ChannelEvent;
}());
exports.ChannelEvent = ChannelEvent;
var ChannelService = (function () {
    function ChannelService() {
        var _this = this;
        this.started = false;
        this.connectionStateSubject = new Subject_1.Subject();
        this.startingSubject = new Subject_1.Subject();
        this.errorSubject = new Subject_1.Subject();
        this.events = new Subject_1.Subject();
        this.chatEvents = new Map();
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.event$ = this.events.asObservable();
        this.hubProxy = $.connection.chatHub;
        this.hubConnection = $.connection.hub;
        this.hubProxy.client.addMessage = function (channelOnject) {
            _this.events.next(channelOnject);
        };
        this.hubProxy.client.takeOldMessages = function (id, channelOnjects) {
            _this.chatEvents.get(id).next(channelOnjects);
        };
    }
    ChannelService.prototype.start = function () {
        var _this = this;
        this.hubConnection.start()
            .done(function () {
            _this.started = true;
            _this.startingSubject.next(true);
        })
            .fail(function () {
            console.log('Could not Connect!');
        });
    };
    ChannelService.prototype.getChatMessages = function (id) {
        if (!this.chatEvents.has(id)) {
            this.chatEvents.set(id, new Subject_1.Subject());
        }
        this.hubProxy.server.giveOldMessages(id);
    };
    ChannelService.prototype.subOlds = function (id) {
        if (!this.chatEvents.has(id)) {
            this.chatEvents.set(id, new Subject_1.Subject());
        }
        return this.chatEvents.get(id).asObservable();
    };
    ChannelService.prototype.sub = function () {
        return this.event$;
    };
    ChannelService.prototype.publish = function (ev) {
        this.hubProxy.server.send(ev);
    };
    ChannelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChannelService);
    return ChannelService;
}());
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map