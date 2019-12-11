import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html"
})

/*Input indicate that we are receiving properties 
from outside of the component*/
export class HeroeTarjetaComponent implements OnInit {
  //we can send argunemts to this component, using @Input() condecorator

  @Input() props: any = {};
  @Input() index: number;

  /*observable que el padre va a estar escuchando, 
  tipo de informacion que va a emitir la funcion
  -Generar un evento desde el Componente Hijo y que el Componente padre lo este escuchando y haga algo con ese evento 
  e informacion que le estas mandando
  */
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit() {}

  verHeroe() {
    this.router.navigate(["/heroe-detail", this.index]);

    //Output, EventEmitte
    //this.heroeSeleccionado.emit(this.index);
  }
}
