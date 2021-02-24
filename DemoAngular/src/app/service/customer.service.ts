import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Customer} from '../model/Customer';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_API = 'http://localhost:8080/customers';
  private customer: Customer;

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllCustomer(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createCustomer(iCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL_API, iCustomer);
  }

  // tslint:disable-next-line:typedef
  getCustomer() {
    return this.customer;
  }
  getById(id: any): Observable<Customer> {
    // @ts-ignore
    return this.http.get<Customer>(this.URL_API + '/' + id);
  }

  delete(id: number): Subscription {
    return this.http.delete<Customer>(this.URL_API + '/' + id).subscribe(res => this.router.navigateByUrl(''));
  }

  UpdateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.URL_API}/${customer.id}`, customer);
  }
  edit(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.URL_API + '/' + id, customer);
  }
}
