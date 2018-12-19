import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SpotifyService {

  constructor(private http: HttpClient) 
  { 
    console.log('listo');
  }

  getQuery(query : string)
  {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders(
      {
        'Authorization' : 'Bearer BQByDxBhpw-sLbdu5fcIKB4-NwbPzvpVhkcpwXuBsR-VKSCy7-37zWtWGbpfv8bnGMV0UfEhLX9B8GP7Xr0'
      });

    return this.http.get(url, { headers });
  }

  getNewReleases()
  {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map ((data) =>
               {
                  return data['albums'].items;
               }));
  }

  getArtistas(termino:String)
  {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe(map ((data) =>
                {
                  return data['artists'].items;
                }));
  }

  getArtista(id:String)
  {
    return this.getQuery(`artist/${ id }`);
                // .pipe(map ((data) =>
                // {
                //   return data['artists'].items;
                // }));
  }

  getTopTracks(id:String)
  {
    return this.getQuery(`artist/${ id }/top-tracks`);
                // .pipe(map ((data) =>
                // {
                //   return data['artists'].items;
                // }));
  }
}
