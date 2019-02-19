// importamos el conmponente padre del core
import { Component } from '@angular/core';
// importanto el modelo configuracion
import { Configuracion } from './models/configuracion';

// esto es un "decorador" : donde se configura el componente
@Component({
  //  indicamos etiqueta de la pagina
  selector: 'app-root',
  // indicamos la vista
  templateUrl: './app.component.html',
  // indicamos el style
  styleUrls: ['./app.component.css']
})

// exportamos la nueva clase componente "AppComponent" con sus props y metodos
export class AppComponent {

  public title = 'aprendiendo-angular';
  public descripcion: string;

  // atributo config que va a contener un objeto models "Configuracion"
  public config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }


}
