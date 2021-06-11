import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditSuperHeroComponent } from './create-edit-super-hero';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateEditSuperHeroComponentRoutingModule } from './create-edit-super-hero-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CreateEditSuperHeroComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateEditSuperHeroComponentRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CreateEditSuperHeroModule { }
