/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyroomComponent } from './myroom.component';

describe('MyroomComponent', () => {
  let component: MyroomComponent;
  let fixture: ComponentFixture<MyroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
