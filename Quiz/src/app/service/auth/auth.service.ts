import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
// import {environment} from '../../../../../environments/environment';
// @ts-ignore
import {UserToken} from '../../../admin_content/users/user-token';
// @ts-ignore
import {User} from '../../../admin_content/users/user.model';
// import {Quiz} from '../../../admin_content/quizzes/model/quiz.model';

// const API_URL = `${environment.API_ENDPOINT}`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  // public currentQuiz: BehaviorSubject<Quiz>;
  public currentUserSubjectFromDB: BehaviorSubject<User>;
  update = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    // @ts-ignore
    this.currentUserSubjectFromDB = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  public get currentUserDBValue(): User {
    return this.currentUserSubjectFromDB.value;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('https://quizzes2501.herokuapp.com' + '/register', user);
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080' + '/login', {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('ACCESS_TOKEN');
    this.currentUserSubject.next(null);
    window.localStorage.clear();
  }
}
