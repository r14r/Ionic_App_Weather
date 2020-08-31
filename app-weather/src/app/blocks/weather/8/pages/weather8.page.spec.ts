import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather8Page } from './weather8.page';

describe('Weather8Page', () => {
  let component: Weather8Page;
  let fixture: ComponentFixture<Weather8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
