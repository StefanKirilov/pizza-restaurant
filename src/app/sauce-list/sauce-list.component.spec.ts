import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceListComponent } from './sauce-list.component';

describe('SauceListComponent', () => {
  let component: SauceListComponent;
  let fixture: ComponentFixture<SauceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SauceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SauceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
