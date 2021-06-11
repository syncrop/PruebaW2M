import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroFormComponent } from './components/superhero-form/superhero-form.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SureDialogComponent } from './components/sure-dialog/sure-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuperheroFormComponent, SureDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[SuperheroFormComponent, SureDialogComponent],
  providers:[]
})
export class SharedModule { }
