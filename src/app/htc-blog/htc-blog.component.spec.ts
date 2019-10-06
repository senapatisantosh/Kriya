import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcBlogComponent } from './htc-blog.component';

describe('HtcBlogComponent', () => {
  let component: HtcBlogComponent;
  let fixture: ComponentFixture<HtcBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
