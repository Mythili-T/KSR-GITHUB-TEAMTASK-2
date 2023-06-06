/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Home3_footerComponent } from './home3_footer.component';

describe('Home3_footerComponent', () => {
  let component: Home3_footerComponent;
  let fixture: ComponentFixture<Home3_footerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home3_footerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home3_footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
