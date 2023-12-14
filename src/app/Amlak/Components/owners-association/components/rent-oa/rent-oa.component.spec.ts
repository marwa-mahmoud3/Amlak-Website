import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOAComponent } from './rent-oa.component';

describe('RentOAComponent', () => {
  let component: RentOAComponent;
  let fixture: ComponentFixture<RentOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentOAComponent]
    });
    fixture = TestBed.createComponent(RentOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
