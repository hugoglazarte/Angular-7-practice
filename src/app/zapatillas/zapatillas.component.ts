import { Component, OnInit } from '@angular/core';                              // importamos el conmponente padre del core
import { Zapatilla } from '../models/zapatilla';                           // importamos el modelo Zapatilla
// Importamos el servicio que corresponde a este componente
import { ZapatillaService } from '../services/zapatilla.services';
                                                                                // metadatos del componente
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})

export class ZapatillasComponent{
  public titulo: string = "Componente de zapatillas";                           // podemos definir propiedades que se pueden transferir a la vista
  public listado: string;
  public zapatillas: Array<Zapatilla>;                                         // creamos un array de objetos tipo Zapatilla
  public color: String;
  public marcas: String[];
  // prop a modificar desde el Two Way Databingin ngModel
  public mi_marca: String;

  constructor(
    // Inyectando la dependencia services zapatilla
    private _zapatillaService: ZapatillaService
  ){
    this.mi_marca = 'Texto';
    this.color = 'orange';
    this.marcas = new Array();                                                  // inicializamos el array
    // this.titulo = "Componente de zapatillas";
  }

  ngOnInit(){
    // console.log(this.zapatillas);

    // cargamos el array de zapatillas desde el servicio
    this.zapatillas = this._zapatillaService.getZapatillas();
    // llamando a otro metodo del servicio
    alert(this._zapatillaService.getTexto());

    this.getMarcas();
  }

  getMarcas(){                                                                  // funcion para extraer las marcas y guardarlas en un nuevo Array
    this.zapatillas.forEach((zapatilla, index) =>{

      if(this.marcas.indexOf(zapatilla.marca) < 0)                              // if para no repetir valor. Si es menor a 0 es por que no esta el valor
      {
        this.marcas.push(zapatilla.marca);
      }
      console.log("se ejecute getMarcas");

    });

    console.log(this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index){
    //delete this.marcas[index];

    //metodo mas efectivo splice(indice, cantidad de elementos a borrar)
    this.marcas.splice(index, 1);
  }

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){
    console.log("Has presionado enter");
  }
}
