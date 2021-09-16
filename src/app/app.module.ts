import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './servicios/login.service';
import { FrutasService } from './servicios/frutas.service';
import { HttpClientModule } from '@angular/common/http';
import { PruebasObservableComponent } from './pruebas-observable/pruebas-observable.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { GeneradorfrutasService } from './servicios/generadorfrutas.service';
import { DataService } from './servicios/data.service';
import { NuevoproductoComponent } from './nuevoproducto/nuevoproducto.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { LoginComponent } from './login/login.component';
import { AutentificacinService } from './servicios/autentificacin.service';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { MiAnimacionComponent } from './mi-animacion/mi-animacion.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasObservableComponent,
    ListaProductosComponent,
    NuevoproductoComponent,
    DetalleproductoComponent,
    LoginComponent,
    MiAnimacionComponent,
    EditarproductoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [LoginService,FrutasService,GeneradorfrutasService,DataService,AutentificacinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
