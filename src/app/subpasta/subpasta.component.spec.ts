/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubpastaComponent } from './subpasta.component';

describe('SubpastaComponent', () => {
  let component: SubpastaComponent;
  let fixture: ComponentFixture<SubpastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
