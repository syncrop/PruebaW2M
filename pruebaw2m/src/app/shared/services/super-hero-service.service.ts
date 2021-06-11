import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private superHeros = new BehaviorSubject<Array<SuperHero>>([{ id:0, name:'Batman', description:'Hombre murcielago' }, { id:1, name:'Spiderman', description:'Hombre araña' }]);

  public superHeros$ = this.superHeros.asObservable();

  constructor() { }

  setSuperHero(superHero: SuperHero){
    let newState : Array<SuperHero>;
    this.superHeros$.subscribe(
      resp => newState = resp
    );
    superHero.id = newState[newState.length-1].id+1;
    newState.push(superHero);
    this.superHeros.next(newState);
  }

  getSuperHeros(){

  }

  getSuperHerosByValue(value:string){

  }

  getSuperHeroById(id:number): SuperHero{
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
    this.superHeros.next(newState)
  }

  deleteSuperHero(id:number){
    let newState : Array<SuperHero>;
    let index: number[];
    this.superHeros$.subscribe(
      resp => newState = resp
    );
    newState = newState.filter(e => e.id!==id);
    this.superHeros.next(newState);
  }
}
