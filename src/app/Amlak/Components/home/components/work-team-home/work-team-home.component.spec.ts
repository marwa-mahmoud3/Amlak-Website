import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTeamHomeComponent } from './work-team-home.component';

describe('WorkTeamHomeComponent', () => {
  let component: WorkTeamHomeComponent;
  let fixture: ComponentFixture<WorkTeamHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTeamHomeComponent]
    });
    fixture = TestBed.createComponent(WorkTeamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
