import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTwoOAComponent } from './hero-two-oa.component';

describe('HeroTwoOAComponent', () => {
  let component: HeroTwoOAComponent;
  let fixture: ComponentFixture<HeroTwoOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTwoOAComponent]
    });
    fixture = TestBed.createComponent(HeroTwoOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
