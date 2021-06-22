import { Action } from "@ngrx/store";
import { SuperHero } from "src/app/shared/interfaces/super-hero";

export enum HerosActionTypes {
  ADD_HERO = '[Hero] Add Hero',
  DELETE_HERO = '[Hero] Delete Hero',
  UPDATE_HERO = '[Hero] Update Hero'
}

export class AddHeroAction implements Action {
  readonly type = HerosActionTypes.ADD_HERO;

  constructor(public payload: SuperHero){ }
}

export class DeleteHeroAction implements Action {
  readonly type = HerosActionTypes.DELETE_HERO;

  constructor(public payload: SuperHero){ }
}

export class UpdateHeroAction implements Action {
  readonly type = HerosActionTypes.UPDATE_HERO;

  constructor(public payload: SuperHero){ }
}

export type HeroAction = AddHeroAction
  | DeleteHeroAction
  | UpdateHeroAction;
