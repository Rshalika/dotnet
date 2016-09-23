import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {ChatMessage} from "./chat.message";
import {ChannelService} from  "./channel.service";

@Injectable()
export class ChatSocketService {
    public messages: Subject<ChatMessage>;

    constructor(private channelService: ChannelService) {

        
    }
}