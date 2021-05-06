import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerLivreComponent } from './creer-livre.component';

describe('CreerLivreComponent', () => {
  let component: CreerLivreComponent;
  let fixture: ComponentFixture<CreerLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
