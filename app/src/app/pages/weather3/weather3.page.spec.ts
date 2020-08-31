import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather3Page } from './weather3.page';

describe('Weather3Page', () => {
  let component: Weather3Page;
  let fixture: ComponentFixture<Weather3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
