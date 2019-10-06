import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcComponentComponent } from './htc-component.component';

describe('HtcComponentComponent', () => {
  let component: HtcComponentComponent;
  let fixture: ComponentFixture<HtcComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
