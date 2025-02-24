import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieRenovationComponent } from './strategie-renovation.component';

describe('StrategieRenovationComponent', () => {
  let component: StrategieRenovationComponent;
  let fixture: ComponentFixture<StrategieRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategieRenovationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategieRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
