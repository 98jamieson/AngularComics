import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-filtroheroes',
  templateUrl: './filtroheroes.component.html',
  styleUrls: ['./filtroheroes.component.css']
})
export class FiltroheroesComponent implements OnInit {

  heroes: any[] = [];
  termino: string | undefined;



  constructor(private activatedRoute: ActivatedRoute,
            private _heroesService: HeroesService,
            private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['id'];
      this.heroes = this._heroesService.buscarHeroes(params['id'])
      console.log(this.heroes)

    })


  }

  ngOnInit(): void {


  }



  regresar() {
    this.router.navigate(['/heroes'])
  }



  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
