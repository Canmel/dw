import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesignComponent} from './design.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
