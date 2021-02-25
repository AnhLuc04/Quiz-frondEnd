import {Category} from '../category/category.model';
import {Question} from '../question/Question';


export interface Quiz {
  id?: number;
  quizname?: string;
  description?: string;
  category?: any;
  randomNumber?: number;
  questions?: Question[];
  studyId?: any;
}
