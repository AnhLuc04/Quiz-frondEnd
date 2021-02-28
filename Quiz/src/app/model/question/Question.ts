import {Category} from '../category/category.model';
import {QuestionAnswer} from '../question-answer/QuestionAnswer';


export class Question {
  id?: number;
  // code = Math.random ().toString(36) .substring (2, 15) + Math.random ().toString(36) .substring (2, 15);
  code?: string;
  type?: string;
  level?: string;
  content?: string;
  explanation?: string;
  category?: any;
  questionAnswers?: QuestionAnswer[];
}
