/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VacatingComponent } from './vacating.component';

describe('VacatingComponent', () => {
  let component: VacatingComponent;
  let fixture: ComponentFixture<VacatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
