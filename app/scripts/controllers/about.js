'use strict';

/**
 * @ngdoc function
 * @name kickstartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kickstartApp
 */
angular.module('kickstartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
