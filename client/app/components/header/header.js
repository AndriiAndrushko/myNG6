import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerComponent from './header.component';

let aboutModule = angular.module('header', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('header', {
      url: '/header',
      component: 'header'
    });
})

.component('header', headerComponent)
  
.name;

export default headerModule;
