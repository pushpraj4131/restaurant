const express = require('express');
const restaurantController = require('../controller/restaurant.controller');

var router = express.Router();





router.get('/get-restaurants', restaurantController.getAllRestaurants);
router.get('/get-restaurant-by-id/:id', restaurantController.getRestaurantById);
// router.post('/signup-shop', userController.signUpShop);
// router.post('/login-user' , userController.loginUser);
// router.post('/login-shop' , userController.loginShop);
// router.get('/get-all-client' , userController.getAllClient);
// router.post('/get-client-by-id/:id' , userController.getClientById);
// router.put('/update-client-by-id', upload ,userController.updateClientById);
// router.post('/delete-client-by-id/:id' , userController.deleteClientById);

// router.post('/delete-client-without-invoice/:id', userController.deleteUserWithoutInvoice);
module.exports = router;