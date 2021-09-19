import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacinService {
//Servicio para el boton login
//Sistema sencillo para el logeo
 private logeado:boolean = false;
 private estilo:string = "";
 private mensaje:string = "ENTRAR";
 

  constructor() { }

  public login(){
    this.logeado = !this.logeado;
      
  }

  public getEstaLogeado(){
    return this.logeado;
  }

  public getEstilos(){
   
    if(this.logeado == true){
      this.estilo = "btn btn-danger"
    }else{
      this.estilo = "btn btn-success"
    }

    return this.estilo;
    
  }

  public getMensaje(){
     if(this.logeado == true){
      this.mensaje = "SALIR"
    }else{
      this.mensaje = "ENTRAR"
    }
    return this.mensaje;
  }

 
}
