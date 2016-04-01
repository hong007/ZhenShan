/**
 * Created by DEV005 on 2015/7/17.
 */
(function () {
    "use strict";
    angular.module("xn.single.login", [])
        .controller("LoginController",["$scope","dialogService","SingleService", function($scope,dialogService,SingleService) {
            $scope.vm={};

           $scope.doLogin=function(){
               SingleService.apiSingleUserValidate($scope.vm).success(function(data){
                   console.log($scope.vm);
                   console.log(data);
                   if (data.errors == null || data.errors.length > 0)
                       dialogService.tip(data.errors);
                   else{

                       window.location ="/single/index";
                   }
               })

           }
        }])
})();