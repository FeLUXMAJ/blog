/** Created by Aquariuslt on 2016-03-19.*/
'use strict';

module.exports = function($stateProvider){
  $stateProvider
    .state('default',{
      url:'',
      templateUrl:'app/home/views/home.html'
    })
    .state('otherwise',{
      url:'*path',
      templateUrl:"app/common/views/not-found.html"
    })
    ;
};