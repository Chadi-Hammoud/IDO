import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email,
    Validators.required
    ]),
    password: new FormControl("", [Validators.required,
    Validators.maxLength(15),
    Validators.minLength(6)
    ])
  });

  loginSubmited() {
    console.log(this.loginForm);
    console.log(this.loginForm.get("email")?.status);
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
