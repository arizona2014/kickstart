'use strict';

/**
 * @ngdoc function
 * @name kickstartApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the kickstartApp
 */
angular.module('kickstartApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
