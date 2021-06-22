import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { HeroReducer } from './store/reducers/heros.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxPaginationModule,
    StoreModule.forRoot({hero: HeroReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
