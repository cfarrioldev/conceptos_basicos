import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante.interface';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
@Input() estudiante!: Estudiante
@Output() enviarInstruccionDePromocion: EventEmitter<Estudiante> = new EventEmitter()

promoverAlumno(estudiante: Estudiante){
  alert(`El Alumno  ${estudiante.nombre} ha sido promovido al siguiente año!`)
this.enviarInstruccionDePromocion.emit(estudiante)
}


}
