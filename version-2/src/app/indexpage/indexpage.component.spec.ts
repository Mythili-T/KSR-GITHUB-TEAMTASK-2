/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexpageComponent } from './indexpage.component';

describe('IndexpageComponent', () => {
  let component: IndexpageComponent;
  let fixture: ComponentFixture<IndexpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
