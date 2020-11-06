import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecompComponent } from './employeecomp.component';

describe('EmployeecompComponent', () => {
  let component: EmployeecompComponent;
  let fixture: ComponentFixture<EmployeecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
