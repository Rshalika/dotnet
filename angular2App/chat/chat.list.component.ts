import {Component, OnInit, NgZone} from '@angular/core'
import {Router} from '@angular/router'
import {ChatService} from "./ChatService";
import {Chat} from "./chat";
import {Observable} from 'rxjs/Rx';
import {ChatApiService} from "./morechat/chat.api.service";

@Component({
    selector: 'chat-list',
    template: 
        `   
 
<style>
.card-wide.mdl-card {
   
}

.chat-button{
    background: inherit;
    cursor: pointer;
}
</style>
<div  class="mdl-list" style="height: 600px;
    margin-right: 50;
    overflow-y: auto">
    <div *ngFor="let chat of chats" class="mdl-list__item  mdl-shadow--2dp chat-button ">
           <div class = "mdl-list__item-primary-content" (click)="onChatChange(chat.id,chat.myNum)">
                {{chat.name}}
           </div>
    </div>            
</div>

`
    
})

export class ChatListComponent  {

   chats: Chat[];

    errorMessage: string;

    private  sub :any;
    constructor(
        private chatService: ChatService,
        private chatApiService: ChatApiService,
        private zone: NgZone,
        private router:Router

    ){
        this.chats = new Array();

    }
    
    ngOnInit() {
        this.getChats();
        this.chatApiService.update.subscribe((a) => {
            this.getChats();
        });
    }

    getChats() {
        this.chatService.getChats().subscribe((res) => {

            this.zone.run(() => {
                this.chats = res;
//                if (this.chats.length > 0) {
//                    this.router.navigate(['chat/messaging', this.chats[0].id,this.chats[0].myNum]);
//                }

            });
           
            console.log(this.chats);
        });
    }

    onChatChange(id: string,myNum:string) {
        this.router.navigate(['chat', 'messaging', id, myNum]);
    }

}