import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public mostrar_videojuegos: boolean = true;

  public nombre: string;
  public valorNumerico: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  // funcion que oculta o muestra el componenete videojuego modificando la props "mostrar_videojuegos"
  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }

  // Hooks ngOnInit: metodo que se ejecuta automaticamente y carga el modulo
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      // this.nombre = params['nombre']; -> otra forma de capturarlo
      // cuando es numerico hay que indicar que transforme el string a number con un +
      //    ej: this.numeroRecibido = +params.numero;
      console.log(params);

      // ejemplo de redireccion: si el nombre por params es ninguno, va al home
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }

    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
