import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from "rxjs/operators";
import { SuperHeroService } from "src/app/shared/services/super-hero-service.service";
import { AddHeroAction, HerosActionTypes } from "../actions/heros.action";

@Injectable()
export class HerosEffect {

  constructor(private actions$: Actions, private superHeroService: SuperHeroService){ }



}
