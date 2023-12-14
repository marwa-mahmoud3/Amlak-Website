import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOAComponent } from './chat-oa.component';

describe('ChatOAComponent', () => {
  let component: ChatOAComponent;
  let fixture: ComponentFixture<ChatOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatOAComponent]
    });
    fixture = TestBed.createComponent(ChatOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
