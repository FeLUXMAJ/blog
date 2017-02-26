/* Created by Aquariuslt on 2017-02-26.*/

function locationConfig($locationProvider){
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(false);
}

export default locationConfig;