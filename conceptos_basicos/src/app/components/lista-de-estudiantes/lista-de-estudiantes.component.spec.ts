import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEstudiantesComponent } from './lista-de-estudiantes.component';

describe('ListaDeEstudiantesComponent', () => {
  let component: ListaDeEstudiantesComponent;
  let fixture: ComponentFixture<ListaDeEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeEstudiantesComponent]
    });
    fixture = TestBed.createComponent(ListaDeEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
