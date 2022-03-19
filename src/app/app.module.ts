import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizzesDashBoardComponent } from './quizzes-dash-board/quizzes-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzesDashBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
