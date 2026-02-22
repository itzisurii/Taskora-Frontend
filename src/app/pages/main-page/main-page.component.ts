import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router){}

  goToTask(target: 'mainPage2' | 'dashboard'){
    const routes = {
      mainPage2: '/mainPage2',
      dashboard: '/dashboard'
    }
    this.router.navigate([routes[target]])
  }
}
