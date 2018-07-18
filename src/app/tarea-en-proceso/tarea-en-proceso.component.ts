import { Component } from '@angular/core';
import { Tarea, EstadoTarea } from '../tarea';
import { TareaBaseComponent } from '../tarea-base/tarea-base.component';

@Component({
  selector: 'app-tarea-en-proceso',
  templateUrl: './tarea-en-proceso.component.html',
  styleUrls: ['./tarea-en-proceso.component.css']
})
export class TareaEnProcesoComponent extends TareaBaseComponent {
  obtenerSiguienteEstado(t: Tarea) {
    return EstadoTarea.Terminada;
  }
}
