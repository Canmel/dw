import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundPageComponent} from './page-not-found-page/page-not-found-page.component';
import {FormsModule} from '@angular/forms';
import {
  AuthModule,
  AuthWellKnownEndpoints,
  OidcConfigService,
  OidcSecurityService,
  OpenIDImplicitFlowConfiguration
} from 'angular-auth-oidc-client';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // OidcConfigService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadConfig,
    //   deps: [OidcConfigService],
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function loadConfig(oidcConfigService: OidcConfigService) {
  // return () => oidcConfigService.load_using_stsServer('https://127.0.0.1:7070');
}
