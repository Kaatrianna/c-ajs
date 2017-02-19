
(function() {
  'use strict';

   var ang = angular.module('LunchCheck', []);
   ang.controller('LunchCheckController', lunchCheckController);
   lunchCheckController.$inject = ['$scope'];

   function lunchCheckController($scope) {

   $scope.message = "";

   $scope.bCheckIfTooMuchClick = function () {

     var inputText = $scope.inputText || "";

     if (inputText == "") {
       $scope.message = "Please enter data first";
       $scope.colorClass = "message redMessage";
       return;
     }

     $scope.colorClass = "message greenMessage";
     var ArrayOfInput = inputText.split(',');
     var length = ArrayOfInput.length;
     if (length > 3) {$scope.message = "Too much!";}
     else            {$scope.message = "Enjoy!"};

    };
  };
}());
