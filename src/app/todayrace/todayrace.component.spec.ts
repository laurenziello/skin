import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayraceComponent } from './todayrace.component';

describe('TodayraceComponent', () => {
  let component: TodayraceComponent;
  let fixture: ComponentFixture<TodayraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
