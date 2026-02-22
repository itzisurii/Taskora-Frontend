import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page2',
  imports: [],
  templateUrl: './main-page2.component.html',
  styleUrl: './main-page2.component.css'
})
export class MainPage2Component {
  constructor(private router: Router){}

  goToTask(target: 'mainPage3' | 'dashboard'){
    const routes = {
      mainPage3: 'mainPage3',
      dashboard: 'dashboard'
    }
    this.router.navigate([routes[target]])
  }
}
