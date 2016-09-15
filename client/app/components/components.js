import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Statistic from './statistic/statistic';
import Search from './search/search';
import Userlist from './userlist/userlist';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Statistic,
  Search,
  Userlist
])
 .name;

export default componentModule;
