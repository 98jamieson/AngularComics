import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any={}
  show: boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router
    ) { 

    this.activatedRoute.params.subscribe(params=>{
      this.heroe= this._heroesService.getheroe(params['id'])
    })

  }

  ngOnInit(): void {
    if(this.heroe.casa =="Marvel"){
      this.show=true
    }
  }


  regresar(){
    this.router.navigate(['/heroes'])
  }




}
