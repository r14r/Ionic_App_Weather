import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather6Page } from './weather6.page';

describe('Weather6Page', () => {
  let component: Weather6Page;
  let fixture: ComponentFixture<Weather6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
