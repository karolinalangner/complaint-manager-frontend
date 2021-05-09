import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnacceptedTicketsComponent } from './unaccepted-tickets.component';

describe('UnacceptedTicketsComponent', () => {
  let component: UnacceptedTicketsComponent;
  let fixture: ComponentFixture<UnacceptedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnacceptedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnacceptedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
