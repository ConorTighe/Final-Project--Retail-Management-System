import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {EmployeesComponent} from './employees.component';
import {MapsComponent} from './map.component';
import {SupportComponent} from './support.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'support',
        component: SupportComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);