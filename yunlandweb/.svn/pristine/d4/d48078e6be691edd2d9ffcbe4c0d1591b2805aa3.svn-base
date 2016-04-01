var initApp = function() {
    "use strict";

    var ref = [
  /*      "ngRoute",*/
        "ngResource",
        "xn.directive.common",
        "xn.service.common",
        "xn.service.interceptor",
        "xn.single.filter",
        "xn.single.service",

        "xn.single.login",
        "xn.single.change",
        "xn.single.main",
        "xn.single.setting",
        "xn.single.link",
        "xn.single.feedback",
        "xn.single.page",
        "xn.single.product",
        "xn.single.news",
        "xn.single.case",

        "ui.bootstrap",
        "xn.directive.loading",
        "xn.directive.form"
    ];
    var app = angular.module("xn", ref);

    app.config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push("httpInterceptor");
    }]);

    // 全局配置 form提交验证
    app.config(["xnValidatorProvider", function (xnValidatorProvider) {

        // 全局配置
        xnValidatorProvider.config({
            blurTrig: false,
            showError: false,
            removeError: false
        });
        xnValidatorProvider.setRules({
            title: {
                required: "标题不能为空！"
            },
            name: {
                required: "标题不能为空！"
            },
            categoryId: {
                required: "请选择类别！"
            },
            pictureUrl: {
                required: "请上传缩略图！"
            },
            password: {
                required: "新密码不能为空!",
                minlength: "密码长度不能小于6个字符！",
                maxlength: "密码长度不能大于14个字符！",
                pattern: "密码强度不足,必须包含数字、字母或特殊符号中的两种，长度6-14位"
            },
            oldPassword: {
                required: "原密码不能为空！"
            },
            newPassword: {
                required: "新密码不能为空!",
                minlength: "密码长度不能小于6个字符！",
                maxlength: "密码长度不能大于14个字符！",
                pattern: "密码强度不足,必须包含数字、字母或特殊符号中的两种，长度6-14位"
            },
            confirmPassword: {
                required: "确认新密码不能为空！",
                repeat: "两次密码输入要相同！"
            },
        });
    }]);
   /* app.config(['$routeProvider',function($routeProvider) {
            $routeProvider.
                when('/main', {
                    template: "<div>adsad</div>",
                    controller: function(){}
                }).
                when('/phone', {
                    template: '<div>ewqewq</div>',
                    controller:  function(){}
                }).
                otherwise({
                    redirectTo: '/main'
                });
        }]);*/
    app.controller("BodyController", ["$scope", "$timeout", "SingleService","dialogService", function ($scope, $timeout,SingleService, dialogService) {

        $scope.global = {loadingInit: false};
        $scope.maxPageSize = 5;
        $scope.picAccept = "image/gif, image/jpeg ,image/jpg,image/png";
        $scope.picMaxSize = 2;
        $scope.storagePath="/upLoad/";

        $scope.eidtItem=[
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'link', 'unlink', '|', 'about'
        ];

        $scope.intro;
        $scope.content;

        KindEditor.ready(function(K) {
            $scope.intro= K.create('#intro',{
                items:$scope.eidtItem,
                uploadJson : '../jsp/upload_json.jsp',
                fileManagerJson : '../jsp/file_manager_json.jsp',
                allowFileManager : true
            });
            $scope.content = K.create('#content');
        });

        //目录

        $scope.menuList = [
            {title: "常用信息", state: false, childList: [
                {title: "网站设置", url: "/single/setting"},
                {title: "友情链接", url: "/single/link/index"},
                {title: "反馈管理", url: "/single/feedback/index"}
            ]},
            {title: "单个页面", state: false, childList: [
                {title: "页面管理", url: "/single/page/index"}
            ]},
            {title: "产品管理", state: false, childList: [
                {title: "栏目管理", url: "/single/product/classlist"},
                {title: "内容管理", url: "/single/product/list"}
            ]},
            {title: "新闻管理", state: false, childList: [
                {title: "栏目管理", url: "/single/news/classlist"},
                {title: "内容管理", url: "/single/news/list"}
            ]},
            {title: "案例管理", state: false, childList: [
                {title: "栏目管理", url: "/single/case/classlist"},
                {title: "内容管理", url: "/single/case/list"}
            ]},
            {title: "密码设置", state: false, childList: [
                {title: "密码重置", url: "/single/change"}
            ]}
        ];


        //关闭错误
        $scope.closeAlert = function (index, form) {
            form.splice(index, 1);
        };

        //重组数据
        $scope.regroup=function(treeList){
            var allTrees=[];

            /**
             * 递归查找下一级
             * @param pid  父级id
             * @param orgList   查找的数组
             * @param level     层级数
             * @param visable 是否显示
             */
            var getChild = function(pid,orgList,level){
                level ++;
                angular.forEach(orgList,function(org){
                    if(org.parentId === pid){
                        org.level = level;
                        org.visable=false;
                        org.newName="└ "+org.name;
                        allTrees.push(org);
                        getChild(org.id,orgList,level);
                    }
                });
            };

            angular.forEach(treeList,function(tree){
                var parentIndex=0;
                if(!tree.parentId){
                    parentIndex++;
                    tree.level = 0;
                    tree.visable=true;
                    tree.newName=tree.name;
                    allTrees.push(tree);
                    getChild(tree.id,treeList,0);
                }
            });


            //新建状态及是否有子栏目
            for( var i=0; i< treeList.length-1;i++){
                if(treeList.id == treeList.parentId){
                    treeList.childState=true;
                    treeList.collapsed=true;
                }else{
                    treeList.childState=false;
                    treeList.collapsed=false;
                }
            }
            return allTrees;
        };

        $scope.logout=function(){
            SingleService.apiSingleUserLogout().success(function (data) {
                    if (data.errors == null || data.errors.length > 0) {
                        //noinspection JSHint
                        $scope["validateForm"].$errors.push(data.errors[0].message);

                    } else {
                        dialogService.tip([{"message": "注销成功！"}],"/single/","1000");
                    }
                }
            );
        };

    }]);
};


(function () {
    "use strict";
    angular.module("xn.single.filter", [])
        .filter("yesNo", [
            function () {
                return function (input) {
                    var yesNo="否";
                    switch (input)
                    {
                        case false:
                            yesNo="否";
                            break;
                        case true:
                            yesNo="是";
                            break;
                        default :
                            break;

                    }
                    return yesNo;
                };
            }
        ])
        .filter("sex", [
            function () {
                return function (input) {
                    var sex="未知";
                    switch (input)
                    {
                        case "F":
                            sex="女";
                            break;
                        case "M":
                            sex="男";
                            break;
                        case "X":
                            sex="保密";
                            break;
                        default :
                            sex="未知";
                            break;

                    }
                    return sex;
                };
            }
        ])
})();

(function () {
    "use strict";
    angular.module("xn.single.service", [])
        .factory('SingleService', ['$http', function ($http) {
            var service = {};
            var url = "/single/api.do";
            service.apiSingleFileGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.get"}});
            };
            service.apiSingleFileSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.search"}});
            };
            service.apiSingleFileFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.find"}});
            };
            service.apiSingleFileAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.file.all.list.get"}
                });
            };
            service.apiSingleFileCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.create"}});
            };
            service.apiSingleFileUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.update"}});
            };
            service.apiSingleFileDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.file.delete"}});
            };
            service.apiSingleArticleCategoryGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.get"}
                });
            };
            service.apiSingleArticleCategorySearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.search"}
                });
            };
            service.apiSingleArticleCategoryFind = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.find"}
                });
            };
            service.apiSingleArticleCategoryAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.all.list.get"}
                });
            };
            service.apiSingleArticleCategoryCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.create"}
                });
            };
            service.apiSingleArticleCategoryUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.update"}
                });
            };
            service.apiSingleArticleCategoryDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.category.delete"}
                });
            };
            service.apiSingleArticleGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.get"}});
            };
            service.apiSingleArticleSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.search"}});
            };
            service.apiSingleArticleFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.find"}});
            };
            service.apiSingleArticleAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.article.all.list.get"}
                });
            };
            service.apiSingleArticleCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.create"}});
            };
            service.apiSingleArticleUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.update"}});
            };
            service.apiSingleArticleDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.article.delete"}});
            };
            service.apiSingleCaseCategoryGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.get"}
                });
            };
            service.apiSingleCaseCategorySearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.search"}
                });
            };
            service.apiSingleCaseCategoryFind = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.find"}
                });
            };
            service.apiSingleCaseCategoryAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.all.list.get"}
                });
            };
            service.apiSingleCaseCategoryCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.create"}
                });
            };
            service.apiSingleCaseCategoryUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.update"}
                });
            };
            service.apiSingleCaseCategoryDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.category.delete"}
                });
            };
            service.apiSingleCaseGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.get"}});
            };
            service.apiSingleCaseSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.search"}});
            };
            service.apiSingleCaseFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.find"}});
            };
            service.apiSingleCaseAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.case.all.list.get"}
                });
            };
            service.apiSingleCaseCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.create"}});
            };
            service.apiSingleCaseUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.update"}});
            };
            service.apiSingleCaseDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.case.delete"}});
            };
            service.apiSingleFeedbackGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.get"}});
            };
            service.apiSingleFeedbackSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.search"}});
            };
            service.apiSingleFeedbackFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.find"}});
            };
            service.apiSingleFeedbackAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.feedback.all.list.get"}
                });
            };
            service.apiSingleFeedbackCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.create"}});
            };
            service.apiSingleFeedbackUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.update"}});
            };
            service.apiSingleFeedbackDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.delete"}});
            };
            service.apiSingleLinkGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.get"}});
            };
            service.apiSingleLinkSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.search"}});
            };
            service.apiSingleLinkFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.find"}});
            };
            service.apiSingleLinkAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.link.all.list.get"}
                });
            };
            service.apiSingleLinkCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.create"}});
            };
            service.apiSingleLinkUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.update"}});
            };
            service.apiSingleLinkDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.link.delete"}});
            };
            service.apiSingleObjectLikeGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.object.like.get"}});
            };
            service.apiSingleObjectLikeSearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.like.search"}
                });
            };
            service.apiSingleObjectLikeFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.object.like.find"}});
            };
            service.apiSingleObjectLikeAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.like.all.list.get"}
                });
            };
            service.apiSingleObjectLikeCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.like.create"}
                });
            };
            service.apiSingleObjectLikeUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.like.update"}
                });
            };
            service.apiSingleObjectLikeDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.like.delete"}
                });
            };
            service.apiSingleObjectReadGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.object.read.get"}});
            };
            service.apiSingleObjectReadSearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.read.search"}
                });
            };
            service.apiSingleObjectReadFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.object.read.find"}});
            };
            service.apiSingleObjectReadAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.read.all.list.get"}
                });
            };
            service.apiSingleObjectReadCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.read.create"}
                });
            };
            service.apiSingleObjectReadUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.read.update"}
                });
            };
            service.apiSingleObjectReadDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.read.delete"}
                });
            };
            service.apiSingleObjectStatisticsGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.get"}
                });
            };
            service.apiSingleObjectStatisticsSearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.search"}
                });
            };
            service.apiSingleObjectStatisticsFind = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.find"}
                });
            };
            service.apiSingleObjectStatisticsAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.all.list.get"}
                });
            };
            service.apiSingleObjectStatisticsCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.create"}
                });
            };
            service.apiSingleObjectStatisticsUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.update"}
                });
            };
            service.apiSingleObjectStatisticsDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.statistics.delete"}
                });
            };
            service.apiSinglePageGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.get"}});
            };
            service.apiSinglePageSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.search"}});
            };
            service.apiSinglePageFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.find"}});
            };
            service.apiSinglePageAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.page.all.list.get"}
                });
            };
            service.apiSinglePageCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.create"}});
            };
            service.apiSinglePageUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.update"}});
            };
            service.apiSinglePageDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.page.delete"}});
            };
            service.apiSingleProductCategoryGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.get"}
                });
            };
            service.apiSingleProductCategorySearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.search"}
                });
            };
            service.apiSingleProductCategoryFind = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.find"}
                });
            };
            service.apiSingleProductCategoryAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.all.list.get"}
                });
            };
            service.apiSingleProductCategoryCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.create"}
                });
            };
            service.apiSingleProductCategoryUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.update"}
                });
            };
            service.apiSingleProductCategoryDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.category.delete"}
                });
            };
            service.apiSingleProductGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.get"}});
            };
            service.apiSingleProductSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.search"}});
            };
            service.apiSingleProductFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.find"}});
            };
            service.apiSingleProductAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.product.all.list.get"}
                });
            };
            service.apiSingleProductCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.create"}});
            };
            service.apiSingleProductUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.update"}});
            };
            service.apiSingleProductDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.product.delete"}});
            };
            service.apiSingleSiteGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.get"}});
            };
            service.apiSingleSiteSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.search"}});
            };
            service.apiSingleSiteFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.find"}});
            };
            service.apiSingleSiteAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.site.all.list.get"}
                });
            };
            service.apiSingleSiteCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.create"}});
            };
            service.apiSingleSiteUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.update"}});
            };
            service.apiSingleSiteDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.site.delete"}});
            };
            service.apiSingleTextGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.get"}});
            };
            service.apiSingleTextSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.search"}});
            };
            service.apiSingleTextFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.find"}});
            };
            service.apiSingleTextAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.text.all.list.get"}
                });
            };
            service.apiSingleTextCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.create"}});
            };
            service.apiSingleTextUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.update"}});
            };
            service.apiSingleTextDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.text.delete"}});
            };
            service.apiSingleAllSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.all.search"}});
            };
            service.apiSingleUserPasswordGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.get"}
                });
            };
            service.apiSingleUserPasswordSearch = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.search"}
                });
            };
            service.apiSingleUserPasswordFind = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.find"}
                });
            };
            service.apiSingleUserPasswordAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.all.list.get"}
                });
            };
            service.apiSingleUserPasswordCreate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.create"}
                });
            };
            service.apiSingleUserPasswordUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.update"}
                });
            };
            service.apiSingleUserPasswordDelete = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.password.delete"}
                });
            };

            //登陆
            service.apiSingleUserValidate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.validate"}});
            };
            service.apiSingleUserGet = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.get"}});
            };
            service.apiSingleUserSearch = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.search"}});
            };
            service.apiSingleUserFind = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.find"}});
            };
            service.apiSingleUserAllListGet = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.user.all.list.get"}
                });
            };
            service.apiSingleUserCreate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.create"}});
            };
            service.apiSingleUserUpdate = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.update"}});
            };
            service.apiSingleUserDelete = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.delete"}});
            };
            service.apiSingleUserInactive = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.inactive"}});
            };
            service.apiSingleFileUpload = function (file) {
                var url = "/single/fileUpload.do";
                var fd = new FormData();
                fd.append("file", file);
                fd.append("method", "api.single.file.upload");
                return $http({
                    method: 'POST',
                    url: url,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                    data: fd
                });
            };

            service.apiSingleUserLogout = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.user.logout"}});
            };
            service.apiSingleFeedbackAudit = function (data) {
                return $http({method: 'POST', url: url, data: data, params: {"method": "api.single.feedback.audit"}});
            };
            service.apiSingleObjectByCodeUpdate = function (data) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    params: {"method": "api.single.object.by.code.update"}
                });
            };
            return service;
        }])
})();




(function () {
    "use strict";


    //类别设置

    var caseClassController=function($scope,$modal,SingleService,dialogService) {
        $scope.vm={
            pageSize:0
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleCaseCategorySearch($scope.vm).success(function(data){
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
                controller:CaseClassCreateController,
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
                controller:CaseClassEditController,
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
                    SingleService.apiSingleCaseCategoryDelete({id:id}).success(function(data){
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
    var CaseClassCreateController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
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
                SingleService.apiSingleCaseCategoryCreate($scope.vm).success(function(data){
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
    var CaseClassEditController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                id:items.id
            };
            //创建
            SingleService.apiSingleCaseCategoryGet($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.caseCategory;
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
                SingleService.apiSingleCaseCategoryUpdate($scope.vm).success(function(data){
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


    var caseListController=function($scope,SingleService,dialogService) {
        $scope.vm={
            pageSize:10,
            pageNumber:1
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleCaseSearch($scope.vm).success(function(data){
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
                objectType:"CASE",
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
                objectType:"CASE",
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
                    SingleService.apiSingleCaseDelete({id:id}).success(function(data){
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

    var caseCreateController=function($scope,SingleService,dialogService) {
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
            SingleService.apiSingleCaseCategorySearch(vm).success(function(data){
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

            SingleService.apiSingleCaseCreate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/case/list";
                }
            });
        };

    };

    var caseEditController=function($scope,$location,SingleService,dialogService,toolsService) {

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
            SingleService.apiSingleCaseCategorySearch(vm).success(function(data){
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
            SingleService.apiSingleCaseGet(id).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.caseDo;
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

            SingleService.apiSingleCaseUpdate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/case/list";
                }
            });
        };
    };

    angular.module("xn.single.case", [])
    .controller("CaseClassController",["$scope","$modal","SingleService","dialogService",caseClassController])
    .controller("CaseListController",["$scope","SingleService","dialogService",caseListController])
    .controller("CaseCreateController",["$scope","SingleService","dialogService",caseCreateController])
    .controller("CaseEditController",["$scope","$location","SingleService","dialogService","toolsService",caseEditController]);
})();
(function () {
    "use strict";
    angular.module("xn.single.change", [])
    .controller("ChangeController",["$scope","SingleService","dialogService", function($scope,SingleService,dialogService) {
            $scope.vm={};


            $scope.doChange=function(){

                if ($scope.vm.confirmPassword === $scope.vm.loginPassword) {
                    SingleService.apiSingleUserPasswordUpdate($scope.vm).success(function (data) {
                            if (data.errors == null || data.errors.length > 0) {
                                //noinspection JSHint
                                $scope["validateForm"].$errors.push(data.errors[0].message);

                            } else {
                                $scope.logout();
                            }
                        }
                    );
                } else {
                    $scope["validateForm"].$errors.push("密码不一致");
                }
            };
            $scope.logout=function(){
                SingleService.apiSingleUserLogout().success(function (data) {
                        if (data.errors == null || data.errors.length > 0) {
                            //noinspection JSHint
                            $scope["validateForm"].$errors.push(data.errors[0].message);

                        } else {
                            dialogService.tip([{"message": "修改成功,请重新登录"}],"/single/","1000");
                        }
                    }
                );
            };



    }])
})();
/**
 * Created by DEV005 on 2015/7/17.
 */
(function () {
    "use strict";

    //类别设置

    var feedbackIndexController=function($scope,$modal,SingleService,dialogService) {
        $scope.vm={
            pageSize:0
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleFeedbackSearch($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.List=data.result;
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
                bodyText: "您确定要删除？",
                callback: function () {
                    SingleService.apiSingleFeedbackDelete({id:id}).success(function(data){
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

    //审核
    var feedbackAuditController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                id:items.id
            };
            //创建
            SingleService.apiSingleFeedbackGet($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.feedback;

                }
            });
            //创建
            $scope.doAudit=function(){
                $scope.vm.isSubmit=true;
                SingleService.apiSingleLinkUpdate($scope.vm).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        dialogService.tip([{"message":"审核通过成功！" }],"/single/feekback/index");
                    }
                });
            };
        }];

    angular.module("xn.single.feedback", [])
        .controller("FeedbackIndexController",["$scope","$modal","SingleService","dialogService",feedbackIndexController])
        .controller("FeedbackAuditController",["$scope","$modal","SingleService","dialogService",feedbackAuditController])
})();
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
/**
 * Created by DEV005 on 2015/7/17.
 */
(function () {
    "use strict";
    angular.module("xn.single.login", [])
        .controller("LoginController",["$scope","dialogService","SingleService", function($scope,dialogService,SingleService) {
            $scope.vm={};

           $scope.doLogin=function(){
               SingleService.apiSingleUserValidate($scope.vm).success(function(data){
                   console.log($scope.vm);
                   console.log(data);
                   if (data.errors == null || data.errors.length > 0)
                       dialogService.tip(data.errors);
                   else{

                       window.location ="/single/index";
                   }
               })

           }
        }])
})();
(function () {
    "use strict";
    angular.module("xn.single.main", [])
    .controller("MainController",["$scope", function($scope) {

    }])
})();
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
(function () {
    "use strict";


    //类别设置

    var productClassController=function($scope,$modal,SingleService,dialogService) {
        $scope.vm={
            pageSize:0
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleProductCategorySearch($scope.vm).success(function(data){
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
                controller:ProductClassCreateController,
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
                controller:ProductClassEditController,
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
                    SingleService.apiSingleProductCategoryDelete({id:id}).success(function(data){
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
    var ProductClassCreateController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
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
                SingleService.apiSingleProductCategoryCreate($scope.vm).success(function(data){
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
    var ProductClassEditController = ["$scope", "$modalInstance","items" ,"SingleService","dialogService",
        function($scope,$modalInstance,items,SingleService,dialogService){

            $scope.vm={
                id:items.id
            };
            //创建
            SingleService.apiSingleProductCategoryGet($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.productCategory;
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
                SingleService.apiSingleProductCategoryUpdate($scope.vm).success(function(data){
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


    var productListController=function($scope,SingleService,dialogService) {
        $scope.vm={
            pageSize:10,
            pageNumber:1
        };
        $scope.List=[];

        //查询设置
        $scope.getList = function(){
            SingleService.apiSingleProductSearch($scope.vm).success(function(data){
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
               objectType:"PRODUCT",
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
               objectType:"PRODUCT",
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
                    SingleService.apiSingleProductDelete({id:id}).success(function(data){
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

    var productCreateController=function($scope,SingleService,dialogService) {
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
            SingleService.apiSingleProductCategorySearch(vm).success(function(data){
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

            SingleService.apiSingleProductCreate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/product/list";
                }
            });
        };

    };

    var productEditController=function($scope,$location,SingleService,dialogService,toolsService) {

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
            SingleService.apiSingleProductCategorySearch(vm).success(function(data){
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
            SingleService.apiSingleProductGet(id).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    $scope.vm=data.product;
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

            SingleService.apiSingleProductUpdate($scope.vm).success(function(data){
                if (data.errors == null || data.errors.length > 0)
                    dialogService.tip(data.errors);
                else{
                    window.location ="/single/product/list";
                }
            });
        };
    };

    angular.module("xn.single.product", [])
    .controller("ProductClassController",["$scope","$modal","SingleService","dialogService",productClassController])
    .controller("ProductListController",["$scope","SingleService","dialogService",productListController])
    .controller("ProductCreateController",["$scope","SingleService","dialogService",productCreateController])
    .controller("ProductEditController",["$scope","$location","SingleService","dialogService","toolsService",productEditController]);
})();
(function () {
    "use strict";
    angular.module("xn.single.setting", [])
    .controller("SettingController",["$scope","SingleService","dialogService", function($scope,SingleService,dialogService) {
            $scope.vm={};
            var isEdit=false;

            //查询设置
            $scope.getList = function(){
                SingleService.apiSingleSiteSearch($scope.vm).success(function(data){
                    if (data.errors == null || data.errors.length > 0)
                        dialogService.tip(data.errors);
                    else{
                        if(data.result.length>0){
                            $scope.vm=data.result[0];
                            isEdit=true;
                        }
                    }
                });
            };
            $scope.getList();
            $scope.doSave =function(){
                if(isEdit){
                    SingleService.apiSingleSiteUpdate($scope.vm).success(function(data){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else{
                            dialogService.tip([{"message": "修改成功"}],"/single/setting","1000");
                        }
                    });
                }else{
                    SingleService.apiSingleSiteCreate($scope.vm).success(function(data){
                        if (data.errors == null || data.errors.length > 0)
                            dialogService.tip(data.errors);
                        else{
                            dialogService.tip([{"message": "修改成功"}],"/single/setting");
                        }
                    });
                }

            };


        }])
})();