import { TestBed } from '@angular/core/testing';

import { TaskStorageService } from './task-storage.service';

describe('TaskStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(service).toBeTruthy();
  });

  it('should load tasks from json file', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(service.getTasks()).toBeTruthy();
  });

  it('should count the number of tasks, after adding and removing', () => {
      const service: TaskStorageService = TestBed.get(TaskStorageService); 
      expect(service.getTasks().length).toBe(5);
    });

  it('should get the task by id', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    //expect(service.getTaskById(1)).toBeTruthy();
    expect(service.getTaskById(3).title).toBe("Buy groceries");
  });

  it('should update a tasks', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(service.updateTaskById(2,"Buy magazine","Magazine name is BitHit!")).toBeTruthy();
    expect(service.getTaskById(2).title).toBe("Buy magazine");
  });

  it('should returns highest task id from the list', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(service.getTaskBWithHighestId()).toBe(5);
  });

  it('should delete a tasks by Id', () => {
    const service: TaskStorageService = TestBed.get(TaskStorageService);
    expect(service.deleteTaskById(2)).toBeTruthy();
    //expect(service.getTasks.length).toBe(4);
  });
  

});
