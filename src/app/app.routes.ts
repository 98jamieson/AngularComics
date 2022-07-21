import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HomeComponent } from "./components/home/home.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { FiltroheroesComponent } from "./components/filtroheroes/filtroheroes.component";

const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'buscar/:id', component:FiltroheroesComponent},
    { path: '**', pathMatch: 'full', redirectTo:'' }

  ];

  export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES)
  