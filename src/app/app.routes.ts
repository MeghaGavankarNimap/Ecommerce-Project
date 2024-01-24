import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:(()=>import('../../src/app/modules/auth/auth.module').then(m=>m.AuthModule))
    },
    {
        path:'',
        loadChildren:(()=>import('../../src/app/modules/view/view.module').then(m=>m.ViewModule)) 
    }
];
