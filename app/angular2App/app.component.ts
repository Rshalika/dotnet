import { Component } from '@angular/core';
import './chat/rxjsOperators'
 

declare const window: any;
declare const FB:any;


@Component({
    selector: 'my-app',
    template: `

 <router-outlet></router-outlet>
 
        
        `
})
export class AppComponent {

    ngOnInit():any {
        window.fbAsyncInit = () => {
            FB.init({
                appId      : "1777950185778896",
                xfbml      : true,
                version    : "v2.7"
            });
        };

        (((d, s, id) => {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk"));


    }

}
