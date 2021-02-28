import {Study} from '../study/Study';
import {Assumption} from '../assumption/assumption.model';

export interface Attempt {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  status?: string;
  averageScore?: number;
  study?: Study;
  assumptions?: Assumption[];
}
