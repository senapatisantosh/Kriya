import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcStatisticsComponent } from './htc-statistics.component';

describe('HtcStatisticsComponent', () => {
  let component: HtcStatisticsComponent;
  let fixture: ComponentFixture<HtcStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
