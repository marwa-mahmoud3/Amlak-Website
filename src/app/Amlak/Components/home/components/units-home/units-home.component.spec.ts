import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsHomeComponent } from './units-home.component';

describe('UnitsHomeComponent', () => {
  let component: UnitsHomeComponent;
  let fixture: ComponentFixture<UnitsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsHomeComponent]
    });
    fixture = TestBed.createComponent(UnitsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
