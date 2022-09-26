const express = require('express');
const HomeController = require('../controller/HomeController')

const Router = express.Router();
Router.get('/',HomeController.home);
Router.get('/post',HomeController.post);
Router.get('/about',HomeController.about);

module.exports = Router;