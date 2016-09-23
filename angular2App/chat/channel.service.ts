import {Injectable, Inject} from "@angular/core";  
import {Subject} from "rxjs/Subject";  
import {Observable} from "rxjs/Observable";
import {SignalrWindow} from "./signalr.window";


declare var $: any;

export enum ConnectionState {  
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class ChannelConfig {  
    url: string;
    hubName: string;
  
}

export class ChannelEvent {  
    Name: string;
    IdInChat:number;
    ChannelName: string;
    Timestamp: Date;
    Data: any;
    Json: string;

    constructor() {
        this.Timestamp = new Date();
    }
}



/**
 * ChannelService is a wrapper around the functionality that SignalR
 * provides to expose the ideas of channels and events. With this service
 * you can subscribe to specific channels (or groups in signalr speak) and
 * use observables to react to specific events sent out on those channels.
 */
@Injectable()
export class ChannelService {
 
    starting$: Observable<boolean>;

    event$: Observable<ChannelEvent>;

    
    connectionState$: Observable<ConnectionState>;
 
    error$: Observable<string>;

    started: boolean = false;


    

     
    private connectionStateSubject = new Subject<ConnectionState>();
    private startingSubject = new Subject<boolean>();
    private errorSubject = new Subject<string>();

    
    private events = new Subject<ChannelEvent>();

    private chatEvents: Map<string, Subject<ChannelEvent[]>> = new Map<string, Subject<ChannelEvent[]>>();

    // These are used to track the internal SignalR state 
    //
    private hubConnection: any;
    private hubProxy: any;

    // An internal array to track what channel subscriptions exist 
    //
   
    constructor() {
       
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.event$ = this.events.asObservable();


        this.hubProxy = $.connection.chatHub;
        this.hubConnection = $.connection.hub;
       
        this.hubProxy.client.addMessage = (channelOnject) => {
            console.log('new message');
            this.events.next(channelOnject);
        };
        this.hubProxy.client.takeOldMessages = (id: string, channelOnjects: ChannelEvent[]) => {
            console.log(channelOnjects.length);
            this.chatEvents.get(id).next(channelOnjects);
        };

       

    }

    
    start(): void {
       
        this.hubConnection.start()
            .done(() => {
                console.log('Now connected, connection ID=' + $.connection.hub.id);
                this.started = true;
                this.startingSubject.next(true);
                
            })
            .fail(() => {
                 console.log('Could not Connect!');
            });
    
    }

    getChatMessages(id: string) {
        if (!this.chatEvents.has(id)) {
            this.chatEvents.set(id, new Subject<ChannelEvent[]>());
        }
        console.log('request');
        this.hubProxy.server.giveOldMessages(id);
        
    }

    subOlds(id:string):Observable<ChannelEvent[]> {
        if (!this.chatEvents.has(id)) {
            this.chatEvents.set(id, new Subject<ChannelEvent[]>());
        }
        return this.chatEvents.get(id).asObservable();
    }

    sub(): Observable<ChannelEvent> {
        return this.event$;
    }
 
    publish(ev: ChannelEvent): void {
        this.hubProxy.server.send(ev);
    }

}