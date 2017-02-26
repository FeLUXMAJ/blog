/* Created by Aquariuslt on 2017-02-26.*/
import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'angular-ui-router';


import coreRoutes from './routes/core.routes';
import locationConfig from './configs/location.config';


const coreModuleName = 'core';
angular.module(coreModuleName,[
  'ngAnimate',
  'ngCookies',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'ui.router'
])
  .config(locationConfig)
  .config(coreRoutes)

;

export default coreModuleName;


