import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page3',
  imports: [],
  templateUrl: './main-page3.component.html',
  styleUrl: './main-page3.component.css'
})
export class MainPage3Component {
  constructor(private router: Router){}

  goToTask(target: 'dashboard' | 'mainPage2'){
    const routes = {
      dashboard: 'dashboard',
      mainPage2: 'mainPage2'
    }
    this.router.navigate([routes[target]])
  }
}
