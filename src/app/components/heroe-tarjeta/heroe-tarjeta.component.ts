//import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe: any;
  @Input() index!: number;
  @Output() heroeSeleccionado = new EventEmitter<number>();



  constructor(private router: Router) {
    this.heroeSeleccionado= new EventEmitter<number>();

  }

  ngOnInit(): void {
    console.log(this.heroe)
  }

  verHeroe() {
    this.router.navigate(['/heroe',this.index])
 
  }

}
