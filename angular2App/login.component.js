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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "account/Login";
        this.onLoginFb = function () {
            var _this = this;
            FB.login(function (response) {
                if (response.authResponse) {
                    FB.api('/me', { fields: 'name, email' }, function (response1) {
                        _this.logIn(response.authResponse.accessToken, response1.email, response.authResponse.userID, response1.name)
                            .then(function (res) {
                            if (res.success) {
                                _this.router.navigate(['/chat']);
                            }
                        });
                    });
                }
                else {
                }
            }, { scope: 'email, public_profile' });
        };
        this._http = http;
    }
    LoginService.prototype.logIn = function (token, email, userID, name) {
        var body = {
            "Token": token,
            "Email": email,
            "UserId": userID,
            "RealName": name
        };
        return this._http.post(this.loginUrl, body)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.component.js.map