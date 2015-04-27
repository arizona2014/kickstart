'use strict';

/**
 * @ngdoc function
 * @name kickstartApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the kickstartApp
 */
angular.module('kickstartApp')
  .controller('MenuCtrl', [ '$scope', '$route', '$routeParams', '$location',
    function ($scope, $route, $routeParams, $location) {

      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;

      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

    }
  ]);
