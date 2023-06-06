/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Emp_cPassComponent } from './Emp_cPass.component';

describe('Emp_cPassComponent', () => {
  let component: Emp_cPassComponent;
  let fixture: ComponentFixture<Emp_cPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp_cPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp_cPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
