import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
	selector: 'app-shop-owner',
	templateUrl: './shop-owner.component.html',
	styleUrls: ['./shop-owner.component.css']
})
export class ShopOwnerComponent implements OnInit {
	userId:any;

	constructor(public _route: ActivatedRoute) { 
		this._route.queryParams
		.subscribe(params => {
			console.log(params); 
			this.userId = params.userId
		});

	}

	ngOnInit() {
		this.getRestaurantDetails();
		this.getFoodItems();
	}
	getRestaurantDetails(){
		console.log("user id ==", this.userId);
	}
	getFoodItems(){

	}
}
