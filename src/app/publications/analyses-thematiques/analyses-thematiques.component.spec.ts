import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysesThematiquesComponent } from './analyses-thematiques.component';

describe('AnalysesThematiquesComponent', () => {
  let component: AnalysesThematiquesComponent;
  let fixture: ComponentFixture<AnalysesThematiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysesThematiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysesThematiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
