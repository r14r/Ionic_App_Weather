import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather1Page } from './weather1.page';

describe('Weather1Page', () => {
  let component: Weather1Page;
  let fixture: ComponentFixture<Weather1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
