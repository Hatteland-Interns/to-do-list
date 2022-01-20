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
    this.storage.init();
    var data = this.storage.getTasks();
    
    if(data){      
      this.tasks = data;
      this.loading = false;
    }
    // setTimeout(() => {
    //   this.loading = false;
    // }, 10000); 
  }

  
  /**
   * Remove the tasks from the list
   *
   * @param id task index to remove
   */
  delete(id): void {
    this.storage.deleteTaskById(id);
    this.tasks = this.storage.getTasks();
  }
}
