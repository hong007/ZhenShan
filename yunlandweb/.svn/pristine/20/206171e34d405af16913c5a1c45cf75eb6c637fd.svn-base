(function () {
    "use strict";

    var pageIndexController=function($scope,SingleService,dialogService) {
        $scope.vm={
            pageSize:10,
            pageNumber:1
        };
        $scope.pageList=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSinglePageSearch($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.pageList=data.result;
                    $scope.vm.totalCount=data.totalCount;
                }
            });
        };
        $scope.getList();

        //删除
        $scope.doDelete=function(id){
            var dialogDefaults = {
                size: "sm"
            };
            var dialogOptions = {
                closeButtonText: "取消",
                actionButtonText: "确定删除",
                headerText: "继续....?",
                bodyText: "您确定要删除？不能恢复！",
                callback: function () {
                    SingleService.apiSinglePageDelete({id:id}).success(function(data){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else{
                            $scope.getList();
                        }
                    });
                }
            };
            dialogService.confirm(dialogDefaults, dialogOptions);
        }


    };

    var pageCreateController=function($scope,SingleService,dialogService) {
        $scope.vm={
            code:"暂无数据"
        };



        //上传文件
        $scope.upload=function(){

            var fileList = document.getElementById("pic").files;


            if(fileList.length){
                if($scope.picMaxSize){
                    if(Number($scope.picMaxSize)*1024*1024 <=fileList[0].size){
                        dialogService.tip([{"message":"上传文件不能大于"+$scope.picMaxSize+"M!" }]);
                        return;
                    }
                }

                SingleService.apiSingleFileUpload(fileList[0]).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        $scope.vm.pictureId=data.id;
                        $scope.vm.storagePath=data.storagePath;
                    }
                })
            }else{
                dialogService.tip([{"message":"请先选择文件" }]);
            }
        };

        $scope.doSave=function(){
            $scope.vm.intro=$scope.intro.html();
            $scope.vm.content=$scope.content.html();

            SingleService.apiSinglePageCreate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/page/index";
                }
            });
        };

    };

    var pageEditController=function($scope,$location,SingleService,dialogService,toolsService) {

        $scope.vm={
            id : toolsService.parameter("id", $location.absUrl())
        };

        //获取基本数据
        SingleService.apiSinglePageGet($scope.vm).success(function(data){
            if (data.errors == null || data.errors.length > 0)
                dialogService.tip(data.errors);
            else{
                $scope.vm=data.page;
                if(data.file){
                    $scope.vm.storagePath=data.file.storagePath;
                }
                $scope.intro.html($scope.vm.intro);
                $scope.content.html($scope.vm.content);
            }
        });


        //上传文件
        $scope.upload=function(){

            var fileList = document.getElementById("pic").files;

            if(fileList.length){
                if($scope.picMaxSize){
                    if(Number($scope.picMaxSize)*1024*1024 <=fileList[0].size){
                        dialogService.tip([{"message":"上传文件不能大于"+$scope.picMaxSize+"M!" }]);
                        return;
                    }
                }

                SingleService.apiSingleFileUpload(fileList[0]).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        $scope.vm.pictureId=data.id;
                        $scope.vm.storagePath=data.storagePath;
                    }
                })
            }else{
                dialogService.tip([{"message":"请先选择文件" }]);
            }
        };

        $scope.doSave=function(){

            $scope.vm.intro=$scope.intro.html();
            $scope.vm.content=$scope.content.html();

            SingleService.apiSinglePageUpdate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/page/index";
                }
            });
        };
    };

    angular.module("xn.single.page", [])
    .controller("PageIndexController",["$scope","SingleService","dialogService",pageIndexController])
    .controller("PageCreateController",["$scope","SingleService","dialogService",pageCreateController])
    .controller("pageEditController",["$scope","$location","SingleService","dialogService","toolsService",pageEditController]);
})();