import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { ChatApiService } from "./chat.api.service";
import {ChatCreationResponse } from "../chat";

@Component({
    selector: 'chat-api-client',
    template:
`
<style></style>
<div>

I want more chats! 
<span> 
    <a routerLink="/chat/morechat/create" routerLinkActive="active"> cratre </a>
 
</span> 
or 
<span> 
    <a routerLink="/chat/morechat/join" routerLinkActive="active"> join </a>
 
</span>
 one 
 

</div>


<router-outlet></router-outlet>


`


})


export class ChatApiClient {
    constructor(private chatApiService: ChatApiService, private router:Router) {
        
    }


    
}