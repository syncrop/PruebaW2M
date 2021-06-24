import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { HeroReducer } from './store/reducers/heros.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HerosEffect } from './store/effects/heros.effect';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    StoreModule.forRoot({hero: HeroReducer}),
    EffectsModule.forRoot([HerosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
