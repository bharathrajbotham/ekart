import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'ekart';
  login!: FormGroup;
  
  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  get emailField(): any {
    return this.login.get('email');
  }
  get passwordField(): any {
    return this.login.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.login.value);
    // Call Api
  }
}
