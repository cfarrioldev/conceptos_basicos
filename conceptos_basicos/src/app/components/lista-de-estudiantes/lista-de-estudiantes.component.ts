import { Component } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante.interface';

@Component({
  selector: 'app-lista-de-estudiantes',
  templateUrl: './lista-de-estudiantes.component.html',
  styleUrls: ['./lista-de-estudiantes.component.css']
})
export class ListaDeEstudiantesComponent {


  recibirEstudiantePromovido(estudiante: Estudiante){
    this.listaEstudiantes = this.listaEstudiantes.filter((e) => {
      if(e.id === estudiante.id){
        e.promovido = !e.promovido
      }
      return e
    })
  }

   listaEstudiantes = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        edad: 20,
        promedio: 8.5,
        curso: 'Matemáticas',
        promovido: false
    },
    {
        id: 2,
        nombre: 'María Gómez',
        edad: 22,
        promedio: 9.2,
        curso: 'Historia',
        promovido: false
    },
    {
        id: 3,
        nombre: 'Carlos Ramírez',
        edad: 21,
        promedio: 7.8,
        curso: 'Ciencias',
        promovido: false
    },
    {
        id: 4,
        nombre: 'Ana López',
        edad: 19,
        promedio: 8.9,
        curso: 'Literatura',
        promovido: false
    },
    {
        id: 5,
        nombre: 'Luisa Torres',
        edad: 23,
        promedio: 8.0,
        curso: 'Inglés',
        promovido: false
    }
];

}
