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
                FB.api('/me', {fields: 'name, email'},(response1)=> {
                   
                    this.logIn(response.authResponse.accessToken, response1.email,response.authResponse.userID, response1.name)
                        .then((res) => {
                            if (res.success) {
                                 
                                this.router.navigate(['/chat']);
                            }
                            
                        });
                });
               
            } else {
                
            }
        },{scope: 'email, public_profile' });
    };

    logIn(token: string, email:string, userID:string,name:string) : Promise<any>{
        var body  = {
            "Token":token,
            "Email": email,
            "UserId":userID,
            "RealName":name
        };
       return this._http.post(this.loginUrl, body)
           .toPromise()
           .then(res => res.json())
           .catch(this.handleError)

    }



    private handleError(error: any): Promise<any> {
        
        return Promise.reject(error.message || error);
    }

}
