import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuperHeroService } from './shared/services/super-hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaw2m';

  constructor(

  ){}

  ngOnInit(){

  }

  setSuperHero(){}

}


