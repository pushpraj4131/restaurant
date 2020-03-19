import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
@Component({
	selector: 'app-select-restaurant',
	templateUrl: './select-restaurant.component.html',
	styleUrls: ['./select-restaurant.component.css']
})
export class SelectRestaurantComponent implements OnInit {
	allRestaurant:any;
	constructor(public _restaurantService: RestaurantService) { }

	ngOnInit() {
		this._restaurantService.getAllRestaurant().subscribe((res)=>{
			console.log("restaurant response ==>", res);
			this.allRestaurant = res;
		}, (err) => {
			console.log("error in restaurant ===>", err);
		})
	}

}
