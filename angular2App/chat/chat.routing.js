"use strict";
var router_1 = require('@angular/router');
var chat_messaging_1 = require("./chat.messaging");
var chat_component_1 = require("./chat.component");
var loading_component_1 = require("./loading.component");
var chat_api_clent_component_1 = require("./morechat/chat.api.clent.component");
var create_component_1 = require("./morechat/create.component");
var join_component_1 = require("./morechat/join.component");
var empty_1 = require("./morechat/empty");
var join_response_component_1 = require("./morechat/join.response.component");
var create_response_component_1 = require("./morechat/create.response.component");
var chatRoutes = [
    {
        path: 'chat',
        component: chat_component_1.ChatComponent,
        children: [
            {
                path: 'morechat', component: chat_api_clent_component_1.ChatApiClient,
                children: [
                    { path: 'create', component: create_component_1.CreateComponent },
                    { path: 'join', component: join_component_1.JoinComponent },
                    { path: 'joinresponse/:success/:message', component: join_response_component_1.JoinResponse },
                    { path: 'createresponse/:success/:message/:chatid', component: create_response_component_1.CreateResponse },
                    { path: '', component: empty_1.EmptyComponent },
                ]
            },
            { path: 'messaging/:id/:myNum', component: chat_messaging_1.ChatMessaging },
            { path: '', component: loading_component_1.LoadingComponent },
        ]
    },
];
exports.chatRouting = router_1.RouterModule.forChild(chatRoutes);
//# sourceMappingURL=chat.routing.js.map