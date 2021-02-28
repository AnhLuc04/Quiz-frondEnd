import {Question} from '../question/Question';
import {UserAnswer} from '../user-answer/UserAnswer';


export interface Assumption {
  id?: number;
  guessNumber?: number;
  point: string;
  status?: string;
  isCorrect?: boolean;
  isFlag?: boolean;
  type?: string;
  level?: string;
  content?: string;
  explanation?: string;
  question: Question;
  userAnswers?: UserAnswer[];
}
