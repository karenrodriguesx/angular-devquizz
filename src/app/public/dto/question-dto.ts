import { Option } from "./option-dto";

export interface Question {
  id: number;
  question: string;
  options: Option[];
}