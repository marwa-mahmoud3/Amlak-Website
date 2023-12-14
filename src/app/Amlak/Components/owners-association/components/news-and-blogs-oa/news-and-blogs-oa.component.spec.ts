import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndBlogsOAComponent } from './news-and-blogs-oa.component';

describe('NewsAndBlogsOAComponent', () => {
  let component: NewsAndBlogsOAComponent;
  let fixture: ComponentFixture<NewsAndBlogsOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsAndBlogsOAComponent]
    });
    fixture = TestBed.createComponent(NewsAndBlogsOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
