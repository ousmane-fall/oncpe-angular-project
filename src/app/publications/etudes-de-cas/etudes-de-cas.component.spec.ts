import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudesDeCasComponent } from './etudes-de-cas.component';

describe('EtudesDeCasComponent', () => {
  let component: EtudesDeCasComponent;
  let fixture: ComponentFixture<EtudesDeCasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudesDeCasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudesDeCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
