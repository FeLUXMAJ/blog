/* Created by Aquariuslt on 2017-02-26.*/


import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'angular-ui-router';


import coreModule from  './core';
angular.module('site',[
  'ngAnimate',
  'ngCookies',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'ui.router',

  coreModule
]);






