import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    QuizComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PublicModule { }
