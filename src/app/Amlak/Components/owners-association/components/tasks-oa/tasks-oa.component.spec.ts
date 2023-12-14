import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOAComponent } from './tasks-oa.component';

describe('TasksOAComponent', () => {
  let component: TasksOAComponent;
  let fixture: ComponentFixture<TasksOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksOAComponent]
    });
    fixture = TestBed.createComponent(TasksOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
