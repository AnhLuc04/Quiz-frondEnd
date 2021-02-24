import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newForm: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      description: [null]
    });
  }



  // tslint:disable-next-line:typedef
  createNewCustomer() {
    let newCustomer: Customer;
    newCustomer = this.newForm.value;
    this.customerService.createCustomer(newCustomer).subscribe(() => {
      alert('Thêm thành công');
    }, error => {
      alert('Xin nhập lại');
    });
  }
}
