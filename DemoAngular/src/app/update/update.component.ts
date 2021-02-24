import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/Customer';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ActivationEnd, Params, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  customer: Customer;
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private activate: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      description: ['']
    });
    this.activate.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
      this.customerService.getById(this.id).subscribe(result => {
        this.customer = result;
        console.log(this.customer);
        this.customerForm.patchValue({
          firstName: this.customer.firstName,
          lastName: this.customer.lastName,
          description: this.customer.description
        });
        console.log(this.customerForm);
      });
    });
  }
  // tslint:disable-next-line:typedef
  updateUser() {
    if (!this.customerForm.invalid) {
      this.customer.firstName = this.customerForm.value.firstName;
      this.customer.lastName = this.customerForm.value.lastName;
      this.customer.description = this.customerForm.value.description;
    }
    // @ts-ignore
    this.customerService.UpdateCustomer(this.customer.id, this.customer).subscribe(result => {
        alert('Update successfully!');
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      }
    );
  }
}
