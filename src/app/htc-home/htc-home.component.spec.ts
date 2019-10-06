import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcHomeComponent } from './htc-home.component';

describe('HtcHomeComponent', () => {
  let component: HtcHomeComponent;
  let fixture: ComponentFixture<HtcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
