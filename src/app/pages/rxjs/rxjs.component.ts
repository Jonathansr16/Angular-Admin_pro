import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

    public intervalSubs?: Subscription;

  constructor() {

    // this.retornObservable().pipe( retry(1) ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs completado')
    //   );
   this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
    }

    ngOnDestroy() {
      this.intervalSubs?.unsubscribe();
    }

    retornaIntervalo() : Observable<number> {
           return interval(1000)
           .pipe(
                  // take(10),
                   map( (valor) => valor + 1),
                   filter( value => ( value % 2 === 0 ) ? true : false )
                   );
    }


  retornObservable() : Observable<number> {

    let i = -1;

   return new Observable<number> ( observer => {

     const intervalo = setInterval( () => {
          i++;
          observer.next(i);

          if(i === 4) {
            clearInterval(intervalo);
            observer.complete();
          }

        },1000);

    });



  }

}
