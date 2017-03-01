import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.compponent';
import {AboutComponent} from './components/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]