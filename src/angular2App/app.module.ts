import { NgModule }      from '@angular/core';
import {HttpModule}      from "@angular/http"
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routing";

 

import { AppComponent }  from './app.component';
import {LoginService} from "./login.component";
import {ChatModule } from "./chat/chat.module"
import {Intro} from "./intro.component";

@NgModule({
    imports: [BrowserModule ,  HttpModule, routing, ChatModule],
    declarations: [ AppComponent , Intro],
    bootstrap:    [ AppComponent ],
    providers: [
        appRoutingProviders, LoginService
    ],
})




export class AppModule { }
