import {Component, OnInit} from '@angular/core';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  /**
   * Task title form field
   */
  title = new FormControl('');

  /**
   *  Task note form field
   */
  note = new FormControl('');
  d = "hi"

  constructor(private storage: TaskStorageService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        note: ['', Validators.required]
      });
  }
  /**
   * Create a task a redirect to the todo list
   */
  createTask() {
    if(!this.title.value){
     // alert("Title cannot be empty");
      return;
    }else if(!this.note.value){
    //  alert("Note cannot be empty");
      return;
    }
    this.storage.add(this.title.value, this.note.value);
    this.router.navigate(['/tasks'])
  }

  get f() {
    return this.form.controls;
  }
  
  t() {
    alert("hello")
  }
}
