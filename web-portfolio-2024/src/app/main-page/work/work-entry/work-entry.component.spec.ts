import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEntryComponent } from './work-entry.component';

describe('WorkEntryComponent', () => {
  let component: WorkEntryComponent;
  let fixture: ComponentFixture<WorkEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkEntryComponent]
    });
    fixture = TestBed.createComponent(WorkEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
