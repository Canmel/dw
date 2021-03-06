import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenusComponent} from './menus.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent
  }, {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
