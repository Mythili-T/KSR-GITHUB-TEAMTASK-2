/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DawnComponent } from './dawn.component';

describe('DawnComponent', () => {
  let component: DawnComponent;
  let fixture: ComponentFixture<DawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DawnComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(DawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
