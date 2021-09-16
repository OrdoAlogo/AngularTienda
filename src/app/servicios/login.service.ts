import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
    function logeo(mensaje:string){
      alert("Se ha creado un "+ mensaje);
    }
  }
}
