import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperHero } from '../../interfaces/super-hero';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.scss']
})
export class SuperheroFormComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<SuperHero>();
  superHero: SuperHero;
  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) {
    this.superHero = {
      id: null,
      name: "",
      description: ""
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  addName(){
    this.nameEvent.emit(this.superHero);
    this.route.navigateByUrl('/');
  }

}
