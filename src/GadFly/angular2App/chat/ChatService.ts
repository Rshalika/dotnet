
import {Http, Response} from '@angular/http'
import {Injectable} from '@angular/core'
import { Chat } from "./chat";
import {ChatMessage} from "./chat.message";
import {Observable, Subject} from 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()

export class ChatService{

    

   

    chatsUrl = '/api/chat';
    addChatsUrl = '/api/chat/add';

    constructor(private http:Http) {
        
    }

    getChats(): Observable<Chat[]> {
        return this.http.get(this.chatsUrl, { withCredentials: true }).map(res =>res.json());

 
    }
     
   private handleError(error:any) {
     
       let errMsg = (error.message) ? error.message :
           error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       console.error(errMsg); // log to console instead
       return Observable.throw(errMsg);

   }

   

    

}