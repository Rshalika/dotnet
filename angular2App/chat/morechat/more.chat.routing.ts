import { Routes, RouterModule } from '@angular/router';
import {ChatMessaging} from "../chat.messaging";
import {LoadingComponent} from "../loading.component";
import {CreateComponent } from "./create.component";
import {JoinComponent} from "./join.component";
import {ChatApiClient} from "./chat.api.clent.component";

const moreChatRoutes: Routes = [
    {
        path: 'morechat',
        component: ChatApiClient,
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'join', component: JoinComponent },
            { path: '', component: JoinComponent },
           
        ]
    },

];



export const moreChatRouting= RouterModule.forChild(moreChatRoutes);