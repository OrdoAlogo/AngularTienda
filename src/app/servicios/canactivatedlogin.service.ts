import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutentificacinService } from './autentificacin.service';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class CanactivatedloginService implements CanActivate {

  //Si no estas logeado, que te redirija a la ruta inicio
  constructor(private as:AutentificacinService, private ruta:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!this.as.getEstaLogeado()){
      this.ruta.navigate(['/']);
    }
    return true;
  }
}
