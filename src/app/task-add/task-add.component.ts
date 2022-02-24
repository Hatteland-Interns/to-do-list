import {Component, OnInit} from '@angular/core';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';
import { Task } from '../shared/models/task.model';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  
  title = new FormControl('');

  note = new FormControl('');
  d = "hi"

  titleInput ="";
  noteInput = "";

  constructor(private storage: TaskStorageService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        note: ['', Validators.required]
      });
  }
  /* Create a task a redirect to the todo list */
  createTask() {
    console.log("titleInput - ",this.titleInput);
    console.log("noteInput - ",this.noteInput);
    if(!this.title.value){
      return;
    }
    if(!this.note.value){
      return;
    }
    var t = new Task();
    //t.id=0;
    t.note=this.titleInput;
    t.title=this.noteInput;
    this.storage.addNewTask(t);
    this.router.navigate(['/'])
  }

  get f() {
    return this.form.controls;
  }
  
  t() {
    alert("hello")
  }
}
