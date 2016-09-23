"use strict";
var router_1 = require('@angular/router');
var intro_component_1 = require("./intro.component");
var appRoutes = [
    {
        path: '',
        component: intro_component_1.Intro
    },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map