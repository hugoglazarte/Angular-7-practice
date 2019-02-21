import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  // creo el objeto a partir del modelo
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('','','','');
  }

  ngOnInit() {
  }

  onSubmit(form){

    console.log("Envento onSubmit lanzado");
    console.log(this.usuario);
    // form.reset();
  }

}
