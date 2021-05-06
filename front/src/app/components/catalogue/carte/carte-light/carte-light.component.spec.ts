import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteLightComponent } from './carte-light.component';

describe('CarteLightComponent', () => {
  let component: CarteLightComponent;
  let fixture: ComponentFixture<CarteLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
