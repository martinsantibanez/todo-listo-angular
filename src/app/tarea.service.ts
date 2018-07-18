import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { Tarea, EstadoTarea } from './tarea';

export interface ITarea {
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Array<Tarea> = [
    new Tarea(1, 'Comprar leche', 'Y pañales para el bebe')
    , new Tarea(2, 'Hacer Taller Angular', 'Falta empezar...', EstadoTarea.EnProceso)
    , new Tarea(3, 'Preparar papers', 'Por fin', EstadoTarea.Terminada)
  ];

  constructor() { }

  getTareas(): Observable<Array<Tarea>> {
    return of(this.tareas);
  }

  crearTarea(t: ITarea): Observable<never> {

    // Obtener maximo id en this.tareas e incrementar en 1 para el nuevo id
    const newId = Math.max.apply(null, this.tareas.map(x => x.id)) + 1;

    // Insertar en el 'backend' la nueva tarea con el id generado y sus atributos
    this.tareas.push(new Tarea(newId, t.titulo, t.descripcion));

    // Se retorna un observable vacío solamente para seguir usando observables
    return empty();
  }
}
