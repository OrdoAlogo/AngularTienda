import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacinService {
//Servicio para el boton login
//Sistema sencillo para el logeo
 private logeado:boolean = false;
  constructor() { }

  public login(){
    this.logeado = !this.logeado;
    
  }

  public getEstaLogeado(){
    return this.logeado;
  }
}
