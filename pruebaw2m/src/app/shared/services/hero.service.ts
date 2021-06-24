import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperHero } from '../interfaces/super-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private HERO_URL = "http://localhost:3000/heros"

  constructor(private http: HttpClient) { }

  getHeroItems() {
    return this.http.get<Array<SuperHero>>(this.HERO_URL);
  }

  addHeroItem(HeroItem: SuperHero) {
    return this.http.post(this.HERO_URL, HeroItem);
  }

  updateHeroItem(HeroItem: SuperHero) {
    return this.http.put(`${this.HERO_URL}/${HeroItem.id}`, HeroItem);
  }

  deleteHeroItem(id: number) {
    return this.http.delete(`${this.HERO_URL}/${id}`);
  }
}
