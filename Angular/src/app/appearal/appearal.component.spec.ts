/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppearalComponent } from './appearal.component';

describe('AppearalComponent', () => {
  let component: AppearalComponent;
  let fixture: ComponentFixture<AppearalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
