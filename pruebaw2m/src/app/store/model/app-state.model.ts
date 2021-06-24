import { HeroState } from "../reducers/heros.reducer";

export interface AppState {
  readonly hero: HeroState
};
