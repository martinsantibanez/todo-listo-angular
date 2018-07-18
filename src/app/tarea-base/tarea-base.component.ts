import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea';

export abstract class TareaBaseComponent {

  @Input() tarea: Tarea;
  @Output() tareaActualizada = new EventEmitter();

  constructor() { }

  pasarSiguienteEstado() {
    this.tarea.estado = this.obtenerSiguienteEstado(this.tarea);
    this.tareaActualizada.emit(this.tarea);
  }

  abstract obtenerSiguienteEstado(t: Tarea);

}
