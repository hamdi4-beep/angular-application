import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];
