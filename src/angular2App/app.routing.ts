import { Routes, RouterModule } from '@angular/router';

 
import { Intro } from "./intro.component";
const appRoutes: Routes = [
    {
        path: '',
        component: Intro
    },
     

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);