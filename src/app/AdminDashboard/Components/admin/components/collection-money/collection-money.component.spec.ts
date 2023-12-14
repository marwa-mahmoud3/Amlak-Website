import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMoneyComponent } from './collection-money.component';

describe('CollectionMoneyComponent', () => {
  let component: CollectionMoneyComponent;
  let fixture: ComponentFixture<CollectionMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionMoneyComponent]
    });
    fixture = TestBed.createComponent(CollectionMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
