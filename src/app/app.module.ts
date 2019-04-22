import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundPageComponent} from './page-not-found-page/page-not-found-page.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ProgressbarModule} from 'ngx-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { UserstatusPipe } from './formater/userstatus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
    CookieService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
