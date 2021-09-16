import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  productSelected!:Producto;

  constructor(public ds:DataService) { }

  ngOnInit(): void {
  }

   verProducto(producto:Producto){
    this.productSelected = producto;
    this.ds.producto = this.productSelected;
   
  }

}
