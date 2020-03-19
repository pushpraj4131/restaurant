
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const app = express();




const userModel = require('../models/user.model');
const restaurantModel = require('../models/restaurant.model');
var restaurantController = {};

restaurantController.getAllRestaurants = (req, res)=>{
	restaurantModel.find()
	.exec((err, foundRestaurants) => {
		if(err){
			res.send(err)
		}
		else{
			res.send(foundRestaurants)
		}
	})
}
restaurantController.getRestaurantById = (req, res)=>{
	restaurantModel.findOne({_id : req.params.id})
	.exec((err, foundRestaurants) => {
		if(err){
			res.send(err)
		}
		else{
			res.send(foundRestaurants)
		}
	})
}


module.exports = restaurantController;