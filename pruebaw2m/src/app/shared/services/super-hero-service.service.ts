import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private superHeros = new BehaviorSubject<Array<string>>(['Spiderman', 'Batman']);

  public superHeros$ = this.superHeros.asObservable();

  constructor() { }

  setSuperHero(){

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
    console.log(name)
    this.superHeros.pipe(filter(s => !s.includes(name)));
    console.log(this.superHeros)
  }
}
