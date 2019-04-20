import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DesignRoutingModule} from './design-routing.module';
import {DesignComponent} from './design.component';
import {NgDragDropModule} from 'ng-drag-drop';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from '../http.service';
import {PaginationModule} from 'ngx-bootstrap';
import { DateTimeFormatePipe } from './date-time-formate.pipe';

@NgModule({
  declarations: [
    DesignComponent,
    DateTimeFormatePipe],
  imports: [
    CommonModule,
    FormsModule,
    DesignRoutingModule,
    NgDragDropModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    HttpService
  ]
})
export class DesignModule {
}
