import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndBlogsComponent } from './news-and-blogs.component';

describe('NewsAndBlogsComponent', () => {
  let component: NewsAndBlogsComponent;
  let fixture: ComponentFixture<NewsAndBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsAndBlogsComponent]
    });
    fixture = TestBed.createComponent(NewsAndBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
