import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather4Page } from './weather4.page';

describe('Weather4Page', () => {
  let component: Weather4Page;
  let fixture: ComponentFixture<Weather4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
