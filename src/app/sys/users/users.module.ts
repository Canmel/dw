import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserstatusPipe} from '../../formater/userstatus.pipe';

@NgModule({
  declarations: [UsersComponent, ListComponent, AddComponent, EditComponent, UserstatusPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    PaginationModule.forRoot()
  ]
})
export class UsersModule { }
