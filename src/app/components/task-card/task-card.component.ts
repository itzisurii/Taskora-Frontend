import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  @Input() task!: {
    title: string;
    description: string;
    due: string;
    tag: string;
  };
}
