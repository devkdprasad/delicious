import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWraperComponent } from './product-wraper.component';

describe('ProductWraperComponent', () => {
  let component: ProductWraperComponent;
  let fixture: ComponentFixture<ProductWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWraperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
