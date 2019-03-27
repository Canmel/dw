import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {PageNotFoundPageComponent} from './page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  }, {
    path: 'main',
    loadChildren: () => MainModule
  }, {
    path: '**',
    loadChildren: () => PageNotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
