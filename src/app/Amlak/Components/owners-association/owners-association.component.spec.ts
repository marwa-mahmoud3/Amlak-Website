import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersAssociationComponent } from './owners-association.component';

describe('OwnersAssociationComponent', () => {
  let component: OwnersAssociationComponent;
  let fixture: ComponentFixture<OwnersAssociationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersAssociationComponent]
    });
    fixture = TestBed.createComponent(OwnersAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
