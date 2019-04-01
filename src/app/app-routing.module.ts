import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {PageNotFoundPageComponent} from './page-not-found-page/page-not-found-page.component';
import {DesignerModule} from './designer/designer.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/design',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  }, {
    path: 'main',
    loadChildren: () => MainModule
  }, {
    path: 'designer',
    loadChildren: () => DesignerModule
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
