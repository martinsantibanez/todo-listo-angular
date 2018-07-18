import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-creada',
  templateUrl: './tarea-creada.component.html',
  styleUrls: ['./tarea-creada.component.css']
})
export class TareaCreadaComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor() { }

  ngOnInit() {
  }

}
