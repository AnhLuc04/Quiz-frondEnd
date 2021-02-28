import {Quiz} from '../quiz/quiz.model';
import {User} from '../user/User';


export interface Study {
  id?: number;
  description?: string;
  highestScore?: number;
  created_at?: string;
  updated_at?: string;
  quiz?: Quiz;
  user?: User;
  userID?: number;
  username?: string;
  quizname?: string;
  email?: string;
  attempts?: [];
}
