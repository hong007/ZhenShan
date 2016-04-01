var initApp=function(){
    "use strict";
    var ref = [
        "xn.directive.common",
        "xn.filter.common",
        "xn.service.common",
        "xn.service.foundation",
        "xn.service.interceptor",

        "xn.yunland.filter",
        "xn.yunland.service",

        "xn.yunland.news",
        "xn.yunland.index",
        "xn.yunland.member",
        "xn.yunland.recommend",
        "xn.yunland.sell",
        "xn.yunland.transfer",

        "ui.bootstrap",
        "xn.directive.navigation",
        "xn.directive.loading",
        "xn.directive.attachment",
        "xn.directive.select",
        "xn.directive.form",
        "xn.directive.location"
    ];

    var app =angular.module("xn", ref);

    app.config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push("httpInterceptor");
    }]);
// 全局配置 form提交验证
    app.config(["xnValidatorProvider", function (xnValidatorProvider) {
        // 全局配置
        xnValidatorProvider.config({
            blurTrig   : false,
            showError  : false,
            removeError: false
        });
        xnValidatorProvider.setRules({
            description: {
                minLength: "字数太少！"
            }
        });
    }]);
    app.controller("BodyController",["$scope","dialogService", function($scope,dialogService) {
        //关闭错误
        $scope.closeAlert = function (index,form) {
            form.splice(index,1);
        };
        $scope.$on('navShow', function(event, data) {
            $scope.navShow = data;
        });

        $scope.eidtItem=[
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'link', 'unlink', '|', 'about'
        ];

        $scope.landIntro;
        $scope.sellIntro;

        KindEditor.ready(function(K) {
            $scope.landIntro= K.create('#landIntro',{
                items:$scope.eidtItem,
                uploadJson : '../jsp/upload_json.jsp',
                fileManagerJson : '../jsp/file_manager_json.jsp',
                allowFileManager : true
            });
            $scope.sellIntro= K.create('#sellIntro',{
                items:$scope.eidtItem,
                uploadJson : '../jsp/upload_json.jsp',
                fileManagerJson : '../jsp/file_manager_json.jsp',
                allowFileManager : true
            });
        });
    }]);
};
(function(){
    "use strict";
    angular.module("xn.yunland.filter", [])
        .filter("memberType", [
            function () {
                return function (input) {
                    var type = "";
                    switch (input) {
                        case 'SENIOR':
                            type = "高级会员";
                            break;
                        case 'STANDARD':
                            type = "普通会员";
                            break;
                    }
                    return type;
                };
            }
        ]);
})();
(function(){
    "use strict";
    angular.module("xn.yunland.service", [])
    .factory('YunLandService', ['$http', function ($http) {
            var service = {};
            var url = "/yunland/api.do";
            service.apiGetLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.get"}});
            };
            service.apiSearchLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.search"}});
            };
            service.apiFindLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.find"}});
            };
            service.apiGetLandAdvertisingAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.all.get"}});
            };
            service.apiCreateLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.create"}});
            };
            service.apiUpdateLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.update"}});
            };
            service.apiDeleteLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.delete"}});
            };
            service.apiGetLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.get"}});
            };
            service.apiSearchLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.search"}});
            };
            service.apiFindLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.find"}});
            };
            service.apiGetLandCollectionAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.all.get"}});
            };
            service.apiCreateLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.create"}});
            };
            service.apiUpdateLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.update"}});
            };
            service.apiDeleteLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.delete"}});
            };
            service.apiDeleteLandCollection = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.collection.delete"}});
            };
            service.apiGetLandDelivery = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.delivery.get"}});
            };
            service.apiSearchLandDelivery = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.delivery.search"}});
            };
            service.apiFindLandDelivery = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.delivery.find"}});
            };
            service.apiGetLandDeliveryAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.delivery.all.get"}});
            };
            service.apiCreateLandDelivery = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.delivery.create"}});
            };
            service.apiGetLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.get"}});
            };
            service.apiSearchLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.search"}});
            };
            service.apiFindLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.find"}});
            };
            service.apiGetLandDemandAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.all.get"}});
            };
            service.apiCreateLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.create"}});
            };
            service.apiUpdateLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.update"}});
            };
            service.apiDeleteLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.delete"}});
            };
            service.apiGetLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.get"}});
            };
            service.apiSearchLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.search"}});
            };
            service.apiGetLandDynamicAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.all.get"}});
            };
            service.apiCreateLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.create"}});
            };
            service.apiUpdateLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.update"}});
            };
            service.apiDeleteLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.delete"}});
            };
            service.apiGetLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.get"}});
            };
            service.apiSearchLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.search"}});
            };
            service.apiFindLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.find"}});
            };
            service.apiGetLandPublicityAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.all.get"}});
            };
            service.apiCreateLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.create"}});
            };
            service.apiUpdateLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.update"}});
            };
            service.apiDeleteLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.delete"}});
            };
            service.apiGetLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.get"}});
            };
            service.apiSearchLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.search"}});
            };
            service.apiFindLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.find"}});
            };
            service.apiGetLandRecommendAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.all.get"}});
            };
            service.apiCreateLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.create"}});
            };
            service.apiUpdateLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.update"}});
            };
            service.apiDeleteLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.delete"}});
            };
            service.apiGetLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.get"}});
            };
            service.apiSearchLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.search"}});
            };
            service.apiFindLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.find"}});
            };
            service.apiGetLandSupplyAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.all.get"}});
            };
            service.apiCreateLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.create"}});
            };
            service.apiUpdateLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.update"}});
            };
            service.apiDeleteLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.delete"}});
            };
            service.apiGetLandSell = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.get"}});
            };
            service.apiSearchLandSell = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.search"}});
            };
            service.apiGetLandSellAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.all.get"}});
            };
            service.apiCreateLandSell = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.create"}});
            };
            service.apiUpdateLandSell = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.update"}});
            };
            service.apiDeleteLandSell = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.delete"}});
            };

            service.apiMemberDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.member.delete"}});
            };
            service.apiMemberGetAllList = function () {
                return $http({method: 'POST', url: url, params: {"method": "api.yunland.land.member.get.alllist"}});
            };
            service.apiMemberFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.member.find"}});
            };
            service.apiMemberUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.member.update"}});
            };
            service.apiMemberCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.member.create"}});
            };
            service.apiMemberGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.member.get"}});
            };
            return service;

    }]);

})();
(function(){
    "use strict";

    /**
     * 首页广告维护控制器
     * @author lwz
     * @param $scope
     * @param $modal
     */
    var adsSliderController = function($scope,$modal,dialogService){
        $scope.$emit('navShow',1);
        $scope.vm = {};
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
        /**
         * 编辑广告
         */
        $scope.editAds = function(id){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openAds.html",
                controller:OpenAds,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '编辑首页广告',
                            type: 'edit'
                        }
                    }
                }
            });
            modalInstance.result.then(function (data){
                window.location.reload();
            });
        };
        /**
         * 取消发布
         * @param id
         */
        $scope.cancelPublish = function(id){
            console.log('fff');
        }
    };

    /**
     * 广告维护弹出框控制器
     * @author lwz
     * @type {*[]}
     */
    var OpenAds = ["$scope","$modalInstance","items","dialogService", function ($scope,$modalInstance,items,dialogService) {
        $scope.window = {};
        $scope.window.title = items.title;
        $scope.window.type = items.type;

        $scope.cancel = function () {
            $scope.window = {};
            $modalInstance.dismiss('cancel');
        };
    }];
    //定义module,并指明依赖模块。
    angular.module("xn.yunland.index",[])
        .controller("AdsSliderController",["$scope","$modal","dialogService",adsSliderController]);
})();
(function(){
    "use strict";

    /**
     * 会员信息控制器
     * @author zxl
     * @update lwz
     * @param $scope
     */
    var memberIndexController = function($scope,$modal,yunlandService){
        $scope.$emit('navShow',6);
        $scope.vm = {
            pageNumber: '1',
            pageSize: '20'
        };
        $scope.startDate = false;
        $scope.endDate = false;

        // 弹出式日历触发函数
        $scope.openedStartDate = function($event){
            if($scope.vm.endDate){
                $scope.maxDate = $scope.vm.endDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startDate = true;
        };
        // 弹出式日历触发函数
        $scope.openedEndDate = function($event){
            if($scope.vm.startDate){
                $scope.minDate = $scope.vm.startDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endDate = true;
        };

        //获取数据
        $scope.getList = function () {
            yunlandService.apiMemberFind($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.memberList = data.result;
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

        //创建会员
        $scope.addMember = function(){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openMember.html",
                controller:OpenMember,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '创建会员',
                            type: 'add'
                        }
                    }
                }
            });
            modalInstance.result.then(function (data){
                $scope.doSearch();
            });
        };

        // 编辑会员信息
        $scope.editMember = function(member){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openMember.html",
                controller:OpenMember,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '编辑会员',
                            type: 'edit',
                            member: member
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
     * 会员维护弹出框控制器
     * @author lwz
     * @type {*[]}
     */
    var OpenMember = ["$scope","$modalInstance","items","dialogService","YunLandService", function ($scope,$modalInstance,items,dialogService,yunLandService) {
        $scope.window = {};
        $scope.window.title = items.title;
        $scope.window.type = items.type;
        $scope.vm = {};

        //弹出式日历触发函数
        $scope.openStartDate = function($event) {
            if($scope.vm.validityEndDate){
                $scope.maxDate = $scope.vm.validityEndDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startDate = true;
        };
        //弹出式日历触发函数
        $scope.openEndDate = function($event) {
            if($scope.vm.validityStartDate){
                $scope.minDate = $scope.vm.validityStartDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endDate = true;
        };
        if('edit'==items.type){
            //根据id获取会员信息
            yunLandService.apiMemberGet({id:items.member.id}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.vm = data.member;
                }
            });
        }

        //保存
        $scope.doSave = function(){
            if ($scope.vm.validityStartDate instanceof Date) {
                $scope.vm.validityStartDate = $scope.vm.validityStartDate.format('yyyy-MM-dd');
            }
            if ($scope.vm.validityEndDate instanceof Date) {
                $scope.vm.validityEndDate = $scope.vm.validityEndDate.format('yyyy-MM-dd');
            }
            if('add' == items.type){
                yunLandService.apiMemberCreate($scope.vm).success(function(data) {
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
                yunLandService.apiMemberUpdate($scope.vm).success(function(data) {
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
        $scope.cancel = function () {
            $scope.window = {};
            $modalInstance.dismiss('cancel');
        };
    }];

    // 定义module,并指明依赖模块
    angular.module("xn.yunland.member",[])
        .controller("MemberIndexController",["$scope","$modal","YunLandService",memberIndexController]);
})();
(function () {
    "use strict";

    /**
     * 云地动态控制器
     * @author zxl
     * @param $scope
     */
    var newsIndexController = function($scope){
        $scope.$emit('navShow',5);
        $scope.vm = {};
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
        $scope.newsList = [
            {"startDate":"2015-07-13","state":"已发布", "type":"行业资讯", "title":"农村土地制度改革三项试点全面启动", "summary":"为进一步统一思想、明确任务，审慎稳妥推进试点工作"},
            {"startDate":"2015-07-13","state":"已发布", "type":"行业资讯", "title":"农村土地制度改革三项试点全面启动", "summary":"为进一步统一思想、明确任务，审慎稳妥推进试点工作"}
        ];

        // 发布动态
        $scope.publishNews = function(){

        };

        // 取消发布
        $scope.cancelPublish = function(id){

        };

        // 置顶
        $scope.topNews = function(id){

        };

        // 取消置顶
        $scope.cancelTop = function(id){

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
    var addNewsController = function($scope){
        /**
         * 保存
         */
        $scope.doSave = function(){

        };
        /**
         * 发布
         */
        $scope.doPublish = function(){

        };
    };
    /**
     * 编辑动态页面控制器
     * @author lwz
     * @param $scope
     */
    var editNewsController = function($scope,$location,toolsService){
        $scope.id = toolsService.parameter("id", $location.absUrl());
        /**
         * 保存
         */
        $scope.doSave = function(){

        };
        /**
         * 发布
         */
        $scope.doPublish = function(){

        };
    };

    //定义module,并指明依赖模块。
    angular.module("xn.yunland.news",[])
        .controller("NewsIndexController",["$scope",newsIndexController])
        .controller("AddNewsController",["$scope",addNewsController])
        .controller("EditNewsController",["$scope","$location","toolsService",editNewsController]);
})();
(function(){
    "use strict";

    /**
     * 推介信息控制器
     * @author zxl
     * @param $scope
     */
    var recommendIndexController = function($scope){
        $scope.$emit('navShow',2);
        $scope.vm = {};
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
        $scope.recommendList = [
            {"startDate":"2015-07-13","state":"已发布", "number":"TJ123456", "name":"苏州高新区区创业产业园土地", "location":"江苏—苏州—高新区","area":"1100m²"},
            {"startDate":"2015-07-13","state":"已发布", "number":"TJ123456", "name":"苏州高新区区创业产业园土地", "location":"江苏—苏州—高新区","area":"1100m²"}
        ];

        // 发布动态
        $scope.publishNews = function(){

        };

        // 取消发布
        $scope.cancelPublish = function(id){

        };

        // 置顶
        $scope.topRecommend = function(id){

        };

        // 取消置顶
        $scope.cancelTop = function(id){

        };

        // 编辑动态
        $scope.editRecommend = function(id){

        };
    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     */
    var recommendAdvertiseMaintainController = function($scope){
        $scope.$emit('navShow',2);
        $scope.vm = {};
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
    };

    /**
     * 新增土地推介控制器
     * @author lwz
     * @param $scope
     */
    var addRecommendController = function($scope){
        $scope.$emit('navShow',2);
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
    };

    // 定义module,并指明依赖模块
    angular.module("xn.yunland.recommend",[])
        .controller("RecommendIndexController",["$scope",recommendIndexController])
        .controller("AddRecommendController",["$scope",addRecommendController])
        .controller("RecommendAdvertiseMaintainController",["$scope",recommendAdvertiseMaintainController]);
})();
(function(){
    "use strict";

    /**
     * 云地出让控制器
     * @author zxl
     * @param $scope
     */
    var sellIndexController = function($scope){
        $scope.$emit('navShow',3);
        $scope.vm = {};
        $scope.startDate = false;
        $scope.endDate = false;

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
    var sellAdvertiseMaintainController = function($scope){
        $scope.$emit('navShow',3);
        $scope.vm = {};
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
    };

    /**
     * 新增土地推介控制器
     * @author lwz
     * @param $scope
     */
    var editLandController = function($scope){
        $scope.$emit('navShow',3);
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
    };

    // 定义module，并指明依赖模块
    angular.module("xn.yunland.sell",[])
        .controller("SellIndexController",["$scope",sellIndexController])
        .controller("SellAdvertiseMaintainController",["$scope",sellAdvertiseMaintainController])
        .controller("EditLandController",["$scope",editLandController]);
})();

(function(){
    "use strict";

    /**
     * 转让控制器
     * @author zxl
     * @param $scope
     */
    var transferIndexController = function($scope){
        $scope.$emit('navShow',4);
        $scope.vm = {};
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
        $scope.transferList = [
            {"startDate":"2015-07-13","state":"已发布", "number":"GY123456", "name":"苏州高新区创业园土地", "belong":"XXXXXXX","phone":"15250080309","member":"张某某"},
            {"startDate":"2015-07-13","state":"已发布", "number":"GY123456", "name":"苏州高新区创业园土地", "belong":"XXXXXXX","phone":"15250080309","member":"张某某"}
        ];
    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     */
    var transferAdvertiseMaintainController = function($scope){
        $scope.$emit('navShow',4);
        $scope.vm = {};
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
    };

    /**
     * 头部广告维护控制器
     * @author zxl
     * @param $scope
     */
    var transferPostRecordController = function($scope){
        $scope.$emit('navShow',4);
        $scope.vm = {};
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

        $scope.postList = [
            {"name":"XXX","need":"XXXX", "land":"XXXX", "date":"2015-09-12"},
            {"name":"XXX","need":"XXXX", "land":"XXXX", "date":"2015-09-12"}
        ];
    };

    // 定义module,并指明依赖模块
    angular.module("xn.yunland.transfer",[])
        .controller("TransferIndexController",["$scope",transferIndexController])
        .controller("TransferAdvertiseMaintainController",["$scope",transferAdvertiseMaintainController])
        .controller("TransferPostRecordController",["$scope",transferPostRecordController]);
})();