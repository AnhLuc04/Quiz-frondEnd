import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private customerService: CustomerService, private  activatedRoute: ActivatedRoute) {
  }


  customer: {
    id: number;
    firstName: string;
    lastName: string;
    description: string
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.customerService.getById(id).subscribe(result => {
        this.customer = result;
        console.log(this.customer);
        console.log(result);
      }, error => {
        console.log(error);
      });
    });
  }

  // tslint:disable-next-line:typedef
  DeleteCustomer() {
    this.customerService.delete(this.customer.id);
  }
}
