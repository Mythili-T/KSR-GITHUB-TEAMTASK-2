/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamingComponent } from './Gaming.component';

describe('GamingComponent', () => {
  let component: GamingComponent;
  let fixture: ComponentFixture<GamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
