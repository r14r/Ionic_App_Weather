import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  // DOM testing can be done via the native HTMLElement API
  it('has three tabs', () => {
    const tabs = fixture.nativeElement.querySelectorAll('ion-tab');
    expect(tabs.length).toEqual(3);
  });

  // This could also be written this way using Angular's DebugElement
  it('has three tabs (debugElement)', () => {
    const tabs = fixture.debugElement.queryAll(By.css('ion-tab'));
    expect(tabs.length).toEqual(3);
  });
});
