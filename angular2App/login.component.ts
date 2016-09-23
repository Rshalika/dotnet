import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router'
import 'rxjs/add/operator/toPromise';

declare const FB: any;


@Injectable()
export class LoginService {
    private  _http:Http;


    private loginUrl:string = "account/Login";

    constructor(private http:Http, private router:Router){
        this._http = http;
    }

    onLoginFb = function () {
        FB.login((response) => {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                console.log(response);
                console.log(response.accessToken);
                FB.api('/me', {fields: 'name, email'},(response1)=> {
                    console.log(response1);
                    this.logIn(response.authResponse.accessToken, response1.email)
                        .then((res) => {
                            if (res.success) {
                                console.log('logged in');
                                this.router.navigate(['/chat']);
                            }
                            console.log('bad in');
                        });
                });
               
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        },{scope: 'email, public_profile' });
    };

    logIn(token: string, email:string) : Promise<any>{
        var body  = {
            "Token":token,
            "Email": email
        };
       return this._http.post(this.loginUrl, body)
           .toPromise()
           .then(res => res.json())
           .catch(this.handleError)

    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
