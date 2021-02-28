import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './authentication/login/login.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { HeadComponent } from './head/head.component';
import {FooterComponent} from './footer/footer.component';
import {QuestionsCreateComponent} from './question/questions-create/questions-create.component';
import {ViewQuizComponent} from './quiz/view-quiz/view-quiz.component';
import {RelyAnswerQuestionComponent} from './reply-answer-question/rely-answer-question.component';
import {ReplyQuestionComponent} from './reply-question/reply-question.component';
import {NgxPaginationModule} from 'ngx-pagination';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateQuizComponent,
    HeadComponent,
    FooterComponent,
    QuestionsCreateComponent,
    ViewQuizComponent,
    RelyAnswerQuestionComponent,
    ReplyQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
