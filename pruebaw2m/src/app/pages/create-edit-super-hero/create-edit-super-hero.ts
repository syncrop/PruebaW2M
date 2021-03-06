import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';
import { AddHeroAction, GetHeroAction, UpdateHeroAction } from 'src/app/store/actions/heros.action';
import { AppState } from 'src/app/store/model/app-state.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-super-hero',
  templateUrl: './create-edit-super-hero.html',
  styleUrls: ['./create-edit-super-hero.scss']
})
export class CreateEditSuperHeroComponent implements OnInit {
  title: string = "Introduce un nuevo Super Heroe";
  superHero: SuperHero;
  superHero$: Observable<SuperHero>;
  id:number = null;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.superHero = {
      id: null,
      name: "",
      description: ""
    }
  }

  ngOnInit(): void {
    if(this.router.url.split('/')[1]==='edit'){
      this.id = +this.router.url.split('/')[2];
      this.title = 'Editar Super Heroe';
      this.superHero$ = this.store.select(store => store.hero.list.find(item => item.id === this.id));
      this.store.dispatch(new GetHeroAction());
      this.superHero$.pipe(
        tap(data => this.superHero=data)
      ).subscribe()
    }
  }


  addSuperHero(newSuperHero: SuperHero) {
    this.id===null?newSuperHero.id = null:newSuperHero.id=this.id;
    this.router.url.split('/')[1]==='edit'?this.store.dispatch(new UpdateHeroAction(newSuperHero)):this.store.dispatch(new AddHeroAction(newSuperHero));
    this.store.select(store => store.hero.list).pipe(tap(data => console.log(data)));
    this.store.dispatch(new GetHeroAction());

  }

}
