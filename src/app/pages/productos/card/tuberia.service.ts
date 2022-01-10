import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class TuberiaService {


  private information:BehaviorSubject<any>=new BehaviorSubject(null);
  public list:any[]=[]

    constructor() { }

    getInfo(): Observable<any>{
      return this.information.asObservable();
    }

    sendInfo(information:any): void{
      this.list.push(information)
      this.information.next(information)
    }





}
