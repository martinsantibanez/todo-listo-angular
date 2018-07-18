import { Component } from '@angular/core';
import { Tarea, EstadoTarea } from '../tarea';
import { TareaBaseComponent } from '../tarea-base/tarea-base.component';

@Component({
  selector: 'app-tarea-creada',
  templateUrl: './tarea-creada.component.html',
  styleUrls: ['./tarea-creada.component.css']
})
export class TareaCreadaComponent extends TareaBaseComponent {

  obtenerSiguienteEstado(t: Tarea) {
    return EstadoTarea.EnProceso;
  }

}
