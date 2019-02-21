// importamos los modulos necesarios para un pipe
import { Pipe, PipeTransform } from '@angular/core';

// en los metadatos del decorador indicamos el nombre
@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{

  // dato | calculadora: otroDato
  // param1               param2
  transform(value: any, value_two: any){

    let operaciones = `
      Suma: ${value+value_two}
      Resta:  ${value-value_two}
      Multiplicacion:  ${value*value_two}
      Division:  ${value/value_two}
    `;

    return operaciones;

  }
}
