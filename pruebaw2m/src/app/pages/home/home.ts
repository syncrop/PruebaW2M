import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';
import { MatDialog } from "@angular/material/dialog";
import { SureDialogComponent } from 'src/app/shared/components/sure-dialog/sure-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  public superHeros$ = new Observable<Array<string>>();

  constructor(
    private superHeroService: SuperHeroService,
    public dialog: MatDialog
  ){}

  ngOnInit():void{
    this.superHeros$ = this.superHeroService.superHeros$;
  }

  openDialog(name:string):void{
    this.dialog
    .open(SureDialogComponent, {
      data: `¿Estas seguro que desea eliminar este super heroe?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        //Elimina el superheroe
        this.superHeroService.deleteSuperHero(name)
      }
    });
  }
}
