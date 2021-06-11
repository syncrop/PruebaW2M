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

  getSuperHeroById(id:number){

  }

  putSuperHero(){

  }

  deleteSuperHero(name:string){
    // let newState : Array<string>;
    // let index: number;
    // this.superHeros$.subscribe(
    //   resp => newState = resp
    // );
    // index = newState.indexOf(name);
    // newState.splice(index, 1);
    // this.superHeros.next(newState);
  }
}
