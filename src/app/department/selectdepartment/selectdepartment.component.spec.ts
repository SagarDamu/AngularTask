import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdepartmentComponent } from './selectdepartment.component';

describe('SelectdepartmentComponent', () => {
  let component: SelectdepartmentComponent;
  let fixture: ComponentFixture<SelectdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
