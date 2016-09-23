import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ChatCreationResponse }  from "../chat";

@Component({
    selector: 'join-response',
    template: `
<div *ngIf="response.success"> 
            you have joined the chat named 
            <span class="alert-success" style="mergin:auto 0">{{response.chat.name}}</span>
            
            <a  style="cursor:pointer;" (click) ="onNavigate(response.chat.id,response.chat.myNum)"> enter to it </a>
        
</div>
<div *ngIf = "!response.success">
    can't join
</div>

`
})
export class JoinResponse {
    constructor(private router:Router) {
        
    }
    @Input() response: ChatCreationResponse;

    onNavigate(id: string, mid : string) {
        console.log("asdasd");
        this.router.navigate(['chat/messaging', id, mid]);
    }
}