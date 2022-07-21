import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  constructor() { console.log('ready to use') }

  private textHome={
    phrase: "“With great power comes great responsibility”",
    author: "Stan Lee"
  }

  public getObj(){
    return this.textHome;
  }
  
  

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/recursos/aquaman.png",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/recursos/batman.png",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/recursos/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/recursos/hulk.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/recursos/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/recursos/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/recursos/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  private heroins: Heroin[]=[
    {
      nombre: "Wonder Woman",
      historia: "diciembre 1948 ",
      poderes: "Posee fuerza, velocidad, inmortalidad (como diosa que es), la habilidad de volar, brazaletes que desvían balas, un lazo mágico que obliga a cualquier persona sujeta a él a decir la verdad, y una tiara boomerang que puede cortar el diamante.",
      personalidad:"Inteligente, polifacética, compasiva y con la enorme capacidad de adaptarse a cualquier tipo de situación.",
      img: "assets/recursos/wonder.woman.jpg"
    },
    {
      nombre: "Catwoman",
      historia: "Junio 1940 ",
      poderes: "desarrolló la capacidad de absorber recuerdos, habilidades, personalidades y características físicas a través del contacto de su piel con la de la víctima",
      personalidad:"su personalidad alegre, descarada y pícara le hace tener un carisma especial.",
      img: "assets/recursos/catwoman.jpg"

    },
    {
      nombre: "Batgirl",
      historia: "Enero 1967",
      poderes: "una excelente combatiente cuerpo a cuerpo, atleta, literata, dotada de una gran inteligencia.",
      personalidad:"Luchadora, inteligente, altruista y no vengativa",
      img: "assets/recursos/batgirl.jpg"

    },
    {
      nombre: "Supergirl",
      historia: "Mayo 1959",
      poderes: "Fuerza sobrehumana, vuelo, visión calorífica y de rayo X, potenciada capacidad de oír, súper aliento congelante y súper velocidad.",
      personalidad:"Soñadora, ingenua, inmadura, tierna, dispuesta a aprender y con una motivación muy clara, ser cada día mejor heroína.",
      img: "assets/recursos/supergirl.jpg" 
    },
    {
      nombre: "Emma Frost",
      historia: "Enero 1980",
      poderes: "puede leer mentes, manipular recuerdos, controlar a la gente, inducir parálisis, proyectar rayos mentales, crear ilusiones, y hacer uso de la proyección astral",
      personalidad:"carismática, calculadora, exuberante, y a ojos de los demás muy fría pero con lapsus de sensibilidad que muestran su parte más humana.",
      img: "assets/recursos/Emma.frost.jpg" 
    },
    {
      
        nombre: "Rogue",
        historia: "Agosto 1981",
        poderes: "nna Marie es una mutante nacida con una estructura genética que le concede habilidades especiales que la diferencian de los seres humanos. Con la adolescencia desarrolló la capacidad de absorber recuerdos, habilidades, personalidades y características físicas a través del contacto de su piel con la de la víctima",
        personalidad:"su personalidad alegre, descarada y pícara le hace tener un carisma especial.",
        img: "assets/recursos/Rogue.jpg" 
      
    }


  ]
 
  getheroines(){
    return this.heroins
  }


  getHeroes() {

    return this.heroes

  }

  getheroe(indice: number) {
    let heroe;
    for (let i = 0; i < this.heroes.length; i++) {
      this.heroes[i].idx=i
      if(this.heroes[i].idx==indice){
        heroe=this.heroes[i];
      }
    }
    return heroe
    
  }

  buscarHeroes(term: string) {

    term = term.toLowerCase();

    let heroesArray: Heroe[] = [];

    for (let i = 0; i < this.heroes.length; i++) {


      let heroe = this.heroes[i];
      heroe.idx = i;

      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(term) >= 0) {
        heroesArray.push(heroe);

      }

    }
    return heroesArray;
  }





}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;

}

export interface Heroin{
  nombre: string,
  historia: string;
  poderes: string;
  personalidad: string;
  img: string;

}