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
var chat_message_1 = require("./chat.message");
var channel_service_1 = require("./channel.service");
var ChatMessaging = (function () {
    function ChatMessaging(route, zone, router, chatSocketService) {
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.chatSocketService = chatSocketService;
        this.chatMessages = new Array();
        chatSocketService.start();
    }
    ChatMessaging.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.sub = this.route.params.subscribe(function (params) {
            _this.zone.run(function () {
                _this.myNum = params["myNum"];
                _this.chatId = params['id'];
                console.log('params sub');
                if (typeof (_this.subOld) != 'undefined') {
                    _this.subOld.unsubscribe();
                }
                _this.subOlds();
                if (_this.chatSocketService.started) {
                    _this.oldMessages();
                }
                else {
                    if (typeof (_this.subStart) != 'undefined') {
                        _this.subStart.unsubscribe();
                    }
                    _this.subStart = _this.chatSocketService.starting$.subscribe(function (res) {
                        if (res) {
                            console.log('started');
                            _this.oldMessages();
                        }
                    });
                }
            });
        });
        this.subNew = this.subscribeNew();
        this.scroll();
    };
    ChatMessaging.prototype.ngAfterViewChecked = function () {
        this.scroll();
    };
    ChatMessaging.prototype.oldMessages = function () {
        if (!this.chatSocketService.started) {
            return;
        }
        this.chatSocketService.getChatMessages(this.chatId);
    };
    ChatMessaging.prototype.subOlds = function () {
        var _this = this;
        this.subOld = this.chatSocketService.subOlds(this.chatId).subscribe(function (evts) {
            _this.zone.run(function () {
                while (_this.chatMessages.length > 0) {
                    _this.chatMessages.pop();
                }
                for (var _i = 0, evts_1 = evts; _i < evts_1.length; _i++) {
                    var evt = evts_1[_i];
                    console.log(evt.Name);
                    _this.chatMessages.push(new chat_message_1.ChatMessage(evt.Data, evt.Name, evt.ChannelName, evt.IdInChat.toString()));
                }
                ;
                _this.scroll();
            });
        });
    };
    ChatMessaging.prototype.ngOnDestroy = function () {
        console.log('ondestroy');
        this.sub.unsubscribe();
        if (typeof (this.subOld) != 'undefined') {
            this.subOld.unsubscribe();
        }
        if (typeof (this.subNew) != 'undefined') {
            this.subNew.unsubscribe();
        }
        if (typeof (this.subStart) != 'undefined') {
            this.subStart.unsubscribe();
        }
    };
    ChatMessaging.prototype.onNewMessage = function (message) {
        var m = new channel_service_1.ChannelEvent();
        m.Data = message;
        m.ChannelName = this.chatId;
        this.chatSocketService.publish(m);
    };
    ChatMessaging.prototype.subscribeNew = function () {
        var _this = this;
        return this.chatSocketService.sub()
            .subscribe(function (event) {
            _this.zone.run(function () {
                if (_this.chatId === event.ChannelName) {
                    _this.chatMessages.push(new chat_message_1.ChatMessage(event.Data, event.Name, event.ChannelName, event.IdInChat.toString()));
                }
                console.log(_this.chatMessages);
            });
        });
    };
    ChatMessaging.prototype.scroll = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatMessaging.prototype.resolveClass = function (cm) {
        if (cm.authorId === this.myNum) {
            return 40;
        }
        return 20;
    };
    __decorate([
        core_1.ViewChild("scrollArea"), 
        __metadata('design:type', core_1.ElementRef)
    ], ChatMessaging.prototype, "myScrollContainer", void 0);
    ChatMessaging = __decorate([
        core_1.Component({
            selector: 'chat-messaging',
            template: "\n\n<style>\n    .outer {\n        display: table;\n        width: 100%;\n    }\n\n    .middle {\n        width: 15%;\n        display: table-cell;\n        vertical-align: middle;\n    }\n\n    .inner {\n        margin-left: auto;\n        margin-right: auto; \n        width: 100%;\n    }\n    \n    .myMessage{\n        margin-left:30px;\n    }\n    #messageBtn {\n        \n        bottom: 0;\n    }\n    #scrollArea {\n                height: 95%;\n                overflow-y: scroll;\n                position: relative;\n                scroll-behavior: auto\n    }\n\n    .chat-message{\n            background: blanchedalmond;\n            margin:20px;\n     \n            word-wrap: break-word;\n            white-space: normal;\n            display: inline-block;\n            word-break: break-all;\n    }\n</style>\n\n\n<div style=\"height:600px%\">\n\n    <p style=\"height:5%\"> {{chatId}}</p>\n\n    <div  class=\"mdl-list\" #scrollArea id=\"scrollArea\">\n        <div *ngFor=\"let chatMessage of chatMessages\" >\n                <div  class=\"mdl-list__item  mdl-shadow--2dp chat-message\" [style.margin-left] = \"resolveClass(chatMessage)\" >\n                    <div class = \"mdl-list__item-primary-content\">\n                        {{chatMessage.message}} {{chatMessage.author}}\n                    </div>\n                </div>\n            \n        </div>            \n    </div>\n\n\n\n</div>\n\n\n<div id=\"messageBtn\" class=\"outer\"> \n        <div class=\"mdl-textfield mdl-js-textfield\" style=\"width:100%\">\n            <textarea #newMessage class=\"mdl-textfield__input\" style=\"resize:none\" type=\"text\" rows= \"3\" id=\"sample5\" ></textarea>\n        </div>\n\n        <div class=\"middle\">\n            <button (click)=\"onNewMessage(newMessage.value)\"  class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect inner\"> \n                SEND\n            </button> \n        </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, core_1.NgZone, router_1.Router, channel_service_1.ChannelService])
    ], ChatMessaging);
    return ChatMessaging;
}());
exports.ChatMessaging = ChatMessaging;
//# sourceMappingURL=chat.messaging.js.map