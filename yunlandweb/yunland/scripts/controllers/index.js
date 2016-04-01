(function(){
    "use strict";

    /**
     * 首页广告维护控制器
     * @author lwz
     * @param $scope
     * @param $modal
     */
    var adsSliderController = function($scope,$modal,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',1);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            type: 'INDEX'
        };
        //弹出式日历触发函数
        $scope.openStartDate = function($event) {
            if($scope.vm.endDate){
                $scope.maxDate = $scope.vm.endDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.openedStartDate = true;
        };
        //弹出式日历触发函数
        $scope.openEndDate = function($event) {
            if($scope.vm.startDate){
                $scope.minDate = $scope.vm.startDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.openedEndDate = true;
        };
        /**
         * 新增广告
         */
        $scope.addAds = function(){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openAds.html",
                controller:OpenAds,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '添加首页广告',
                            type: 'add'
                        }
                    }
                }
            });
            modalInstance.result.then(function (data){
                window.location.reload();
            });
        };

        //获取数据
        $scope.getList = function () {
            yunLandService.apiFindLandAdvertising($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.advertiseList = data.result;
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

        // 取消发布
        $scope.cancelPublish = function(id){
            yunLandService.apiCancelSubmitLandAdvertising({id:id}).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 发布
        $scope.publishAdvertise = function(id){
            yunLandService.apiSubmitLandAdvertising({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 编辑广告信息
        $scope.editAdvertise = function(advertise){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openAds.html",
                controller:OpenAds,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '编辑广告',
                            type: 'edit',
                            advertise: advertise
                        }
                    }
                }
            });
            modalInstance.result.then(function (data){
                $scope.doSearch();
            });
        };
    };

    /**
     * 广告维护弹出框控制器
     * @author lwz
     * @type {*[]}
     */
    var OpenAds = ["$scope","$modalInstance","items","dialogService","YunLandService","FoundationService", function ($scope,$modalInstance,items,dialogService,yunLandService,FoundationService) {
        $scope.window = {};
        $scope.window.title = items.title;
        $scope.window.type = items.type;

        $scope.cancel = function () {
            $scope.window = {};
            $modalInstance.dismiss('cancel');
        };

        $scope.vm = {
            picturePath:null,
            pictureId:""
        };

        // 监听下拉框
        $scope.$watch("vm.position",function(){
            if($scope.vm.position == "SLIDE"){
                $scope.vm.recommendSize = "建议尺寸：1920*400";
            }else if($scope.vm.position == "HOT"){
                $scope.vm.recommendSize = "建议尺寸：370*350";
            }else if($scope.vm.position == "SELLBUTTOM"){
                $scope.vm.recommendSize = "建议尺寸：1170*150";
            }else if($scope.vm.position == "TRANSFERBUTTOM"){
                $scope.vm.recommendSize = "建议尺寸：1170*150";
            }else{
                $scope.vm.recommendSize = "";
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
                        $scope.vm.picturePath = data.url;
                        $scope.vm.pictureId = data.id;
                    }
                });
            };
        };
        if('edit'==items.type){
            //根据id获取会员信息
            yunLandService.apiGetLandAdvertising({id:items.advertise.id}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.vm = data.landAdvertising;
                }
            });
        }

        // 保存广告
        $scope.doSave = function(){
            //$scope.vm.position = "HEAD";
            $scope.vm.type = "INDEX";
            //$scope.vm.pictureId = 1;
            if('add' == items.type){
                $scope.vm.approveResult = "DISAGREED";
                yunLandService.apiCreateLandAdvertising($scope.vm).success(function(data) {
                    if (data.errors == null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }
                    else {
                        dialogService.tip([{message: "创建成功"}]);
                        //关闭
                        $modalInstance.close($scope.window);
                        //清空数据
                        $scope.window={};
                    }
                });
            }else if('edit' == items.type){
                yunLandService.apiUpdateLandAdvertising($scope.vm).success(function(data) {
                    if (data.errors == null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }
                    else {
                        dialogService.tip([{message: "更新成功"}]);
                        //关闭
                        $modalInstance.close($scope.window);
                        //清空数据
                        $scope.window={};
                    }
                });
            }
        };

        // 发布广告
        $scope.doPublish = function(){
            //$scope.vm.position = "HEAD";
            $scope.vm.type = "INDEX";
            $scope.vm.approveResult = "AGREED";
            $scope.vm.isApproved = 1;
            //$scope.vm.pictureId = 1;

            ///////////////////////
            if('add' == items.type){
                yunLandService.apiCreateLandAdvertising($scope.vm).success(function(data) {
                    if (data.errors == null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }
                    else {
                        yunLandService.apiSubmitLandAdvertising({id:data.id}).success(function(result){
                            if(result.errors == null || result.errors.length > 0){
                                dialogService.tip(result.errors);
                            }else{
                                dialogService.tip([{message: "创建成功"}]);
                                //关闭
                                $modalInstance.close($scope.window);
                                //清空数据
                                $scope.window={};
                            }
                        });

                    }
                });
            }else if('edit' == items.type){
                yunLandService.apiUpdateLandAdvertising($scope.vm).success(function(data) {
                    if (data.errors == null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }
                    else {
                        yunLandService.apiSubmitLandAdvertising({id:$scope.vm.id}).success(function(result){
                            if(result.errors == null || result.errors.length > 0){
                                dialogService.tip(result.errors);
                            }else{
                                dialogService.tip([{message: "发布成功"}]);
                                //关闭
                                $modalInstance.close($scope.window);
                                //清空数据
                                $scope.window={};
                            }
                        });
                    }
                });
            }
        };

    }];
    //定义module,并指明依赖模块。
    angular.module("xn.yunland.index",[])
        .controller("AdsSliderController",["$scope","$modal","dialogService","YunLandService","FoundationService",adsSliderController]);
})();