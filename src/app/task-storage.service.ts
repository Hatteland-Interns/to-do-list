import { Injectable, OnDestroy } from "@angular/core";
import { Task } from "../app/shared/models/task.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subscription,Observable,of, ReplaySubject } from "rxjs";
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root",
})
export class TaskStorageService implements OnDestroy {
  tasks: Task[] = [];
  private subscription: Subscription;

  URL = "https://localhost:44378/api/TodoItems";

  initialized: boolean = false;

  constructor(private http: HttpClient) {}

  /* Returns all tasks - GET */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  /* Returns a task by Id - GET(id)*/
  getTaskById(id): Observable<Task> {
    const url = `${this.URL}/${id}`;
    console.log('ID :',id);
    return this.http.get<Task>(url);
  }

  /* Add a new task */
  async addNewTask(t:Task): Promise<Observable<any>> {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
    };

    var tempData;
    var resp =  this.http.post("https://localhost:44378/api/TodoItems", t, requestOptions).subscribe(
    data => {
      console.log('ok');
      tempData = data;
    },
    error => {
      console.log('error');
    }
  );  

  return tempData;
}
  

  /* Update task by Id - PUT*/
  updateTaskById(t:Task): Observable<any>{
    //console.log("title from update",t.title);
    //console.log("id from update",t.id);

    const headerDict = {
      'Content-Type': 'application/json'
    };

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
  };

  const url = `${this.URL}/${t.id}`;

  var tempData;
    var resp =  this.http.put(url, t, requestOptions).subscribe(
    data => {
      console.log('ok');
      tempData = data;
    },
    error => {
      console.log('error in Update');
      console.log('check json: ',tempData);
    }
  );  
  return tempData;
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

