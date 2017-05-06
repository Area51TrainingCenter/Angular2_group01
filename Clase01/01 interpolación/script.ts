//Los decoradores
import {NgModule, Component} from "@angular/core"
//Administra los servicios, directivas y otros de Angular
import {BrowserModule} from "@angular/platform-browser"

//Cargador del módulo inicial
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({
  selector: "libro",
  template: `
    <h2>{{titulo}}</h2>
    <p>{{resena}}</p>
    <small>{{autor}}</small>
  `
})
class LibroComponent {
  titulo:string = "El Perfume"
  autor:string = "Patrick Suskind"
  resena:string = "Cuenta la historia de un asesino de mujeres que les roba el aroma"
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