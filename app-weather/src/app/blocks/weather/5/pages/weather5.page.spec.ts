import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather5Page } from './weather5.page';

describe('Weather5Page', () => {
  let component: Weather5Page;
  let fixture: ComponentFixture<Weather5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
