import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlBase:string = "http://127.0.0.1:8080/Proy0055_Spring_MVC-0.0.1-SNAPSHOT/rest/productos";
  producto!:Producto;
  
  constructor(private http: HttpClient) { }
  
  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlBase);
  }

  getProducto(id:string):Observable<Producto>{
    const url = `${this.urlBase}/${id}`;
    return this.http.get<Producto>(url);
  }

  //Crear Producto
  public addProducto(producto:Producto):Observable<Producto>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const obs = this.http.post<Producto>(this.urlBase,producto,httpOptions);
    return obs;
  }

  //Actualizar
  public updateProducto(producto:Producto):Observable<Producto>{
    const url = `${this.urlBase}/${producto.idProducto}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
     const obs = this.http.put<Producto>(url,producto,httpOptions);
     return obs;
  }

  //Eliminar producto
  public deleteProducto(id:string):Observable<String>{
    const url = `${this.urlBase}/${id}`;
    const obs = this.http.delete<String>(url);
    return obs;
  }
}
