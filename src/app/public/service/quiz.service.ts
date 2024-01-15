import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../dto/quiz-dto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url = 'assets/data/quiz_questions.json';

  constructor(private http: HttpClient) { }

  getData() : Observable<Quiz> {
    return this.http.get<Quiz>(this.url);
  }
}
