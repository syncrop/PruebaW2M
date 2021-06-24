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
  let newList;
  switch(action.type) {
    case HerosActionTypes.ADD_HERO:
      newList = [...state,
        {
          id: state.length,
          name: action.payload.name,
          description: action.payload.description
        }];
      localStorage.setItem('superheros', JSON.stringify(newList))
      return newList;

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
      newList = state.map(item => item.id===action.payload.id?action.payload:item);
      localStorage.setItem('superheros', JSON.stringify(newList));
      return newList;

    case HerosActionTypes.DELETE_HERO:
      newList = state.filter(item => item.id !== action.payload);
      localStorage.setItem('superheros', JSON.stringify(newList))
      return newList;

    case HerosActionTypes.GET_HERO:
      return state.find(item => item.id===action.payload);

    default:
      let lc = JSON.parse(localStorage.getItem('superheros'));
      if(!lc){
        localStorage.setItem('superheros', JSON.stringify(initialState));
        lc = initialState;
      }
      state = lc;
      return state;
  }
}
