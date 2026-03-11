import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.css'
})
export class LoginInComponent {
  constructor(private router: Router){}

  goToTask(target: 'dashboard' | 'signUp'){
    const routes = {
      dashboard: 'dashboard',
      signUp: 'signUp'
    };

    this.router.navigate([routes[target]]);
  }

}
