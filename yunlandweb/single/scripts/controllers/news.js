(function () {
    "use strict";

    //类别设置

    var newsClassController=function($scope,$modal,SingleService,dialogService) {
        $scope.vm={
            pageSize:0
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleArticleCategorySearch($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.List=$scope.regroup(data.result);
                }
            });
        };
        $scope.getList();

        //增加类别
        $scope.doAdd=function(id,name){
            var modalInstance = $modal.open({
                templateUrl: 'createContent.html',
                controller:ArticleClassCreateController,
                size:"lg",
                resolve: {
                    items: function () {
                        return {id:id,name:name};
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
                controller:ArticleClassEditController,
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
                    SingleService.apiSingleArticleCategoryDelete({id:id}).success(function(data){
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
    var ArticleClassCreateController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                parentId:items.id,
                parentName:items.name
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
                SingleService.apiSingleArticleCategoryCreate($scope.vm).success(function(data){
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
    var ArticleClassEditController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                id:items.id
            };
            //创建
            SingleService.apiSingleArticleCategoryGet($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.articleCategory;
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
                SingleService.apiSingleArticleCategoryUpdate($scope.vm).success(function(data){
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


    var newsListController=function($scope,SingleService,dialogService) {
        $scope.vm={
            pageSize:10,
            pageNumber:1
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleArticleSearch($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.List=data.result;
                    $scope.vm.totalCount=data.totalCount;
                }
            });
        };
        $scope.getList();


        //修改排序
        $scope.doOrder=function(page){
            var param={
                id:page.id,
                objectType:"ARTICLE",
                updateType:"COUNT",
                ordNum:page.ordNum
            };

            SingleService.apiSingleObjectByCodeUpdate(param).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.getList();
                }
            });
        };

        //修改排序
        $scope.doChange=function(page,updateType){
            var state;
            if("RECOMMEND"==updateType){
                page.isRecommend=! page.isRecommend;
                state= page.isRecommend;
            }else if("NEWARRIVAL"==updateType){
                page.isNewArrival=! page.isNewArrival;
                state= page.isNewArrival;
            }
            var param={
                id:page.id,
                objectType:"ARTICLE",
                updateType:updateType,
                value:state
            };

            SingleService.apiSingleObjectByCodeUpdate(param).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{

                }
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
                    SingleService.apiSingleArticleDelete({id:id}).success(function(data){
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

    var newsCreateController=function($scope,SingleService,dialogService) {
        $scope.vm={
            code:"暂无数据",
            pictureId:"",
            pictureUrl:"",
            submitUserName:"管理员",
            isSubmit:true,
            ordNum:999
        };

       var vm={
            pageSize:0
        };
        $scope.categoryList=[];

        //查询设置
        $scope.getCategoryList = function(){
            SingleService.apiSingleArticleCategorySearch(vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.categoryList=$scope.regroup(data.result);
                    console.log($scope.categoryList)
                }
            });
        };
       $scope.getCategoryList();

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

            $scope.vm.content=$scope.content.html();

            SingleService.apiSingleArticleCreate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/news/list";
                }
            });
        };

    };

    var newsEditController=function($scope,$location,SingleService,dialogService,toolsService) {

        var id={
            id : toolsService.parameter("id", $location.absUrl())
        };

        $scope.vm={
            code:"暂无数据",
            pictureId:"",
            pictureUrl:"",
            submitUserName:"管理员",
            isSubmit:true,
            ordNum:999
        };

        var vm={
            pageSize:0
        };
        $scope.categoryList=[];

        //查询设置
        $scope.getCategoryList = function(){
            SingleService.apiSingleArticleCategorySearch(vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.categoryList=$scope.regroup(data.result);
                }
            });
        };
        $scope.getCategoryList();


        //查询设置
        $scope.getBasic = function(){
            console.log(id);
            SingleService.apiSingleArticleGet(id).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.article;
                    if(data.file){
                        $scope.vm.storagePath=data.file.storagePath;
                    }

                    $scope.content.html($scope.vm.content);
                }
            });
        };
        $scope.getBasic();



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

            $scope.vm.content=$scope.content.html();

            SingleService.apiSingleArticleUpdate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/news/list";
                }
            });
        };
    };

    angular.module("xn.single.news", [])
    .controller("NewsClassController",["$scope","$modal","SingleService","dialogService",newsClassController])
    .controller("NewsListController",["$scope","SingleService","dialogService",newsListController])
    .controller("NewsCreateController",["$scope","SingleService","dialogService",newsCreateController])
    .controller("NewsEditController",["$scope","$location","SingleService","dialogService","toolsService",newsEditController]);
})();