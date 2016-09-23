import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/RX';
import {Headers, RequestOptions, Http} from "@angular/http";
import {ChatCreationResponse } from "../chat";

@Injectable()
export class ChatApiService {

    private chatApiUrl: string = 'api/chat';
    public update: Observable<any>;
    private innerUpdate: Subject<any> = new Subject<any>();
    constructor(private http: Http) {
        this.update = this.innerUpdate.asObservable();
    }

    createNewChat(name: string,userName:string): Promise<ChatCreationResponse> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers , withCredentials:true});

        var data = {
            'ChatName': name,
            'UserName':userName
        }
        
        return this.http.post(this.chatApiUrl,data,options)
            .toPromise()
            .then(res => res.json());


    }

    addToChat(id: number, userName: string): Promise<ChatCreationResponse> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        var data = {
            'ChatId': +id,
            'UserName': userName
        }
        
        return this.http.post(this.chatApiUrl+'/add', data, options)
            .toPromise()
            .then(res => res.json());


    }


    newChat() {
        this.innerUpdate.next(null);
    }
}