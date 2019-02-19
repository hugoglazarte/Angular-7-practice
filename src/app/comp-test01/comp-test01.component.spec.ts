import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTest01Component } from './comp-test01.component';

describe('CompTest01Component', () => {
  let component: CompTest01Component;
  let fixture: ComponentFixture<CompTest01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTest01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTest01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
