import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActualitesComponent } from './actualites.component';
import { ActualitesService } from '../services/actualites.service';
import { of } from 'rxjs';

describe('ActualitesComponent', () => {
  let component: ActualitesComponent;
  let fixture: ComponentFixture<ActualitesComponent>;
  let actualitesService: ActualitesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualitesComponent, HttpClientModule],
      providers: [ActualitesService]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualitesComponent);
    component = fixture.componentInstance;
    actualitesService = TestBed.inject(ActualitesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize actualites array', () => {
    expect(component.actualites).toBeDefined();
    expect(Array.isArray(component.actualites)).toBeTruthy();
  });

  it('should fetch actualites on init', () => {
    const mockActualites = [
      {
        id: 1,
        title: 'Test Actualité',
        content: 'Contenu test',
        imageUrl: 'test.jpg',
        date: new Date(),
        link: 'http://test.com'
      }
    ];

    spyOn(component['http'], 'get').and.returnValue(of(mockActualites));

    component.ngOnInit();

    expect(component['http'].get).toHaveBeenCalled();
    expect(component.actualites).toEqual(mockActualites);
  });
});
