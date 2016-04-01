(function(){
    "use strict";

    /**
     * 转让控制器
     * @author zxl
     * @param $scope
     */
    var transferIndexController = function($scope,$modal,yunLandService,dialogService){
        $scope.$emit('navShow',4);
        $scope.vm = {
            pageSize:10,
            pageNumber:1,
            type:"SUPPLY",
            state:"BACK_SHOW"
        };
        //$scope.state = {};
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


        $scope.$watch("vm.type",function(val){
            if(val=='SUPPLY'){
                $scope.findSupply();
            }else{
                $scope.findDemand();
            }
        });
        $scope.findSupply = function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            if($scope.state){
                $scope.vm.state = $scope.state;
            }else{
                $scope.vm.state = "BACK_SHOW";
            }


            yunLandService.apiFindLandSupply($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.supplyList = data.result;
                    if ($scope.supplyList) {
                        for (var i = 0; i < $scope.supplyList.length; i++) {
                            $scope.supplyList[i].isSelected = false;
                        }
                    }
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };

        $scope.findDemand = function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }


            if($scope.state){
                $scope.vm.state = $scope.state;
            }else{
                $scope.vm.state = "BACK_SHOW";
            }

            $scope.vm.title = $scope.vm.name!=null?$scope.vm.name:'';
            yunLandService.apiFindLandDemand($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.demandList = data.result;
                    if ($scope.demandList) {
                        for (var i = 0; i < $scope.demandList.length; i++) {
                            $scope.demandList[i].isSelected = false;
                        }
                    }
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };

        $scope.doFind=function(){
            if($scope.vm.type=='SUPPLY'){
                $scope.findSupply();
            }else{
                $scope.findDemand();
            }
        };
        $scope.doFind();

        //审批通过
        $scope.doApproved=function(){
            if($scope.vm.type=='SUPPLY'){
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.supplyList.length; i++) {
                    if($scope.supplyList[i].isSelected){
                        count ++;
                        ids.push($scope.supplyList[i].id);
                    }
                }
                if(ids.length==0){
                    alert("请选择审核通过记录");
                    return;
                }
                yunLandService.apiApproveLandSupply({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "审批通过"}],"index",300);
                    }
                });
            }else{
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.demandList.length; i++) {
                    if($scope.demandList[i].isSelected){
                        count ++;
                        ids.push($scope.demandList[i].id);
                    }
                }
                if(ids.length==0){
                    return;
                }
                yunLandService.apiApproveLandDemand({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "审批通过"}],"index",300);
                    }
                });
            }

        };
        //审批失败
        $scope.doCancel=function(){
            if($scope.vm.type=='SUPPLY'){
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.supplyList.length; i++) {
                    if($scope.supplyList[i].isSelected){
                        count ++;
                        ids.push($scope.supplyList[i].id);
                    }
                }
                if(ids.length==0){
                    alert("请选择审核失败记录");
                    return;
                }
                yunLandService.apiCancelLandSupply({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "审批失败"}],"index",300);
                    }
                });
            }else{
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.demandList.length; i++) {
                    if($scope.demandList[i].isSelected){
                        count ++;
                        ids.push($scope.demandList[i].id);
                    }
                }
                if(ids.length==0){
                    return;
                }
                yunLandService.apiCancelLandDemand({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "审批失败"}],"index",300);
                    }
                });
            }
        };
        //置顶
        $scope.doTop=function(){
            if($scope.vm.type=='SUPPLY'){
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.supplyList.length; i++) {
                    if($scope.supplyList[i].isSelected){
                        count ++;
                        ids.push($scope.supplyList[i].id);
                    }
                }
                if(ids.length==0){
                    alert("请选择置顶记录");
                    return;
                }
                yunLandService.apiTopLandSupply({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "置顶成功"}],"index",300);
                    }
                });
            }else{
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.demandList.length; i++) {
                    if($scope.demandList[i].isSelected){
                        count ++;
                        ids.push($scope.demandList[i].id);
                    }
                }
                if(ids.length==0){
                    return;
                }
                yunLandService.apiTopLandDemand({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "置顶成功"}],"index",300);
                    }
                });
            }
        };

        //取消置顶
        $scope.doCancelTop=function(){
            if($scope.vm.type=='SUPPLY'){
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.supplyList.length; i++) {
                    if($scope.supplyList[i].isSelected){
                        count ++;
                        ids.push($scope.supplyList[i].id);
                    }
                }
                if(ids.length==0){
                    alert("请选择取消置顶记录");
                    return;
                }
                yunLandService.apiCancelTopLandSupply({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "取消置顶成功"}],"index",300);
                    }
                });
            }else{
                var ids = [];
                var count = 0 ;
                for(var i=0; i<$scope.demandList.length; i++) {
                    if($scope.demandList[i].isSelected){
                        count ++;
                        ids.push($scope.demandList[i].id);
                    }
                }
                if(ids.length==0){
                    return;
                }
                yunLandService.apiCancelTopLandDemand({ids:ids}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        dialogService.tip([{message: "取消置顶成功"}],"index",300);
                    }
                });
            }
        };

        //查看操作记录
        $scope.openRecord = function(record){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "OpenLogs.html",
                controller:OpenLogs,
                size:"",
                resolve: {
                    items: function () {
                        return record
                    }
                }
            });
            modalInstance.result.then(function (){
                $scope.doFind();
            });
        };

    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     */
    var transferAdvertiseMaintainController = function($scope,$modal,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',4);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            type:'TRANSFER'
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
     * 投递记录控制器
     * @author zxl
     * @param $scope
     */
    var transferPostRecordController = function($scope,dialogService,yunLandService){
        $scope.$emit('navShow',4);
        $scope.vm = {
            pageSize:10,
            pageNumber:1,
            totalCount:0
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

        $scope.doFind=function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            yunLandService.apiFindLandDelivery($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.postList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.doFind();

    };

    /**
     * 查看土地供应详情
     * @author lwz
     * @param $scope
     */
    var viewSupplyLandController = function($scope,$modal,dialogService,toolsService,$location,yunLandService){
        $scope.$emit('navShow',4);
        $scope.vm ={
            id : toolsService.parameter("id", $location.absUrl())
        };

        yunLandService.apiGetLandSupply($scope.vm).success(function(data) {
            if (data.errors == null || data.errors.length > 0)
                dialogService.tip(data.errors);
            else {
                $scope.supplyLand = data.landSupply;
                $scope.land.address.address = $scope.supplyLand.address;
            }
        });

        //加载地址
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.supplyLand.provinceId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.supplyLand.cityId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.supplyLand.districtId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.coordinate = $scope.supplyLand.location;
            $scope.$apply();
        },300);



        // 百度地图API功能
        var map = new BMap.Map("allmap");
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        //添加控件和比例尺
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
        map.addControl(top_left_control);
        map.addControl(top_left_navigation);
        map.addControl(top_right_navigation);

        //单击获取点击的经纬度
        map.addEventListener("click",function(e){
            $scope.land.coordinate = e.point.lng + "," + e.point.lat;
            $scope.$apply();
        });
        //根据地址定位
        $scope.getPosition = function(){
            // 将地址解析结果显示在地图上,并调整地图视野
            var province = $scope.land.address.name.provinceName?$scope.land.address.name.provinceName:'';
            var city = $scope.land.address.name.cityName?$scope.land.address.name.cityName:'';
            var district = $scope.land.address.name.districtName?$scope.land.address.name.districtName:'';
            var address = $scope.land.address.name.address?$scope.land.address.name.address:'';
            var position = province+city+district+address;
            myGeo.getPoint(position, function(point){
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                }
            }, city);
            $scope.land.coordinate = '';
        };

        $scope.$watch('land.address.name.cityName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.provinceName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.districtName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.address',function(val){
            if(val){
                $scope.getPosition();
            }
        });

        //审批通过
        $scope.doApproved=function(){
            var ids = [];
            ids.push($scope.supplyLand.id);
            yunLandService.apiApproveLandSupply({ids:ids}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    dialogService.tip([{message: "审批通过"}],"index",300);
                }
            });

        };
        //审批失败
        $scope.doCancel=function(){
            var ids = [];
            ids.push($scope.supplyLand.id);
            yunLandService.apiCancelLandSupply({ids:ids}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    dialogService.tip([{message: "审批失败"}],"index",300);
                }
            });
        };

        ////查看操作记录
        //$scope.openRecord = function(supply){
        //    //弹出窗口
        //    var modalInstance = $modal.open({
        //        templateUrl: "OpenLogs.html",
        //        controller:OpenLogs,
        //        size:"",
        //        resolve: {
        //            items: function () {
        //                return supply
        //            }
        //        }
        //    });
        //    modalInstance.result.then(function (data){
        //        $scope.doSearch();
        //    });
        //};

    };

    /**
     * 查看土地需求详情
     * @author lwz
     * @param $scope
     */
    var viewDemandLandController = function($scope,$modal,dialogService,toolsService,$location,yunLandService){
        $scope.$emit('navShow',4);
        $scope.vm ={
            id : toolsService.parameter("id", $location.absUrl())
        };

        yunLandService.apiGetLandDemand($scope.vm).success(function(data) {
            if (data.errors == null || data.errors.length > 0)
                dialogService.tip(data.errors);
            else {
                $scope.demandLand = data.landDemand;
                $scope.land.address.address = $scope.demandLand.address;
            }
        });

        //加载地址
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.demandLand.provinceId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.demandLand.cityId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.demandLand.districtId;
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.coordinate = $scope.demandLand.location;
            $scope.$apply();
        },300);



        // 百度地图API功能
        var map = new BMap.Map("allmap");
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        //添加控件和比例尺
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
        map.addControl(top_left_control);
        map.addControl(top_left_navigation);
        map.addControl(top_right_navigation);

        //单击获取点击的经纬度
        map.addEventListener("click",function(e){
            $scope.land.coordinate = e.point.lng + "," + e.point.lat;
            $scope.$apply();
        });
        //根据地址定位
        $scope.getPosition = function(){
            // 将地址解析结果显示在地图上,并调整地图视野
            var province = $scope.land.address.name.provinceName?$scope.land.address.name.provinceName:'';
            var city = $scope.land.address.name.cityName?$scope.land.address.name.cityName:'';
            var district = $scope.land.address.name.districtName?$scope.land.address.name.districtName:'';
            var address = $scope.land.address.name.address?$scope.land.address.name.address:'';
            var position = province+city+district+address;
            myGeo.getPoint(position, function(point){
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                }
            }, city);
            $scope.land.coordinate = '';
        };

        $scope.$watch('land.address.name.cityName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.provinceName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.districtName',function(val){
            if(val){
                $scope.getPosition();
            }
        });
        $scope.$watch('land.address.name.address',function(val){
            if(val){
                $scope.getPosition();
            }
        });

        //审批通过
        $scope.doApproved=function(){
            var ids = [];
            ids.push($scope.demandLand.id);
            yunLandService.apiApproveLandDemand({ids:ids}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    dialogService.tip([{message: "审批通过"}],"index",300);
                }
            });

        };
        //审批失败
        $scope.doCancel=function(){
            var ids = [];
            ids.push($scope.demandLand.id);
            yunLandService.apiCancelLandDemand({ids:ids}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    dialogService.tip([{message: "审批失败"}],"index",300);
                }
            });
        };

        ////查看操作记录
        //$scope.openRecord = function(demand){
        //    //弹出窗口
        //    var modalInstance = $modal.open({
        //        templateUrl: "OpenLogs.html",
        //        controller:OpenLogs,
        //        size:"",
        //        resolve: {
        //            items: function () {
        //                return demand
        //            }
        //        }
        //    });
        //    modalInstance.result.then(function (data){
        //        $scope.doSearch();
        //    });
        //};

    };

    /**
     * 广告维护弹出框控制器
     * @author zxl
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
            $scope.vm.position = "HEAD";
            $scope.vm.type = "TRANSFER";
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
            $scope.vm.position = "HEAD";
            $scope.vm.type = "TRANSFER";
            $scope.vm.approveResult = "AGREED";
            $scope.vm.isApproved = 1;

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

    var OpenLogs = ["$scope","$modalInstance","items","YunLandService","dialogService",
        function($scope,$modalInstance,items,yunLandService,dialogService) {
            $scope.record = items;
            $scope.vm = {
                pageNumber: 1,
                pageSize: 20,
                totalCount: 0
            };
            $scope.maxPageSize=5;

            $scope.clean = function () {
                $modalInstance.close();
                //window.location = "/payable/invoice/open.htm?id=" + $scope.invoice.id + "&pageType=7";
            };

            $scope.getList = function () {
                $scope.vm.sourceId = items.id;
                yunLandService.apiLogFind($scope.vm).success(function (data) {
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else {
                        $scope.logList = data.result;
                        $scope.vm.totalCount = data.totalCount;
                    }
                });
            };
            $scope.getList();

        }];


    // 定义module,并指明依赖模块
    angular.module("xn.yunland.transfer",[])
        .controller("TransferIndexController",["$scope","$modal","YunLandService","dialogService",transferIndexController])
        .controller("TransferAdvertiseMaintainController",["$scope","$modal","dialogService","YunLandService","FoundationService",transferAdvertiseMaintainController])
        .controller("TransferPostRecordController",["$scope","dialogService","YunLandService",transferPostRecordController])
        .controller("ViewSupplyLandController",["$scope","$modal","dialogService","toolsService","$location","YunLandService",viewSupplyLandController])
        .controller("ViewDemandLandController",["$scope","$modal","dialogService","toolsService","$location","YunLandService",viewDemandLandController]);
})();