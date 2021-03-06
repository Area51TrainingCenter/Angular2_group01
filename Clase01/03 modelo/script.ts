//Los decoradores
import {NgModule, Component} from "@angular/core"
//Administra los servicios, directivas y otros de Angular
import {BrowserModule} from "@angular/platform-browser"

//Cargador del módulo inicial
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({
  selector: "libro",
  template: `
    <div class="panel panel-success" *ngFor="let libro of libros">
      <div class="panel-heading">
        <h2>{{libro.titulo}}</h2>
      </div>
      <a href="#" (click)="cambiarVisibilidad(libro)" class="btn btn-success">Mostrar/Ocultar</a>
      <p [hidden]="!libro.visible">{{libro.resena}}</p>
      <small>{{libro.autor}}</small>
      
    </div>
  `
})
class LibroComponent {
  //libros:Object[]
  libros:Array<Object>
  
  constructor(){
    this.libros = [
      {
        titulo: "El Perfume",
        resena: "La historia de un asesino que mata mujeres para robar sus aromas",
        autor: "Patrick Suskind",
        visible: false
      },
      {
        titulo: "El Caballero Carmelo",
        resena: "Narra la historia de un gallo viejo que da su ultima pelea",
        autor: "Abraham Valdelomar",
        visible:false
      },
      {
        titulo: "Los Simallirion",
        resena: "Es la historia anterior al Hobbit. Narra la historia de la creacion del mundo",
        autor: "Tolkien",
        visible: false
      }
    ]
  }

  cambiarVisibilidad(libro:any){
    libro.visible = !libro.visible
  }
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LibroComponent  
  ],
  bootstrap: [
    LibroComponent  
  ]
})
class AppModule {
  
}

platformBrowserDynamic().bootstrapModule(AppModule)