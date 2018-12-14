import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  tareas: Array<Tarea> = [
    new Tarea(1, 'Comprar leche', 'Y pañales para el bebe')
    , new Tarea(2, 'Hacer Taller Angular', 'Falta empezar...')
    , new Tarea(3, 'Preparar papers', 'Por fin')
  ];

  crearTarea(t: Tarea): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/tareas/', t);
  }

  getTareas(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/tareas/');
  }
}
