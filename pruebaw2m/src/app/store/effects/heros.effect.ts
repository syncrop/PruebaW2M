import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, merge, mergeMap, tap } from "rxjs/operators";
import { HeroService } from "src/app/shared/services/hero.service";
import { AddHeroAction, GetHeroAction, GetHeroFailureAction, GetHeroSuccessAction, HerosActionTypes } from "../actions/heros.action";

@Injectable()
export class HerosEffect {

  constructor(private actions$: Actions, private heroService: HeroService){ }

  @Effect() getHeros$= this.actions$.pipe(
    ofType<GetHeroAction>(HerosActionTypes.GET_HERO),
    mergeMap(
      () => this.heroService.getHeroItems().pipe(
        map(data => new GetHeroSuccessAction(data)),
        catchError(error => of(new GetHeroFailureAction(error)))
      )
    )
  )

}
