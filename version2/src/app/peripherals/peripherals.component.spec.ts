/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeripheralsComponent } from './peripherals.component';

describe('PeripheralsComponent', () => {
  let component: PeripheralsComponent;
  let fixture: ComponentFixture<PeripheralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeripheralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
