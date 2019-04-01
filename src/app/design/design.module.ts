import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './design.component';
import {NgDragDropModule} from 'ng-drag-drop';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DesignComponent],
  imports: [
    CommonModule,
    FormsModule,
    DesignRoutingModule,
    NgDragDropModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class DesignModule { }
