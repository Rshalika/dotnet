import {User} from "../user";
export class Chat{
    constructor(public name:string, public id, public myNum:number)
    {
        this.chatMembers = [];
    }

    public chatMembers: Array<User>;

}

export class ChatCreationResponse {
    constructor(public success: boolean, public chat: Chat) {
        
    }
}

