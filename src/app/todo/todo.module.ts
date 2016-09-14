import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoRoutes } from './todo.routes';

@NgModule({
    declarations: [
        TodoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TodoRoutes)
    ],
    exports: [
        TodoComponent
    ]
})
export class TodoModule {

}