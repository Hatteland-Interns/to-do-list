import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskStorageService } from './task-storage.service';

//let service: TaskStorageService = TestBed.get(TaskStorageService);
//const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

describe('TaskStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [TaskStorageService],
    //providers: [{ provide: HttpClientTestingModule, useValue: httpClientSpy }, TaskStorageService]
  }));

  // httpClientSpy.post.and.returnValue({ status: 200, data: {} });
  // httpClientSpy.get.and.returnValue({ status: 200, data: {} });

  // it('should return data for abc endpoint', () => {
  //   const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   service.getTasks().subscribe(data => {
  //     expect(data.length).toBe(2);
  //     console.log("data",data);
  //   });
  // });


  // it('service should be created', () => {
  //   // const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService)).toBeTruthy();
  // });

  // it('should load tasks from file', () => {
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).getTasks()).toBeTruthy();
  // });

  // it('should get the task by id', () => {
  //   //expect(service.getTaskById(1)).toBeTruthy();
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).getTaskById(3).title).toBe("Buy groceries");
  // });
  
  // it('should update a tasks', () => {
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).updateTaskById(2,"Buy magazine","Magazine name is BitHit!")).toBeTruthy();
  //   expect(TestBed.get(TaskStorageService).getTaskById(2).title).toBe("Buy magazine");
  // });

  // it('should returns highest task id from the list', () => {
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).getTaskBWithHighestId()).toBe(3);
  // });

  // it('should delete a tasks by Id', () => {
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).deleteTaskById(2)).toBeTruthy();
  //   //expect(service.getTasks.length).toBe(4);
  // });

  // it('should count the number of tasks, after adding and removing', () => {
  //   //const service: TaskStorageService = TestBed.get(TaskStorageService);
  //   expect(TestBed.get(TaskStorageService).getTasks().length).toBe(3);
  // });
});
