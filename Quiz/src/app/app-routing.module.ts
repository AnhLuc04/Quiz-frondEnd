import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {CreateQuizComponent} from './quiz/create-quiz/create-quiz.component';
import {QuestionsCreateComponent} from './question/questions-create/questions-create.component';
import {RelyAnswerQuestionComponent} from './reply-answer-question/rely-answer-question.component';
import {ViewQuizComponent} from './quiz/view-quiz/view-quiz.component';
import {ReplyQuestionComponent} from './reply-question/reply-question.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'create-quiz',
    component : CreateQuizComponent
  },
  {
    path : 'create-question',
    component : QuestionsCreateComponent
  },
  {
    path : 'view-quiz',
    component : ViewQuizComponent
  },
  {
    path : 'view',
    component : ReplyQuestionComponent
  },
  {
    path : 'view/:idAttempt',
    component : RelyAnswerQuestionComponent
  },
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
