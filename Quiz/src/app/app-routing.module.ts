import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {CreateQuizComponent} from './quiz/create-quiz/create-quiz.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'create-quiz',
    component : CreateQuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
