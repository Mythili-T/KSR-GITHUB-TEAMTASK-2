/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hom3_navComponent } from './hom3_nav.component';

describe('Hom3_navComponent', () => {
  let component: Hom3_navComponent;
  let fixture: ComponentFixture<Hom3_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hom3_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hom3_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
