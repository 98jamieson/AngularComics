import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroheroesComponent } from './filtroheroes.component';

describe('FiltroheroesComponent', () => {
  let component: FiltroheroesComponent;
  let fixture: ComponentFixture<FiltroheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroheroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
