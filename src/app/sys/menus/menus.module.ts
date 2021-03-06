import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [MenusComponent, ListComponent],
  imports: [
    CommonModule,
    MenusRoutingModule
  ]
})
export class MenusModule { }
