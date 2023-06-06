/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Admin_leaveComponent } from './Admin_leave.component';

describe('Admin_leaveComponent', () => {
  let component: Admin_leaveComponent;
  let fixture: ComponentFixture<Admin_leaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_leaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_leaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
