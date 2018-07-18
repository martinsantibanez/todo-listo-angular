import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-terminada',
  templateUrl: './tarea-terminada.component.html',
  styleUrls: ['./tarea-terminada.component.css']
})
export class TareaTerminadaComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor() { }

  ngOnInit() {
  }

}
