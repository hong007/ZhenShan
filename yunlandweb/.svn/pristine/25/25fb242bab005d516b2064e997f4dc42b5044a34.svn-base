/**
 * Created by DEV005 on 2015/7/17.
 */
(function () {
    "use strict";

    //类别设置

    var linkController=function($scope,$modal,SingleService,dialogService) {
        $scope.vm={
            pageSize:0
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleLinkSearch($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.List=data.result;
                }
            });
        };
        $scope.getList();

        //增加类别
        $scope.doAdd=function(id,name){
            var modalInstance = $modal.open({
                templateUrl: 'createContent.html',
                controller:LinkCreateController,
                size:"lg",
                resolve: {
                    items: function () {
                        return ;
                    }
                }
            });
            modalInstance.result.then(function () {
                $scope.getList();
            }, function () {

            });
        };

        //编辑
        $scope.doEdit=function(id){
            var modalInstance = $modal.open({
                templateUrl: 'editContent.html',
                controller:LinkEditController,
                size:"lg",
                resolve: {
                    items: function () {
                        return {id:id};
                    }
                }
            });
            modalInstance.result.then(function () {
                $scope.getList();
            }, function () {

            });
        };
        //删除
        $scope.doDelete=function(id){
            var dialogDefaults = {
                size: "sm"
            };
            var dialogOptions = {
                closeButtonText: "取消",
                actionButtonText: "确定删除",
                headerText: "继续....?",
                bodyText: "您确定要删除？",
                callback: function () {
                    SingleService.apiSingleLinkDelete({id:id}).success(function(data){
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

    //创建分类
    var LinkCreateController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

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

            //创建
            $scope.doCreate=function(){
                SingleService.apiSingleLinkCreate($scope.vm).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        $modalInstance.close();
                    }
                });
            };

            //关闭
            $scope.cancel=function(){
                $modalInstance.dismiss();
            };

        }];
    //编辑
    var LinkEditController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                id:items.id
            };
            //创建
            SingleService.apiSingleLinkGet($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.link;
                    if(data.file){
                        $scope.vm.storagePath=data.file.storagePath;
                    }
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


            //创建
            $scope.doEdit=function(){
                SingleService.apiSingleLinkUpdate($scope.vm).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        $modalInstance.close();
                    }
                });
            };

            //关闭
            $scope.cancel=function(){
                $modalInstance.dismiss();
            };

        }];


    angular.module("xn.single.link", [])
        .controller("LinkController",["$scope","$modal","SingleService","dialogService",linkController])

})();