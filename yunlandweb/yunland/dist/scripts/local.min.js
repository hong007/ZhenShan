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
        "xn.yunland.password",

        "ui.bootstrap",
        "xn.directive.navigation",
        "xn.directive.loading",
        "xn.directive.attachment",
        "xn.directive.select",
        "xn.directive.form",
        "xn.directive.location",
        "ngSanitize"
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
        $scope.maxPageSize=5;

        $scope.eidtItem=[
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '/', 'fullscreen','|', 'image', 'multiimage','|',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'link', 'unlink', '|', 'about'
        ];

        $scope.landIntro;
        $scope.sellIntro;
        $scope.newsIntro;
        $scope.browseIntro;

        KindEditor.ready(function(K) {
            $scope.landIntro= K.create('#landIntro',{
                items:$scope.eidtItem,
                uploadJson : '../../upload/fileUploadJson.do',
                fileManagerJson : '../../upload/fileUploadManager.do',
                allowFileManager : false
            });
            $scope.sellIntro= K.create('#sellIntro',{
                items:$scope.eidtItem,
                uploadJson : '../../upload/fileUploadJson.do',
                fileManagerJson : '../../upload/fileUploadManager.do',
                allowFileManager : false
            });
            $scope.newsIntro= K.create('#newsIntro',{
                items:$scope.eidtItem,
                uploadJson : '../../upload/fileUploadJson.do',
                fileManagerJson : '../../upload/fileUploadManager.do',
                allowFileManager : false
            });
            $scope.browseIntro= K.create('#browseIntro',{
                items:$scope.eidtItem,
                uploadJson : '../../upload/fileUploadJson.do',
                fileManagerJson : '../../upload/fileUploadManager.do',
                allowFileManager : false
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
        ])
        .filter("provinceToName", [
            function () {
                return function (input) {
                    var provinceName = "";
                    var provinceData = [
                        {id:86,name:"中国",pid:"",type:"country",pinyin:"zhong guo",py:"zg",prefix:"z"},
                        {id:110000,name:"北京市",pid:"86",type:"province",pinyin:"bei jing shi",py:"bjs",prefix:"b"},
                        {id:120000,name:"天津市",pid:"86",type:"province",pinyin:"tian jin shi",py:"tjs",prefix:"t"},
                        {id:130000,name:"河北省",pid:"86",type:"province",pinyin:"he bei sheng",py:"hbs",prefix:"h"},
                        {id:140000,name:"山西省",pid:"86",type:"province",pinyin:"shan xi sheng",py:"sxs",prefix:"s"},
                        {id:150000,name:"内蒙古自治区",pid:"86",type:"province",pinyin:"nei meng gu zi zhi qu",py:"nmgzzq",prefix:"n"},
                        {id:210000,name:"辽宁省",pid:"86",type:"province",pinyin:"liao ning sheng",py:"lns",prefix:"l"},
                        {id:220000,name:"吉林省",pid:"86",type:"province",pinyin:"ji lin sheng",py:"jls",prefix:"j"},
                        {id:230000,name:"黑龙江省",pid:"86",type:"province",pinyin:"hei long jiang sheng",py:"hljs",prefix:"h"},
                        {id:310000,name:"上海市",pid:"86",type:"province",pinyin:"shang hai shi",py:"shs",prefix:"s"},
                        {id:320000,name:"江苏省",pid:"86",type:"province",pinyin:"jiang su sheng",py:"jss",prefix:"j"},
                        {id:330000,name:"浙江省",pid:"86",type:"province",pinyin:"zhe jiang sheng",py:"zjs",prefix:"z"},
                        {id:340000,name:"安徽省",pid:"86",type:"province",pinyin:"an hui sheng",py:"ahs",prefix:"a"},
                        {id:350000,name:"福建省",pid:"86",type:"province",pinyin:"fu jian sheng",py:"fjs",prefix:"f"},
                        {id:360000,name:"江西省",pid:"86",type:"province",pinyin:"jiang xi sheng",py:"jxs",prefix:"j"},
                        {id:370000,name:"山东省",pid:"86",type:"province",pinyin:"shan dong sheng",py:"sds",prefix:"s"},
                        {id:410000,name:"河南省",pid:"86",type:"province",pinyin:"he nan sheng",py:"hns",prefix:"h"},
                        {id:420000,name:"湖北省",pid:"86",type:"province",pinyin:"hu bei sheng",py:"hbs",prefix:"h"},
                        {id:430000,name:"湖南省",pid:"86",type:"province",pinyin:"hu nan sheng",py:"hns",prefix:"h"},
                        {id:440000,name:"广东省",pid:"86",type:"province",pinyin:"guang dong sheng",py:"gds",prefix:"g"},
                        {id:450000,name:"广西壮族自治区",pid:"86",type:"province",pinyin:"guang xi zhuang zu zi zhi qu",py:"gxzzzzq",prefix:"g"},
                        {id:460000,name:"海南省",pid:"86",type:"province",pinyin:"hai nan sheng",py:"hns",prefix:"h"},
                        {id:500000,name:"重庆市",pid:"86",type:"province",pinyin:"chong qing shi",py:"cqs",prefix:"c"},
                        {id:510000,name:"四川省",pid:"86",type:"province",pinyin:"si chuan sheng",py:"scs",prefix:"s"},
                        {id:520000,name:"贵州省",pid:"86",type:"province",pinyin:"gui zhou sheng",py:"gzs",prefix:"g"},
                        {id:530000,name:"云南省",pid:"86",type:"province",pinyin:"yun nan sheng",py:"yns",prefix:"y"},
                        {id:540000,name:"西藏自治区",pid:"86",type:"province",pinyin:"xi zang zi zhi qu",py:"xzzzq",prefix:"x"},
                        {id:610000,name:"陕西省",pid:"86",type:"province",pinyin:"shan xi sheng",py:"sxs",prefix:"s"},
                        {id:620000,name:"甘肃省",pid:"86",type:"province",pinyin:"gan su sheng",py:"gss",prefix:"g"},
                        {id:630000,name:"青海省",pid:"86",type:"province",pinyin:"qing hai sheng",py:"qhs",prefix:"q"},
                        {id:640000,name:"宁夏回族自治区",pid:"86",type:"province",pinyin:"ning xia hui zu zi zhi qu",py:"nxhzzzq",prefix:"n"},
                        {id:650000,name:"新疆维吾尔自治区",pid:"86",type:"province",pinyin:"xin jiang wei wu er zi zhi qu",py:"xjwwezzq",prefix:"x"},
                        {id:710000,name:"台湾省",pid:"86",type:"province",pinyin:"tai wan sheng",py:"tws",prefix:"t"},
                        {id:810000,name:"香港特别行政区",pid:"86",type:"province",pinyin:"xiang gang te bie xing zheng qu",py:"xgtbxzq",prefix:"x"},
                        {id:820000,name:"澳门特别行政区",pid:"86",type:"province",pinyin:"ao men te bie xing zheng qu",py:"amtbxzq",prefix:"a"}
                    ];

                    for(var i = 0; i < provinceData.length; i++){
                        if(input == provinceData[i].id){
                            provinceName = provinceData[i].name;
                        }
                    }
                    return provinceName;
                };
            }
        ])
        .filter("cooperationMode", [
            function () {
                return function (input) {
                    var type = "";
                    switch (input) {
                        case '1':
                            type = "整体转让";
                            break;
                        case '2':
                            type = "控股权转让";
                            break;
                        case '3':
                            type = "部分转让";
                            break;
                        case '4':
                            type = "股权转让";
                            break;
                        case '5':
                            type = "项目融资";
                            break;
                        case '6':
                            type = "债权融资";
                            break;
                        case '7':
                            type = "租赁融资";
                            break;
                    }
                    return type;
                };
            }
        ])
        .filter("planUse", [
            function () {
                return function (input) {
                    var type = "";
                    switch (input) {
                        case 'zhuz':
                            type = "住宅用地";
                            break;
                        case 'shangy':
                            type = "商业/办公用地";
                            break;
                        case 'gongy':
                            type = "工业用地";
                            break;
                        case 'zhongh':
                            type = "综合用地";
                            break;
                    }
                    return type;
                };
            }
        ])
        .filter("year", [
            function () {
                return function (input) {
                    var type = "";
                    switch (input) {
                        case '0-5':
                            type = "0-5年";
                            break;
                        case '5-10':
                            type = "5-10年";
                            break;
                        case '10-20':
                            type = "10-20年";
                            break;
                        case '20-30':
                            type = "20-30年";
                            break;
                        case '30-50':
                            type = "30-50年";
                            break;
                        case '50-1000':
                            type = "50年以上";
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
            service.apiLogFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.log.find"}});
            };
            service.apiGetLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.get"}});
            };
            service.apiSearchLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.search"}});
            };
            service.apiFindLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.find"}});
            };
            service.apiSubmitLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.submit"}});
            };
            service.apiSubmitLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.submit"}});
            };
            service.apiSubmitLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.submit"}});
            };
            service.apiCancelSubmitLandAdvertising = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.advertising.submit.cancel"}});
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
            service.apiApproveLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.approve"}});
            };
            service.apiCancelLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.cancel"}});
            };
            service.apiTopLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.top"}});
            };
            service.apiCancelTopLandDemand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.demand.cancel.top"}});
            };
            service.apiCancelTopLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.cancel.top"}});
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
            service.apiFindLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.find"}});
            };
            service.apiApproveLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.approve"}});
            };
            service.apiCancelApproveLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.approve.cancel"}});
            };
            service.apiTopLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.top"}});
            };
            service.apiCancelTopLandDynamic = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.dynamic.top.cancel"}});
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
            service.apiApproveLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.approve"}});
            };
            service.apiCancelLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.cancel"}});
            };
            service.apiTopLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.top"}});
            };
            service.apiCancelTopLandPublicity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.publicity.top.cancel"}});
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
            service.apiApproveLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.approve"}});
            };
            service.apiCancelApproveLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.approve.cancel"}});
            };
            service.apiTopLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.top"}});
            };
            service.apiCancelTopLandRecommend = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.recommend.top.cancel"}});
            };
            // 推介城市
            service.apiGetRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.get"}});
            };
            service.apiSearchRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.search"}});
            };
            service.apiFindRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.find"}});
            };
            service.apiGetRecommendCityAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.all.get"}});
            };
            service.apiCreateRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.create"}});
            };
            service.apiUpdateRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.update"}});
            };
            service.apiDeleteRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.delete"}});
            };
            service.apiApproveRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.approve"}});
            };
            service.apiCancelApproveRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.approve.cancel"}});
            };
            service.apiTopRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.top"}});
            };
            service.apiCancelTopRecommendCity = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.recommend.city.top.cancel"}});
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
            service.apiApproveLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.approve"}});
            };
            service.apiCancelLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.cancel"}});
            };
            service.apiTopLandSupply = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.supply.top"}});
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
            service.apiFindSellLandAllList = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.find"}});
            };
            service.apiApproveSellLand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.approve"}});
            };
            service.apiCancelSellLand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.cancel"}});
            };
            service.apiTopSellLand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.top"}});
            };
            service.apiCancelTopSellLand = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.sell.top.cancel"}});
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
            service.apiGetLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.get"}});
            };
            service.apiUpdateLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.update"}});
            };
            service.apiFindLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.find"}});
            };
            service.apiApproveLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.approve"}});
            };
            service.apiCancelLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.cancel"}});
            };
            service.apiTopLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.top"}});
            };
            service.apiCancelTopLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.top.cancel"}});
            };
            service.apiCreateLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.create"}});
            };
            service.apiDeleteLandResult = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.result.delete"}});
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
            service.apiAdminPasswordChange = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.land.adminpassword.change"}});
            };

            //获取ID
            service.apiFoundationIdGet = function(data){
                var url="/api/foundation.do";
                return $http({
                    method: "POST",
                    url: url,
                    params: {"method": "api.foundation.id.get"},
                    data : data
                });
            };
            //var url = "/base/api.do";
            service.apiUserCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.create"}});
            };
            service.apiUserUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.update"}});
            };
            service.apiUserActive = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.active"}});
            };
            service.apiUserInActive = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.inactive"}});
            };
            service.apiUserFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.find"}});
            };
            service.apiUserGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.yunland.user.get"}});
            };
            /**
             * 上传Logo
             * @param file
             * @returns {*}
             */
            service.uploadLogo = function (file) {
                var fileName = file.name;
                var ext = fileName.substr(fileName.lastIndexOf(".") + 1, fileName.length);
                var url = "/api/fileUpload.do";
                var fd = new FormData();
                fd.append("File", file);
                fd.append("Ext", ext);
                fd.append("Type", "LOGO");
                return($http({
                    method: 'POST',
                    url: url,
                    headers: {'Content-Type': undefined },
                    transformRequest: angular.identity,
                    data: fd
                }));
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
(function(){
    "use strict";

    /**
     * 会员信息控制器
     * @author zxl
     * @update lwz
     * @param $scope
     */
    var memberIndexController = function($scope,$modal,yunlandService,dialogService){
        $scope.$emit('navShow',6);
        $scope.vm = {
            pageNumber: 1,
            pageSize: 10
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
     * 系统账号管理控制器
     * @author lwz
     * @param $scope
     * @param $modal
     * @param yunlandService
     */
    var accountsMngController = function($scope,$modal,yunlandService,dialogService){
        $scope.$emit('navShow',6);
        $scope.vm = {
            pageNumber: 1,
            pageSize: 10,
            sourceType:'EMPLOYEE'
        };

        //获取数据
        $scope.getList = function () {
           yunlandService.apiUserFind($scope.vm).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.accountList = data.result;
                    $scope.vm.totalCount = data.totalCount;
                }
            });
        };
        $scope.doSearch = function () {
            $scope.getList();
        };
        $scope.doSearch();

        //创建账号
        $scope.addAccount = function(){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openAccount.html",
                controller:OpenAccount,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '创建账号',
                            type: 'add'
                        }
                    }
                }
            });
            modalInstance.result.then(function (data){
                $scope.doSearch();
            });
        };

        // 编辑账号
        $scope.editAccount = function(account){
            //弹出窗口
            var modalInstance = $modal.open({
                templateUrl: "openAccount.html",
                controller:OpenAccount,
                size:"",
                resolve: {
                    items: function () {
                        return {
                            title: '编辑账号',
                            type: 'edit',
                            account: account
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
        $scope.showTip=false;

        //弹出式日历触发函数
        $scope.openStartDate = function($event) {
            if($scope.vm.validityEndDate){
                $scope.maxDate = $scope.vm.validityEndDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.isStartDate = true;
            $("#validityStartDate").next("ul").css("display", "block");
        };

        document.onclick = function(e) {
            if(e.target.id!="validityStartDate") {
                $scope.isStartDate = false;
                $("#validityStartDate").next("ul").css("display", "none");
            }
            if(e.target.id!="validityEndDate") {
                $scope.isEndDate = false;
                $("#validityEndDate").next("ul").css("display", "none");
            }
        };

        $scope.$watch("vm.validityStartDate", function(newVal, oldVal) {
            if(newVal) {
                $scope.isStartDate = false;
                $("#validityStartDate").next("ul").css("display", "none");
            }
        });

        $scope.$watch("vm.validityEndDate", function(newVal, oldVal) {
            if(newVal) {
                $scope.isEndDate = false;
                $("#validityEndDate").next("ul").css("display", "none");
            }
        });

        //弹出式日历触发函数
        $scope.openEndDate = function($event) {
            if($scope.vm.validityStartDate){
                $scope.minDate = $scope.vm.validityStartDate;
            }
            $event.preventDefault();
            $event.stopPropagation();
            $scope.isEndDate = true;
            $("#validityEndDate").next("ul").css("display", "block");
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
        //确认两次输入密码是否一致
        $scope.confirmPassword=function(){
            $scope.showTip = $scope.vm.password != $scope.vm.confirmPassword;
        };

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

    /**
     * 系统账号维护弹出框控制器
     * @author lwz
     * @type {*[]}
     */
    var OpenAccount = ["$scope","$modalInstance","items","dialogService","YunLandService", function ($scope,$modalInstance,items,dialogService,yunLandService) {
        $scope.window = {};
        $scope.window.title = items.title;
        $scope.window.type = items.type;
        $scope.vm = {
            isActive: 'true'
        };

        if('edit'==items.type){
            //根据id获取会员信息
            yunLandService.apiUserGet({id:items.account.id}).success(function (data) {
                if (data.errors === null || data.errors.length > 0) {
                    dialogService.tip(data.errors);
                } else {
                    $scope.vm = data.user;
                    if(data.user.isActive == 1){
                        $scope.vm.isActive = 'true';
                    }else{
                        $scope.vm.isActive = 'false';
                    }
                }
            });
        }
        //确认两次输入密码是否一致
        $scope.confirmPassword=function(){
            $scope.showTip = $scope.vm.password != $scope.vm.confirmPassword;
        };
        //保存
        $scope.doSave = function(){
            if('add' == items.type){
                yunLandService.apiUserCreate($scope.vm).success(function(data) {
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
                yunLandService.apiUserUpdate($scope.vm).success(function(data) {
                        if (data.errors == null || data.errors.length > 0){
                            dialogService.tip(data.errors);
                        }
                        else {
                            if($scope.vm.isActive == 'true'){
                                yunLandService.apiUserActive($scope.vm).success(function(activeData){
                                    if(activeData.errors == null || activeData.errors.length > 0){
                                        dialogService.tip(activeData.errors);
                                    }
                                    else{
                                        dialogService.tip([{message: "更新成功"}]);
                                        //关闭
                                        $modalInstance.close($scope.window);
                                        //清空数据
                                        $scope.window={};
                                    }
                                });
                            }
                            else{
                                yunLandService.apiUserInActive($scope.vm).success(function(activeData){
                                    if(activeData.errors == null || activeData.errors.length > 0){
                                        dialogService.tip(activeData.errors);
                                    }
                                    else{
                                        dialogService.tip([{message: "更新成功"}]);
                                        //关闭
                                        $modalInstance.close($scope.window);
                                        //清空数据
                                        $scope.window={};
                                    }
                                });
                            }
                        }
                });
            }
        };
        $scope.cancel = function () {
            $scope.window = {};
            $modalInstance.dismiss('cancel');
        };
    }];

    /**
     * 修改密码
     * @author zxl
     * @param $scope
     */
    var changeController = function($scope,yunLandService,dialogService){
        // 保存新密码
        $scope.doChange = function(){
            yunLandService.apiAdminPasswordChange($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    dialogService.tip([{message:"修改成功"}],"index")
                }
            });
        };
    };

    // 定义module,并指明依赖模块
    angular.module("xn.yunland.member",[])
        .controller("MemberIndexController",["$scope","$modal","YunLandService","dialogService",memberIndexController])
        .controller("AccountsMngController",["$scope","$modal","YunLandService","dialogService",accountsMngController])
        .controller("ChangeController",["$scope","YunLandService","dialogService","dialogService",changeController]);
})();
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
(function(){
    "use strict";

    /**
     * 修改密码
     * @author zxl
     * @param $scope
     */
    var passwordChangeController = function($scope,yunLandService,dialogService){
        // 保存新密码
        $scope.doChange = function(){

            if($scope.vm.loginPassword != $scope.vm.confirmPassword){
                alert("密码不一致");
                return;
            }

            yunLandService.apiAdminPasswordChange($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                }else{
                    dialogService.tip([{message:"修改成功"}],"../")
                }
            });
        };
    };

    // 定义module,并指明依赖模块
    angular.module("xn.yunland.password",[])
        .controller("PasswordChangeController",["$scope","YunLandService","dialogService",passwordChangeController]);
})();
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