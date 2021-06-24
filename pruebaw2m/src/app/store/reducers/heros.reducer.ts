import { SuperHero } from "src/app/shared/interfaces/super-hero";
import { HeroAction , HerosActionTypes } from "../actions/heros.action";

export interface HeroState {
  list: SuperHero[],
  loading: boolean,
  error: Error
}

const initialState: HeroState =  {
  list: [],
  loading: false,
  error: undefined
};

export function HeroReducer(state: HeroState = initialState, action: HeroAction) {
  switch(action.type) {
    case HerosActionTypes.GET_HERO:
      return {
        ...state,
        loading: true
      };
    case HerosActionTypes.GET_HERO_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case HerosActionTypes.GET_HERO_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case HerosActionTypes.ADD_HERO:
      return {
        ...state,
        loading: true
      };
    case HerosActionTypes.ADD_HERO_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case HerosActionTypes.ADD_HERO_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };


    case HerosActionTypes.UPDATE_HERO:
      // const suscription = this.superHeros$.pipe(
      //   filter(heroes => heroes.length > 0),
      //   switchMap(heroes => new Observable<SuperHero[]>(obs => {
      //     let index = heroes.findIndex(item => item.id === superHero.id);
      //     heroes[index] = superHero;
      //     return obs.next(heroes);
      //   })),
      //   tap(heroes => localStorage.setItem('superheros', JSON.stringify(heroes)))
      // ).subscribe()
      // newList = state.map(item => item.id===action.payload.id?action.payload:item);
      // localStorage.setItem('superheros', JSON.stringify(newList));
      return {
        ...state,
        loading: true
      };
    case HerosActionTypes.UPDATE_HERO_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case HerosActionTypes.UPDATE_HERO_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case HerosActionTypes.DELETE_HERO:
      // localStorage.setItem('superheros', JSON.stringify(newList))
      return {
        ...state,
        loading: true
      };
    case HerosActionTypes.DELETE_HERO_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case HerosActionTypes.DELETE_HERO_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    // case HerosActionTypes.GET_HERO:
    //   return state.find(item => item.id===action.payload);

    default:
      // let lc = JSON.parse(localStorage.getItem('superheros'));
      // if(!lc){
      //   localStorage.setItem('superheros', JSON.stringify(initialState));
      //   lc = initialState;
      // }
      // state = lc;
      return state;
  }
}
