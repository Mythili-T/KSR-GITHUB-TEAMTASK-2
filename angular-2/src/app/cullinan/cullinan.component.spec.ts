/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CullinanComponent } from './cullinan.component';

describe('CullinanComponent', () => {
  let component: CullinanComponent;
  let fixture: ComponentFixture<CullinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CullinanComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(CullinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
