import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Message } from 'primeng/api';

interface User {
  type: string;
  value: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide: boolean = true;
  invalidLogin: boolean = false;

  loginForm: FormGroup;

  loginMessages: Message[] | [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];

  // Hard-coded username and password
  private readonly hardcodedUsername = 'admin';
  private readonly hardcodedPassword = 'admin123';
  
  constructor(private router:Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
    });
    this.loginMessages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
  }

  onLogin() {
    // Check if the provided username and password match the hard-coded values
    if (this.loginForm.value.userName === this.hardcodedUsername && this.loginForm.value.password === this.hardcodedPassword) {
      // Navigate to the 'admin/dashboard-view' route if the credentials are correct
      this.router.navigate(['admin/dashboard-view']);
    } else {
      this.invalidLogin = true;
      // Handle incorrect credentials (e.g., show an error message)
      console.error('Incorrect username or password');
      // You can also display an error message to the user in the UI.
    }
  }

}
