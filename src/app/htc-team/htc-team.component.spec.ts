import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtcTeamComponent } from './htc-team.component';

describe('HtcTeamComponent', () => {
  let component: HtcTeamComponent;
  let fixture: ComponentFixture<HtcTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtcTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtcTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
