import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable } from 'rxjs';
import { map, take, tap, withLatestFrom } from 'rxjs/operators';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';
import { MatDialog } from "@angular/material/dialog";
import { SureDialogComponent } from 'src/app/shared/components/sure-dialog/sure-dialog.component';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  superHeros$ = new Observable<Array<SuperHero>>();
  form = this.formBuilder.group({
    filter: ''
  });

  constructor(
    private superHeroService: SuperHeroService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
    ){}

    ngOnInit():void{
    this.superHeros$ = this.superHeroService.superHeros$;

    const pagination$ = this.superHeros$.pipe(
      map(heros => ({
        currentPage: 1,
        totalPages: Math.ceil(heros.length / 10)
      }))
    );

    this.form.get('filter').valueChanges.subscribe(
      resp => console.log(resp)
    )

    pagination$.subscribe(
      resp => console.log(resp)
    )

    const heroesToShow$ = this.superHeros$.pipe(
      withLatestFrom(this.form.get('filter').valueChanges),
      withLatestFrom(pagination$),
      map(([heroes, filter]) => {
        return "hola"
      })
    );

    const subscribe = heroesToShow$.subscribe(val => console.log(val))

    const source = interval(5000);
    //emit every 1s
    const secondSource = interval(1000);
    const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );

    const result = example.subscribe(val => console.log(val));


  }

  openDialog(id:number):void{
    this.dialog
    .open(SureDialogComponent, {
      data: `¿Estas seguro que desea eliminar este super heroe?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.superHeroService.deleteSuperHero(id)
      }
    });
  }

}
