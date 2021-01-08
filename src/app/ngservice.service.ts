import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchFlightListFromRemote():Observable<any>{
    return this._http.get("locahost:8088/getflightlist");
  }
    
}
