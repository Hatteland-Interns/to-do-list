import {Component, OnInit} from '@angular/core';
import {TaskStorageService} from "../task-storage.service";
import {Task} from "../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];
  loading: boolean = false;

  constructor(private storage: TaskStorageService) {

  }
 

  /**
   * Load tasks on init
   */
  ngOnInit() : void{
    this.loading = true;
    this.storage.getTasks().subscribe(data => {
      this.tasks = data;
      this.loading = false;
    })

  }

  
  /* Remove the tasks from the list */
  delete(id): void {
    this.storage.deleteTaskById(id).subscribe(data => {
      this.storage.getTasks().subscribe(data => {
        this.tasks = data;
      });
    });

    
  }
}
