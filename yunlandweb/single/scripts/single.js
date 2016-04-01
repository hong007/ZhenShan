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

