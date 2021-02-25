import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../model/question/Question';
import {Observable} from 'rxjs';
import {QuestionSearch} from '../../model/question-search/QuestionSearch';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  update(product: Question, id: number): Observable<any> {
    return this.http.put(`https://quizzes2501.herokuapp.com/admin/question/${id}`, product);
  }

  // @ts-ignore
  save(product: Question): Observable<any> {
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/question`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/question/${id}`);
  }

  searchQuestion(search: QuestionSearch): Observable<any> {
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/question/searchByCode`, search);
  }

  // filterQuestion(search: QuestionSearch): Observable<any> {
  //   return this.http.post(`https://quizzes2501.herokuapp.com/admin/question/filter`, search);
  // }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`https://quizzes2501.herokuapp.com/admin/question/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('https://quizzes2501.herokuapp.com/admin/question');
  }
}
