import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  customer: Customer;

  // @ts-ignore
  customer1: Customer = {
    firstName: '',
    lastName: '',
    description: '',
  };

  constructor(private customerService: CustomerService, private router: Router, private activate: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activate.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
      this.customerService.getById(this.id).subscribe(result => {
        this.customer1 = result;
        console.log(this.customer);
        // this.customer1 = this.customer;
      });
    });
  }
}
