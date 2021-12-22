import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPriorityComponent } from './set-priority.component';

describe('SetPriorityComponent', () => {
  let component: SetPriorityComponent;
  let fixture: ComponentFixture<SetPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
