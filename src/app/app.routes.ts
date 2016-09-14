import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'todo',
        loadChildren: 'app/todo/todo.module#TodoModule'
    }
];

const appRouteProviders = [];

export const appRouting: ModuleWithProviders = RouterModule
    .forRoot(appRoutes, appRouteProviders);
