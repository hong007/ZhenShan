(function(){
    "use strict";

    /**
     * 推介信息控制器
     * @author zxl
     * @param $scope
     */
    var recommendIndexController = function($scope,dialogService,yunLandService){
        $scope.$emit('navShow',2);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1
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
            yunLandService.apiFindLandRecommend($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.recommendList = data.result;
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

        // 编辑动态
        $scope.editRecommend = function(id){

        };

        // 取消发布推介
        $scope.cancelPublish = function(id){
            yunLandService.apiCancelApproveLandRecommend({id:id}).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                   window.location.reload();
                }
            });
        };

        // 发布推介
        $scope.publishRecommend = function(id){
            yunLandService.apiApproveLandRecommend({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };

        // 置顶土地推介
        $scope.topRecommend = function(id){
            yunLandService.apiTopLandRecommend({id:id}).success(function(data){
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
            yunLandService.apiCancelTopLandRecommend({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    //$modalInstance.close();
                    window.location.reload();
                }
            });
        };
    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     * @param $modal
     * @param dialogService
     */
    var recommendAdvertiseMaintainController = function($scope,$modal,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',2);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1,
            type: 'RECOMMEND'
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
     * 新增土地推介控制器
     * @author lwz
     * @param $scope
     */
    var addRecommendController = function($scope,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',2);

        $scope.drawingManagerShow = true;

        // 保存
        $scope.land={};

        $scope.recommend = {};

        /**
         *图片保存的功能
         */
        $scope.showHeadImagePicture=function(){
            var fileId=document.getElementById("headImageFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("headImageFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.recommend.headImagepath = data.url;
                        $scope.recommend.headImage = data.id;
                    }
                });
            };
        };
        /**
         * 缩略图
         */
        $scope.showHeadImagePictureSmall=function(){
            var fileId=document.getElementById("headImageFileSmall");
            fileId.onchange=function(){
                var fileList = document.getElementById("headImageFileSmall").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.recommend.headImagepathSmall = data.url;
                        $scope.recommend.headImageSmall = data.id;
                    }
                });
            };
        };

        $scope.selectData = selectModel;
        $scope.land.id = "";
        $scope.attachment ={
            businessType : "EMPLOYEE",
            businessCategory : "COMMON",
            list:[]
        };
        FoundationService.apiFoundationIdGet().success(function(data){
            $scope.land.id = data.id;
            $scope.attachment.businessId=$scope.land.id;
        });



        $scope.doSave = function(){
            $scope.recommend.provinceId = $scope.land.address.provinceId;
            $scope.recommend.provinceName = $scope.land.address.name.provinceName;
            $scope.recommend.cityId = $scope.land.address.cityId;
            $scope.recommend.cityName = $scope.land.address.name.cityName;
            $scope.recommend.districtId = $scope.land.address.districtId;
            $scope.recommend.districtName = $scope.land.address.name.districtName;
            $scope.recommend.address = $scope.land.address.address;
            $scope.recommend.isSubmit = 0;
            $scope.recommend.isApproved = 0;
            $scope.recommend.isTop = 0;
            $scope.recommend.approveResult = "DISAGREED";
            //$scope.recommend.planUse  = $scope.land.planUse.id;
            $scope.recommend.planUse  = $scope.land.planUse;
            $scope.recommend.content = $scope.landIntro.html();

            $scope.recommend.landNumber = $scope.land.landNumber;
            $scope.recommend.name = $scope.land.name;
            $scope.recommend.landLocation = $scope.land.landLocation;
            $scope.recommend.sellYear = $scope.land.sellYear;
            $scope.recommend.plotRatio = $scope.land.plotRatio;
            $scope.recommend.buildingDensity = $scope.land.buildingDensity;
            $scope.recommend.greeningRate = $scope.land.greeningRate;
            $scope.recommend.maxHeight = $scope.land.maxHeight;
            $scope.recommend.floorSpace = $scope.land.floorSpace;
            $scope.recommend.id = $scope.land.id;

            // 经纬度
            $scope.recommend.location = $scope.land.location;

            // 图形采集点
            $scope.recommend.points = points;

            // $scope.land.name = "假名";
            yunLandService.apiCreateLandRecommend($scope.recommend).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{"message":"保存成功！" }],"/yunland/recommend/index.htm");
                }
            });
        };

        // 发布
        $scope.doPublish = function(){
            $scope.recommend.provinceId = $scope.land.address.provinceId;
            $scope.recommend.provinceName = $scope.land.address.name.provinceName;
            $scope.recommend.cityId = $scope.land.address.cityId;
            $scope.recommend.cityName = $scope.land.address.name.cityName;
            $scope.recommend.districtId = $scope.land.address.districtId;
            $scope.recommend.districtName = $scope.land.address.name.districtName;
            $scope.recommend.address = $scope.land.address.address;
            $scope.recommend.isSubmit = 1;
            $scope.recommend.isApproved = 1;
            $scope.recommend.isTop = 0;
            $scope.recommend.approveResult = "AGREED";
            $scope.recommend.planUse  = $scope.land.planUse;
            $scope.recommend.content = $scope.landIntro.html();

            $scope.recommend.landNumber = $scope.land.landNumber;
            $scope.recommend.name = $scope.land.name;
            $scope.recommend.landLocation = $scope.land.landLocation;
            $scope.recommend.sellYear = $scope.land.sellYear;
            $scope.recommend.plotRatio = $scope.land.plotRatio;
            $scope.recommend.buildingDensity = $scope.land.buildingDensity;
            $scope.recommend.greeningRate = $scope.land.greeningRate;
            $scope.recommend.maxHeight = $scope.land.maxHeight;
            $scope.recommend.floorSpace = $scope.land.floorSpace;
            $scope.recommend.id = $scope.land.id;

            // 经纬度
            $scope.recommend.location = $scope.land.location;

            // 图形采集点
            $scope.recommend.points = points;

            //$scope.land.name = "假名";
            yunLandService.apiCreateLandRecommend($scope.recommend).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    yunLandService.apiApproveLandRecommend({id:data.id}).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{"message":"发布成功！" }],"/yunland/recommend/index.htm");
                        }
                    });
                }
            });
        };

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

        /*//单击获取点击的经纬度
        map.addEventListener("click",function(e){
            $scope.land.location = e.point.lng + "," + e.point.lat;
            $scope.$apply();
        });*/

        //根据地址定位
        $scope.marker;
        $scope.getPosition = function(){
            // 先清除覆盖物
            map.clearOverlays();
            // 将地址解析结果显示在地图上,并调整地图视野
            var province = $scope.land.address.name.provinceName?$scope.land.address.name.provinceName:'';
            var city = $scope.land.address.name.cityName?$scope.land.address.name.cityName:'';
            var district = $scope.land.address.name.districtName?$scope.land.address.name.districtName:'';
            var address = $scope.land.address.name.address?$scope.land.address.name.address:'';
            var position = province+city+district+address;
            myGeo.getPoint(position, function(point){
                if (point) {
                    /*map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));*/
                    map.centerAndZoom(point, 16);
                    $scope.marker = new BMap.Marker(point)
                    map.addOverlay($scope.marker);
                    $scope.marker.enableDragging();
                    $scope.land.location = point.lng + "," + point.lat;
                    $scope.$apply();
                    $scope.marker.addEventListener("dragend", function(e){
                        $scope.land.location = e.point.lng + "," + e.point.lat;
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

        // 清除覆盖物
        $scope.clearOverlays = function(){
            map.clearOverlays();
            map.addOverlay($scope.marker);
            $scope.drawingManagerShow = true;
        };
        // 创建鼠标绘画公具
        $scope.addDrawingManager = function(){
            newDrawingManager();
            $scope.drawingManagerShow = false; // 隐藏添加绘画功能
        };

        // 百度地图多边形
        try{
            var fso = new ActiveXObject("Scripting.FileSystemObject");//获取对象
        }catch(e)
        {
            //alert("ActiveXObject对象创建失败，数据将无法保存。");
        }
        var tf; //文件句柄
        var pointList = new Array();    //坐标列表
        var bounds; //矩形区域
        var step = 0.001;   //密度
        var poi;
        var tipsDom;    //运行提示DOM
        var drawingManager;
        var points = "";

        // 获取点坐标
        var pointsObj;

        //newDrawingManager();
        function newDrawingManager()
        {
            var styleOptions = {
                strokeColor:"red",    //边线颜色。
                fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
                fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            //实例化鼠标绘制工具
            drawingManager = new BMapLib.DrawingManager(map, {
                isOpen: true, //是否开启绘制模式
                drawingToolOptions: {
                    anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                    offset: new BMap.Size(5, 5), //偏离值
                    scale: 0.8 //工具栏缩放比例
                },
                circleOptions: styleOptions, //圆的样式
                polylineOptions: styleOptions, //线的样式
                polygonOptions: styleOptions, //多边形的样式
                rectangleOptions: styleOptions //矩形的样式
            });
            drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);
            drawingManager.disableCalculate();
            drawingManager.addEventListener('overlaycomplete', function(e){
                //绘制完成回调函数
                var o = e.overlay;
                pointsObj = e.overlay.W;
                bounds = o.getBounds();
                drawingManager.close();//关闭地图的绘制状态
                hanPoint2(bounds);
            });
            //drawingManager.open();
        }

        function hanPoint2(bounds)
        {
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX = southWest.lat;     //X轴开始循环值
            var startY = southWest.lng;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            if(southWest.equals(northEast))
            {
                //点
                pointList.push(new BMap.Point(startY,startX));
            }else if(startX == endX || startY == endY)
            {
                //线
                if(startX == endX){
                    for(startY = southWest.lng;startY <= endY; startY += step)
                    {
                        pointList.push(new BMap.Point(startY,startX));
                    }
                }else{
                    for(startX = southWest.lat;startX <= endX;startX += step)
                    {
                        pointList.push(new BMap.Point(startY,startX));
                    }
                }
            }else{

                //面
                var boundsList = cuttingBounds(bounds);
                if(boundsList.length > 1)
                {
                    for(var i in boundsList)
                    {
                        var b = boundsList[i];
                        if(bounds.containsBounds(b))
                        {
                            //完全包含
                            pointList = pointList.concat(getPointByBounds(b));
                        }else{
                            //不完全包含,进行过滤
                            pointList = pointList.concat(containsPonint(getPointByBounds(b)));
                        }

                    }
                }else{
                    //自身区域,需过滤
                    pointList = pointList.concat(containsPonint(getPointByBounds(boundsList[0])));
                }
            }
            console.log("pointList:" + pointList);
            /*for(var i = 0 ; i < pointList.length; i++){
                var latStr = pointList[i].lat.toFixed(6).toString();
                var lngStr = pointList[i].lng.toFixed(6).toString();
                var xy = latStr + '|' + lngStr + ',';
                points += xy ;
            }*/
            for(var i = 0 ; i < pointsObj.length; i++){
                var latStr = pointsObj[i].lat.toFixed(6).toString();
                var lngStr = pointsObj[i].lng.toFixed(6).toString();
                var xy = latStr + '|' + lngStr + ',';
                points += xy ;
            }
            if(points.length > 0){
                points = points.substring(0,points.length-1);
            }
            geocoder();
        }

        //切割区域,返回切割后的区域列表
        function cuttingBounds(bounds)
        {
            var lengX = step * 10;  //切割长度X
            var lengY = step * 10;  //切割长度Y
            var boundsList = new Array();
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX = southWest.lat;     //X轴开始循环值
            var startY = southWest.lng;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            if(endX - startX >= lengX || endY - endX >= lengY)
            {
                boundsList.push(bounds);
                return boundsList;
            }
            while(startX < endX)
            {
                var tempX = startX + lengX;
                if(tempX >= endX)
                {
                    //超出范围
                    tempX = endX;
                }
                startY = southWest.lng;
                while(startY < endY)
                {
                    var tempY = startY + lengY;
                    if(tempY >= endY)
                    {
                        //超出范围
                        tempY = endY;
                    }
                    boundsList.push(new BMapLib.Bounds(new BMapLib.Point(startY,startX),new BMapLib.Point(tempY,tempX)));
                    startY = tempY + step;
                }
                startX = tempX + step;
            }
            return boundsList;
        }
        //获取矩形区域内的所有点
        function getPointByBounds(bounds)
        {
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX;     //X轴开始循环值
            var startY;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            var pl = new Array();
            for(startX = southWest.lat;startX <= endX;startX += step)
            {
                for(startY = southWest.lng;startY <= endY; startY += step)
                {
                    pl.push(new BMap.Point(startY,startX));
                }
            }
            return pl;
        }
        //过滤此区域内的点
        function containsPonint(list)
        {
            var l = new Array();
            for(var i in list)
            {
                var p = list[i];
                if(bounds.containsPoint(p))
                {
                    //在此区域内
                    l.push(p);
                }
            }
            return l;
        }
        //如果点未处理过且在矩形区域内
        function isPoint(point)
        {
            if(bounds.containsPoint(point) == false)
            {
                //不在区域内
                return false;
            }
            for(i in pointList)
            {
                if(pointList[i].equals(point))
                {
                    //列表中已存在
                    return false;
                }
            }
            return true;
        }
        var gIndex =0;
        //逆地址解析
        function geocoder()
        {
            if(pointList != null && pointList.length > 0)
            {
                tf = createFile("c://poi.txt");//数据保存地址
                for(var i =0;i<100;i++)  //地址解析线程
                {
                    setTimeout(function(){
                        getLocation(gIndex);
                    },100)
                    gIndex++;

                }

            }
        }
        //解析列表地址,同步
        function getLocation(index)
        {
            var geo = new BMap.Geocoder();
            if(index < pointList.length)
            {
                var p = pointList[index];
                geo.getLocation(p,function(gr){
                    if(gr != null)
                    {
                        var address = gr.addressComponents.city+gr.addressComponents.district+gr.addressComponents.street   //只取城市、区县、街道名称
                        if(tf!=null)
                            tf.WriteLine(address);
                        runTips("加入数据："+address)
                        var spList = gr.surroundingPois;
                        for(i in spList)
                        {
                            var title =spList[i].title;
                            if(tf!=null)
                                tf.WriteLine(title);
                            runTips("加入数据："+title);
                        }
                    }else{
                        console.log(null);
                    }
                    gIndex++;
                    getLocation(gIndex);
                });
            }else{
                //drawingManager.open();  //开启地图的绘制模式
                //tf.Close();
            }
        }
        //创建指定路径文件,并返回文件句柄
        function createFile(path)
        {
            if(fso != null)
            {
                tf = fso.CreateTextFile(path, true);//创建一个文件夹
            }
            return tf;

        }
        //设置爬取密度
        function setStep(t)
        {
            try{
                var temp = parseFloat(document.getElementById("step").value);
                if(temp > 0)
                {
                    step = temp;
                    alert("设置成功.");
                }else{
                    alert("值必需大于0.");
                }
            }catch(e)
            {
                alert("设置失败，请检查输入值的有效性。")
            }
        }
        //清除绘制
        function clearOverlays()
        {
            map.clearOverlays();
            drawingManager.close();
            newDrawingManager();
        }
    };

    /**
     * 修改土地推介控制器
     *
     * @author zxl
     *
     * @param $scope
     */
    var editRecommendController = function($scope,$location,toolsService,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',2);

        $scope.selectData2 = selectModel2;

        $scope.drawingManagerShow = true;

        $scope.clearOverlaysShow = true;

        // 保存
        $scope.doSave = function(){
            $scope.recomend.provinceId = $scope.land.address.provinceId;
            $scope.recomend.provinceName = $scope.land.address.name.provinceName;
            $scope.recomend.cityId = $scope.land.address.cityId;
            $scope.recomend.cityName = $scope.land.address.name.cityName;
            $scope.recomend.districtId = $scope.land.address.districtId;
            $scope.recomend.districtName = $scope.land.address.name.districtName;
            $scope.recomend.address = $scope.land.address.address;
            $scope.recomend.planUse  = $scope.land.planUse;
            $scope.recomend.content = $scope.landIntro.html();

            // 经纬度
            $scope.recomend.location = $scope.land.location;

            // 图形采集点
            $scope.recomend.points = points;

            yunLandService.apiUpdateLandRecommend($scope.recomend).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    //$modalInstance.close();
                    dialogService.tip([{"message":"保存成功！" }],"/yunland/recommend/index.htm");
                }
            });
        };

        // 发布
        $scope.doPublish = function(){
            $scope.recomend.provinceId = $scope.land.address.provinceId;
            $scope.recomend.provinceName = $scope.land.address.name.provinceName;
            $scope.recomend.cityId = $scope.land.address.cityId;
            $scope.recomend.cityName = $scope.land.address.name.cityName;
            $scope.recomend.districtId = $scope.land.address.districtId;
            $scope.recomend.districtName = $scope.land.address.name.districtName;
            $scope.recomend.address = $scope.land.address.address;
            $scope.recomend.planUse  = $scope.land.planUse;
            $scope.recomend.content = $scope.landIntro.html();

            // 经纬度
            $scope.recomend.location = $scope.land.location;

            // 图形采集点
            $scope.recomend.points = points;

            yunLandService.apiUpdateLandRecommend($scope.recomend).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    yunLandService.apiApproveLandRecommend($scope.recomend).success(function(result){
                        if(result.errors == null || result.errors.length > 0){
                            dialogService.tip(result.errors);
                        }else{
                            //$modalInstance.close();
                            dialogService.tip([{"message":"发布成功！" }],"/yunland/recommend/index.htm");
                        }
                    });
                }
            });
        };

        $scope.land = {
            id:toolsService.parameter("id", $location.absUrl()),
            address:{}
        };

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

        /*//单击获取点击的经纬度
        map.addEventListener("click",function(e){
            $scope.land.location = e.point.lng + "," + e.point.lat;
            $scope.$apply();
        });*/

        //根据地址定位
        $scope.marker;

        $scope.getPosition = function(){
            // 先清除覆盖物
            map.clearOverlays();
            // 将地址解析结果显示在地图上,并调整地图视野
            var province = $scope.land.address.name.provinceName?$scope.land.address.name.provinceName:'';
            var city = $scope.land.address.name.cityName?$scope.land.address.name.cityName:'';
            var district = $scope.land.address.name.districtName?$scope.land.address.name.districtName:'';
            var address = $scope.land.address.name.address?$scope.land.address.name.address:'';
            var position = province+city+district+address;
            myGeo.getPoint(position, function(point){
                if (point) {
                    /*map.centerAndZoom(point, 16);
                     map.addOverlay(new BMap.Marker(point));*/
                    map.centerAndZoom(point, 16);
                    /*$scope.marker = new BMap.Marker(point)
                    map.addOverlay($scope.marker);
                    $scope.marker.enableDragging();
                    $scope.land.location = point.lng + "," + point.lat;*/
                    var point = new BMap.Point(locationPX,locationPY);
                    $scope.marker = new BMap.Marker(point);
                    map.addOverlay($scope.marker);
                    $scope.marker.enableDragging();
                    $scope.$apply();
                    $scope.marker.addEventListener("dragend", function(e){
                        $scope.land.location = e.point.lng + "," + e.point.lat;
                        $scope.$apply();
                    });
                }
            }, city);
            map.addOverlay($scope.polygon);
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
        $scope.attachment ={
            businessId:toolsService.parameter("id", $location.absUrl()),
            businessType : "EMPLOYEE",
            businessCategory : "COMMON",
            list:[]
        };
        $scope.polygon;
        var locationPX;
        var locationPY;
        yunLandService.apiGetLandRecommend({id:$scope.land.id}).success(function (data) {
            if (data.errors === null || data.errors.length > 0) {
                dialogService.tip(data.errors);
            } else {
                $scope.recomend = data.landRecommend;
                $scope.land.planUse = data.landRecommend.planUse;

                // 根据采集的点绘制图形
                if(data.landRecommend.points != null && data.landRecommend.points !=""){
                    points = data.landRecommend.points;
                    var pointXYArr = points.split(",");
                    var pointsArr = [];
                    var a = [];
                    for(var i=0; i<pointXYArr.length; i++){
                        var _pointXYArr = pointXYArr[i].split("|");
                        pointsArr.push(_pointXYArr);
                    }
                    for(var p in pointsArr){
                        a.push(new BMap.Point(pointsArr[p][1],pointsArr[p][0]));
                    }
                    $scope.polygon = new BMap.Polygon(
                        a,
                        {strokeColor:"red", strokeWeight:3, strokeOpacity:0.9 ,fillColor:"orange"}); // 创建多边形
                    map.addOverlay($scope.polygon);

                    if($scope.polygon != null){
                        $scope.drawingManagerShow = false;
                    }
                }

                // 获取经纬度
                var location = data.landRecommend.location;
                if(location != null && location !=""){
                    var locationPArr = location.split(",");
                    locationPX = locationPArr[0];
                    locationPY = locationPArr[1];
                }
            }

            console.log("=======get=====" + $scope.polygon);
        });
        $scope.showHeadImagePicture=function(){
            var fileId=document.getElementById("headImageFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("headImageFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.recomend.headImagepath = data.url;
                        $scope.recomend.headImage = data.id;
                    }
                });
            };
        };
        /**
         * 缩略图
         */
        $scope.showHeadImagePictureSmall=function(){
            var fileId=document.getElementById("headImageFileSmall");
            fileId.onchange=function(){
                var fileList = document.getElementById("headImageFileSmall").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.recomend.headImagepathSmall = data.url;
                        $scope.recomend.headImageSmall = data.id;
                    }
                });
            };
        };
        setTimeout(function(){
            $scope.land.address.provinceId = $scope.recomend.provinceId;
            $scope.$apply();
        },500);
        setTimeout(function(){
            $scope.land.address.cityId = $scope.recomend.cityId;
            $scope.$apply();
        },600);
        setTimeout(function(){
            $scope.land.address.districtId = $scope.recomend.districtId;
            $scope.$apply();
        },700);
        setTimeout(function(){
            $scope.land.location = $scope.recomend.location;
            $scope.$apply();
        },800);
        setTimeout(function(){
            $scope.land.address.address = $scope.recomend.address;
            $scope.$apply();
        },600);
        // 清除覆盖物
        $scope.clearOverlays = function(){
            //map.removeOverlay("====clear=====" + $scope.polyline);
            map.clearOverlays();
            map.addOverlay($scope.marker);
            $scope.drawingManagerShow = true;
        };
        // 创建鼠标绘画公具
        $scope.addDrawingManager = function(){
            map.removeOverlay($scope.polygon);
            newDrawingManager();
            $scope.drawingManagerShow = false;
        };

        // 百度地图多边形
        try{
            var fso = new ActiveXObject("Scripting.FileSystemObject");//获取对象
        }catch(e)
        {
            //alert("ActiveXObject对象创建失败，数据将无法保存。");
        }
        var tf; //文件句柄
        var pointList = new Array();    //坐标列表
        var bounds; //矩形区域
        var step = 0.001;   //密度
        var poi;
        var tipsDom;    //运行提示DOM
        var drawingManager;
        var points = "";

        // 获取点坐标
        var pointsObj;

        function newDrawingManager()
        {
            var styleOptions = {
                strokeColor:"red",    //边线颜色。
                fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
                fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            //实例化鼠标绘制工具
            drawingManager = new BMapLib.DrawingManager(map, {
                isOpen: true, //是否开启绘制模式
                drawingToolOptions: {
                    anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                    offset: new BMap.Size(5, 5), //偏离值
                    scale: 0.8 //工具栏缩放比例
                },
                circleOptions: styleOptions, //圆的样式
                polylineOptions: styleOptions, //线的样式
                polygonOptions: styleOptions, //多边形的样式
                rectangleOptions: styleOptions //矩形的样式
            });
            drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);
            drawingManager.disableCalculate();
            drawingManager.addEventListener('overlaycomplete', function(e){
                //绘制完成回调函数
                var o = e.overlay;
                pointsObj = e.overlay.W;
                bounds = o.getBounds();
                drawingManager.close();//关闭地图的绘制状态
                hanPoint2(bounds);
            });
            //drawingManager.open();
        }

        function hanPoint2(bounds)
        {
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX = southWest.lat;     //X轴开始循环值
            var startY = southWest.lng;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            if(southWest.equals(northEast))
            {
                //点
                pointList.push(new BMap.Point(startY,startX));
            }else if(startX == endX || startY == endY)
            {
                //线
                if(startX == endX){
                    for(startY = southWest.lng;startY <= endY; startY += step)
                    {
                        pointList.push(new BMap.Point(startY,startX));
                    }
                }else{
                    for(startX = southWest.lat;startX <= endX;startX += step)
                    {
                        pointList.push(new BMap.Point(startY,startX));
                    }
                }
            }else{

                //面
                var boundsList = cuttingBounds(bounds);
                if(boundsList.length > 1)
                {
                    for(var i in boundsList)
                    {
                        var b = boundsList[i];
                        if(bounds.containsBounds(b))
                        {
                            //完全包含
                            pointList = pointList.concat(getPointByBounds(b));
                        }else{
                            //不完全包含,进行过滤
                            pointList = pointList.concat(containsPonint(getPointByBounds(b)));
                        }

                    }
                }else{
                    //自身区域,需过滤
                    pointList = pointList.concat(containsPonint(getPointByBounds(boundsList[0])));
                }
            }
            console.log("pointList:" + pointList);
            /*for(var i = 0 ; i < pointList.length; i++){
             var latStr = pointList[i].lat.toFixed(6).toString();
             var lngStr = pointList[i].lng.toFixed(6).toString();
             var xy = latStr + '|' + lngStr + ',';
             points += xy ;
             }*/
            points = "";
            for(var i = 0 ; i < pointsObj.length; i++){
                var latStr = pointsObj[i].lat.toFixed(6).toString();
                var lngStr = pointsObj[i].lng.toFixed(6).toString();
                var xy = latStr + '|' + lngStr + ',';
                points += xy ;
            }
            if(points.length > 0){
                points = points.substring(0,points.length-1);
            }
            geocoder();
        }

        //切割区域,返回切割后的区域列表
        function cuttingBounds(bounds)
        {
            var lengX = step * 10;  //切割长度X
            var lengY = step * 10;  //切割长度Y
            var boundsList = new Array();
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX = southWest.lat;     //X轴开始循环值
            var startY = southWest.lng;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            if(endX - startX >= lengX || endY - endX >= lengY)
            {
                boundsList.push(bounds);
                return boundsList;
            }
            while(startX < endX)
            {
                var tempX = startX + lengX;
                if(tempX >= endX)
                {
                    //超出范围
                    tempX = endX;
                }
                startY = southWest.lng;
                while(startY < endY)
                {
                    var tempY = startY + lengY;
                    if(tempY >= endY)
                    {
                        //超出范围
                        tempY = endY;
                    }
                    boundsList.push(new BMapLib.Bounds(new BMapLib.Point(startY,startX),new BMapLib.Point(tempY,tempX)));
                    startY = tempY + step;
                }
                startX = tempX + step;
            }
            return boundsList;
        }
        //获取矩形区域内的所有点
        function getPointByBounds(bounds)
        {
            var southWest = bounds.getSouthWest();  //矩形区域的西南角
            var northEast = bounds.getNorthEast();  //矩形区域的东北角
            var startX;     //X轴开始循环值
            var startY;     //Y轴开始循环值
            var endX = northEast.lat;       //X轴结束循环值
            var endY = northEast.lng;       //Y轴结束循环值
            var pl = new Array();
            for(startX = southWest.lat;startX <= endX;startX += step)
            {
                for(startY = southWest.lng;startY <= endY; startY += step)
                {
                    pl.push(new BMap.Point(startY,startX));
                }
            }
            return pl;
        }
        //过滤此区域内的点
        function containsPonint(list)
        {
            var l = new Array();
            for(var i in list)
            {
                var p = list[i];
                if(bounds.containsPoint(p))
                {
                    //在此区域内
                    l.push(p);
                }
            }
            return l;
        }
        //如果点未处理过且在矩形区域内
        function isPoint(point)
        {
            if(bounds.containsPoint(point) == false)
            {
                //不在区域内
                return false;
            }
            for(i in pointList)
            {
                if(pointList[i].equals(point))
                {
                    //列表中已存在
                    return false;
                }
            }
            return true;
        }
        var gIndex =0;
        //逆地址解析
        function geocoder()
        {
            if(pointList != null && pointList.length > 0)
            {
                tf = createFile("c://poi.txt");//数据保存地址
                for(var i =0;i<100;i++)  //地址解析线程
                {
                    setTimeout(function(){
                        getLocation(gIndex);
                    },100)
                    gIndex++;

                }

            }
        }
        //解析列表地址,同步
        function getLocation(index)
        {
            var geo = new BMap.Geocoder();
            if(index < pointList.length)
            {
                var p = pointList[index];
                geo.getLocation(p,function(gr){
                    if(gr != null)
                    {
                        var address = gr.addressComponents.city+gr.addressComponents.district+gr.addressComponents.street   //只取城市、区县、街道名称
                        if(tf!=null)
                            tf.WriteLine(address);
                        runTips("加入数据："+address)
                        var spList = gr.surroundingPois;
                        for(i in spList)
                        {
                            var title =spList[i].title;
                            if(tf!=null)
                                tf.WriteLine(title);
                            runTips("加入数据："+title);
                        }
                    }else{
                        console.log(null);
                    }
                    gIndex++;
                    getLocation(gIndex);
                });
            }else{
                drawingManager.open();  //开启地图的绘制模式
                tf.Close();
            }
        }
        //创建指定路径文件,并返回文件句柄
        function createFile(path)
        {
            if(fso != null)
            {
                tf = fso.CreateTextFile(path, true);//创建一个文件夹
            }
            return tf;

        }
        //设置爬取密度
        function setStep(t)
        {
            try{
                var temp = parseFloat(document.getElementById("step").value);
                if(temp > 0)
                {
                    step = temp;
                    alert("设置成功.");
                }else{
                    alert("值必需大于0.");
                }
            }catch(e)
            {
                alert("设置失败，请检查输入值的有效性。")
            }
        }
        //清除绘制
        function clearOverlays()
        {
            map.clearOverlays();
            drawingManager.close();
            newDrawingManager();
        }
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
            $scope.vm.type = "RECOMMEND";
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
            $scope.vm.position = "HEAD";
            $scope.vm.type = "RECOMMEND";
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

            ///////////////////////
          /*  yunLandService.apiCreateLandAdvertising($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm.id = data.id;
                    yunLandService.apiSubmitLandAdvertising($scope.vm).success(function(data){
                        if(data.errors == null || data.errors.length > 0){
                            dialogService.tip(data.errors);
                        }else{
                            $modalInstance.close();
                        }
                    });
                }
            });*/
        };
    }];

    /**
     * 推介信息控制器
     * @author zxl
     * @param $scope
     */
    var cityIndexController = function($scope,dialogService,yunLandService){
        $scope.$emit('navShow',2);
        $scope.vm = {
            pageSize: 10,
            pageNumber: 1
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
            yunLandService.apiFindRecommendCity($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.cityList = data.result;
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

            if($scope.cardCity){
                $scope.vm.cityId = $scope.cardCity.id.toString();
            }
            $scope.getList();

        };
        $scope.doSearch();


        // 取消发布推介城市
        $scope.cancelPublish = function(id){
            yunLandService.apiCancelApproveRecommendCity({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    window.location.reload();
                }
            });
        };

        // 发布推介城市
        $scope.publishCity = function(id){
            yunLandService.apiApproveRecommendCity({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    window.location.reload();
                }
            });
        };

        // 置顶土地推介城市
        $scope.topCity = function(id){
            yunLandService.apiTopRecommendCity({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    window.location.reload();
                }
            });
        };

        // 取消置顶
        $scope.cancelTop = function(id){
            yunLandService.apiCancelTopRecommendCity({id:id}).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    window.location.reload();
                }
            });
        };
    };

    /**
     * 新增土地推介城市控制器
     * @author lwz
     * @param $scope
     */
    var addCityController = function($scope,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',2);

        // 保存
        $scope.land={};

        $scope.city = {};

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
                        $scope.city.picturePath = data.url;
                        $scope.city.pictureId = data.id;
                    }
                });
            };
        };
        /**
         * 缩略图
         */
        $scope.showSmallPicture=function(){
            var fileId=document.getElementById("smallPictureFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("smallPictureFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.city.smallPicturePath = data.url;
                        $scope.city.smallPictureId = data.id;
                    }
                });
            };
        };

        // todo

        $scope.doSave = function(){
            $scope.city.isSubmit = 0;
            $scope.city.isApproved = 0;
            $scope.city.isTop = 0;
            $scope.city.approveResult = "DISAGREED";
            $scope.city.provinceId = $scope.cardCity.pid;
            $scope.city.cityId = $scope.cardCity.id.toString();
            $scope.city.cityName = $scope.cardCity.name.toString();
            $scope.city.generalContent = $scope.landIntro.html();
            $scope.city.landvalueContent = $scope.sellIntro.html();
            $scope.city.planContent = $scope.newsIntro.html();
            $scope.city.browseContent = $scope.browseIntro.html();
            yunLandService.apiCreateRecommendCity($scope.city).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    dialogService.tip([{"message":"保存成功！" }],"/yunland/recommend/city.htm");
                }
            });
        };

        // 发布
        $scope.doPublish = function(){
            $scope.city.isSubmit = 1;
            $scope.city.isApproved = 1;
            $scope.city.isTop = 0;
            $scope.city.approveResult = "AGREED";
            $scope.city.provinceId = $scope.cardCity.pid;
            $scope.city.cityId = $scope.cardCity.id.toString();
            $scope.city.cityName = $scope.cardCity.name.toString();
            $scope.city.generalContent = $scope.landIntro.html();
            $scope.city.landvalueContent = $scope.sellIntro.html();
            $scope.city.planContent = $scope.newsIntro.html();
            $scope.city.browseContent = $scope.browseIntro.html();
            yunLandService.apiCreateRecommendCity($scope.city).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    yunLandService.apiApproveRecommendCity({id:data.id}).success(function(data1){
                        if(data1.errors == null || data1.errors.length > 0){
                            dialogService.tip(data1.errors);
                        }else{
                            dialogService.tip([{"message":"发布成功！" }],"/yunland/recommend/city.htm");
                        }
                    });
                }
            });
        };


    };

    /**
     * 编辑土地推介城市控制器
     * @author zxl
     * @param $scope
     */
    var editCityController = function($scope,$location,toolsService,dialogService,yunLandService,FoundationService){
        $scope.$emit('navShow',2);

        // 保存
        $scope.land={};

        $scope.city = {};

        $scope.land = {
            id:toolsService.parameter("id", $location.absUrl()),
            address:{}
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
                        $scope.city.picturePath = data.url;
                        $scope.city.pictureId = data.id;
                    }
                });
            };
        };
        /**
         * 缩略图
         */
        $scope.showSmallPicture=function(){
            var fileId=document.getElementById("smallPictureFile");
            fileId.onchange=function(){
                var fileList = document.getElementById("smallPictureFile").files;
                var file = fileList[0];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                //头像上传
                FoundationService.uploadLogo(file).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    }else{
                        $scope.city.smallPicturePath = data.url;
                        $scope.city.smallPictureId = data.id;
                    }
                });
            };
        };

        // todo

        $scope.doSave = function(){
            $scope.city.provinceId = $scope.cardCity.pid;
            $scope.city.cityId = $scope.cardCity.id.toString();
            $scope.city.cityName = $scope.cardCity.name.toString();
            $scope.city.generalContent = $scope.landIntro.html();
            $scope.city.landvalueContent = $scope.sellIntro.html();
            $scope.city.planContent = $scope.newsIntro.html();
            $scope.city.browseContent = $scope.browseIntro.html();
            yunLandService.apiUpdateRecommendCity($scope.city).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    dialogService.tip([{"message":"保存成功！" }],"/yunland/recommend/city.htm");
                }
            });
        };

        // 发布
        $scope.doPublish = function(){
            $scope.city.provinceId = $scope.cardCity.pid;
            $scope.city.cityId = $scope.cardCity.id.toString();
            $scope.city.cityName = $scope.cardCity.name.toString();
            $scope.city.generalContent = $scope.landIntro.html();
            $scope.city.landvalueContent = $scope.sellIntro.html();
            $scope.city.planContent = $scope.newsIntro.html();
            $scope.city.browseContent = $scope.browseIntro.html();
            yunLandService.apiUpdateRecommendCity($scope.city).success(function(data){
                if(data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    yunLandService.apiApproveRecommendCity($scope.city).success(function(data1){
                        if(data1.errors == null || data1.errors.length > 0){
                            dialogService.tip(data1.errors);
                        }else{
                            dialogService.tip([{"message":"发布成功！" }],"/yunland/recommend/city.htm");
                        }
                    });
                }
            });
        };

        yunLandService.apiGetRecommendCity({id:$scope.land.id}).success(function(data){
            if(data.errors == null || data.errors.length > 0){
                dialogService.tip(data.errors);
            }else{
                $scope.city = data.recommendCityDetail;
                $scope.cardCity.id = data.recommendCityDetail.cityId;
                $scope.landIntro.html(data.recommendCityDetail.generalContent);
                $scope.sellIntro.html(data.recommendCityDetail.landvalueContent);
                $scope.newsIntro.html(data.recommendCityDetail.planContent);
                $scope.browseIntro.html(data.recommendCityDetail.browseContent);
            }
        });
    };


    // 定义module,并指明依赖模块
    angular.module("xn.yunland.recommend",[])
        .controller("RecommendIndexController",["$scope","dialogService","YunLandService",recommendIndexController])
        .controller("AddRecommendController",["$scope","dialogService","YunLandService","FoundationService",addRecommendController])
        .controller("CityIndexController",["$scope","dialogService","YunLandService","FoundationService",cityIndexController])
        .controller("AddCityController",["$scope","dialogService","YunLandService","FoundationService",addCityController])
        .controller("EditCityController",["$scope","$location","toolsService","dialogService","YunLandService","FoundationService",editCityController])
        .controller("EditRecommendController",["$scope","$location","toolsService","dialogService","YunLandService","FoundationService",editRecommendController])
        .controller("RecommendAdvertiseMaintainController",["$scope","$modal","dialogService","YunLandService","FoundationService",recommendAdvertiseMaintainController]);
})();