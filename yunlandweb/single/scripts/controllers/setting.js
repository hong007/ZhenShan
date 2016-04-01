(function () {
    "use strict";
    angular.module("xn.single.setting", [])
    .controller("SettingController",["$scope","SingleService","dialogService", function($scope,SingleService,dialogService) {
            $scope.vm={};
            var isEdit=false;

            //查询设置
            $scope.getList = function(){
                SingleService.apiSingleSiteSearch($scope.vm).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        if(data.result.length>0){
                            $scope.vm=data.result[0];
                            isEdit=true;
                        }
                    }
                });
            };
            $scope.getList();
            $scope.doSave =function(){
                if(isEdit){
                    SingleService.apiSingleSiteUpdate($scope.vm).success(function(data){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else{
                            dialogService.tip([{"message": "修改成功"}],"/single/setting","1000");
                        }
                    });
                }else{
                    SingleService.apiSingleSiteCreate($scope.vm).success(function(data){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else{
                            dialogService.tip([{"message": "修改成功"}],"/single/setting");
                        }
                    });
                }

            };


        }])
})();