import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentcompComponent } from './departmentcomp.component';

describe('DepartmentcompComponent', () => {
  let component: DepartmentcompComponent;
  let fixture: ComponentFixture<DepartmentcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
