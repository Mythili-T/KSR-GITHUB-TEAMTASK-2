/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Admin_WorkComponent } from './Admin_Work.component';

describe('Admin_WorkComponent', () => {
  let component: Admin_WorkComponent;
  let fixture: ComponentFixture<Admin_WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_WorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
