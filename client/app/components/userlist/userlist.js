import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userlistComponent from './userlist.component';

let userlistModule = angular.module('userlist', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('userlist', {
      url: '/userlist',
      component: 'userlist'
    });
})

.component('userlist', userlistComponent)

  .name;

export default userlistModule;

