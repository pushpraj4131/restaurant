import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { config } from '../congif'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(public _http: HttpClient ) { }

  getAllRestaurant(){
  	return this._http.get(config.baseApiUrl+'restaurant/get-restaurants');
  }
  getRestaurantById(id){
  	return this._http.get(config.baseApiUrl+'restaurant/get-restaurant-by-id/'+id);
  }
  
}
