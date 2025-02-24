import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixMarcheComponent } from './choix-marche.component';

describe('ChoixMarcheComponent', () => {
  let component: ChoixMarcheComponent;
  let fixture: ComponentFixture<ChoixMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixMarcheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoixMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
