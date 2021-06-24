import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { HeroService } from "src/app/shared/services/hero.service";
import { AddHeroAction, AddHeroFailureAction, AddHeroSuccessAction, DeleteHeroAction, DeleteHeroFailureAction, DeleteHeroSuccessAction, GetHeroAction, GetHeroFailureAction, GetHeroSuccessAction, HerosActionTypes } from "../actions/heros.action";

@Injectable()
export class HerosEffect {

  constructor(private actions$: Actions, private heroService: HeroService){ }

  getHeros$ = createEffect(() => this.actions$.pipe(
    ofType<GetHeroAction>(HerosActionTypes.GET_HERO),
    mergeMap(
      () => this.heroService.getHeroItems().pipe(
        map(data => new GetHeroSuccessAction(data)),
        catchError(error => of(new GetHeroFailureAction(error)))
      )
    )
  ))

  addHero$ = createEffect(() => this.actions$.pipe(
    ofType<AddHeroAction>(HerosActionTypes.ADD_HERO),
    mergeMap(
      (data) => this.heroService.addHeroItem(data.payload).pipe(
        map(() => new AddHeroSuccessAction(data.payload)),
        catchError(error => of(new AddHeroFailureAction(error)))
      )
    )
  ))

  deleteHero$ = createEffect(() => this.actions$.pipe(
    ofType<DeleteHeroAction>(HerosActionTypes.DELETE_HERO),
    mergeMap(
      (data) => this.heroService.deleteHeroItem(data.payload).pipe(
        map(() => new DeleteHeroSuccessAction(data.payload)),
        catchError(error => of(new DeleteHeroFailureAction(error)))
      )
    )
  ))

}
