import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditSuperHeroComponent } from './create-edit-super-hero';


const routes: Routes = [
  {
    path: '',
    component: CreateEditSuperHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditSuperHeroComponentRoutingModule {}
