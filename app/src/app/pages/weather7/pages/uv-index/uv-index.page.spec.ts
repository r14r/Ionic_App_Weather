import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';

import { UvIndexPage } from './uv-index.page';
import { WeatherService } from '../../services/weather.service';

describe('UvIndexPage', () => {
  let component: UvIndexPage;
  let fixture: ComponentFixture<UvIndexPage>;

  let weatherServiceSpy;

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', {
      uvIndex: EMPTY
    });
    TestBed.configureTestingModule({
      declarations: [UvIndexPage],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
