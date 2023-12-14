import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOAComponent } from './about-oa.component';

describe('AboutOAComponent', () => {
  let component: AboutOAComponent;
  let fixture: ComponentFixture<AboutOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOAComponent]
    });
    fixture = TestBed.createComponent(AboutOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
