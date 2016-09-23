import { NgModule }      from '@angular/core';
import {HttpModule}      from "@angular/http"
import { BrowserModule } from '@angular/platform-browser';
import {CreateComponent} from "./create.component";
import {JoinComponent} from "./join.component";
import {ChatApiClient} from "./chat.api.clent.component";
import {moreChatRouting} from './more.chat.routing';
import {ChatApiService} from "./chat.api.service";

@NgModule({
    imports: [BrowserModule, HttpModule, moreChatRouting],
    declarations: [CreateComponent, JoinComponent, ChatApiClient],
    bootstrap: [ChatApiClient],
    providers: [
        ChatApiService
    ],
})




export class MoreChatModule { }

