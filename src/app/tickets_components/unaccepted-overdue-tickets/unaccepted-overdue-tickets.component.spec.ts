import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnacceptedOverdueTicketsComponent } from './unaccepted-overdue-tickets.component';

describe('UnacceptedOverdueTicketsComponent', () => {
  let component: UnacceptedOverdueTicketsComponent;
  let fixture: ComponentFixture<UnacceptedOverdueTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnacceptedOverdueTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnacceptedOverdueTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
