import {Component} from "@angular/core"
import {ChatService } from "./ChatService";
import {Chat} from "./chat";

@Component(
    {
        selector: 'chat',
        template:
            `
<div class="container">
    <h1>Chat and cool things!  </h1>
    <a routerLink="/chat/morechat" routerLinkActive="active"> Want more chats! </a>
  
    <div class="row">
        <div class="col-sm-4" style="background-color:white;">
            <chat-list></chat-list>
        </div>
        <div class="col-sm-8" style="background-color:white;">
            <router-outlet></router-outlet>
        </div>
         
    </div>
</div>     
            `
        ,
        providers:[ChatService]
    }

)

export class ChatComponent{
   
    


}