"use strict";
var ChatMessage = (function () {
    function ChatMessage(message, author, chat, authorId) {
        this.message = message;
        this.author = author;
        this.chat = chat;
        this.authorId = authorId;
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat.message.js.map