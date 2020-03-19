import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';


@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	userId:any;
	restaurantInfo:any;
	constructor(public _route: ActivatedRoute,public _restaurantService: RestaurantService) {
		this._route.params.subscribe((params)=>{
			console.log(params);
			this.userId = params.id
		});


	}

	ngOnInit() {
		this.getRestaurantDetails();
	}
	getRestaurantDetails(){
		console.log("user id ==", this.userId);
		this._restaurantService.getRestaurantById(this.userId).subscribe((res)=>{
			console.log("res ===>0", res);
			this.restaurantInfo = res;
		}, (err) => {
			console.log("err in etting restaurant details ", err);
		})
	}
}
