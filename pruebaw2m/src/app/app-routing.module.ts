import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:
      '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:
      'create',
      loadChildren: () => import('./pages/create-edit-super-hero/create-edit-super-hero.module').then(m => m.CreateEditSuperHeroModule)
  },
  {
    path:
      'edit/:id',
      loadChildren: () => import('./pages/create-edit-super-hero/create-edit-super-hero.module').then(m => m.CreateEditSuperHeroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
