import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather7Page } from './weather7.page';

describe('Weather7Page', () => {
  let component: Weather7Page;
  let fixture: ComponentFixture<Weather7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
