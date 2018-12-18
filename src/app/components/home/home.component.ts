import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent
{
  //paises: any[] = [];

  nuevasCanciones: any[] = [];

  //constructor( private http: HttpClient ) 
  constructor(private spotify: SpotifyService)
  { 
    //loading
    
    this.spotify.getNewReleases()
        .subscribe((data: any) => 
        {
          console.log(data);
          this.nuevasCanciones = data;
        });
    /*console.log('Constructor del Home Hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((respuesta:any) => //Lambda
    {
      this.paises = respuesta;
      console.log(respuesta);
    })*/
  }
}
