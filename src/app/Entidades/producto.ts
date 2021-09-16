export class Producto {
	idProducto:string;
	nombre:string;
	descripcion:string;
	categoria:string;
	precioUnitario:number;
	unidadesEnStock:number;
	condiciones:string;
	fabricante:string;
	unidadesPedido:number;

	constructor(idProducto:string,nombre:string,descripcion:string,categoria:string,precioUnitario:number,condiciones:string,
		fabricante:string,unidadesPedido:number,unidadesEnStock:number){
			this.idProducto = idProducto;
			this.nombre = nombre;
			this.descripcion = descripcion;
			this.categoria = categoria;
			this.precioUnitario = precioUnitario;
			this.condiciones = condiciones;
			this.fabricante = fabricante;
			this.unidadesPedido = unidadesPedido;
			this.unidadesEnStock = unidadesEnStock;

	}

}