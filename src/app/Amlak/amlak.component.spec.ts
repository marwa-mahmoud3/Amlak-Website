import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlakComponent } from './amlak.component';

describe('AmlakComponent', () => {
  let component: AmlakComponent;
  let fixture: ComponentFixture<AmlakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmlakComponent]
    });
    fixture = TestBed.createComponent(AmlakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
