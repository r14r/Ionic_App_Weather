import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather9Page } from './weather9.page';

describe('Weather9Page', () => {
  let component: Weather9Page;
  let fixture: ComponentFixture<Weather9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
