import { Question } from "./question-dto";

export interface Quiz {
  title: string;
  questions: Question[];
  results: {
    [key: string]: string;
  };
}
