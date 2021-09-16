import { Injectable } from '@angular/core';
import { Observable, Observer} from 'rxjs';
import { Fruta } from '../Entidades/fruta';

@Injectable({
  providedIn: 'root'
})
export class GeneradorfrutasService {

  private creadorFrutasObsevable:Observable<Fruta>;

  constructor() { 
    this.creadorFrutasObsevable = Observable.create((observer:Observer<Fruta>)=>{
      let contador = 1;
          setInterval(()=>{
    observer.next(new Fruta(contador,"Producto "+contador,"Super Producto",2,3));
            if(++contador ===10){observer.complete()};
    },2000)
        });

  }
  public getObservableProductos():Observable<Fruta>{
    return this.creadorFrutasObsevable;
  }
}
