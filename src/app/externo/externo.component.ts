import { Component, OnInit } from '@angular/core';
// importamos el servicio creado para la API
import { PeticionesService } from '../services/peticiones.service';

  // array de providers (proveedores)
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  // creamos un objeto para recibir la info
  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado: any;

    // injecto el servicio
  constructor(
    private _peticionesServices: PeticionesService
  ) {
    // cargamos por defecto un UserId
    this.userId = 2;
    this.new_user = {
        "name": "",
        "job": ""
      }
  }

  ngOnInit() {
    // usamos el metodo subscribe que viene en el observable para recoger el resultado
    // el metodo subscribe tiene dos callbacks: uno de success y otro de error
    // this._peticionesServices.getUser().subscribe(
    //   result => {
    //     this.user = result.data;
    //     console.log(result);
    //   },
    //   error => {
    //     console.log(<any>error);
    //   }
    // );

    // this.fecha = new Date();
    this.fecha = new Date(2019, 5 , 10);

    this.cargaUsuario();
  }

  cargaUsuario(){
    // esta linea es para que nos aparezca el cargando todo el tiempo miestra se hagan peticiones
    this.user = false;

    this._peticionesServices.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._peticionesServices.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        this.usuario_guardado = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
