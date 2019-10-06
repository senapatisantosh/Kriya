import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcDocComponent } from './htc-doc.component';

describe('HtcDocComponent', () => {
  let component: HtcDocComponent;
  let fixture: ComponentFixture<HtcDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
