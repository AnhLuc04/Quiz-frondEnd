import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Study} from '../../model/study/Study';


// const API = environment.API_FAKE;

@Injectable({
  providedIn: 'root'
})

export class StudyService {

  constructor(private http: HttpClient) {
  }

  update(product: Study, id: number): Observable<any> {
    return this.http.put(`http://localhost:8080/admin/studies/${id}`, product);
  }

  save(product: Study): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/studies`, product);
  }

  addAttempt(product: Study): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/studies/addAttempt`, product);
  }

  findById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/studies/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/studies/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/studies`);
  }

  getStudyById(userId: any, quizId: any): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/studies/${userId}/${quizId}`);
  }

}
