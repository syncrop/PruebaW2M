import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';

@Component({
  selector: 'app-create-edit-super-hero',
  templateUrl: './create-edit-super-hero.html',
  styleUrls: ['./create-edit-super-hero.scss']
})
export class CreateEditSuperHeroComponent implements OnInit {

  constructor(
    private superHeroService: SuperHeroService
  ) { }

  ngOnInit(): void {
    console.log("Ee");
  }


  addSuperHero(newSuperHero: SuperHero) {
    this.superHeroService.setSuperHero(newSuperHero);
  }

}
