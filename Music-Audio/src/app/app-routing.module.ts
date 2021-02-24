import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
