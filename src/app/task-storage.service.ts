import { Injectable, OnDestroy } from "@angular/core";

import { Task } from "../app/shared/models/task.model";
import { HttpClient } from "@angular/common/http";
import { Subscription,Observable,of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskStorageService implements OnDestroy {
  tasks: Task[] = [];
  private subscription: Subscription;

  URL = "https://localhost:44378/api/TodoItems";

  /**
   * Whether data have already been loaded from storage
   */
  initialized: boolean = false;

  //CRUD operations with API..

  constructor(private http: HttpClient) {}

  /* Returns all tasks */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  /* Returns all task by Id */
  getTaskById(id): Task {
    //return an observarable task, not the task
    //subs. wherever use it
  }

  /* Update task by Id */
  updateTaskById(id, title: string, note: string): Task {
    //use the putt method.. and get the id returned etc.
  }

  /* Get the task with Highest Id */
  getTaskBWithHighestId(): number {
    
  }

  /* Delete task by Id */
  deleteTaskById(id) {
    
  }

  /**
   * Create a new task based on the given data (+ generate a new id)
   * @param title
   * @param note
   */
  add(title, note) {
    let task = new Task(title, note, this.getTaskBWithHighestId() + 1);
    this.tasks.push(task);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
