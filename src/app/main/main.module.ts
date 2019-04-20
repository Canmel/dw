import {ElementRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from '../layout/header/header.component';
import {FooterComponent} from '../layout/footer/footer.component';
import {BsDropdownDirective, BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class MainModule {
}
