import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ChatApiService} from "./chat.api.service";
import {ChatCreationResponse} from "../chat";
declare var componentHandler: any;
@
Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'create-chat',
    template: `

<div *ngIf="shouldShowFrorm">

<h2> Ok lets create new chat</h2>


<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input #newChat class="mdl-textfield__input" type="text" id="newChat">
    <label class="mdl-textfield__label" for="newChat">name of chat</label>
  </div>


<h3> now choose your name in it</h3>
<h5> it can be anything . like Obama or Trump or whatever</h5>

<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input #userName class="mdl-textfield__input" type="text" id="userName">
    <label class="mdl-textfield__label" for="userName">name of chat</label>
  </div>
<div>
    your name in this new chat will be {{userName}}
</div>

<button (click)="onCreateChat(newChat.value,userName.value)"
 class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
  CREATE
</button>
   
</div>

<div *ngIf="shouldShowResponse">
    <create-response
    [response] = "creationResponse"
    >
</create-response>

</div>

`
})

export class CreateComponent {

    shouldShowResponse: boolean = false;
    shouldShowFrorm: boolean = !this.shouldShowResponse;

    creationResponse: ChatCreationResponse ;

    constructor(private chatApiService: ChatApiService, private router: Router) {

    }

    onCreateChat(name: string, userName: string) {
        this.chatApiService.createNewChat(name, userName).then((res: ChatCreationResponse) => {
            console.log(res);
            if (res.success) {
                this.chatApiService.newChat();
            }
            this.creationResponse = res;
            this.shouldShowResponse = true;
            this.shouldShowFrorm = false;
        });

    }
    ngAfterViewInit() {
        
        componentHandler.upgradeDom();
    }
}

