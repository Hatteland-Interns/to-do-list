import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskStorageService } from './task-storage.service';
import { Task } from "../app/shared/models/task.model";


const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

describe('TaskStorageService', () => {

  let task : Task;
  let tasks : Task[];
  let service: TaskStorageService;


      beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]}));

        it('should be created', () => {
         const service: TaskStorageService = TestBed.get(TaskStorageService);
         expect(service).toBeTruthy();
      });


        it('getTasks() should call http Get method for the given route', () => {     
          task = {id : 1, title: "Buy the magazine", note: "Bit Hit!"};
          service.getTasks().subscribe((t)=>{
            expect(t).toEqual(tasks);
          });
        });

        it('getTaskById() should get the task by id', () => {     
          task = {id : 1, title: "Buy the magazine", note: "Bit Hit!"};
          service.getTaskById(1).subscribe((t)=>{
            expect(t).toEqual(task);
          });
        });

        it('updateTaskById() should update a tasks', () => {     
          task = {id : 1, title: "Buy the magazine", note: "Bit Hit!"};
          let temp :Task;
          temp.id=1;
          temp.title="Todo Tasks";
          temp.note="Complete angular app";
          service.updateTaskById(temp).subscribe((t)=>{
            expect(t).toEqual(task);
          });
        });

        it('deleteTaskById() should delete a tasks by Id', () => {     
          task = {id : 1, title: "Buy the magazine", note: "Bit Hit!"};
          service.deleteTaskById(1).subscribe((t)=>{
            expect(t).toEqual(task);
            expect(service.getTasks.length).toBe(0);
          });
        });

});