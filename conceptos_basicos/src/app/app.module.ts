import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeEstudiantesComponent } from './components/lista-de-estudiantes/lista-de-estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosComponent } from './components/eventos/eventos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ListaDeEstudiantesComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
