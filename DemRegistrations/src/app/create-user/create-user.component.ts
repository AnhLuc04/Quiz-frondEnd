import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';
import {MustMatch} from './MustMatch';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newFromUser: FormGroup;
  submitted = false;
  newFromLogin: FormGroup;
  newUser: FormGroup;

  constructor(private userService: UserServiceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.newFromUser = this.formBuilder.group({
      address: ['', Validators.required],
      avatar: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    // this.newUser = this.formBuilder.group({
    //   address: [''],
    //   avatar: [''],
    //   email: [''],
    //   fullName: [''],
    //   password: [''],
    //   phone: [''],
    //   username: ['']
    // });
    this.newFromLogin = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }


  // // tslint:disable-next-line:typedef
  // createNewUser() {
  //   // tslint:disable-next-line:triple-equals
  //   if (this.newFromUser.value.password != this.newFromUser.value.confirmPassword) {
  //     return alert('Vui lòng nhập lài password');
  //     // tslint:disable-next-line:triple-equals
  //   } else if (this.newFromUser.value.password == this.newFromUser.value.confirmPassword) {
  //     this.newUser.value.address = this.newFromUser.value.address;
  //     this.newUser.value.avatar = this.newFromUser.value.avatar;
  //     this.newUser.value.email = this.newFromUser.value.email;
  //     this.newUser.value.fullName = this.newFromUser.value.fullName;
  //     this.newUser.value.password = this.newFromUser.value.password;
  //     this.newUser.value.phone = this.newFromUser.value.phone;
  //     this.newUser.value.username = this.newFromUser.value.username;
  //     let newUserName: User;
  //     newUserName = this.newUser.value;
  //     this.userService.createCustomer(newUserName).subscribe(() => {
  //       alert('Thêm thành công');
  //     }, error => {
  //       alert(console.log(this.userService.createCustomer(newUserName).subscribe()));
  //     });
  //   }
  // }
  // tslint:disable-next-line:typedef
  createNewUser() {

    this.submitted = true;
    console.log(MustMatch);
    console.log(this.newFromUser);
    // stop here if form is invalid
    // @ts-ignore
    if (this.newFromUser.invalid) {
      return;
    }

    // @ts-ignore
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newFromUser.value));
    let newUserName: User;
    console.log(this.newFromUser);
    console.log(this.newFromUser.value);
    newUserName = this.newFromUser.value;
    console.log(this.newFromUser);
    console.log(newUserName.username);
    this.userService.createCustomer(newUserName).subscribe(() => {
        alert('Thêm thành công');
      }
    );
  }

  // tslint:disable-next-line:typedef
  get f() { // @ts-ignore
    return this.newFromUser.controls;
  }

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  login() {
    // tslint:disable-next-line:prefer-const
    let loginUser: User;
    loginUser = this.newFromLogin.value;
    this.userService.loginUser(loginUser).subscribe(() => {
      alert('login thành cong');
    }, error => {
      alert(console.log(this.userService.createCustomer(loginUser).subscribe()));
    });
  }
}
