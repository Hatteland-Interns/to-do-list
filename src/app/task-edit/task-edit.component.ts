import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Task} from "../shared/models/task.model";
import {TaskStorageService} from "../task-storage.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task;

  /* Task id form field */
  title = new FormControl('');
  note = new FormControl('');

  titleInput ="";
  noteInput ="";

  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }

  /* Load tasks on init */
  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.storage.getTaskById(id).subscribe(data => {
        //console.log("ID from edit: ",id);
        this.task = data;
        this.title.setValue(this.task.title);
        this.note.setValue(this.task.note);
      })
    });
  }

  /* Update the task and return to the list */
  updateTask() {
    const id: number = this.route.snapshot.params.id;
    console.log("ID from edit2: ",id);
    if(!this.title.value){
      console.log("title is empty");
      return;
    }
    if(!this.note.value){
      console.log("note is empty");
      return;
    }
    var t = new Task();
    t.id=id;
    t.title=this.title.value;
    t.note=this.note.value;
    console.log("t.title ",t.title);
    console.log("t.note ",t.note);
    this.storage.updateTaskById(t);
    //this.router.navigate(['/tasks'])
  }
}
