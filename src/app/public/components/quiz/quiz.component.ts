import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { Question } from '../../dto/question-dto';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  title: string = '';
  questions: Question[] = [];
  questionSelected: Question | undefined;

  answers: string[] = [];
  finalResult: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  resultKey: { [key: string]: string } = {};

  finished: boolean = false;

  constructor(private service: QuizService) {}

  ngOnInit(): void {
    this.buscarInformacoesQuiz();
  }

  buscarInformacoesQuiz() {
    this.service.getData().subscribe((data) => {
      this.finished = false;
      this.title = data.title;
      this.questions = data.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionMaxIndex = this.questions.length;
      this.resultKey = data.results;
    });
  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswers: string = await this.calcResult(this.answers);
      this.finished = true;
      this.finalResult = this.resultKey[finalAnswers];
    }
  }

  optionSelected(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async calcResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return result;
  }
}
