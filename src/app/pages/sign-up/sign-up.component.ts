import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router){}

  goToTask(target: 'login' | 'mainPage1' | 'mainPage2' | 'mainPage3'){
    const routes = {
      login: '/login',
      mainPage1: '/mainPage1',
      mainPage2: '/mainPage2',
      mainPage3: '/mainPage3'
    }

    this.router.navigate([routes[target]]);
  }
  
}
