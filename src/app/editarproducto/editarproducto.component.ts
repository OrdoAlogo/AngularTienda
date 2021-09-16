import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { DataService } from '../servicios/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  productSelected!:Producto;
  
  constructor(public ds:DataService) { }

  ngOnInit(): void {
  }

  irEditarProducto(producto:Producto){
    this.productSelected = producto;
    this.ds.producto = this.productSelected;
   
  }

  onSubmit(form:NgForm){
    this.productSelected = {
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
    this.ds.updateProducto(this.productSelected).subscribe(
      (pActual)=>{console.log("Producto Actualizado: "+JSON.stringify(pActual.nombre))},
      (err)=>{console.log("Fallo al actualizar el Producto: "+ JSON.stringify(err))}
    );
    form.resetForm();
  }
}
