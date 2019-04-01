import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';
import {ModalModule, TabsModule} from 'ngx-bootstrap';
import {NgDragDropModule} from 'ng-drag-drop';

@NgModule({
  declarations: [
    DesignerComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule,
    TabsModule.forRoot(),
    NgDragDropModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class DesignerModule { }
