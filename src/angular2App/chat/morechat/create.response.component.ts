import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ChatCreationResponse} from "../chat";

@Component({
    selector: 'create-response',
    template: `
        <div *ngIf="response.success">
            you have created chat with id 
            <span class="alert-success" style="mergin:auto 0">{{response.chat.id}}</span>
            
            <a  style="cursor:pointer;" (click) ="onNavigate(response.chat.id,response.chat.myNum)"> enter to it </a>
        </div>
        <div *ngIf="!response.success">
            can't create
        </div>
        
`
})

   
export class CreateResponse {

    constructor(private router: Router) {

    }

    @Input() response: ChatCreationResponse;

    onNavigate(id: string, mid:string) {
        this.router.navigate(['chat/messaging', id,mid]);
    }
}