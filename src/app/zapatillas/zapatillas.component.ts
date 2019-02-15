import { Component, OnInit } from '@angular/core';                              // importamos el conmponente padre del core
import { Zapatilla } from '../models/zapatilla';                                // importamos el modelo Zapatilla

                                                                                // metadatos del componente
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent{
  public titulo: string = "Componente de zapatillas";                           // podemos definir propiedades que se pueden transferir a la vista
  public listado: string;
  public zapatillas: Array<Zapatilla>;                                          // creamos un array de objetos tipo Zapatilla

  public marcas: String[];

  constructor(){
    this.color = 'orange';
    this.marcas = new Array();                                                  // inicializamos el array
    // this.titulo = "Componente de zapatillas";
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 40, 'Reebook', 'Blanco', true),
      new Zapatilla('Adidas locas', 70, 'Adidas', 'Blanco', true),
      new Zapatilla('Pumas diego', 80, 'Pumas', 'Blanco', false),
      new Zapatilla('Adidas viejas', 70, 'Adidas', 'Blanco', true),
      new Zapatilla('Pumas Future', 80, 'Pumas', 'Blanco', false),
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);

    this.getMarcas();
  }

  getMarcas(){                                                                  // funcion para extraer las marcas y guardarlas en un nuevo Array
    this.zapatillas.forEach((zapatilla, index) =>{

      if(this.marcas.indexOf(zapatilla.marca) < 0)                              // if para no repetir valor. Si es menor a 0 es por que no esta el valor
      {
        this.marcas.push(zapatilla.marca);
      }
      console.log(index);

    });

    console.log(this.marcas);
  }
}
