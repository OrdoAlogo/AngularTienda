import { Injectable } from '@angular/core';
import { Fruta } from '../Entidades/fruta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  frutas:Fruta[] = [
    new Fruta(1,"Manzana","Manzana Roja",2,6),
    new Fruta(2,"Piña","Piña colada",2,6),
    new Fruta(3,"Manzana V","Manzana Verde",2,6)
  ];
  
  
  constructor(private dataService:DataService) { }

  getFrutas(){
    return this.frutas;
  }
}
