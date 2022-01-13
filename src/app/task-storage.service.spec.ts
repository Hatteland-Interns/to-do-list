import { TestBed } from '@angular/core/testing';

import { TaskStorageService } from './task-storage.service';

describe('TaskStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const service: TaskStorageService = TestBed.get(TaskStorageService);

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load tasks from file', () => {
    expect(service.getTasks()).toBeTruthy();
  });

  it('should get the task by id', () => {
    //expect(service.getTaskById(1)).toBeTruthy();
    expect(service.getTaskById(3).title).toBe("Buy groceries");
  });
  
  it('should update a tasks', () => {
    expect(service.updateTaskById(2,"Buy magazine","Magazine name is BitHit!")).toBeTruthy();
    expect(service.getTaskById(2).title).toBe("Buy magazine");
  });

  it('should returns highest task id from the list', () => {
    expect(service.getTaskBWithHighestId()).toBe(5);
  });

  it('should delete a tasks by Id', () => {
    expect(service.deleteTaskById(2)).toBeTruthy();
    //expect(service.getTasks.length).toBe(4);
  });

  it('should count the number of tasks, after adding and removing', () => {
    expect(service.getTasks().length).toBe(5);
  });
});
