import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Input() tareas: Tarea[];

  options;
  markers: L.Layer[] = [];

  constructor() { }

  ngOnInit() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 15,      
      center: L.latLng(-33.0454915,-71.6124715),
    };
    
    this.tareas.forEach(tarea => {
      if(tarea.lat && tarea.lng)
        this.addMarker(tarea);
    });
  }

  addMarker(tarea) {
    var lat = parseFloat(tarea.lat);
    var lng = parseFloat(tarea.lng); //por algun motivo se guardan como string
    var ubicacion = L.latLng(lat, lng);
    const newMarker = L.marker([ubicacion['lat'],  ubicacion['lng']], {
      icon: L.icon({
         iconSize: [ 25, 41 ],
         iconAnchor: [ 13, 41 ],
         iconUrl:   'assets/marker-icon.png',
         shadowUrl: 'assets/marker-shadow.png'
      })
    })
    .bindPopup( function(layer){
      return "<strong>Titulo</strong>:" + layer.tarea.titulo + "<br/><strong>Descripcion:</strong>" + layer.tarea.descripcion + "<br/><strong>Fecha de inicio: ";
    } );
    /*.on('click', function(e){
      var dialog = L.control.dialog(

      ).setContent("Bonjour");
      console.log(this.tarea);
    });*/
    newMarker.tarea = tarea;
    this.markers.push(newMarker);
  }
}
