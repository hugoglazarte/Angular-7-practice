import { Injectable } from '@angular/core';
// importamos modelo
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
  public zapatillas: Array<Zapatilla>;

  constructor(){
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 40, 'Reebook', 'Blanco', true),
      new Zapatilla('Adidas locas', 70, 'Adidas', 'Blanco', true),
      new Zapatilla('Pumas diego', 80, 'Pumas', 'Blanco', false),
      new Zapatilla('Adidas viejas', 70, 'Adidas', 'Blanco', true),
      new Zapatilla('Pumas Future', 80, 'Pumas', 'Blanco', false),
    ];
  }

  getTexto(){
    return "Hola Mundo desde un servicio";
  }

  // creamos el metodo que va a devolver el array de zapatillas
  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }

}
