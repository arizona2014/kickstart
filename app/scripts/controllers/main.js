'use strict';

/**
 * @ngdoc function
 * @name kickstartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kickstartApp
 */
angular.module('kickstartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
