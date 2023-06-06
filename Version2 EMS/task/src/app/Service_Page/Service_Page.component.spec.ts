/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Service_PageComponent } from './Service_Page.component';

describe('Service_PageComponent', () => {
  let component: Service_PageComponent;
  let fixture: ComponentFixture<Service_PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service_PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service_PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
