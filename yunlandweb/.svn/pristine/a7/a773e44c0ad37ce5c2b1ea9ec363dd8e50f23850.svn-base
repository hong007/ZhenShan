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