import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
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
