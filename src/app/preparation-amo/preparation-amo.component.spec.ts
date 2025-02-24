import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationAmoComponent } from './preparation-amo.component';

describe('PreparationAmoComponent', () => {
  let component: PreparationAmoComponent;
  let fixture: ComponentFixture<PreparationAmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparationAmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreparationAmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
