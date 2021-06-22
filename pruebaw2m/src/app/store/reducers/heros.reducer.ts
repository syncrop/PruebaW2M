import { SuperHero } from "src/app/shared/interfaces/super-hero";
import { HeroAction , HerosActionTypes } from "../actions/heros.action";

export interface ShoppingState {
  list: SuperHero[],
  loading: boolean,
  error: Error
}

const initialState: Array<SuperHero> =  [
  { id:0, name:'Batman', description:'Hombre murcielago' },
  { id:1, name:'Spiderman', description:'Hombre araña' },
  { id:2, name:'Capitán America', description:'Super soldado americano' },
  { id:3, name:'Iron Man', description:'Hombre de hierro' },
  { id:4, name:'Hulk', description:'Cientifico y fundador de los vengadores' },
  { id:5, name:'Thor', description:'Excelente combatiente cuerpo a cuerpo' },
];

export function HeroReducer(state: Array<SuperHero> = initialState, action: HeroAction) {
  switch(action.type) {
    case HerosActionTypes.ADD_HERO:
      console.log(HerosActionTypes.ADD_HERO);
      return [...state, action.payload];

    case HerosActionTypes.UPDATE_HERO:
      console.log(HerosActionTypes.UPDATE_HERO);
      return [...state, action.payload];

    case HerosActionTypes.DELETE_HERO:
      console.log(HerosActionTypes.DELETE_HERO);
      return [...state, action.payload];

    default:
      return state;
  }
}
