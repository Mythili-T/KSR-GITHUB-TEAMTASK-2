/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Emp_HomeComponent } from './Emp_Home.component';

describe('Emp_HomeComponent', () => {
  let component: Emp_HomeComponent;
  let fixture: ComponentFixture<Emp_HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp_HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp_HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
