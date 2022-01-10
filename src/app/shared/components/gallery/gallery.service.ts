import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/pages/productos/card/card.model';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  id:string = '5d426cab'
  key:string='9a2e84e7926a317164daa2b492d50b60'

  //  url: string = `https://api.edamam.com/search?app_id=${this.id}&app_key=${this.key}&q=pizza`
  // url : string = 'https://rickandmortyapi.com/api/character'
  // url : string = 'https://api.fbi.gov/wanted/v1/list'
  // url : string = 'https://www.freetogame.com/api/games'
  url :string ='https://free-to-play-games-database.p.rapidapi.com/api/games'
  // url : string = 'https://rawg.io/apidocs'
  // url : string = 'https://reqres.in/'
  constructor(private recuest:HttpClient) { }




  getDatos(): Observable<any>{
    const llamada = this.recuest.get(this.url, {
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "7a0621990amsh0ea4235e01cda10p17189cjsn89d523833b3b"
      }})
    // console.log('primero',llamada)
      return llamada
  }


}
