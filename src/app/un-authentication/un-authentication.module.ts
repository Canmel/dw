import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnAuthenticationRoutingModule } from './un-authentication-routing.module';
import { UnAuthenticationComponent } from './un-authentication.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [UnAuthenticationComponent],
  imports: [
    CommonModule,
    UnAuthenticationRoutingModule,
    AlertModule.forRoot()
  ]
})
export class UnAuthenticationModule { }
