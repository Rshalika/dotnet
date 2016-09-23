import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ChatApiService} from "./chat.api.service";
import {ChatCreationResponse} from "../chat";

declare var componentHandler: any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector:'join-chat',
    template: `

<div *ngIf="shouldShowFrorm">
<h2> Join chat</h2>
<h5> you will need unique chat id</h5>


<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input #chatName class="mdl-textfield__input" type="text" id="chatName">
    <label class="mdl-textfield__label" for="chatName">unique id</label>
  </div>


<h3> now choose your name in it</h3>
<h5> it can be anything . like Obama or Trump or whatever</h5>

<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input #userName1 class="mdl-textfield__input" type="text" id="userName1">
    <label class="mdl-textfield__label" for="userName1">your name</label>
  </div>
<div>
    your name in this new chat will be {{userName1.value}}
</div>

<button (click)="onAddToChat(chatName.value,userName1.value)"
 class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
  JOIN
</button>
</div>
<div *ngIf="shouldShowResponse">

<join-response
[response] = "response"
>
    
</join-response>

</div>

   
`
})

export class JoinComponent {

    shouldShowResponse: boolean = false;
    shouldShowFrorm: boolean = !this.shouldShowResponse;


    response : ChatCreationResponse ;
    constructor(private chatApiService: ChatApiService, private router : Router ) {
        
    }
    onAddToChat(chatId: number, userName: string) {
        this.chatApiService.addToChat(chatId, userName)
            .then(res => {
                console.log(res.success);
                if (res.success) {
                    this.chatApiService.newChat();
//                    this.router.navigate(['chat']);
                }
                this.response = res;
                this.shouldShowResponse = true;
                this.shouldShowFrorm = false;
            });
    }
    ngAfterViewInit() {

        componentHandler.upgradeDom();
    }
}

