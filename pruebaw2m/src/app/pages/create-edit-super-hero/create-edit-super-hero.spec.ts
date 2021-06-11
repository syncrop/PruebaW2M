import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditSuperHeroComponent } from './create-edit-super-hero';

describe('CreateEditSuperHeroComponent', () => {
  let component: CreateEditSuperHeroComponent;
  let fixture: ComponentFixture<CreateEditSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditSuperHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
