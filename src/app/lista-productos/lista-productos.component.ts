import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../servicios/frutas.service';
import { Fruta } from '../Entidades/fruta';
import { GeneradorfrutasService } from '../servicios/generadorfrutas.service';
import { Subscriber, Subscription } from 'rxjs';
import { DataService } from '../servicios/data.service';
import { Producto } from '../Entidades/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  frutas!:Fruta[];
  suscricion!: Subscription;
  productos!:Producto[];

  productSelected!:Producto;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    
   this.suscricion = this.ds.getProductos()
      .subscribe(
        datos=>{
          this.productos = datos;
          console.log("Productos: "+this.productos)
        },
        err =>console.log("Error en getProductos "+ err.message)
      );

    
  }


  ngOndestroy():void{
    this.suscricion.unsubscribe();
  }


  eliminarProducto(idProducto:string){
    
    this.suscricion = this.ds.deleteProducto(idProducto)
      .subscribe(
        prodEli =>{
          console.log("Producto Eliminado");
        }
      )
  }

  irEditarProducto(producto:Producto){
    this.productSelected = producto;
    this.ds.producto = this.productSelected;

  }

   verProducto(producto:Producto){
    this.productSelected = producto;
    this.ds.producto = this.productSelected;
   
  }


}
