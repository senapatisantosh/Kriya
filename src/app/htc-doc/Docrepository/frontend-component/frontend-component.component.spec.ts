import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendComponentComponent } from './frontend-component.component';

describe('FrontendComponentComponent', () => {
  let component: FrontendComponentComponent;
  let fixture: ComponentFixture<FrontendComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
