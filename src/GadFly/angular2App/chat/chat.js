"use strict";
var Chat = (function () {
    function Chat(name, id, myNum) {
        this.name = name;
        this.id = id;
        this.myNum = myNum;
        this.chatMembers = [];
    }
    return Chat;
}());
exports.Chat = Chat;
var ChatCreationResponse = (function () {
    function ChatCreationResponse(success, chat) {
        this.success = success;
        this.chat = chat;
    }
    return ChatCreationResponse;
}());
exports.ChatCreationResponse = ChatCreationResponse;
//# sourceMappingURL=chat.js.map