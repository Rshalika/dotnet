"use strict";
var router_1 = require('@angular/router');
var create_component_1 = require("./create.component");
var join_component_1 = require("./join.component");
var chat_api_clent_component_1 = require("./chat.api.clent.component");
var moreChatRoutes = [
    {
        path: 'morechat',
        component: chat_api_clent_component_1.ChatApiClient,
        children: [
            { path: 'create', component: create_component_1.CreateComponent },
            { path: 'join', component: join_component_1.JoinComponent },
            { path: '', component: join_component_1.JoinComponent },
        ]
    },
];
exports.moreChatRouting = router_1.RouterModule.forChild(moreChatRoutes);
//# sourceMappingURL=more.chat.routing.js.map