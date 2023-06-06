/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GhostComponent } from './ghost.component';

describe('GhostComponent', () => {
  let component: GhostComponent;
  let fixture: ComponentFixture<GhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(GhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
