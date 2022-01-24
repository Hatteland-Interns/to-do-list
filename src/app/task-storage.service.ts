import { Injectable, OnDestroy } from "@angular/core";

import { Task } from "../app/shared/models/task.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subscription,Observable,of } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class TaskStorageService implements OnDestroy {
  tasks: Task[] = [];
  private subscription: Subscription;

  URL = "https://localhost:44378/api/TodoItems";

  initialized: boolean = false;

  constructor(private http: HttpClient) {}

  //CRUD operations with API..

  //store the length
// 1. communicate with API (add and delete from both frontend and API)
// 2. functionalities,	
// 	- add
// 	- update (complete/done)
// 	- delete


  /* Returns all tasks - GET */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  /* Returns a task by Id - GET(id)*/
  getTaskById(id): Observable<Task> {
    return this.http.get<Task>(this.URL);
  }

  // /* Add a new task */
  addNewTask(t:Task): Observable<any> {
    let task = new Task;
    return this.http.post(this.URL,t);
  }
  

  /* Update task by Id - PUT*/
  updateTaskById(id, title: string, note: string): Observable<any>{
    const url = `${this.URL}/${id}`;
    return this.http.put(id,title);
    //return this.http.put(id,title,note);
  }

  /* Delete a task by Id */
  deleteTaskById(id): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

