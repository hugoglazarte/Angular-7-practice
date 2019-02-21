// modulo Injectable para poder inyectar el servicio a otras clases
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// con los observables vamos a recogar la informacion que devuelven las api rest
import { Observable } from 'rxjs/Observable';

// decorador inyectable
@Injectable()
export class PeticionesService{
  // cargamos un atributo string que va a contener la url de la api
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = "https://reqres.in/";
  }

  // creamos los metodos para trabajar con la API, lo obligamos a traer un observable (metodo que recoge lo que llega)
  getUser(userId): Observable<any>{
    return this._http.get(this.url+'api/users/' + userId)
  }

  // Envia un objero user para guardar y devuelve un observable
  addUser(user): Observable<any>{
    // se envia un objeto json string
    let params = JSON.stringify(user);
    // indicamos las cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // armamos la conexion: Direccion , objeto a guardar
    return this._http.post(this.url + 'api/users', params, {headers: headers});
  }

}
