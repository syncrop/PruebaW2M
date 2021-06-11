import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  initialArray:Array<SuperHero>  = [{ id:0, name:'Batman', description:'Hombre murcielago' }, { id:1, name:'Spiderman', description:'Hombre araña' }];
  private superHeros = new BehaviorSubject<Array<SuperHero>>(this.initialArray);

  public superHeros$ = this.superHeros.asObservable();

  constructor() {}

  setSuperHero(superHero: SuperHero){
    let newState : Array<SuperHero>;
    this.superHeros$.subscribe(
      resp => newState = resp
    );

    // this.loginApiService.login(user, pass).pipe(
    //   tap(({ token }) => localStorage.setItem('token', token)),
    //   switchMap(({ token }) => this.userApiService.getUser(token))
    // ).subscribe(user => console.log(user));

    // const suscription = this.superHeros.pipe(
    //   filter(heroes => heroes.length > 0),
    //   map(heroes => heroes.filter(({ id }) => id % 2 === 0)),
    //   tap(result => console.log(result)),
    //   mapTo(null),
    //   switchMap(result => new Observable<string>(observer => observer.next('asdasd')))

    // ).subscribe(result => console.log(result));

    const prevHeroes = this.superHeros.getValue();
    superHero.id = newState[newState.length-1].id+1;
    newState.push(superHero);
    this.superHeros.next(newState);
  }


  getSuperHerosByValue(value:string){

  }

  getSuperHeroById(id:number, find?:boolean): SuperHero{
    let sh:SuperHero[];
    this.superHeros$.subscribe(
      resp => sh = resp.filter( e => e.id === id)
    )
    // if(find){
    //   this.superHeros.next(sh);
    // }
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
