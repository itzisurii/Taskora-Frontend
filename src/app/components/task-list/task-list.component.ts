import { Component } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    {
      title: 'Finalize Q4 Marketing Budget',
      description: 'Refine the final allocation for high-impact campaigns.',
      due: 'Due Yesterday',
      tag: 'Finance'
    },
    {
      title: 'User Interview: Mobile App V2',
      description: 'Analyze feedback from power users.',
      due: 'Oct 28, 2023',
      tag: 'Design'
    }
  ];
}
