import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatailesComponent } from './product-datailes.component';

describe('ProductDatailesComponent', () => {
  let component: ProductDatailesComponent;
  let fixture: ComponentFixture<ProductDatailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDatailesComponent]
    });
    fixture = TestBed.createComponent(ProductDatailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
