import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { SuperHeroService } from 'src/app/shared/services/super-hero-service.service';
import { MatDialog } from "@angular/material/dialog";
import { SureDialogComponent } from 'src/app/shared/components/sure-dialog/sure-dialog.component';
import { SuperHero } from 'src/app/shared/interfaces/super-hero';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent} from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/model/app-state.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  superHeros$ = new Observable<Array<SuperHero>>();
  superHeroLength:number
  search:string='';
  totalPages: number;
  currentPage: number = 1;
  pageEvent: PageEvent;

  heroItems$: Observable<Array<SuperHero>>;


  form = this.formBuilder.group({
    filter: ''
  });

  constructor(
    private superHeroService: SuperHeroService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
    ){}

  ngOnInit():void{
    this.heroItems$ = this.store.select(store => store.hero);
    console.log(this.heroItems$)
    this.getServerData();
  }

  getServerData(event?:PageEvent){
    if(event){
      this.currentPage=event.pageIndex+1
    }
    let lastElement = this.currentPage*5;

    this.superHeros$ = this.superHeroService.superHeros$.pipe(
      map( heroes => heroes.filter(
        h => {
          let searchN: number;
          this.search!==''?searchN = +this.search:null;
          if(!isNaN(searchN)){
            return h.id===searchN;
          }
          return h.name.toLowerCase().includes(this.search.toLowerCase())
        }
      )),
      map((resp) => {
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

  keyup(event){
    this.getServerData()
  }

}
