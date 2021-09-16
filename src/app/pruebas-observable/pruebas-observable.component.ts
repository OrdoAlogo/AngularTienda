import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pruebas-observable',
  templateUrl: './pruebas-observable.component.html',
  styleUrls: ['./pruebas-observable.component.css']
})
export class PruebasObservableComponent implements OnInit {

  constructor() { 
    console.log("contructor pruebas observable");
  }

ngOnInit() {

     /*console.log('...... onInit de PruebasObservableComponent.');
     const miObservable = Observable.create( (observer) => {
          let contador = 0;
          setInterval( () => {
            observer.next(contador);
            contador ++;
            if(contador === 10){
              observer.complete();
            }
          }, 1000);
     } );

     miObservable.subscribe(
       (datos) => {console.log(datos);},
       (err) => {console.log(err); },
       ()=> {console.log("Completado");}
     );

     const m = Observable.create((observer) => { 
       console.log('... uno');
         observer.complete();
     });//fin funcion 
     m.subscribe(
       (d) => { console.log(d);}
     );*/
  }

}
