import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  obj1: any = {}

  ngOnInit(): void {
    this.obj1 = this._heroesService.getObj()
    console.log(this.obj1.phrase)
  }


}


