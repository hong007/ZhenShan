(function () {
    "use strict";
    angular.module("xn.single.change", [])
    .controller("ChangeController",["$scope","SingleService","dialogService", function($scope,SingleService,dialogService) {
            $scope.vm={};


            $scope.doChange=function(){

                if ($scope.vm.confirmPassword === $scope.vm.loginPassword) {
                    SingleService.apiSingleUserPasswordUpdate($scope.vm).success(function (data) {
                            if (data.errors == null || data.errors.length > 0) {
                                //noinspection JSHint
                                $scope["validateForm"].$errors.push(data.errors[0].message);

                            } else {
                                $scope.logout();
                            }
                        }
                    );
                } else {
                    $scope["validateForm"].$errors.push("密码不一致");
                }
            };
            $scope.logout=function(){
                SingleService.apiSingleUserLogout().success(function (data) {
                        if (data.errors == null || data.errors.length > 0) {
                            //noinspection JSHint
                            $scope["validateForm"].$errors.push(data.errors[0].message);

                        } else {
                            dialogService.tip([{"message": "修改成功,请重新登录"}],"/single/","1000");
                        }
                    }
                );
            };



    }])
})();