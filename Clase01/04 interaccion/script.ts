//Los decoradores
import {NgModule, Component, Input, Output, EventEmitter} from "@angular/core"
//Administra los servicios, directivas y otros de Angular
import {BrowserModule} from "@angular/platform-browser"

//Cargador del módulo inicial
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

class Libro {
  titulo:string
  resena:string
  autor:string
  visible:boolean
  
  constructor(titulo, resena, autor){
    this.titulo = titulo
    this.resena = resena
    this.autor = autor
    this.visible = false
  }
  
  cambiarVisibilidad(){
    this.visible = !this.visible
  }
}

@Component({
  selector: "libro-form",
  template: `
    <h2>Insertar</h2>
    <form>
      <div class="form-group">
        <input type="text" placeholder="Título" class="form-control" #titulo> 
      </div>
      <div class="form-group">
        <input type="text" placeholder="Reseña" class="form-control" #resena> 
      </div>
      <div class="form-group">
        <input type="text" placeholder="Autor" class="form-control" #autor> 
      </div>
      <a href="#" class="btn btn-primary" (click)="crear(titulo.value, resena.value, autor.value)">Insertar</a>
    </form>
  `
})
class LibroFormComponent{
  @Output() libroCreado = new EventEmitter<Libro>()
  
  crear(titulo, resena, autor) {
    this.libroCreado.emit(new Libro(titulo, resena, autor))
  }
}


@Component({
  selector: "libro",
  template: `
    <div class="panel panel-success">
      <div class="panel-heading">
        <h2>{{libro.titulo}}</h2>
      </div>
      <a href="#" (click)="libro.cambiarVisibilidad()" class="btn btn-success">Mostrar/Ocultar</a>
      <p [hidden]="!libro.visible">{{libro.resena}}</p>
      <small>{{libro.autor}}</small>
      
    </div>
  `
})
class LibroComponent {
  @Input("book") libro:Libro
}


@Component({
  selector: "libro-lista",
  template: `
    <libro-form (libroCreado)="agregar($event)"></libro-form>
    <libro *ngFor="let libro of libros" [book]="libro"></libro>`
})
class LibroListaComponent {
  //libros:Object[]
  libros:Array<Libro>
  
  constructor(){
    this.libros = [
      new Libro("El Perfume", "La historia de un asesino que mata mujeres para robar sus aromas", "Patrick Suskind"),
      new Libro("El Caballero Carmelo","Narra la historia de un gallo viejo que da su ultima pelea","Abraham Valdelomar"),
      new Libro("Los Simallirion","Es la historia anterior al Hobbit. Narra la historia de la creacion del mundo","Tolkien")
    ]
  }
  
  agregar(libro:Libro){
    this.libros.unshift(libro)
  }
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LibroListaComponent, 
    LibroComponent,
    LibroFormComponent
  ],
  bootstrap: [
    LibroListaComponent  
  ]
})
class AppModule {
  
}

platformBrowserDynamic().bootstrapModule(AppModule)