import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueTicketsComponent } from './overdue-tickets.component';

describe('OverdueTicketsComponent', () => {
  let component: OverdueTicketsComponent;
  let fixture: ComponentFixture<OverdueTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
