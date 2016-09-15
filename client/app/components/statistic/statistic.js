import angular from 'angular';
import uiRouter from 'angular-ui-router';
import statisticComponent from './statistic.component';

let statisticModule = angular.module('statistic', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('statistic', {
      url: '/statistic',
      component: 'statistic'
    });
})

.component('statistic', statisticComponent)
  
.name;

export default statisticModule;
