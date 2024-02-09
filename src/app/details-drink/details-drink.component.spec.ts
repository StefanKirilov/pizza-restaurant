import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDrinkComponent } from './details-drink.component';

describe('DetailsDrinkComponent', () => {
  let component: DetailsDrinkComponent;
  let fixture: ComponentFixture<DetailsDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDrinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
