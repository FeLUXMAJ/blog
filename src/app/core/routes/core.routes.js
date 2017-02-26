/* Created by Aquariuslt on 2017-02-26.*/
import * as  homeView from "../views/home.html";

function coreRoutes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: homeView
    })
    .state('same-as-home', {
      url: '/',
      template: homeView
    })
}

export default coreRoutes;