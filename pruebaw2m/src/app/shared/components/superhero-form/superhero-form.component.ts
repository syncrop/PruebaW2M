import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
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
  @Input() superHero: SuperHero;
  form:FormGroup;
  button="add_circle_outline";

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) {  }

  ngOnInit(): void {
    this.superHero.name !== ''?this.button='edit':null;
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
