import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrankComponent } from './salesrank.component';

describe('SalesrankComponent', () => {
  let component: SalesrankComponent;
  let fixture: ComponentFixture<SalesrankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
