import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './MustMatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { // @ts-ignore
    return this.registerForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    console.log(MustMatch);
    console.log(this.registerForm);
    // stop here if form is invalid
    // @ts-ignore
    if (this.registerForm.invalid) {
      return;
    }

    // @ts-ignore
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
