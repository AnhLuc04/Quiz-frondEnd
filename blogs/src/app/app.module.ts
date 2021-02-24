import { HttpClientModule } from '@angular/common/http';
// @ts-ignore
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
