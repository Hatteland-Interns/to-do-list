import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskStorageService } from './task-storage.service';

const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

describe('TaskStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [{ provide: HttpClientTestingModule, useValue: httpClientSpy }, TaskStorageService]
  }));

  httpClientSpy.post.and.returnValue({ status: 200, data: {} });
  httpClientSpy.get.and.returnValue({ status: 200, data: {} });

  it('service should be created', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(TestBed.get(TaskStorageService)).toBeTruthy();
  });

  it('should return data for the endpoint - load tasks from file', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    service.getTasks().subscribe(data => {
      expect(data.length).toBe(5);
      console.log("data",data);
    });
  });
  
  it('should get the task by id', () => {    
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    service.getTaskById(10).subscribe(data => {
      expect(data.title).toBe("Run Run");
    });
  });
  
  it('should update a tasks', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    service.getTaskById(10).subscribe(data => {
      expect(TestBed.get(TaskStorageService).updateTaskById(10,"Todo Tasks","	Complete angular app")).toBeTruthy();
      expect(TestBed.get(TaskStorageService).getTaskById(10).title).toBe("Todo Tasks");
    });
  });

  it('should delete a tasks by Id', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    service.getTaskById(10).subscribe(data => {
      expect(TestBed.get(TaskStorageService).deleteTaskById(10)).toBeTruthy();
      expect(service.getTasks.length).toBe(1);
    });
  });
});
