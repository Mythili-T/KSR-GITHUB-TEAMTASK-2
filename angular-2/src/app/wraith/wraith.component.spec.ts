/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WraithComponent } from './wraith.component';

describe('WraithComponent', () => {
  let component: WraithComponent;
  let fixture: ComponentFixture<WraithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WraithComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(WraithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
