import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPackagesComponent } from './best-packages.component';

describe('BestPackagesComponent', () => {
  let component: BestPackagesComponent;
  let fixture: ComponentFixture<BestPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestPackagesComponent]
    });
    fixture = TestBed.createComponent(BestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
