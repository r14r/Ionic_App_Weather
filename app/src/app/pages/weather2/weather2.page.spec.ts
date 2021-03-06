import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather2Page } from './weather2.page';

describe('Weather2Page', () => {
  let component: Weather2Page;
  let fixture: ComponentFixture<Weather2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
