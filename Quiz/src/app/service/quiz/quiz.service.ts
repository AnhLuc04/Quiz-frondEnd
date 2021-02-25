import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../../model/quiz/quiz.model';
import {Observable} from 'rxjs';

// const API = environment.API_FAKE;
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  update(product: Quiz, id: number): Observable<any> {
    if (!!product.id) {
      return this.http.put(`https://quizzes2501.herokuapp.com/admin/quizzes/${id}`, product);
    }
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/quizzes`, product);
  }

  // @ts-ignore
  save(product: Quiz): Observable<any> {
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/quizzes`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/quizzes/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`https://quizzes2501.herokuapp.com/admin/quizzes/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('https://quizzes2501.herokuapp.com/admin/quizzes');
  }

  countQuizByCategory(categoryId: any): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/quizzes/count/${categoryId}`);
  }
}
