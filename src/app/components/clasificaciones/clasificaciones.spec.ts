import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionesComponent } from './clasificaciones';

describe('Clasificaciones', () => {
  let component: ClasificacionesComponent;
  let fixture: ComponentFixture<ClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
