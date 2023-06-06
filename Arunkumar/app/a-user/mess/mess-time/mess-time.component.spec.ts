/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessTimeComponent } from './mess-time.component';

describe('MessTimeComponent', () => {
  let component: MessTimeComponent;
  let fixture: ComponentFixture<MessTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
