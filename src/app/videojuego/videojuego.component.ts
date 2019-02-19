// importamos el conmponente padre del core
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// metadatos del componente
@Component({
  selector: 'videojuego',
  // template: `
  //   <h2>Componente de videojuego</h2>
  //   <ul>
  //     <li>GTA</li>
  //     <li>Mortal Kombat</li>
  //   </ul>
  // `
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  // podemos definir propiedades que se pueden transferir a la vista
  public titulo: string;
  public mi_titulo: string;
  public listado: string;

  constructor(){
    this.titulo = "Componente de video juegos";

    console.log('Se ha cargado el nuevo componente');
  }

  // Usando el hooks onInit, se lanza cuando se carga el componente
  ngOnInit(){
    console.log("Oninit ejecutado");
  }

  ngDoCheck(){
      console.log("Docheck ejecutado");
  }

  // probando el docheck
  cambiarTitulo(){
      this.titulo = "Nuevo titulo";
  }


  // hooks ondestroy
  ngOnDestroy(){
    console.log("OnDestroy ejecutado");
  }
}
