import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOAComponent } from './vote-oa.component';

describe('VoteOAComponent', () => {
  let component: VoteOAComponent;
  let fixture: ComponentFixture<VoteOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteOAComponent]
    });
    fixture = TestBed.createComponent(VoteOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
