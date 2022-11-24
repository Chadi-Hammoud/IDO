import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/data';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = Tasks;


  constructor() { 
  }

  ngOnInit(): void {
  }
}
