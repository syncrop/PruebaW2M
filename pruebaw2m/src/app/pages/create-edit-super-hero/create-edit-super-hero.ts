import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';

@Component({
  selector: 'app-create-edit-super-hero',
  templateUrl: './create-edit-super-hero.html',
  styleUrls: ['./create-edit-super-hero.scss']
})
export class CreateEditSuperHeroComponent implements OnInit {
  title: string = "Introduce un nuevo Super Heroe";
  superHero: SuperHero;

  constructor(
    private superHeroService: SuperHeroService,
    private router: Router
  ) {
    this.superHero = {
      id: null,
      name: "",
      description: ""
    }
  }

  ngOnInit(): void {
    if(this.router.url.split('/')[1]==='edit'){
      let id = +this.router.url.split('/')[2];
      this.title = 'Editar Super Heroe';
      this.superHero = this.superHeroService.getSuperHeroById(id);
    }
  }


  addSuperHero(newSuperHero: SuperHero) {
    this.router.url.split('/')[1]==='edit'?this.superHeroService.putSuperHero(newSuperHero):this.superHeroService.setSuperHero(newSuperHero);
  }

}
