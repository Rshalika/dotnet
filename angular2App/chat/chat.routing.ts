import { Routes, RouterModule } from '@angular/router';
import {ChatMessaging} from "./chat.messaging";
import {ChatComponent} from "./chat.component";
import {LoadingComponent} from "./loading.component";
import {ChatApiClient} from "./morechat/chat.api.clent.component";
import {CreateComponent } from "./morechat/create.component";
import {JoinComponent} from "./morechat/join.component";
import {EmptyComponent} from "./morechat/empty";
import {JoinResponse} from "./morechat/join.response.component";
import {CreateResponse } from "./morechat/create.response.component";
const chatRoutes: Routes = [
    {
        path: 'chat',
        component: ChatComponent,
        children: [
        {
            path:'morechat', component: ChatApiClient,
            children: [
                { path: 'create', component: CreateComponent},
                { path: 'join', component: JoinComponent},
                { path: 'joinresponse/:success/:message', component: JoinResponse},
                { path: 'createresponse/:success/:message/:chatid', component: CreateResponse},
                { path: '', component: EmptyComponent},
            ]
        },
            { path: 'messaging/:id/:myNum',  component: ChatMessaging },
            { path: '',     component: LoadingComponent },
        ]
    },

];



export const chatRouting = RouterModule.forChild(chatRoutes);