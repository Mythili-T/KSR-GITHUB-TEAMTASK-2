/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Admin_HomeComponent } from './Admin_Home.component';

describe('Admin_HomeComponent', () => {
  let component: Admin_HomeComponent;
  let fixture: ComponentFixture<Admin_HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
