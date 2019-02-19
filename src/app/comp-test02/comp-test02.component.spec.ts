import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTest02Component } from './comp-test02.component';

describe('CompTest02Component', () => {
  let component: CompTest02Component;
  let fixture: ComponentFixture<CompTest02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTest02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTest02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
