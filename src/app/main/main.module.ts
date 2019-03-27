import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from '../layout/header/header.component';
import {FooterComponent} from '../layout/footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
