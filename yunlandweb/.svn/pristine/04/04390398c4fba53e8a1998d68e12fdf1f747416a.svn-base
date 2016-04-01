(function () {
    "use strict";

    /**
     * 云地动态控制器
     * @author zxl
     * @param $scope
     */
    var newsIndexController = function($scope,dialogService,yunLandService){
        $scope.$emit('navShow',5);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            showType:'news'
        };
        $scope.startDate = false;
        $scope.endDate = false;
        //弹出式日历触发函数
        $scope.openStartDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startDate = true;
        };
        //弹出式日历触发函数
        $scope.openEndDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endDate = true;
        };

        //获取数据
        $scope.getList = function () {
            yunLandService.apiFindLandDynamic($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.dynamicList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.doSearch = function () {

            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            $scope.getList();

        };
        $scope.doSearch();

       // 发布动态
        $scope.publishNews = function(id){
            yunLandService.apiApproveLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 取消发布
        $scope.cancelPublish = function(id){
            yunLandService.apiCancelApproveLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 置顶
        $scope.topNews = function(id){
            yunLandService.apiTopLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 取消置顶
        $scope.cancelTop = function(id){
            yunLandService.apiCancelTopLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 编辑动态
        $scope.editNews = function(id){

        };
    };

    /**
     * 云地动态控制器
     * @author zxl
     * @param $scope
     */
    var newsFooterMaintainController = function($scope,dialogService,yunLandService){
        $scope.$emit('navShow',5);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            showType:'footer'
        };
        $scope.startDate = false;
        $scope.endDate = false;
        //弹出式日历触发函数
        $scope.openStartDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startDate = true;
        };
        //弹出式日历触发函数
        $scope.openEndDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endDate = true;
        };

        //获取数据
        $scope.getList = function () {
            yunLandService.apiFindLandDynamic($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.dynamicList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.doSearch = function () {

            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            $scope.getList();

        };
        $scope.doSearch();

        // 发布动态
        $scope.publishNews = function(id){
            yunLandService.apiApproveLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 取消发布
        $scope.cancelPublish = function(id){
            yunLandService.apiCancelApproveLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 置顶
        $scope.topNews = function(id){
            yunLandService.apiTopLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 取消置顶
        $scope.cancelTop = function(id){
            yunLandService.apiCancelTopLandDynamic({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 编辑动态
        $scope.editNews = function(id){

        };
    };

    /**
     * 新增动态页面控制器
     * @author lwz
     * @param $scope
     */
    var addNewsController = function($scope,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',5);

        $scope.dynamic = {
        };
        /**
         *图片保存的功能
         */
        $scope.showPicture=function(){
            var fileId=document.getElementById("pictureFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("pictureFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.dynamic.picturePath = data.url;
                        $scope.dynamic.pictureId = data.id;
                    }
                });
            };
        };

        /**
         * 保存动态
         */
        $scope.doSave = function(){
            $scope.dynamic.isSubmit = 0;
            $scope.dynamic.isApproved = 0;
            $scope.dynamic.approveResult = 'DISAGREED';
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiCreateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{message:"保存成功"}],"index",300)
                }
            });
        };
        /**
         * 发布动态
         */
        $scope.doPublish = function(){
            $scope.dynamic.isSubmit = 1;
            $scope.dynamic.isApproved = 1;
            $scope.dynamic.approveResult = 'AGREED';
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiCreateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{

                    $scope.dynamic.id = data.id;
                    yunLandService.apiApproveLandDynamic($scope.dynamic).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{message:"发布成功"}],"index",300)
                        }
                    });
                }
            });
        };
    };

    /**
     * 新增首页footer动态页面控制器
     * @author zxl
     * @param $scope
     */
    var addFooterController = function($scope,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',5);

        $scope.dynamic = {
        };

        /**
         * 保存动态
         */
        $scope.doSave = function(){
            $scope.dynamic.isSubmit = 0;
            $scope.dynamic.isApproved = 0;
            $scope.dynamic.approveResult = 'DISAGREED';
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiCreateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{message:"保存成功"}],"footerMaintain",300)
                }
            });
        };
        /**
         * 发布动态
         */
        $scope.doPublish = function(){
            $scope.dynamic.isSubmit = 1;
            $scope.dynamic.isApproved = 1;
            $scope.dynamic.approveResult = 'AGREED';
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiCreateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{

                    $scope.dynamic.id = data.id;
                    yunLandService.apiApproveLandDynamic($scope.dynamic).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{message:"发布成功"}],"footerMaintain",300)
                        }
                    });
                }
            });
        };
    };

    /**
     * 编辑动态页面控制器
     * @author lwz
     * @param $scope
     */
    var editNewsController = function($scope,$location,toolsService,yunLandService,dialogService,FoundationService){
        //$scope.id = toolsService.parameter("id", $location.absUrl());
        $scope.$emit('navShow',5);

        $scope.dynamic = {};

        /**
         * 保存动态
         */
        $scope.doSave = function(){
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiUpdateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{message:"保存成功"}],"index")
                }
            });
        };
        /**
         * 发布动态
         */
        $scope.doPublish = function(){
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiUpdateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    yunLandService.apiApproveLandDynamic($scope.dynamic).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{message:"发布成功"}],"index")
                        }
                    });
                }
            });
        };

        $scope.dynamic = {
            id:toolsService.parameter("id", $location.absUrl())
        };

        yunLandService.apiGetLandDynamic({id:$scope.dynamic.id}).success(function (data) {
            if (data.errors === null || data.errors.length > 0) {
                dialogService.tip(data.errors);
            } else {
                $scope.dynamic = data.landDynamic;
                $scope.landIntro.html(data.landDynamic.content)
            }
        });

        /**
         *图片保存的功能
         */
        $scope.showPicture=function(){
            var fileId=document.getElementById("pictureFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("pictureFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.dynamic.picturePath = data.url;
                        $scope.dynamic.pictureId = data.id;
                    }
                });
            };
        };
    };

    /**
     * 编辑首页footer动态页面控制器
     * @author zxl
     * @param $scope
     */
    var editFooterController = function($scope,$location,toolsService,yunLandService,dialogService,FoundationService){
        //$scope.id = toolsService.parameter("id", $location.absUrl());
        $scope.$emit('navShow',5);

        $scope.dynamic = {};

        /**
         * 保存动态
         */
        $scope.doSave = function(){
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiUpdateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{message:"保存成功"}],"footerMaintain")
                }
            });
        };
        /**
         * 发布动态
         */
        $scope.doPublish = function(){
            $scope.dynamic.content = $scope.landIntro.html();
            yunLandService.apiUpdateLandDynamic($scope.dynamic).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    yunLandService.apiApproveLandDynamic($scope.dynamic).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{message:"发布成功"}],"footerMaintain")
                        }
                    });
                }
            });
        };

        $scope.dynamic = {
            id:toolsService.parameter("id", $location.absUrl())
        };

        yunLandService.apiGetLandDynamic({id:$scope.dynamic.id}).success(function (data) {
            if (data.errors === null || data.errors.length > 0) {
                dialogService.tip(data.errors);
            } else {
                $scope.dynamic = data.landDynamic;
                $scope.landIntro.html(data.landDynamic.content)
            }
        });


    };

    //定义module,并指明依赖模块。
    angular.module("xn.yunland.news",[])
        .controller("NewsIndexController",["$scope","dialogService","YunLandService",newsIndexController])
        .controller("NewsFooterMaintainController",["$scope","dialogService","YunLandService",newsFooterMaintainController])
        .controller("AddNewsController",["$scope","dialogService","YunLandService","FoundationService",addNewsController])
        .controller("AddFooterController",["$scope","dialogService","YunLandService","FoundationService",addFooterController])
        .controller("EditFooterController",["$scope","$location","toolsService","YunLandService","dialogService","FoundationService",editFooterController])
        .controller("EditNewsController",["$scope","$location","toolsService","YunLandService","dialogService","FoundationService",editNewsController]);
})();