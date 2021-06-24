import { Action } from "@ngrx/store";
import { SuperHero } from "src/app/shared/interfaces/super-hero";

export enum HerosActionTypes {
  GET_HERO = '[Hero] Load Hero',
  GET_HERO_SUCCESS = '[Hero] Load Hero Success',
  GET_HERO_FAILURE = '[Hero] Load Hero Failure',
  ADD_HERO = '[Hero] Add Hero',
  ADD_HERO_SUCCESS = '[Hero] Add Hero Success',
  ADD_HERO_FAILURE = '[Hero] Add Hero Failure',
  DELETE_HERO = '[Hero] Delete Hero',
  DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success',
  DELETE_HERO_FAILURE = '[Hero] Delete Hero Failure',
  UPDATE_HERO = '[Hero] Update Hero',
  UPDATE_HERO_SUCCESS = '[Hero] Update Hero Success',
  UPDATE_HERO_FAILURE = '[Hero] Update Hero Failure',
}
export class AddHeroAction implements Action {
  readonly type = HerosActionTypes.ADD_HERO;

  constructor(public payload: SuperHero){ }
}
export class AddHeroSuccessAction implements Action {
  readonly type = HerosActionTypes.ADD_HERO_SUCCESS;

  constructor(public payload: SuperHero){ }
}
export class AddHeroFailureAction implements Action {
  readonly type = HerosActionTypes.ADD_HERO_FAILURE;

  constructor(public payload: Error){ }
}
export class DeleteHeroAction implements Action {
  readonly type = HerosActionTypes.DELETE_HERO;

  constructor(public payload: number){ }
}
export class DeleteHeroSuccessAction implements Action {
  readonly type = HerosActionTypes.DELETE_HERO_SUCCESS;

  constructor(public payload: number){ }
}
export class DeleteHeroFailureAction implements Action {
  readonly type = HerosActionTypes.DELETE_HERO_FAILURE;

  constructor(public payload: Error){ }
}
export class GetHeroAction implements Action {
  readonly type = HerosActionTypes.GET_HERO;
}
export class GetHeroSuccessAction implements Action {
  readonly type = HerosActionTypes.GET_HERO_SUCCESS;

  constructor(public payload: Array<SuperHero>){ }
}
export class GetHeroFailureAction implements Action {
  readonly type = HerosActionTypes.GET_HERO_FAILURE;

  constructor(public payload: Error){ }
}
export class UpdateHeroAction implements Action {
  readonly type = HerosActionTypes.UPDATE_HERO;

  constructor(public payload: SuperHero){ }
}

export type HeroAction = AddHeroAction
  | AddHeroSuccessAction
  | AddHeroFailureAction
  | DeleteHeroAction
  | DeleteHeroSuccessAction
  | DeleteHeroFailureAction
  | UpdateHeroAction
  | GetHeroAction
  | GetHeroSuccessAction
  | GetHeroFailureAction;
