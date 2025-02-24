import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursCpeComponent } from './parcours-cpe.component';

describe('ParcoursCpeComponent', () => {
  let component: ParcoursCpeComponent;
  let fixture: ComponentFixture<ParcoursCpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcoursCpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcoursCpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
