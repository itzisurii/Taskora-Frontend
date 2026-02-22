import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginInComponent } from "../login-in/login-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NameContainerComponent } from "../../components/name-container/name-container.component";
import { TaskListComponent } from "../../components/task-list/task-list.component";
import { TaskCardComponent } from "../../components/task-card/task-card.component";
import { TaskToolbarComponent } from "../../components/task-toolbar/task-toolbar.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { MainPage2Component } from "../main-page2/main-page2.component";
import { MainPage3Component } from "../main-page3/main-page3.component";
import { NewTaskComponent } from "../../components/new-task/new-task.component";

@Component({
  selector: 'app-home',
  imports: [LoginInComponent, SignUpComponent, NavBarComponent, RouterOutlet, FooterComponent, NameContainerComponent, TaskListComponent, TaskCardComponent, TaskToolbarComponent, MainPageComponent, MainPage2Component, MainPage3Component, NewTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
