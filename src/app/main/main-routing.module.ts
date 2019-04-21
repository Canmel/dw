import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {DesignModule} from '../design/design.module';
import {UserModule} from '../user/user.module';
import {UsersModule} from '../sys/users/users.module';
import {RolesModule} from '../sys/roles/roles.module';
import {MenusModule} from '../sys/menus/menus.module';

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
        path: 'users',
        loadChildren: () => UsersModule
      }, {
        path: 'roles',
        loadChildren: () => RolesModule
      }, {
        path: 'menus',
        loadChildren: () => MenusModule
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
