import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

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

  hide = true;

  constructor(private router:Router) {
  }

  login() {
   this.router.navigate(['admin/dashboard-view']);
  }

}
