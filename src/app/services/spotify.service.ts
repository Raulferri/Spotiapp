import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SpotifyService {

  constructor(private http: HttpClient) 
  { 
    console.log('listo');
  }

  getNewReleases()
  {
    const headers = new HttpHeaders(
    {
      'Authorization' : 'Bearer BQD4LWbV8woOwJx0jq_hdKxEuzc9wBR_3BDNByVTxbo0pfEHFe--xP2yOXdDf2iKWZt5_ya5GISOvxV_gVw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
