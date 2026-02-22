import { Component } from '@angular/core';
import { TaskToolbarComponent } from "../task-toolbar/task-toolbar.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-container',
  imports: [TaskToolbarComponent, TaskListComponent],
  templateUrl: './name-container.component.html',
  styleUrl: './name-container.component.css'
})
export class NameContainerComponent {
  constructor(private router: Router) { }

  goToTask(target: 'newTask') {
    const routes = {
      newTask: 'newTask'
    }
    this.router.navigate([routes[target]])
  }
}
