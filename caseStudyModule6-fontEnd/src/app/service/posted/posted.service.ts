// import {Injectable} from '@angular/core';
// import {environment} from '../../environments/environment';
// import {Observable} from 'rxjs';
// import {HousesImg} from '../../model/house-model/housesImg';
// import {HttpClient} from '@angular/common/http';
// import {House} from '../../model/house-model/house';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class HouseService {
//   private API_URL = environment.apiUrl;
//
//   constructor(private http: HttpClient) {
//   }
//
//   // tslint:disable-next-line:typedef
//   // @ts-ignore
//   getHousesId(id: any): Observable<Houses> {
//     // @ts-ignore
//     return this.http.get<Houses>(this.API_URL + 'posted/' + id);
//   }
//
//   // tslint:disable-next-line:typedef
//   // @ts-ignore
//   getAllHouses(id: any): Observable<House[]> {
//     return  this.http.get<House[]>(this.API_URL + '/houses' + '/bookings' + '/' + id );
//   }
// }
