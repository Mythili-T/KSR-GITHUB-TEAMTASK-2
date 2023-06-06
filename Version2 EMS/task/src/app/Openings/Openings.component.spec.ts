/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpeningsComponent } from './Openings.component';

describe('OpeningsComponent', () => {
  let component: OpeningsComponent;
  let fixture: ComponentFixture<OpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
