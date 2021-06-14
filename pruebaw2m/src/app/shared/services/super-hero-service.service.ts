import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  initialArray:Array<SuperHero>  = [{ id:0, name:'Batman', description:'Hombre murcielago' }, { id:1, name:'Spiderman', description:'Hombre araña' }];
  private _superHeros$: BehaviorSubject<Array<SuperHero>>;

  public superHeros$: Observable<SuperHero[]>;

  constructor() {
    let lc = JSON.parse(localStorage.getItem('superheros'));
    if(!lc){
      localStorage.setItem('superheros', JSON.stringify(this.initialArray));
      lc = this.initialArray;
    }
    this._superHeros$ = new BehaviorSubject<Array<SuperHero>>(lc)
    this.superHeros$ = this._superHeros$.asObservable();
  }

  setSuperHero(superHero: SuperHero){
    let newState : Array<SuperHero>;
    this.superHeros$.subscribe(
      resp => newState = resp
    );

    // const suscription = this.superHeros.pipe(
    //   filter(heroes => heroes.length > 0),
    //   map(heroes => heroes.filter(({ id }) => id % 2 === 0)),
    //   tap(result => console.log(result)),
    //   mapTo(null),
    //   switchMap(result => new Observable<string>(observer => observer.next('asdasd')))
    // ).subscribe(result => console.log(result));

    superHero.id = newState[newState.length-1].id+1;
    newState.push(superHero);
    this._superHeros$.next(newState);

    localStorage.setItem('superheros', JSON.stringify(newState))
  }

  getSuperHerosByValue(value:string){

  }

  getSuperHeroById(id:number, find?:boolean): SuperHero{
    let sh:SuperHero[];
    this.superHeros$.subscribe(
      resp => sh = resp.filter( e => e.id === id)
    )
    return sh[0];
  }

  putSuperHero(superHero: SuperHero){
    let newState : Array<SuperHero>;
    let index:number;
    this.superHeros$.subscribe(
      resp => {
        newState = resp;
        index = resp.findIndex(item => item.id === superHero.id);
      }
      )
    newState[index] = superHero;
    this._superHeros$.next(newState)
    localStorage.setItem('superheros', JSON.stringify(newState))
  }

  deleteSuperHero(id:number){
    let newState : Array<SuperHero>;
    let index: number[];
    this.superHeros$.subscribe(
      resp => newState = resp
    );
    newState = newState.filter(e => e.id!==id);
    this._superHeros$.next(newState);
    localStorage.setItem('superheros', JSON.stringify(newState))
  }
}
