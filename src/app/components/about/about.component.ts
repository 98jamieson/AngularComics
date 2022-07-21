import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _heroesService: HeroesService ) { }

  heroes: any[]=[]

  ngOnInit(): void {
    this.heroes= this._heroesService.getheroines();
    
  }

  


}
