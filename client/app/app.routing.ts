import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {EmployeesComponent} from './employees.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);