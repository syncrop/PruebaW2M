import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable } from 'rxjs';
import { filter, map, take, tap, withLatestFrom } from 'rxjs/operators';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';
import { MatDialog } from "@angular/material/dialog";
import { SureDialogComponent } from 'src/app/shared/components/sure-dialog/sure-dialog.component';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  superHeros$ = new Observable<Array<SuperHero>>();
  superHeroLength:number
  search:string;
  totalPages: number;
  currentPage: number = 1;
  pageEvent: PageEvent;


  form = this.formBuilder.group({
    filter: ''
  });

  constructor(
    private superHeroService: SuperHeroService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
    ){}

  ngOnInit():void{
    this.getServerData();
  }

  getServerData(event?:PageEvent){
    if(event){
      this.currentPage=event.pageIndex+1
    }
    let lastElement = this.currentPage*5;

    this.superHeros$ = this.superHeroService.superHeros$.pipe(
      // withLatestFrom(this.form.get('filter').valueChanges.pipe(
      //   map(val => ({name: keyframes, value: val})),
      //   tap(val => console.log(val))
      // )),
      // withLatestFrom(filtro),
      map((resp) => {
        // resp = resp.filter(item => item.name.search(new RegExp(search, 'i')) > -1);
        this.superHeroLength=resp.length;
        resp = resp.slice(lastElement-5,lastElement);
        return resp;
      })
    );

    return event;
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
