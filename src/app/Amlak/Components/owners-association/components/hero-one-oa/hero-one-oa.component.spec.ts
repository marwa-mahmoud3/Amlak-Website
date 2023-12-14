import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOneOAComponent } from './hero-one-oa.component';

describe('HeroOneOAComponent', () => {
  let component: HeroOneOAComponent;
  let fixture: ComponentFixture<HeroOneOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroOneOAComponent]
    });
    fixture = TestBed.createComponent(HeroOneOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
