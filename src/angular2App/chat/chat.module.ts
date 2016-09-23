import { NgModule }      from '@angular/core';
import {HttpModule}      from "@angular/http"
import { BrowserModule } from '@angular/platform-browser';
import {ChatComponent} from "./chat.component";
import {chatRouting} from "./chat.routing";
import {ChatService} from "./ChatService";
import {ChatListComponent } from "./chat.list.component";
import {ChatMessaging} from "./chat.messaging";
import {ChatSocketService} from "./chat.socket";
import {ChannelService} from "./channel.service";
import {SignalrWindow} from "./signalr.window";
import {LoadingComponent} from "./loading.component";
import { MoreChatModule } from "./morechat/more.chat.module";
import {CreateComponent } from "./morechat/create.component";
import {JoinComponent} from "./morechat/join.component";
import {ChatApiClient} from "./morechat/chat.api.clent.component";
import {ChatApiService} from "./morechat/chat.api.service";
import {CreateResponse } from "./morechat/create.response.component";
import {JoinResponse} from "./morechat/join.response.component";
import {EmptyComponent} from "./morechat/empty";

@NgModule({
    imports: [BrowserModule, HttpModule, chatRouting],
    declarations: [EmptyComponent,CreateResponse, JoinResponse, ChatListComponent, ChatApiClient, ChatComponent, ChatMessaging, LoadingComponent, CreateComponent, JoinComponent],
    bootstrap:    [ ChatComponent , ChatApiClient],
    providers: [
        ChatService, ChatSocketService, ChannelService, SignalrWindow, ChatApiService
    ],
})




export class ChatModule { }

