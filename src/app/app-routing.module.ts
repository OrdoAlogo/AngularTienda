import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NuevoproductoComponent } from './nuevoproducto/nuevoproducto.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { LoginComponent } from './login/login.component';
import { CanactivatedloginService } from './servicios/canactivatedlogin.service';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'productos',component:ListaProductosComponent, children:[]},
  {path:'editar',component:EditarproductoComponent},
  {path:'ver',component:DetalleproductoComponent},
  //Ruta controlada, si el boton del inicio está el login, se accede al componente
  //Nuevo producto
  {path:'nuevo', component:NuevoproductoComponent, canActivate:[CanactivatedloginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
