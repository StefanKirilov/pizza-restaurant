import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSauceComponent } from './details-sauce.component';

describe('DetailsSauceComponent', () => {
  let component: DetailsSauceComponent;
  let fixture: ComponentFixture<DetailsSauceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsSauceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsSauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
