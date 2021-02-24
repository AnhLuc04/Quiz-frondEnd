import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Itodo} from './itodo';



@Injectable({
  providedIn: 'root'
})
export class ITodoService {

  constructor() { }
  getTodos(count = 10): Observable<Itodo[]> {
    // @ts-ignore
    return this.http.get<Iodo[]>(this.API_URL).pipe(
      new Map(data => data.filter((todo, i) => i < count))
    );
  }
}
