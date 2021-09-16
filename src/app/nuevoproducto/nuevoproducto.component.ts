import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { DataService } from '../servicios/data.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit {
  
  
  producto!:Producto;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    
  }

onSubmit(form:NgForm){
    
  this.producto = {
      idProducto: form.value.idProducto,
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      categoria: form.value.categoria,
      precioUnitario: form.value.precioUnitario,
      condiciones: form.value.condiciones,
      fabricante: form.value.fabricante,
      unidadesPedido: form.value.unidadesPedido,
       unidadesEnStock: form.value.unidadesEnStock,
     
    }
    console.log(JSON.stringify(this.producto));
    this.ds.addProducto(this.producto).subscribe(
      (pNuevo)=>{console.log("Nuevo Producto es: "+JSON.stringify(pNuevo))},
      (error)=>{console.log("Error...."+JSON.stringify(error))}
    );

    form.resetForm();
}

}
