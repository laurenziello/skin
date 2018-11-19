import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextracesComponent } from './nextraces.component';

describe('NextracesComponent', () => {
  let component: NextracesComponent;
  let fixture: ComponentFixture<NextracesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextracesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
