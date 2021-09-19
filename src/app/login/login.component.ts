import { Component, OnInit } from '@angular/core';
import { AutentificacinService } from '../servicios/autentificacin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logeado!:boolean;
  estilo!:string;
  mensaje!:string;
 
  constructor(private as:AutentificacinService) { }

  ngOnInit(): void {
    this.logeado = this.as.getEstaLogeado();
    this.estilo = this.as.getEstilos();
    this.mensaje = this.as.getMensaje();
  }

 entrar(){
   
   this.as.login();
   this.logeado = this.as.getEstaLogeado();
   this.estilo = this.as.getEstilos();
   this.mensaje = this.as.getMensaje();
 }

}
