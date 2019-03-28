import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {DesignModule} from '../design/design.module';
import {UserModule} from '../user/user.module';
import {SystemModule} from '../system/system.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/main/design',
        pathMatch: 'full'
      }, {
        path: 'user',
        loadChildren: () => UserModule
      }, {
        path: 'design',
        loadChildren: () => DesignModule
      }, {
        path: 'system',
        loadChildren: () => SystemModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
