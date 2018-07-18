import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaBaseComponent } from '../tarea-base/tarea-base.component';

@Component({
  selector: 'app-tarea-terminada',
  templateUrl: './tarea-terminada.component.html',
  styleUrls: ['./tarea-terminada.component.css']
})
export class TareaTerminadaComponent extends TareaBaseComponent {

  obtenerSiguienteEstado(t: Tarea) {
    /* No hace nada, no hay mas estados */
  }

}
