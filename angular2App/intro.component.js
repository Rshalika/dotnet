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
var login_component_1 = require("./login.component");
var Intro = (function () {
    function Intro(loginService) {
        this.loginService = loginService;
    }
    Intro.prototype.onFb = function () {
        this.loginService.onLoginFb();
    };
    Intro = __decorate([
        core_1.Component({
            template: "\n \n <nav id=\"mynavbar\" class=\"navbar navbar-default navbar-fixed-top \">\n        <ul class=\"nav navbar-nav  navbar-right\">\n             \n            <li><a href=\"#login\" style=\"margin-right:10;\">Log in</a></li>\n        </ul>\n    </nav>\n\n\n<div data-spy=\"scroll\" data-target=\"#mynavbar\" style=\" position: relative\">\n<div id=\"section1\">\n  <h1 \nstyle=\"font-size: 100px;\n    text-align: center;\">Hi</h1>\n \n  <h1 style=\"\n    text-align: center;\"> we are asshole chat!</h1>\n\n  <h4 style=\"text-align: center;\"> Don't be us. Don't be an asshole! </h4>\n  <h3 style=\"text-align: center;\"> Be yourself </h3>\n    \n</div>\n<style>\n   #section2 > ul > li{\n    font-size: 40px;\n     \n    }\n\n#section2{\n    text-align: center;\n}\n     \n#section2 > h1 {\n    display: inline-block;\n    background-color: #23726a;\n    text-align: center;\n    }\n#howtolist {\n    width: 50%;\n    margin: 0 auto;\n    font-size: x-large;\n    }\n#howtolist  {\n    width: 50%;\n    margin: 0 auto;\n    text-align: center;\n    }\n#howtolist > p {\n    background-color: #23726a;\n    display: inline-block;\n    width: 50%;\n    margin-left: 20px;\n \n    font-size: x-large\n  }\n\n.loginBtn{\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    float: left;\n    border-right: groove;\n}\n\n\n.loginBntContainer{\n    width: 200px;\n    height: 50px;\n    margin: 1 auto;\n    line-height: 50px;\n    cursor: pointer;\n}\n.loginBntContainerF{\n    background: #3a5897;\n}\n\n.loginBntContainerG{\n    background: #e74c3c;\n}\n#login{\n    text-align: center;\n}\n</style>\n<div id=\"section2\">\n  <h1>How to use asshole chat:</h1>\n    <div id=\"howtolist\">\n      <p>create chats</p> \n<br/>\n     <p>give it a name</p> \n<br/>\n       <p>chat </p>  \n<br/>\n     <p>repeat </p> \n<br/>\n        \n    </div>\n </div>\n<div id=\"login\">\n  <h1>Login</h1>\n\n<h2>with</h2>\n   <div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-4\">\n         \n    </div>\n    <div class=\"col-md-4\">\n   \n        <div (click)=\"onFb()\" class=\"loginBntContainerF loginBntContainer\">\n            <div class=\"loginBtn\" style=\"background: url('/fb.png'); background-size: 100% 100%;\"></div> \n            Facebook\n        </div>\n        <div class=\"loginBntContainerG loginBntContainer\">\n            <div class=\"loginBtn\" style=\"background: url('/gp.png'); background-size: 100% 100%; \"></div> Google\n        </div>\n\n    </div>\n \n  <div class=\"col-md-4\">\n         \n    </div>\n  </div>\n</div>\n\n</div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [login_component_1.LoginService])
    ], Intro);
    return Intro;
}());
exports.Intro = Intro;
//# sourceMappingURL=intro.component.js.map