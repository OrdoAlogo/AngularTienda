import { Component, OnInit } from '@angular/core';
import { AutentificacinService } from '../servicios/autentificacin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logeado!:boolean;
  
  constructor(private as:AutentificacinService) { }

  ngOnInit(): void {
    this.logeado = this.as.getEstaLogeado();
  }

 onLogin(){
   this.as.login();
   this.logeado = this.as.getEstaLogeado();
 }
}
