import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlabelComponent } from './productlabel.component';

describe('ProductlabelComponent', () => {
  let component: ProductlabelComponent;
  let fixture: ComponentFixture<ProductlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
