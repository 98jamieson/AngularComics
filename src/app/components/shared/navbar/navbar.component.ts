import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(par: string) {
    this.verHeroes(par)
    
  }

  verHeroes(idx: string) {
    this.router.navigate(['/buscar', idx])
  }



}
