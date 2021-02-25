import {Quiz} from '../quiz/quiz.model';
import {Study} from '../study/Study';


export interface Category {
  id?: number;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  quizzes?: Quiz[];
  studies?: Study[];
  study?: Study;
  quantityQuiz?: any;
}
