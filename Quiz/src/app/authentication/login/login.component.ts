import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {first} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required])
  });

  error = '';
  loading = false;
  submitted = false;
result: any;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
        data => {
          this.result = data;
        },
        error => {
          alert('Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!');
          this.loading = false;
        });
    console.log(this.result);
    if (this.result.roles[0].authority === 'ROLE_ADMIN') {
      this.router.navigate(['/create-quiz']);
    } else {
      this.router.navigate(['/create-quiz']);
    }
  }
  // tslint:disable-next-line:typedef
  get username(){
    return this.loginForm.get('username');
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.loginForm.get('password');
  }
}
