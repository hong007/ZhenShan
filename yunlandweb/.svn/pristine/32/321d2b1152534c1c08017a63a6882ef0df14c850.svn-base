(function(){
    "use strict";

    /**
     * 云地出让控制器
     * @author zxl
     * @param $scope
     */
    var sellIndexController = function($scope,yunlandService,dialogService){
        $scope.$emit('navShow',3);
        $scope.vm = {
            pageSize:10,
            pageNumber:1,
            type:"LAND_INFORMATION"
        };

        $scope.$watch("vm.type",function(val){
            if(val=='LAND_INFORMATION'){
                $scope.findSellLand();
            }else if(val=='TRANSACTION_INFORMATION'){
                $scope.findTransaction();
            }else{
                $scope.findPublic();
            }
        });

        $scope.findSellLand=function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            yunlandService.apiFindSellLandAllList($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.sellLandList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.findTransaction =function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            yunlandService.apiFindLandResult($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.transactionList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.findPublic=function(){
            if ($scope.vm.startDate instanceof Date) {
                $scope.vm.startDate = $scope.vm.startDate.format("yyyy-MM-dd");
            }
            if ($scope.vm.endDate instanceof Date) {
                $scope.vm.endDate = $scope.vm.endDate.format("yyyy-MM-dd");
            }
            yunlandService.apiFindLandPublicity($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.publicList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };

        $scope.doFind=function(){
            if($scope.vm.type=='LAND_INFORMATION'){
                $scope.findSellLand();
            }else if($scope.vm.type=='TRANSACTION_INFORMATION'){
                $scope.findTransaction();
            }else{
                $scope.findPublic();
            }
        };

        //发布
        $scope.publish=function(id){
            if($scope.vm.type=='LAND_INFORMATION'){
                yunlandService.apiApproveSellLand({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findSellLand()
                    }
                });
            }else if($scope.vm.type=='TRANSACTION_INFORMATION'){
                yunlandService.apiApproveLandResult({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findTransaction()
                    }
                });
            }else{
                yunlandService.apiApproveLandPublicity({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findPublic()
                    }
                });
            }
        };
        //取消发布
        $scope.cancel=function(id){
            if($scope.vm.type=='LAND_INFORMATION'){
                yunlandService.apiCancelSellLand({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findSellLand()
                    }
                });
            }else if($scope.vm.type=='TRANSACTION_INFORMATION'){
                yunlandService.apiCancelLandResult({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findTransaction()
                    }
                });
            }else{
                yunlandService.apiCancelLandPublicity({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findPublic()
                    }
                });
            }
        };
        //置顶
        $scope.toTop=function(id){
            if($scope.vm.type=='LAND_INFORMATION'){
                yunlandService.apiTopSellLand({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findSellLand()
                    }
                });
            }else if($scope.vm.type=='TRANSACTION_INFORMATION'){
                yunlandService.apiTopLandResult({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findTransaction()
                    }
                });
            }else{
                yunlandService.apiTopLandPublicity({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findPublic()
                    }
                });
            }
        };

        // 取消置顶
        $scope.cancelTop=function(id){
            if($scope.vm.type=='LAND_INFORMATION'){
                yunlandService.apiCancelTopSellLand({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findSellLand()
                    }
                });
            }else if($scope.vm.type=='TRANSACTION_INFORMATION'){
                yunlandService.apiCancelTopLandResult({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findTransaction()
                    }
                });
            }else{
                yunlandService.apiCancelTopLandPublicity({id:id}).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    } else {
                        $scope.findPublic()
                    }
                });
            }
        };

        // 弹出式日历触发函数
        $scope.openStartDate = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startDate = true;
        };

        // 弹出式日历触发函数
        $scope.openEndDate = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endDate = true;
        };
    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     */
    var sellAdvertiseMaintainController = function($scope,$modal,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',3);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            type:'SELL'
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

        $scope.advertiseList = [
            {"startDate":"2015-07-13","picture":"已发布", "state":"已发布", "land":"苏州高新区区创业产业园土地", "value":"5"},
            {"startDate":"2015-07-13","picture":"已发布", "state":"已发布", "land":"苏州高新区区创业产业园土地", "value":"5"}
        ];

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
     * 修改土地动态控制器
     * @author lwz
     * @param $scope
     */
    var editLandController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        $scope.selectData = selectModel;

        $scope.vm ={
            id : toolsService.parameter("id", $location.absUrl())
        };
        $scope.sellLand = {};

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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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
        //$scope.attachment ={
        //    businessId:toolsService.parameter("id", $location.absUrl()),
        //    businessType : "EMPLOYEE",
        //    businessCategory : "COMMON",
        //    list:[]
        //};

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
                        $scope.sellLand.picturePath = data.url;
                        $scope.sellLand.pictureId = data.id;
                    }
                });
            };
        };

        $scope.endTime = false;
        // 弹出式日历触发函数
        $scope.openEndTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endTime = true;
        };

        //保存
        $scope.doSave=function(){

            // marker坐标
            var marketpoint =marker.getPosition();
            $scope.land.coordinate = marketpoint.lng + "," + marketpoint.lat;

            $scope.sellLand.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.sellLand.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.sellLand.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.sellLand.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.sellLand.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.sellLand.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.sellLand.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.sellLand.address = $scope.land.address.address;
            $scope.sellLand.content = $scope.sellIntro.html();
            //$scope.land.planUse = $scope.sellLand.planUse;
            if($scope.land.planUse){
                $scope.sellLand.planUse = $scope.land.planUse.id;
            }

            if ($scope.sellLand.endTime instanceof Date) { // 截止日趋
                $scope.sellLand.endTime = $scope.sellLand.endTime.format("yyyy-MM-dd");
            }

            yunLandService.apiUpdateLandSell($scope.sellLand).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });
        };

        //发布
        $scope.doPublish=function(){

            // marker坐标
            var marketpoint =marker.getPosition();
            $scope.land.coordinate = marketpoint.lng + "," + marketpoint.lat;

            $scope.sellLand.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.sellLand.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.sellLand.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.sellLand.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.sellLand.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.sellLand.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.sellLand.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.sellLand.address = $scope.land.address.address;
            $scope.sellLand.content = $scope.sellIntro.html();
            //$scope.land.planUse = $scope.sellLand.planUse;
            if($scope.land.planUse) {
                $scope.sellLand.planUse = $scope.land.planUse.id;
            }

            if ($scope.sellLand.endTime instanceof Date) { // 截止日期
                $scope.sellLand.endTime = $scope.sellLand.endTime.format("yyyy-MM-dd");
            }

            yunLandService.apiUpdateLandSell($scope.sellLand).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveSellLand({id:$scope.sellLand.id}).success(function(res){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });

        };
        var locationPX;
        var locationPY;
        yunLandService.apiGetLandSell({id:$scope.vm.id}).success(function(data) {
            if (data.errors == null || data.errors.length > 0)
                dialogService.tip(data.errors);
            else {
                $scope.sellLand = data.sellLand;
                //$scope.sellIntro.html(data.sellLand.content);
               // $scope.sellIntro.html();
                $scope.land.address.address = $scope.sellLand.address;

                if($scope.sellLand.floorSpace){
                    $scope.sellLand.floorSpace = $scope.sellLand.floorSpace.replace(/\s+/g,"");
                }
                if($scope.sellLand.sellYear){
                    $scope.sellLand.sellYear = $scope.sellLand.sellYear.replace(/\s+/g,"");
                }
                if($scope.sellLand.deposit){
                    $scope.sellLand.deposit = $scope.sellLand.deposit.replace(/\s+/g,"");
                }
                if($scope.sellLand.startPrice){
                    $scope.sellLand.startPrice = $scope.sellLand.startPrice.replace(/\s+/g,"");
                }
                if($scope.sellLand.bidIncrement){
                    $scope.sellLand.bidIncrement = $scope.sellLand.bidIncrement.replace(/\s+/g,"");
                }
                if($scope.sellLand.investmentIntensity){
                    $scope.sellLand.investmentIntensity = $scope.sellLand.investmentIntensity.replace(/\s+/g,"");
                }

                try{
                    $scope.sellIntro.html(data.sellLand.content);
                }catch (err){}

                // 获取经纬度
                var location = data.sellLand.location;
                if(location != null && location != ""){
                    var locationPArr = location.split(",");
                    locationPX = locationPArr[0];
                    locationPY = locationPArr[1];
                    setTimeout(function(){
                        map.clearOverlays();
                        marker = new BMap.Marker(new BMap.Point(locationPX, locationPY));
                        marker.enableDragging();
                        map.addOverlay(marker);
                    },1000);
                }

                for(var i=0;selectModel.length;i++){
                    var selectModel2 = selectModel[i];
                    if( $scope.sellLand.planUse == selectModel2.id){
                        $scope.land.planUse =selectModel2;
                        return;
                    }
                }
            }
        });

        //加载地址
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.sellLand.provinceId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.sellLand.cityId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.sellLand.districtId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.coordinate = $scope.sellLand.location;
            $scope.$apply();
        },600);


    };

    /**
     * 新增土地动态控制器
     * @author zxl
     * @param $scope
     */
    var addLandController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        // 土地用途
        $scope.selectData = selectModel2;
        // 出让方式
        $scope.selectDataSellWay = selectModelSellWay;

        $scope.sellLand = {};

        $scope.land = {
            address:{}
        };
        //初始化地址
        setTimeout(function(){
            $scope.land.address.provinceId = "320000";
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = "320500";
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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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
        //$scope.attachment ={
        //    businessId:toolsService.parameter("id", $location.absUrl()),
        //    businessType : "EMPLOYEE",
        //    businessCategory : "COMMON",
        //    list:[]
        //};

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
                        $scope.sellLand.picturePath = data.url;
                        $scope.sellLand.pictureId = data.id;
                    }
                });
            };
        };

        $scope.endTime = false;
        // 弹出式日历触发函数
        $scope.openEndTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endTime = true;
        };
        //保存
        $scope.doSave=function(){
            $scope.sellLand.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.sellLand.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.sellLand.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.sellLand.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.sellLand.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.sellLand.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.sellLand.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.sellLand.address = $scope.land.address.address;
            $scope.sellLand.content = $scope.sellIntro.html();
            //$scope.land.planUse = $scope.sellLand.planUse;
            if($scope.land.planUse){
                $scope.sellLand.planUse = $scope.land.planUse.id;
            }
            //$scope.land.sellWay = $scope.sellLand.sellWay;
            if($scope.land.sellWay){
                $scope.sellLand.sellWay = $scope.land.sellWay.id;
            }

            if ($scope.sellLand.endTime instanceof Date) { // 截止日趋
                $scope.sellLand.endTime = $scope.sellLand.endTime.format("yyyy-MM-dd");
            }

            $scope.sellLand.isSubmit = false;
            $scope.sellLand.isApproved = false;
            $scope.sellLand.isTop = false;
            $scope.sellLand.approveResult = "DISAGREED";

            yunLandService.apiCreateLandSell($scope.sellLand).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });
        };

        //发布
        $scope.doPublish=function(){
            $scope.sellLand.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.sellLand.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.sellLand.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.sellLand.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.sellLand.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.sellLand.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.sellLand.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.sellLand.address = $scope.land.address.address;
            $scope.sellLand.content = $scope.sellIntro.html();
            //$scope.land.planUse = $scope.sellLand.planUse;
            if($scope.land.planUse){
                $scope.sellLand.planUse = $scope.land.planUse.id;
            }
            //$scope.land.sellWay = $scope.sellLand.sellWay;
            if($scope.land.sellWay){
                $scope.sellLand.sellWay = $scope.land.sellWay.id;
            }

            if ($scope.sellLand.endTime instanceof Date) { // 截止日趋
                $scope.sellLand.endTime = $scope.sellLand.endTime.format("yyyy-MM-dd");
            }

            $scope.sellLand.isSubmit = true;
            $scope.sellLand.isApproved = true;
            $scope.sellLand.isTop = false;
            $scope.sellLand.approveResult = "AGREED";

            yunLandService.apiCreateLandSell($scope.sellLand).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveSellLand({id:data.id}).success(function(res){
                        if (res.errors == null || res.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });

        };

    };

    /**
     * 土地结果新增控制器
     * @author zxl
     */
    var addResultController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        $scope.result = {};
        // 土地用途
        $scope.selectData = selectModel2;
        // 出让方式
        $scope.selectDataSellWay = selectModelSellWay;

        //初始化地址
        setTimeout(function(){
            $scope.land.address.provinceId = "320000";
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = "320500";
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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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

        $scope.deliveryTime = false;
        $scope.buildingTime = false;
        $scope.endTime = false;
        $scope.sigingDate = false;
        // 弹出式日历触发函数
        $scope.openDeliveryTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.deliveryTime = true;
        };
        // 弹出式日历触发函数
        $scope.openBuildingTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.buildingTime = true;
        };
        // 弹出式日历触发函数
        $scope.openEndTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endTime = true;
        };
        // 弹出式日历触发函数
        $scope.openSigingDate = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.sigingDate = true;
        };

        //保存
        $scope.doSave=function(){
            $scope.result.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.result.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.result.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.result.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.result.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.result.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.result.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.result.address = $scope.land.address.address;

            $scope.result.isSubmit = false;

            if($scope.land.planUse){
                $scope.result.planUse = $scope.land.planUse.id;
            }
            if($scope.land.sellWay){
                $scope.result.supplyType = $scope.land.sellWay.id;
            }
            if ($scope.result.deliveryTime instanceof Date) { // 约定交地时间
                $scope.result.deliveryTime = $scope.result.deliveryTime.format("yyyy-MM-dd");
            }
            if ($scope.result.buildingTime instanceof Date) { // 约定开工时间
                $scope.result.buildingTime = $scope.result.buildingTime.format("yyyy-MM-dd");
            }
            if ($scope.result.endTime instanceof Date) { // 约定竣工时间
                $scope.result.endTime = $scope.result.endTime.format("yyyy-MM-dd");
            }
            if ($scope.result.sigingDate instanceof Date) { // 合同签订日期
                $scope.result.sigingDate = $scope.result.sigingDate.format("yyyy-MM-dd");
            }
            yunLandService.apiCreateLandResult($scope.result).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });
        }

        //发布
        $scope.doPublish=function(){
            $scope.result.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.result.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.result.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.result.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.result.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.result.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.result.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.result.address = $scope.land.address.address;

            $scope.result.isSubmit = true;
            $scope.result.isApproved = true;
            $scope.result.isTop = false;
            $scope.result.approveResult = "AGREED";

            if($scope.land.planUse){
                $scope.result.planUse = $scope.land.planUse.id;
            }
            if($scope.land.sellWay){
                $scope.result.supplyType = $scope.land.sellWay.id;
            }
            if ($scope.result.deliveryTime instanceof Date) { // 约定交地时间
                $scope.result.deliveryTime = $scope.result.deliveryTime.format("yyyy-MM-dd");
            }
            if ($scope.result.buildingTime instanceof Date) { // 约定开工时间
                $scope.result.buildingTime = $scope.result.buildingTime.format("yyyy-MM-dd");
            }
            if ($scope.result.endTime instanceof Date) { // 约定竣工时间
                $scope.result.endTime = $scope.result.endTime.format("yyyy-MM-dd");
            }
            if ($scope.result.sigingDate instanceof Date) { // 合同签订日期
                $scope.result.sigingDate = $scope.result.sigingDate.format("yyyy-MM-dd");
            }
            yunLandService.apiCreateLandResult($scope.result).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveLandResult({id:data.id}).success(function(res){
                        if (res.errors == null || res.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });
        }
    };

    /**
     * 土地结果新增控制器
     * @author zxl
     */
    var editResultController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        $scope.vm ={
            id : toolsService.parameter("id", $location.absUrl())
        };

        $scope.result = {};
        // 土地用途
        $scope.selectData = selectModel2;
        // 出让方式
        $scope.selectDataSellWay = selectModelSellWay;

        //初始化地址
        setTimeout(function(){
            $scope.land.address.provinceId = "320000";
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = "320500";
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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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

        $scope.deliveryTime = false;
        $scope.buildingTime = false;
        $scope.endTime = false;
        $scope.sigingDate = false;
        // 弹出式日历触发函数
        $scope.openDeliveryTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.deliveryTime = true;
        };
        // 弹出式日历触发函数
        $scope.openBuildingTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.buildingTime = true;
        };
        // 弹出式日历触发函数
        $scope.openEndTime = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endTime = true;
        };
        // 弹出式日历触发函数
        $scope.openSigingDate = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.sigingDate = true;
        };

        var locationPX;
        var locationPY;
        yunLandService.apiGetLandResult({id:$scope.vm.id}).success(function(data) {
            if (data.errors == null || data.errors.length > 0)
                dialogService.tip(data.errors);
            else {
                $scope.result = data.landResult;
                //$scope.sellIntro.html(data.sellLand.content);
                // $scope.sellIntro.html();
                $scope.land.address.address = $scope.result.address;

                // 获取经纬度
                var location = data.landResult.location;
                if(location != null && location != ""){
                    var locationPArr = location.split(",");
                    locationPX = locationPArr[0];
                    locationPY = locationPArr[1];
                    setTimeout(function(){
                        map.clearOverlays();
                        marker = new BMap.Marker(new BMap.Point(locationPX, locationPY));
                        marker.enableDragging();
                        map.addOverlay(marker);
                    },1000);
                }

                for(var i=0;i < selectModelSellWay.length;i++){
                    var selectModel = selectModelSellWay[i];
                    if( $scope.result.supplyType == selectModel.id){
                        $scope.land.sellWay =selectModel;
                    }
                }

                for(var i=0;i < selectModel2.length;i++){
                    var selectModel3 = selectModel2[i];
                    if( $scope.result.planUse == selectModel3.id){
                        $scope.land.planUse =selectModel3;
                    }
                }
            }
        });

        //加载地址
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.result.provinceId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.result.cityId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.result.districtId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.coordinate = $scope.result.location;
            $scope.$apply();
        },600);

        //保存
        $scope.doSave=function(){

            // marker坐标
            var marketpoint =marker.getPosition();
            $scope.land.coordinate = marketpoint.lng + "," + marketpoint.lat;

            $scope.result.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.result.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.result.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.result.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.result.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.result.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.result.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.result.address = $scope.land.address.address;

            $scope.result.isSubmit = false;

            if($scope.land.planUse){
                $scope.result.planUse = $scope.land.planUse.id;
            }
            if($scope.land.sellWay){
                $scope.result.supplyType = $scope.land.sellWay.id;
            }
            if ($scope.result.deliveryTime instanceof Date) { // 约定交地时间
                $scope.result.deliveryTime = $scope.result.deliveryTime.format("yyyy-MM-dd");
            }
            if ($scope.result.buildingTime instanceof Date) { // 约定开工时间
                $scope.result.buildingTime = $scope.result.buildingTime.format("yyyy-MM-dd");
            }
            if ($scope.result.endTime instanceof Date) { // 约定竣工时间
                $scope.result.endTime = $scope.result.endTime.format("yyyy-MM-dd");
            }
            if ($scope.result.sigingDate instanceof Date) { // 合同签订日期
                $scope.result.sigingDate = $scope.result.sigingDate.format("yyyy-MM-dd");
            }
            yunLandService.apiUpdateLandResult($scope.result).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });
        }

        //发布
        $scope.doPublish=function(){

            // marker坐标
            var marketpoint =marker.getPosition();
            $scope.land.coordinate = marketpoint.lng + "," + marketpoint.lat;

            $scope.result.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.result.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.result.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.result.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.result.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.result.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.result.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.result.address = $scope.land.address.address;

            $scope.result.isSubmit = true;
            $scope.result.isApproved = true;
            $scope.result.isTop = false;
            $scope.result.approveResult = "AGREED";

            if($scope.land.planUse){
                $scope.result.planUse = $scope.land.planUse.id;
            }
            if($scope.land.sellWay){
                $scope.result.supplyType = $scope.land.sellWay.id;
            }
            if ($scope.result.deliveryTime instanceof Date) { // 约定交地时间
                $scope.result.deliveryTime = $scope.result.deliveryTime.format("yyyy-MM-dd");
            }
            if ($scope.result.buildingTime instanceof Date) { // 约定开工时间
                $scope.result.buildingTime = $scope.result.buildingTime.format("yyyy-MM-dd");
            }
            if ($scope.result.endTime instanceof Date) { // 约定竣工时间
                $scope.result.endTime = $scope.result.endTime.format("yyyy-MM-dd");
            }
            if ($scope.result.sigingDate instanceof Date) { // 合同签订日期
                $scope.result.sigingDate = $scope.result.sigingDate.format("yyyy-MM-dd");
            }
            yunLandService.apiUpdateLandResult($scope.result).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveLandResult({id:data.id}).success(function(res){
                        if (res.errors == null || res.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });
        }
    };

    var addPublicityController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        $scope.publicity = {};
        // 土地用途
        $scope.selectPublicityType = selectModel;

        //初始化地址
        setTimeout(function(){
            $scope.land.address.provinceId = "320000";
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = "320500";
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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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

        //保存
        $scope.doSave=function(){

            $scope.publicity.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.publicity.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.publicity.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.publicity.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.publicity.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.publicity.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.publicity.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.publicity.address = $scope.land.address.address;

            $scope.publicity.content = $scope.sellIntro.html();
            if($scope.land.type){
                $scope.publicity.type = $scope.land.type.id;
            }
            yunLandService.apiCreateLandPublicity($scope.publicity).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });
        };

        //保存
        $scope.doPublish=function(){

            $scope.publicity.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.publicity.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.publicity.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.publicity.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.publicity.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.publicity.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.publicity.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.publicity.address = $scope.land.address.address;

            $scope.publicity.content = $scope.sellIntro.html();
            if($scope.publicity.type){
                $scope.publicity.type = $scope.land.type.id;
            }
            yunLandService.apiCreateLandPublicity($scope.publicity).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveLandPublicity({id:data.id}).success(function(res){
                        if (res.errors == null || res.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });
        };
    }

    /*
    * 修改政府公告控制器
     */
    var editPublicityController = function($scope,$modal,dialogService,toolsService,$location,yunLandService,FoundationService){
        $scope.$emit('navShow',3);

        $scope.vm ={
            id : toolsService.parameter("id", $location.absUrl())
        };

        $scope.publicity = {};
        // 土地用途
        $scope.selectPublicityType = selectModel;

        //初始化地址
        setTimeout(function(){
            $scope.land.address.provinceId = "320000";
            $scope.$apply();
        },300);
        setTimeout(function(){
            $scope.land.address.cityId = "320500";
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
        var marker;
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
                    marker = new BMap.Marker(point)
                    map.addOverlay(marker);
                    marker.enableDragging();
                    $scope.land.coordinate = point.lng + "," + point.lat;
                    $scope.$apply();
                    marker.addEventListener("mouseup", function(e){
                        $scope.land.coordinate = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
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

        //保存
        $scope.doSave=function(){

            $scope.publicity.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.publicity.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.publicity.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.publicity.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.publicity.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.publicity.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.publicity.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.publicity.address = $scope.land.address.address;

            $scope.publicity.content = $scope.sellIntro.html();
            if($scope.publicity.type){
                $scope.publicity.type = $scope.land.type.id;
            }
            yunLandService.apiUpdateLandPublicity($scope.publicity).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    dialogService.tip([{message:"保存成功"}],"index",500)
                }
            });

        };

        //保存
        $scope.doPublish=function(){

            $scope.publicity.provinceId = $scope.land.address.provinceId!=null?$scope.land.address.provinceId:'';
            $scope.publicity.cityId = $scope.land.address.cityId!=null?$scope.land.address.cityId:'';
            $scope.publicity.districtId = $scope.land.address.districtId!=null?$scope.land.address.districtId:'';
            $scope.publicity.provinceName = $scope.land.address.name.provinceName!=null?$scope.land.address.name.provinceName:'';
            $scope.publicity.cityName = $scope.land.address.cityId!=null?$scope.land.address.name.cityName:'';
            $scope.publicity.districtName = $scope.land.address.districtId!=null?$scope.land.address.name.districtName:'';
            $scope.publicity.location = $scope.land.coordinate!=null?$scope.land.coordinate:'';
            $scope.publicity.address = $scope.land.address.address;

            $scope.publicity.content = $scope.sellIntro.html();
            if($scope.publicity.type){
                $scope.publicity.type = $scope.land.type.id;
            }
            yunLandService.apiUpdateLandPublicity($scope.publicity).success(function(data) {
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else {
                    yunLandService.apiApproveLandPublicity({id:data.id}).success(function(res){
                        if (res.errors == null || res.errors.length > 0)
                            dialogService.tip(data.errors);
                        else {
                            dialogService.tip([{message:"发布成功"}], "index",500)
                        }
                    })
                }
            });
        };

        yunLandService.apiGetLandPublicity({id:$scope.vm.id}).success(function(data){
            $scope.publicity = data.landPublicity;
            $scope.land.address.address = $scope.publicity.address;

            for(var i=0;i < selectModel.length;i++){
                var selectModel2 = selectModel[i];
                if( $scope.publicity.type == selectModel2.id){
                    $scope.land.type =selectModel2;
                }
            }

            try{
                $scope.sellIntro.html(data.landPublicity.content);
            }catch (err){}
        });

        //加载地址
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.publicity.provinceId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.publicity.cityId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.publicity.districtId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.coordinate = $scope.publicity.location;
            $scope.$apply();
        },600);

    }

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
            $scope.vm.type = "SELL";
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
            $scope.vm.type = "SELL";
            $scope.vm.approveResult = "AGREED";
            $scope.vm.isApproved = 1;

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

    // 定义module，并指明依赖模块
    angular.module("xn.yunland.sell",[])
        .controller("SellIndexController",["$scope","YunLandService","dialogService",sellIndexController])
        .controller("SellAdvertiseMaintainController",["$scope","$modal","dialogService","YunLandService","FoundationService",sellAdvertiseMaintainController])
        .controller("AddLandController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",addLandController])
        .controller("AddResultController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",addResultController])
        .controller("AddPublicityController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",addPublicityController])
        .controller("EditResultController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",editResultController])
        .controller("EditPublicityController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",editPublicityController])
        .controller("EditLandController",["$scope","$modal","dialogService","toolsService","$location","YunLandService","FoundationService",editLandController]);
})();