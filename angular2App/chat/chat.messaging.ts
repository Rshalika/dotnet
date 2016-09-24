import {Component, NgZone, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {ChatService} from "./ChatService";
import {ChatMessage} from "./chat.message";
import {ChannelService, ChannelEvent } from "./channel.service";


declare const $: any;

@Component({

    selector: 'chat-messaging',

    template:`

<style>
    .outer {
        display: table;
        width: 100%;
    }

    .middle {
        width: 15%;
        display: table-cell;
        vertical-align: middle;
    }

    .inner {
        margin-left: auto;
        margin-right: auto; 
        width: 100%;
    }
    
    .myMessage{
        margin-left:30px;
    }
    #messageBtn {
        
        bottom: 0;
    }
    #scrollArea {
                height: 95%;
                overflow-y: scroll;
                position: relative;
                scroll-behavior: auto
    }

    .chat-message{
            background: blanchedalmond;
            margin:20px;
     
            word-wrap: break-word;
            white-space: normal;
            display: inline-block;
            word-break: break-all;
    }
</style>


<div style="height:600px%">

    <p style="height:5%"> {{chatId}}</p>

    <div  class="mdl-list" #scrollArea id="scrollArea">
        <div *ngFor="let chatMessage of chatMessages" >
                <div  class="mdl-list__item  mdl-shadow--2dp chat-message" [style.margin-left] = "resolveClass(chatMessage)" >
                    <div class = "mdl-list__item-primary-content">
                        {{chatMessage.message}} {{chatMessage.author}}
                    </div>
                </div>
            
        </div>            
    </div>



</div>


<div id="messageBtn" class="outer"> 
        <div class="mdl-textfield mdl-js-textfield" style="width:100%">
            <textarea #newMessage class="mdl-textfield__input" style="resize:none" type="text" rows= "3" id="sample5" ></textarea>
        </div>

        <div class="middle">
            <button (click)="onNewMessage(newMessage.value)"  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect inner"> 
                SEND
            </button> 
        </div>

</div>
`
})

export class ChatMessaging implements OnInit,  AfterViewChecked{
    @ViewChild("scrollArea") private myScrollContainer: ElementRef;
    private sub: any;
    private subNew: any;
    private subOld: any;
    private subStart: any;
    private chatId: string;
    private myNum : string;

   

    chatMessages: Array<ChatMessage>;

    private channesEvents: ChannelEvent;

    constructor( private route: ActivatedRoute, private zone:NgZone,
                 private router: Router,private chatSocketService:ChannelService) {
        this.chatMessages = new Array();
         chatSocketService.start();
    }

    public messages : ChatMessage[];

    ngOnInit() {
        console.log("init");
        this.sub = this.route.params.subscribe(params => {
            this.zone.run(() => {
                this.myNum = params["myNum"];
                this.chatId = params['id']; // (+) converts string 'id' to a number
                 
                if (typeof (this.subOld) != 'undefined') {
                    this.subOld.unsubscribe();
                }
                this.subOlds();

                if (this.chatSocketService.started) {
                    this.oldMessages();
                } else {
                    if (typeof (this.subStart) != 'undefined') {
                        this.subStart.unsubscribe();
                    }
                    this.subStart = this.chatSocketService.starting$.subscribe(res => {
                        if (res) {
                          
                            this.oldMessages();
                        }
                    });
                }
            });

        });

        this.subNew = this.subscribeNew();
        this.scroll();

    }
    ngAfterViewChecked() {
        this.scroll();

    }

    oldMessages() {
        if (!this.chatSocketService.started) {
            return;
        }
        this.chatSocketService.getChatMessages(this.chatId);
        
    }

    subOlds() {
        this.subOld = this.chatSocketService.subOlds(this.chatId).subscribe((evts: ChannelEvent[]) => {
            this.zone.run(() => {
                while (this.chatMessages.length > 0) {
                    this.chatMessages.pop();
                }
                for (let evt of evts) {
                    
                    this.chatMessages.push(new ChatMessage(evt.Data, evt.Name, evt.ChannelName,evt.IdInChat.toString()));
                };
                this.scroll();

            });

        });
    }

    ngOnDestroy() {
      
        this.sub.unsubscribe();
        if (typeof (this.subOld) != 'undefined') {
            this.subOld.unsubscribe();
        }
      
        if (typeof (this.subNew) != 'undefined') {
            this.subNew.unsubscribe();
        }
        if (typeof (this.subStart) != 'undefined') {
            this.subStart.unsubscribe();
        }
    }

    onNewMessage(message: string) {
        var m = new ChannelEvent();
        m.Data = message;
        m.ChannelName = this.chatId;
        this.chatSocketService.publish(m);
    }

    subscribeNew() {
        return this.chatSocketService.sub()
            .subscribe((event: ChannelEvent) => {
                this.zone.run(() => {
                    if (this.chatId === event.ChannelName) {
                        this.chatMessages.push(new ChatMessage(event.Data, event.Name, event.ChannelName,event.IdInChat.toString()));

                    }
                    console.log(this.chatMessages);
                });

            });
    }

    scroll() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) {console.log(err); }
    }


    resolveClass(cm: ChatMessage) {
         
        if (cm.authorId === this.myNum) {
            return 40;
        }
        return 20;

    }
}