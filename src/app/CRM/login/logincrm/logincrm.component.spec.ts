import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincrmComponent } from './logincrm.component';

describe('LogincrmComponent', () => {
  let component: LogincrmComponent;
  let fixture: ComponentFixture<LogincrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
