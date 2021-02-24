import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/Customer';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listCustomer: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(result => {
      this.listCustomer = result;
    });
  }
}
