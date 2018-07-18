import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-en-proceso',
  templateUrl: './tarea-en-proceso.component.html',
  styleUrls: ['./tarea-en-proceso.component.css']
})
export class TareaEnProcesoComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor() { }

  ngOnInit() {
  }

}
