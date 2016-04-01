angular.module("xn/template/dialog/confirm.html", []).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/dialog/confirm.html",
            "<div class=\"modal-header\">\n" +
            "    <h3>{{dialogOptions.headerText}}</h3>\n" +
            "    <div class=\"xn-close xn-cursor\" data-ng-click=\"dialogOptions.close()\">\n" +
            "        <i class=\"icon icon-delete\"></i>\n" +
            "    </div>\n" +
            " </div>\n" +
            "    <div class=\"modal-body\" ng-if=\"dialogOptions.type!='delete'\">\n" +
            "        <p>{{dialogOptions.bodyText}}</p>\n" +
            "    </div>\n" +
            "    <div class=\"modal-body\" ng-if=\"dialogOptions.type=='delete'\">\n" +
            "        <div class=\"xn-exclamation\"><span>!</span></div>\n" +
            "        <div class=\"xn-body-text\">\n" +
            "            <h4>{{dialogOptions.bodyText}}</h4>\n" +
            "            <p></p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "<div class=\"modal-footer\">\n" +
            "   <button type=\"button\"class=\"btn\"\n" +
            "   data-ng-click=\"dialogOptions.close()\">{{dialogOptions.closeButtonText}}\n" +
            "    </button>\n" +
            "   <button class=\"btn btn-danger\"\n" +
            "   data-ng-click=\"dialogOptions.callback();\">{{dialogOptions.actionButtonText}}\n" +
            "     </button>\n" +
            " </div>");

}]);

angular.module("xn/template/dialog/info.html", []).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/dialog/info.html",
            "<div class=\"modal-header\">\n" +
            "    <h3>{{dialogOptions.headerText}}</h3>\n" +
            " </div>\n" +
            "    <div class=\"modal-body\">\n" +
            "   <p>{{dialogOptions.bodyText}}</p>\n" +
            "    </div>\n" +
            "<div class=\"modal-footer\">\n" +
            "   <button type=\"button\"class=\"btn\"\n" +
            "   data-ng-click=\"dialogOptions.close()\">{{dialogOptions.closeButtonText}}\n" +
            "    </button>\n" +
            " </div>");

}]);

angular.module("xn/template/dialog/error.html", []).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/dialog/error.html",
            "<div class=\"modal-header\">\n" +
            "    <h3>{{dialogOptions.headerText}}</h3>\n" +
            " </div>\n" +
            "    <div class=\"modal-body\">\n" +
            "   <p>{{dialogOptions.bodyText}}</p>\n" +
            "    </div>\n" +
            "<div class=\"modal-footer\">\n" +
            "   <button type=\"button\"class=\"btn\"\n" +
            "   data-ng-click=\"dialogOptions.close()\">{{dialogOptions.closeButtonText}}\n" +
            "    </button>\n" +
            " </div>");

}]);
angular.module("xn/template/dialog/warn.html", []).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/dialog/warn.html",
            "<div class=\"modal-header\">\n" +
            "    <h3>{{dialogOptions.headerText}}</h3>\n" +
            " </div>\n" +
            "    <div class=\"modal-body\">\n" +
            "   <p>{{dialogOptions.bodyText}}</p>\n" +
            "    </div>\n" +
            "<div class=\"modal-footer\">\n" +
            "   <button type=\"button\"class=\"btn\"\n" +
            "   data-ng-click=\"dialogOptions.close()\">{{dialogOptions.closeButtonText}}\n" +
            "    </button>\n" +
            " </div>");

}]);
angular.module("xn/template/dialog/success.html", []).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/dialog/success.html",
            "<div class=\"modal-header\">\n" +
            "    <h3>{{dialogOptions.headerText}}</h3>\n" +
            " </div>\n" +
            "    <div class=\"modal-body\">\n" +
            "   <p>{{dialogOptions.bodyText}}</p>\n" +
            "    </div>\n" +
            "<div class=\"modal-footer\">\n" +
            "   <button type=\"button\"class=\"btn\"\n" +
            "   data-ng-click=\"dialogOptions.close()\">{{dialogOptions.closeButtonText}}\n" +
            "    </button>\n" +
            " </div>");

}]);

angular.module("xn.service.tpl", [
    "xn/template/dialog/confirm.html",
    "xn/template/dialog/info.html",
    "xn/template/dialog/error.html",
    "xn/template/dialog/warn.html",
    "xn/template/dialog/success.html"
]);

angular.module("xn.service.common", ["xn.service.tpl", "ui.bootstrap"])
    .service("toolsService",[function () {
        "use strict";
        /**
         * 获取网址上的参数
         * @param name  网址上的参数.例如（id）
         * @param url   网址连接。
         * @returns {*}  返回网址参数的值
         */
        this.parameter = function (name, url) {
            var parameterString = null;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            parameterString = url.substr(url.indexOf("?"), url.length);//获取截取？以后的字符串
            var r = parameterString.substr(1).match(reg);
            if (r != null){
                return  unescape(r[2]);
            }
            return null;
        };
    }
    ])
    .service("dialogService",["$modal","$timeout","$document","$http",
        function ($modal,$timeout,$document,$http) {
            "use strict";
            this.confirm = function (customDialogDefaults, customDialogOptions) {
                var dialogDefaults = {
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    dialogFade: true,
                    templateUrl: "xn/template/dialog/confirm.html",
                    size:"sm"
                };

                var dialogOptions = {
                    closeButtonText: "关闭",
                    actionButtonText: "确定",
                    headerText: "继续...?",
                    bodyText: "执行这个操作?"
                };
                //Create temp objects to work with since we're in a singleton service
                var tempDialogDefaults = {};
                var tempDialogOptions = {};

                //Map angular-ui dialog custom defaults to dialog defaults defined in this service
                angular.extend(tempDialogDefaults, dialogDefaults, customDialogDefaults);

                //Map dialog.html $scope custom properties to defaults defined in this service
                angular.extend(tempDialogOptions, dialogOptions, customDialogOptions);

                if (!tempDialogDefaults.controller) {
                    tempDialogDefaults.controller =["$scope","$modalInstance", function ($scope,  $modalInstance) {
                        $scope.dialogOptions = tempDialogOptions;
                        $scope.dialogOptions.close = function (result) {
                            $modalInstance.close(result);
                        };
                        $scope.dialogOptions.callback = function () {
                            $modalInstance.close();
                            customDialogOptions.callback();
                        };
                    }];
                }

                $modal.open(tempDialogDefaults);

            };

            this.info=function(message){
                var dialogOptions = {
                    closeButtonText: "关闭",
                    headerText: "提示信息",
                    bodyText:  message
                };

                $modal.open({
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    dialogFade: true,
                    size:"sm",
                    templateUrl: "xn/template/dialog/info.html",
                    controller:["$scope","$modalInstance", function ($scope,  $modalInstance) {
                        $scope.dialogOptions=dialogOptions;
                        $scope.dialogOptions.close = function () {
                            $modalInstance.close();
                        };
                    }]

                });
            };
            this.success=function(message){
                var dialogOptions = {
                    closeButtonText: "关闭",
                    headerText: "成功信息",
                    bodyText:  message
                };

                $modal.open({
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    dialogFade: true,
                    size:"sm",
                    templateUrl: "xn/template/dialog/success.html",
                    controller:["$scope","$modalInstance",function ($scope,  $modalInstance) {
                        $scope.dialogOptions=dialogOptions;
                        $scope.dialogOptions.close = function () {
                            $modalInstance.close();
                        };
                    }]

                });
            };
            this.error=function(message){
                var dialogOptions = {
                    closeButtonText: "关闭",
                    headerText: "错误信息",
                    bodyText:  message
                };

                $modal.open({
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    dialogFade: true,
                    size:"sm",
                    templateUrl: "xn/template/dialog/error.html",
                    controller:["$scope","$modalInstance", function ($scope,  $modalInstance) {
                        $scope.dialogOptions=dialogOptions;
                        $scope.dialogOptions.close = function () {
                            $modalInstance.close();
                        };
                    }]

                });
            };
            this.warn=function(message){
                var dialogOptions = {
                    closeButtonText: "关闭",
                    headerText:"警告信息",
                    bodyText:  message
                };
                $modal.open({
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true,
                    dialogFade: true,
                    size:"sm",
                    templateUrl: "xn/template/dialog/warn.html",
                    controller:["$scope","$modalInstance", function ($scope,  $modalInstance) {
                        $scope.dialogOptions=dialogOptions;
                        $scope.dialogOptions.close = function () {
                            $modalInstance.close();
                        };
                    }]

                });
            };
            /**
             * tip 弹出提示窗口 dialogService.tip([{"message": "保存成功！"}],"index1.htm",time);
             * @param message  数组{} 弹出的内容“操作成功！”
             * @param modalUrl "index1.htm"
             * @param time time
             */
            this.tip=function(message, modalUrl,time){
                var dialogDefaults = {
                    headerText:"信息提示",
                    bodyText:message,
                    show:"show",
                    size:"sm",
                    top:"30%",
                    removeTime:1000,
                    stopTime:3000
                };
                var  tipbox="";
                var  errorDump="";

                if(time != null){
                    dialogDefaults.stopTime = time;
                }

                for( var i=0;i < dialogDefaults.bodyText.length;i++ ){
                    if(dialogDefaults.bodyText[i].type!="STACK_DUMP"){
                        tipbox += "<p><span>"+(i+1)+".</span>"+dialogDefaults.bodyText[i].message+"</p>\n";
                    }else{
                        errorDump += dialogDefaults.bodyText[i].message;
                    }
                }

                var tip= "<div class=\"modal ng-isolate-scope xn-modal xn-modal-sm\" >\n"+
                    "<div class=\"modal-content \">\n"+
                    "<div class=\"modal-header\">\n"+
                    " <h3>"+dialogDefaults.headerText+"</h3>\n" +
                    " </div>\n" +
                    "<div class=\"modal-body\">\n" +
                    tipbox+
                    "</div>";

                if(errorDump!=""){
                    errorDump = escape(errorDump);
                    tip +="<form action='/api/errorHandler.do' method='post' target='_blank'>" +
                        "<div class=\"modal-foot xn-text-right xn-padding-bottom xn-padding-right\">" +
                        "<input type='submit' value='更多' class='btn btn-link' />" +
                        "<input type='hidden' name='error' value='" + errorDump + "' />" +
                        "</div></form>" ;
                }

                //消息明细获取
                var body = $document.find("body").eq(0);
                body.append(tip);
                body.find(".xn-modal").css({ top: dialogDefaults.top,opacity:dialogDefaults.show });
                body.find(".xn-modal").fadeIn(dialogDefaults.show);
                var closeModal=function(){
                    body.find(".xn-modal").animate({ "top": "0", "opacity":"hide"},dialogDefaults.removeTime);
                    var  remove=function(){
                        body.find(".xn-modal").remove();
                        if( !(modalUrl==undefined || modalUrl==null)){
                            window.location = modalUrl;
                        }
                    };
                    $timeout(remove ,dialogDefaults.removeTime);
                };
                $timeout(closeModal ,dialogDefaults.stopTime);
            };
        }
    ])
    .factory('permissionService',["$rootScope", function ($rootScope) {
        var permissionList;
        return {
            setPermissions: function(permissions) {
                console.log("XN:permissionService ,设置权限列表集合"+permissions)
                permissionList = permissions;
                $rootScope.$broadcast('permissionsChanged')
            },
            hasPermission: function (permission) {
                console.log("XN:权限项判断， value＝"+permission);
                console.log("XN:权限项判断， permissionList＝"+permissionList);
                permission = permission.trim().toLowerCase();
                return _.some(permissionList, function(item) {
                    console.log("遍历项＝"+item);
                    if(_.isString(item))
                        return item.trim().toLowerCase() === permission
                });
            }
        };
    }]);



var httpInterceptor= function($q,$injector,$location,XN_BEGIN_REQUEST,XN_END_REQUEST){
    "use strict";
    var $http,  rootScope;
    var interceptor={
        request:function(config){
            /*  console.log("XN:提交请求的成功,信息如下：");
             console.log(config);*/
            config.requestTimestamp = new Date().getTime();
            // get $rootScope via $injector because of circular dependency problem
            rootScope = rootScope || $injector.get('$rootScope');
            // send notification a request has started
            rootScope.$broadcast(XN_BEGIN_REQUEST);
            return config;
        },
        response:function(response){
            /*       console.log("XN:服务器响应成功,信息如下：");*/
            /*   console.log(response);*/
            /*  console.log(response.data);*/
            response.config.responseTimestamp = new Date().getTime();
            var time = response.config.responseTimestamp - response.config.requestTimestamp;
            console.log('请求共花费了： ' + (time / 1000) + '秒.');
            // get $http via $injector because of circular dependency problem
            $http = $http || $injector.get('$http');
            // don't send notification until all requests are complete
            if ($http.pendingRequests.length < 1) {
                // get $rootScope via $injector because of circular dependency problem
                rootScope = rootScope || $injector.get('$rootScope');
                // send a notification requests are complete
                rootScope.$broadcast(XN_END_REQUEST);
            }

            return response ;
        },
        requestError:function(rejection){
            /*   console.log("XN:提交服务器请求失败,信息如下：");
             console.log(rejection);*/
            return $q.reject(rejection);
        },
        responseError:function(rejection){
            /*  console.log("XN:服务器响应失败,信息如下：");
             console.log(rejection);*/
            // get $http via $injector because of circular dependency problem
            $http = $http || $injector.get('$http');
            // don't send notification until all requests are complete
            if ($http.pendingRequests.length < 1) {
                // get $rootScope via $injector because of circular dependency problem
                rootScope = rootScope || $injector.get('$rootScope');
                // send a notification requests are complete
                rootScope.$broadcast(XN_END_REQUEST);
            }
            switch (rejection.status)
            {
                case 401:
                    console.error("XN:服务器返回401错误");
                    break;
                case 403:
                    console.error("XN:服务器返回403错误");
                    break;
                case 404:
                    console.error("XN:服务器返回404错误");
                    break;
                case 500:
                    console.error("XN:服务器返回500错误");
                    break;
                default :
                    console.error("XN:服务器返回错误");
                    break;
            }

            return $q.reject(rejection);
        }
    };
    return interceptor;
};

angular.module("xn.service.interceptor", ["xn.service.common"])
    .constant('XN_BEGIN_REQUEST', 'XN_BEGIN_REQUEST')
    .constant('XN_END_REQUEST', 'XN_END_REQUEST')
    .factory("httpInterceptor",["$q","$injector","$location","XN_BEGIN_REQUEST","XN_END_REQUEST"
        ,httpInterceptor]);

var systemModule=angular.module("xn.service.foundation",[]);

systemModule.factory("FoundationService",["$http",function($http){
    var service={};

    var url="/system/api.do";
    //用户获取
    service.getUser=function(request) {
        console.log("service invoked!");
        return $http({
            method : 'POST',
            url : url,
            params:{"method":"api.system.user.get"},
            data:request
        });
    };

    //消息明细获取
    service.getMessageDetail=function(request) {
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.message.get"},
            data:request
        });
    };
    //未读消息读取
    service.getMessageList=function() {
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.messages.get"}
        });
    };
    //已读消息读取
    service.getReadedMessageList=function() {
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.readedmessage.get"}
        });
    };
    //读消息
    service.doRead=function(messageIdList) {
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.message.read"},
            data:{"ids":messageIdList}
        });
    };

    /**
     * 创建一个地址
     * @param data
     * @returns {*}     返回一个ID
     */
    service.createLocation=function(data) {
        console.log("---------进入Foundation----------");
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.location.create"},
            data:data
        });
    };

    /**
     * 创建一个地址
     * @param data
     * @returns {*}
     */
    service.updateLocation=function(data) {
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.location.update"},
            data:data
        });
    };

    /**
     * 获取银行列表
     * @returns {*}
     */
    service.apiFoundationBankGetAllList = function(){
        var url="/api/foundation.do";
        return $http({
            method : "POST",
            url : url,
            params:{"method":"api.foundation.bank.getalllist"}
        });
    };

    /**
     * 获取附件列表
     *
     * @param data
     * @returns {*}
     */
    service.apiFoundationAttachmentGetListByBizInfo = function(data){
        var url = "/api/foundation.do";
        return $http({
            method: 'POST',
            url: url,
            params: {"method": "api.foundation.attachment.getlist.bybizinfo"},
            data: data
        });
    };

    //上传附件
    service.apiFoundationAttachmentUpload = function(file,businessId,businessType,businessCategory){
        var fileName = file.name;
        var ext =fileName.substr(fileName.lastIndexOf(".")+1,fileName.length);
        var name = fileName.substr(0,fileName.lastIndexOf("."));
        var url="/api/attachmentUpload.do";
        var fd = new FormData();
        fd.append("file",file);
        fd.append("FileName",name);
        fd.append("Ext",ext);
        fd.append("method","api.foundation.attachment.upload");
        fd.append("businessId",businessId);
        fd.append("businessType",businessType);
        fd.append("businessCategory",businessCategory);
        return($http({
            method : 'POST',
            url : url,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity,
            data:fd
        })) ;
    };


    /**
     * 上传Logo
     * @param file
     * @returns {*}
     */
    service.uploadLogo=function(file){
        var fileName = file.name;
        var ext =fileName.substr(fileName.lastIndexOf(".")+1,fileName.length);
        var url="api/fileUpload.do";
        var url="api/fileUpload.do";
        var fd = new FormData();
        fd.append("File",file);
        fd.append("Ext",ext);
        fd.append("Type","PHOTO");
        return($http({
            method : 'POST',
            url : url,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity,
            data:fd
        })) ;
    };


    //删除附件
    service.apiFoundationAttachmentDelete = function(data){
        var url = "/api/foundation.do";
        return $http({
            method: 'POST',
            url: url,
            params: {"method": "api.foundation.attachment.delete"},
            data: data
        });
    };

    //获取民族列表
    service.apiFoundationNationGetAllList = function(data){
        var url = "/api/foundation.do";
        return $http({
            method: 'POST',
            url: url,
            params: {"method": "api.foundation.nation.getalllist"},
            data: data
        });
    };


    //获取企业性质列表
    service.apiFoundationBusinessNatureFind = function(data){
        var url = "/api/foundation.do";
        return $http({
            method: 'POST',
            url: url,
            params: {"method": "api.foundation.businessnature.find"},
            data: data
        });
    };

    //获取行业列表
    service.apiFoundationBusinessTradeFind = function(data){
        var url = "/api/foundation.do";
        return $http({
            method: 'POST',
            url: url,
            params: {"method": "api.foundation.businesstrade.find"},
            data: data
        });
    };

    //查询出版社列表
    service.searchPressList = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.press.search"},
            data : data
        });
    };

    //获取银行
    service.apiFoundationGetBank = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.bank.get"},
            data : data
        });
    };

    //获取食品分类
    service.apiFoundationFoodCategoryGet = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.food.category.get"},
            data : data
        });
    };
    //模糊查询食品分类
    service.apiFoundationFoodCategorySearch = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.food.category.search"},
            data : data
        });
    };
    //高级查询食品分类
    service.apiFoundationFoodCategoryFind = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.food.category.find"},
            data : data
        });
    };
    //获取ID列表
    service.apiFoundationIdsGet = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.ids.get"},
            data : data
        });
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


    //导出报表
    service.apiFoundationPdfExport = function(data){
        var url="/api/foundation.do";
        return $http({
            method: "POST",
            url: url,
            params: {"method": "api.foundation.pdf.export"},
            data : data
        });
    };
    return service;
}]);

(function (window) {
    "use strict";

    var xn={};
    xn.dialog={
        success:function(msg){
            alert(msg);
        },
        warn:function(msg){
            alert(msg);
        },
        error:function(msg){
            alert(msg);
        },
        tip:function(msg){
            alert(msg);
        },
        info:function(msg){
            alert(msg);
        }
    };
    xn.convert={
        toString:function(input)
        {
            if(input===null || input===undefined)
            {
                return "";
            }
            else
            {
                return input;
            }
        }
    };
    xn.console={
        log:function(msg)
        {
            console.log(msg);
        },
        error:function(msg)
        {
            console.error(msg);
        }
    };

    // Expose xn to the global object
    window.xn = xn;

    window.getMousePoint = function(ev) {
        // 定义鼠标在视窗中的位置
        var point = {
            x:0,
            y:0
        };
        // 如果浏览器支持 pageYOffset, 通过 pageXOffset 和 pageYOffset 获取页面和视窗之间的距离
        if(typeof window.pageYOffset != 'undefined') {
            point.x = window.pageXOffset;
            point.y = window.pageYOffset;
        }
        // 如果浏览器支持 compatMode, 并且指定了 DOCTYPE, 通过 documentElement 获取滚动距离作为页面和视窗间的距离
        // IE 中, 当页面指定 DOCTYPE, compatMode 的值是 CSS1Compat, 否则 compatMode 的值是 BackCompat
        else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
            point.x = document.documentElement.scrollLeft;
            point.y = document.documentElement.scrollTop;
        }
        // 如果浏览器支持 document.body, 可以通过 document.body 来获取滚动高度
        else if(typeof document.body != 'undefined') {
            point.x = document.body.scrollLeft;
            point.y = document.body.scrollTop;
        }
        // 加上鼠标在视窗中的位置
        point.x += ev.clientX;
        point.y += ev.clientY;
        // 返回鼠标在视窗中的位置
        return point;
    };
})(window);
// moment.js
// version : 1.5.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function (Date, undefined) {

    var moment,
        round = Math.round,
        languages = {},
        hasModule = (typeof module !== 'undefined'),
        paramsToParse = 'months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem'.split('|'),
        i,
        jsonRegex = /^\/?Date\((\-?\d+)/i,
        charactersToReplace = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g,
        nonuppercaseLetters = /[^A-Z]/g,
        timezoneRegex = /\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,
        tokenCharacters = /(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,
        inputCharacters = /(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,
        isoRegex = /\d{4}.\d\d.\d\d(T(\d\d(.\d\d(.\d\d)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',
        isoTimes = [
            ['HH:mm:ss', /T\d\d:\d\d:\d\d/],
            ['HH:mm', /T\d\d:\d\d/],
            ['HH', /T\d\d/]
        ],
        timezoneParseRegex = /([\+\-]|\d\d)/gi,
        VERSION = "1.5.0",
        shortcuts = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|');

    // Moment prototype object
    function Moment(date, isUTC) {
        this._d = date;
        this._isUTC = !!isUTC;
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function dateAddRemove(date, _input, adding, val) {
        var isString = (typeof _input === 'string'),
            input = isString ? {} : _input,
            ms, d, M, currentDate;
        if (isString && val) {
            input[_input] = +val;
        }
        ms = (input.ms || input.milliseconds || 0) +
            (input.s || input.seconds || 0) * 1e3 + // 1000
            (input.m || input.minutes || 0) * 6e4 + // 1000 * 60
            (input.h || input.hours || 0) * 36e5; // 1000 * 60 * 60
        d = (input.d || input.days || 0) +
            (input.w || input.weeks || 0) * 7;
        M = (input.M || input.months || 0) +
            (input.y || input.years || 0) * 12;
        if (ms) {
            date.setTime(+date + ms * adding);
        }
        if (d) {
            date.setDate(date.getDate() + d * adding);
        }
        if (M) {
            currentDate = date.getDate();
            date.setDate(1);
            date.setMonth(date.getMonth() + M * adding);
            date.setDate(Math.min(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(), currentDate));
        }
        return date;
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(input) {
        return new Date(input[0], input[1] || 0, input[2] || 1, input[3] || 0, input[4] || 0, input[5] || 0, input[6] || 0);
    }

    // format date using native date object
    function formatMoment(m, inputString) {
        var currentMonth = m.month(),
            currentDate = m.date(),
            currentYear = m.year(),
            currentDay = m.day(),
            currentHours = m.hours(),
            currentMinutes = m.minutes(),
            currentSeconds = m.seconds(),
            currentZone = -m.zone(),
            ordinal = moment.ordinal,
            meridiem = moment.meridiem;
        // check if the character is a format
        // return formatted string or non string.
        //
        // uses switch/case instead of an object of named functions (like http://phpjs.org/functions/date:380)
        // for minification and performance
        // see http://jsperf.com/object-of-functions-vs-switch for performance comparison
        function replaceFunction(input) {
            // create a couple variables to be used later inside one of the cases.
            var a, b;
            switch (input) {
                // MONTH
                case 'M' :
                    return currentMonth + 1;
                case 'Mo' :
                    return (currentMonth + 1) + ordinal(currentMonth + 1);
                case 'MM' :
                    return leftZeroFill(currentMonth + 1, 2);
                case 'MMM' :
                    return moment.monthsShort[currentMonth];
                case 'MMMM' :
                    return moment.months[currentMonth];
                // DAY OF MONTH
                case 'D' :
                    return currentDate;
                case 'Do' :
                    return currentDate + ordinal(currentDate);
                case 'DD' :
                    return leftZeroFill(currentDate, 2);
                // DAY OF YEAR
                case 'DDD' :
                    a = new Date(currentYear, currentMonth, currentDate);
                    b = new Date(currentYear, 0, 1);
                    return ~~ (((a - b) / 864e5) + 1.5);
                case 'DDDo' :
                    a = replaceFunction('DDD');
                    return a + ordinal(a);
                case 'DDDD' :
                    return leftZeroFill(replaceFunction('DDD'), 3);
                // WEEKDAY
                case 'd' :
                    return currentDay;
                case 'do' :
                    return currentDay + ordinal(currentDay);
                case 'ddd' :
                    return moment.weekdaysShort[currentDay];
                case 'dddd' :
                    return moment.weekdays[currentDay];
                // WEEK OF YEAR
                case 'w' :
                    a = new Date(currentYear, currentMonth, currentDate - currentDay + 5);
                    b = new Date(a.getFullYear(), 0, 4);
                    return ~~ ((a - b) / 864e5 / 7 + 1.5);
                case 'wo' :
                    a = replaceFunction('w');
                    return a + ordinal(a);
                case 'ww' :
                    return leftZeroFill(replaceFunction('w'), 2);
                // YEAR
                case 'YY' :
                    return leftZeroFill(currentYear % 100, 2);
                case 'YYYY' :
                    return currentYear;
                // AM / PM
                case 'a' :
                    return currentHours > 11 ? meridiem.pm : meridiem.am;
                case 'A' :
                    return currentHours > 11 ? meridiem.PM : meridiem.AM;
                // 24 HOUR
                case 'H' :
                    return currentHours;
                case 'HH' :
                    return leftZeroFill(currentHours, 2);
                // 12 HOUR
                case 'h' :
                    return currentHours % 12 || 12;
                case 'hh' :
                    return leftZeroFill(currentHours % 12 || 12, 2);
                // MINUTE
                case 'm' :
                    return currentMinutes;
                case 'mm' :
                    return leftZeroFill(currentMinutes, 2);
                // SECOND
                case 's' :
                    return currentSeconds;
                case 'ss' :
                    return leftZeroFill(currentSeconds, 2);
                // TIMEZONE
                case 'zz' :
                // depreciating 'zz' fall through to 'z'
                case 'z' :
                    return (m._d.toString().match(timezoneRegex) || [''])[0].replace(nonuppercaseLetters, '');
                case 'Z' :
                    return (currentZone < 0 ? '-' : '+') + leftZeroFill(~~(Math.abs(currentZone) / 60), 2) + ':' + leftZeroFill(~~(Math.abs(currentZone) % 60), 2);
                case 'ZZ' :
                    return (currentZone < 0 ? '-' : '+') + leftZeroFill(~~(10 * Math.abs(currentZone) / 6), 4);
                // LONG DATES
                case 'L' :
                case 'LL' :
                case 'LLL' :
                case 'LLLL' :
                case 'LT' :
                    return formatMoment(m, moment.longDateFormat[input]);
                // DEFAULT
                default :
                    return input.replace(/(^\[)|(\\)|\]$/g, "");
            }
        }
        return inputString.replace(charactersToReplace, replaceFunction);
    }

    // date from string and format string
    function makeDateFromStringAndFormat(string, format) {
        var inArray = [0, 0, 1, 0, 0, 0, 0],
            timezoneHours = 0,
            timezoneMinutes = 0,
            isUsingUTC = false,
            inputParts = string.match(inputCharacters),
            formatParts = format.match(tokenCharacters),
            len = Math.min(inputParts.length, formatParts.length),
            i,
            isPm;

        // function to convert string input to date
        function addTime(format, input) {
            var a;
            switch (format) {
                // MONTH
                case 'M' :
                // fall through to MM
                case 'MM' :
                    inArray[1] = ~~input - 1;
                    break;
                case 'MMM' :
                // fall through to MMMM
                case 'MMMM' :
                    for (a = 0; a < 12; a++) {
                        if (moment.monthsParse[a].test(input)) {
                            inArray[1] = a;
                            break;
                        }
                    }
                    break;
                // DAY OF MONTH
                case 'D' :
                // fall through to DDDD
                case 'DD' :
                // fall through to DDDD
                case 'DDD' :
                // fall through to DDDD
                case 'DDDD' :
                    inArray[2] = ~~input;
                    break;
                // YEAR
                case 'YY' :
                    input = ~~input;
                    inArray[0] = input + (input > 70 ? 1900 : 2000);
                    break;
                case 'YYYY' :
                    inArray[0] = ~~Math.abs(input);
                    break;
                // AM / PM
                case 'a' :
                // fall through to A
                case 'A' :
                    isPm = (input.toLowerCase() === 'pm');
                    break;
                // 24 HOUR
                case 'H' :
                // fall through to hh
                case 'HH' :
                // fall through to hh
                case 'h' :
                // fall through to hh
                case 'hh' :
                    inArray[3] = ~~input;
                    break;
                // MINUTE
                case 'm' :
                // fall through to mm
                case 'mm' :
                    inArray[4] = ~~input;
                    break;
                // SECOND
                case 's' :
                // fall through to ss
                case 'ss' :
                    inArray[5] = ~~input;
                    break;
                // TIMEZONE
                case 'Z' :
                // fall through to ZZ
                case 'ZZ' :
                    isUsingUTC = true;
                    a = (input || '').match(timezoneParseRegex);
                    if (a && a[1]) {
                        timezoneHours = ~~a[1];
                    }
                    if (a && a[2]) {
                        timezoneMinutes = ~~a[2];
                    }
                    // reverse offsets
                    if (a && a[0] === '+') {
                        timezoneHours = -timezoneHours;
                        timezoneMinutes = -timezoneMinutes;
                    }
                    break;
            }
        }
        for (i = 0; i < len; i++) {
            addTime(formatParts[i], inputParts[i]);
        }
        // handle am pm
        if (isPm && inArray[3] < 12) {
            inArray[3] += 12;
        }
        // if is 12 am, change hours to 0
        if (isPm === false && inArray[3] === 12) {
            inArray[3] = 0;
        }
        // handle timezone
        inArray[3] += timezoneHours;
        inArray[4] += timezoneMinutes;
        // return
        return isUsingUTC ? new Date(Date.UTC.apply({}, inArray)) : dateFromArray(inArray);
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(string, formats) {
        var output,
            inputParts = string.match(inputCharacters),
            scores = [],
            scoreToBeat = 99,
            i,
            curDate,
            curScore;
        for (i = 0; i < formats.length; i++) {
            curDate = makeDateFromStringAndFormat(string, formats[i]);
            curScore = compareArrays(inputParts, formatMoment(new Moment(curDate), formats[i]).match(inputCharacters));
            if (curScore < scoreToBeat) {
                scoreToBeat = curScore;
                output = curDate;
            }
        }
        return output;
    }

    // date from iso format
    function makeDateFromString(string) {
        var format = 'YYYY-MM-DDT',
            i;
        if (isoRegex.exec(string)) {
            for (i = 0; i < 3; i++) {
                if (isoTimes[i][1].exec(string)) {
                    format += isoTimes[i][0];
                    break;
                }
            }
            return makeDateFromStringAndFormat(string, format + 'Z');
        }
        return new Date(string);
    }

    // helper function for _date.from() and _date.fromNow()
    function substituteTimeAgo(string, number, withoutSuffix) {
        var rt = moment.relativeTime[string];
        return (typeof rt === 'function') ?
            rt(number || 1, !!withoutSuffix, string) :
            rt.replace(/%d/i, number || 1);
    }

    function relativeTime(milliseconds, withoutSuffix) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        return substituteTimeAgo.apply({}, args);
    }

    moment = function (input, format) {
        if (input === null || input === '') {
            return null;
        }
        var date,
            matched;
        // parse Moment object
        if (input && input._d instanceof Date) {
            date = new Date(+input._d);
            // parse string and format
        } else if (format) {
            if (isArray(format)) {
                date = makeDateFromStringAndArray(input, format);
            } else {
                date = makeDateFromStringAndFormat(input, format);
            }
            // evaluate it as a JSON-encoded date
        } else {
            matched = jsonRegex.exec(input);
            date = input === undefined ? new Date() :
                matched ? new Date(+matched[1]) :
                        input instanceof Date ? input :
                    isArray(input) ? dateFromArray(input) :
                            typeof input === 'string' ? makeDateFromString(input) :
                        new Date(input);
        }
        return new Moment(date);
    };

    // creating with utc
    moment.utc = function (input, format) {
        if (isArray(input)) {
            return new Moment(new Date(Date.UTC.apply({}, input)), true);
        }
        return (format && input) ? moment(input + ' 0', format + ' Z').utc() : moment(input).utc();
    };

    // humanizeDuration
    moment.humanizeDuration = function (num, type, withSuffix) {
        var difference = +num,
            rel = moment.relativeTime,
            output;
        switch (type) {
            case "seconds" :
                difference *= 1000; // 1000
                break;
            case "minutes" :
                difference *= 60000; // 60 * 1000
                break;
            case "hours" :
                difference *= 3600000; // 60 * 60 * 1000
                break;
            case "days" :
                difference *= 86400000; // 24 * 60 * 60 * 1000
                break;
            case "weeks" :
                difference *= 604800000; // 7 * 24 * 60 * 60 * 1000
                break;
            case "months" :
                difference *= 2592000000; // 30 * 24 * 60 * 60 * 1000
                break;
            case "years" :
                difference *= 31536000000; // 365 * 24 * 60 * 60 * 1000
                break;
            default :
                withSuffix = !!type;
                break;
        }
        output = relativeTime(difference, !withSuffix);
        return withSuffix ? (difference <= 0 ? rel.past : rel.future).replace(/%s/i, output) : output;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // language switching and caching
    moment.lang = function (key, values) {
        var i,
            param,
            req,
            parse = [];
        if (values) {
            for (i = 0; i < 12; i++) {
                parse[i] = new RegExp('^' + values.months[i] + '|^' + values.monthsShort[i].replace('.', ''), 'i');
            }
            values.monthsParse = values.monthsParse || parse;
            languages[key] = values;
        }
        if (languages[key]) {
            for (i = 0; i < paramsToParse.length; i++) {
                param = paramsToParse[i];
                moment[param] = languages[key][param] || moment[param];
            }
        } else {
            if (hasModule) {
                req = require('./lang/' + key);
                moment.lang(key, req);
            }
        }
    };

    // set default language
    moment.lang('en', {
        months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        meridiem : {
            AM : 'AM',
            am : 'am',
            PM : 'PM',
            pm : 'pm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        ordinal : function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
        }
    });

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // shortcut for prototype
    moment.fn = Moment.prototype = {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d;
        },

        'native' : function () {
            return this._d;
        },

        toString : function () {
            return this._d.toString();
        },

        toDate : function () {
            return this._d;
        },

        utc : function () {
            this._isUTC = true;
            return this;
        },

        local : function () {
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            return formatMoment(this, inputString ? inputString : moment.defaultFormat);
        },

        add : function (input, val) {
            this._d = dateAddRemove(this._d, input, 1, val);
            return this;
        },

        subtract : function (input, val) {
            this._d = dateAddRemove(this._d, input, -1, val);
            return this;
        },

        diff : function (input, val, asFloat) {
            var inputMoment = moment(input),
                zoneDiff = (this.zone() - inputMoment.zone()) * 6e4,
                diff = this._d - inputMoment._d - zoneDiff,
                year = this.year() - inputMoment.year(),
                month = this.month() - inputMoment.month(),
                date = this.date() - inputMoment.date(),
                output;
            if (val === 'months') {
                output = year * 12 + month + date / 30;
            } else if (val === 'years') {
                output = year + month / 12;
            } else {
                output = val === 'seconds' ? diff / 1e3 : // 1000
                        val === 'minutes' ? diff / 6e4 : // 1000 * 60
                        val === 'hours' ? diff / 36e5 : // 1000 * 60 * 60
                        val === 'days' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                        val === 'weeks' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                    diff;
            }
            return asFloat ? output : round(output);
        },

        from : function (time, withoutSuffix) {
            return moment.humanizeDuration(this.diff(time), !withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().sod(), 'days', true),
                calendar = moment.calendar,
                allElse = calendar.sameElse,
                format = diff < -6 ? allElse :
                        diff < -1 ? calendar.lastWeek :
                        diff < 0 ? calendar.lastDay :
                        diff < 1 ? calendar.sameDay :
                        diff < 2 ? calendar.nextDay :
                        diff < 7 ? calendar.nextWeek : allElse;
            return this.format(typeof format === 'function' ? format.apply(this) : format);
        },

        isLeapYear : function () {
            var year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        isDST : function () {
            return (this.zone() < moment([this.year()]).zone() ||
                this.zone() < moment([this.year(), 5]).zone());
        },

        day : function (input) {
            var day = this._d.getDay();
            return input == null ? day :
                this.add({ d : input - day });
        },

        sod: function () {
            return this.clone()
                .hours(0)
                .minutes(0)
                .seconds(0)
                .milliseconds(0);
        },

        eod: function () {
            // end of day = start of day plus 1 day, minus 1 millisecond
            return this.sod().add({
                d : 1,
                ms : -1
            });
        },

        zone : function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset();
        },

        daysInMonth : function () {
            return this.clone().month(this.month() + 1).date(0).date();
        }
    };

    // helper for adding shortcuts
    function makeShortcut(name, key) {
        moment.fn[name] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < shortcuts.length; i ++) {
        makeShortcut(shortcuts[i].toLowerCase(), shortcuts[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeShortcut('year', 'FullYear');

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    if (typeof window !== 'undefined') {
        window.moment = moment;
    }
    /*global define:false */
    if (typeof define === "function" && define.amd) {
        define("moment", [], function () {
            return moment;
        });
    }

    //日期转换函数
    Date.prototype.format = function(format){
        var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(),    //day
            "h+" : this.getHours(),   //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
            "S" : this.getMilliseconds() //millisecond
        };
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
                    RegExp.$1.length==1 ? o[k] :
                    ("00"+ o[k]).substr((""+ o[k]).length));
        return format;
    };


    //yyyy-MM-dd
    Date.prototype.formatLongToDate = function() {
        var time = this;
        if("string"==typeof time) time = Number(time);
        time = new Date(time);
        return time.format("yyyy-MM-dd");
    };
    Date.prototype.formatToDate = function() {
        return this.format("yyyy-MM-dd");
    };

    //yyyy-MM-dd HH:mm
    Date.prototype.formatLongToMinute = function() {
        var time = this;
        if("string"==typeof time) time = Number(time);
        time = new Date(time);
        return time.format("yyyy-MM-dd HH:mm");
    };
    Date.prototype.formatToMinute = function() {
        return this.format("yyyy-MM-dd HH:mm");
    };

    //yyyy-MM-dd HH:mm:ss
    Date.prototype.formatLongToSecond = function() {
        var time = this;
        if("string"==typeof time) time = Number(time);
        time = new Date(time);
        return time.format("yyyy-MM-dd HH:mm:ss");
    };
    Date.prototype.formatToSecond = function() {
        return this.format("yyyy-MM-dd HH:mm:ss");
    };
})(Date);

(function(number) {
    number.prototype.toPercent = function(n){
        var n = n || 0;
        return (Math.round(this * Math.pow( 10, n + 2 ) ) / Math.pow(10, n)).toFixed(n) + '%';
    }
})(Number);
(function () {
    "use strict";
    angular.module("xn.filter.common", [])
        .filter("titleCase", function () {
            return function (input) {
                var words = input.split(" ");
                for (var i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
                return words.join(" ");
            };
        })
        .filter('pageOffset', function() {
            return function(input, start) {
                if(input){
                    start = parseInt(start, 10);
                    return input.slice(start);
                };
            }
        })
        .filter('substr', function() {
            return function(input,start) {

                String.prototype.lengthB = function( ){
                    var b = 0, l = this.length;
                    if( l ){
                        for( var i = 0; i < l; i ++ ){
                            if(this.charCodeAt( i ) > 255 ){
                                b += 2;
                            }else{
                                b ++ ;
                            }
                        }
                        return b;
                    }else{
                        return 0;
                    }
                };

                if(input){
                    var data="";
                    if(start){
                        if(input.lengthB()>start){
                            data =input.substr(0, start)+"...";
                        }else{
                            data =input.substr(0, start)
                        }
                    }else{
                        data=input;
                    }
                    return data;
                };
            }
        })
        .filter("isImg", [
            function (){
                return function (input) {
                    var filename=[];
                    var state=false;
                    var index=input.lastIndexOf(".");
                    filename=input.substring(index+1);
                    switch (filename)
                    {   case "gif":
                        case "bmp":
                        case "jpeg":
                        case "jpg":
                        case "png":
                            state=true;
                            break;
                    }

                    return state;
                };
            }
        ])

        .filter("money", function () {
            return function (input, retain, isState, sign) {
                /**
                 * retain  小数的位数
                 * isState  小数是否保留0，true为保留，falase为舍弃
                 * @type {boolean}
                 */
                if(!retain)
                    retain = 2;
                if(!isState)
                    isState = false;
                if(sign==undefined)
                    sign = "￥";
                if(input){
                    var number=Number(retain);
                    var moneyList =[];
                    moneyList =Number(input).toFixed(number).toString().split(".");
                    var money = moneyList[0].split("");
                    var frac = moneyList[1].split("");
                    frac.unshift(".");
                    //整数加“，”
                    var index=0;
                    if(money[0]==="-"){
                        for( var i=money.length;i>1;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }else{
                        for( var i=money.length;i>0;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }
                    //小数舍弃
                    if(!isState){
                        for(var i=frac.length ; i>3;i--){
                            if(frac[i-1]==0){
                                frac.pop();
                            }else{
                                break;
                            }
                        }
                    }
                    money=money.concat(frac);
                    money.splice(0,0,""+sign);
                    return money.join("");
                }else{
                    return sign+"0.00";
                }
            };
        })

        .filter("moneySingle", function () {
            return function (input,retain,isState) {
                /**
                 * retain  小数的位数
                 * isState  小数是否保留0，true为保留，false为舍弃
                 * @type {boolean}
                 */

                var state =false;
                if(isState){
                    state=true;
                }

                if(!isNaN(input)){
                    var number=2;
                    if(retain){
                        number=Number(retain);
                    }

                    var moneyList =[];
                    moneyList =Number(input).toFixed(number).toString().split(".");

                    var money = moneyList[0].split("");
                    var frac = moneyList[1].split("");
                    frac.unshift(".");


                    //整数加“，”
                    var index=0;
                    if(money[0]==="-"){
                        for( var i=money.length;i>1;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }else{
                        for( var i=money.length;i>0;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }

                    //小数舍弃

                    if(!state){
                        for(var i=frac.length ; i>3;i--){
                            if(frac[i-1]==0){
                                frac.pop();
                            }else{
                                break;
                            }
                        }
                    }else{}

                    money=money.concat(frac);
                    money.splice(0,0," ");
                    return money.join("");
                }else{
                    return "0.00";
                }
            };
        })
        .filter("moneyNoSymbol", function () {
            return function (input) {
                if(input){
                    var money = Number(input).toFixed(2).toString().split("");
                    var index=0;
                    if(money[0]==="-"){
                        for( var i=money.length-3;i>1;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }else{
                        for( var i=money.length-3;i>0;i--){
                            index++;
                            if(index%4===0){
                                money.splice(i,0,",");
                                index++;
                            }
                        }
                        index=0;
                    }
                    return money.join("");
                }else{
                    return "0.00";
                }
            };
        })
        .filter("moneyCharacter", [
            function () {
                return function (input) {
                    var money="";
                    switch (input)
                    {
                        case "0":
                            money="零";
                            break;
                        case "1":
                            money="壹";
                            break;
                        case "2":
                            money="贰";
                            break;
                        case "3":
                            money="叁";
                            break;
                        case "4":
                            money="肆";
                            break;
                        case "5":
                            money="伍";
                            break;
                        case "6":
                            money="陆";
                            break;
                        case "7":
                            money="柒";
                            break;
                        case "8":
                            money="捌";
                            break;
                        case "9":
                            money="玖";
                            break;
                        default :
                            money="";
                            break;

                    }
                    return money;
                };
            }
        ])
        .filter("website", function () {
            return function (input) {
                var website = input;
                if(website != null && website.length > 4){
                    if (input.substring(0, 4) != "http") {
                        website = ( "http://" + input);
                    }
                }
                return website;
            };
        })
        .filter("percent", function () {
            return function (input) {
                if(input){
                    var percent=Number(input*100).toFixed(2);
                    percent=percent+"%";
                    return percent;
                }else{
                    return  input;
                }

            };
        })
        .filter("intPercent", function () {
            return function (input) {
                if(input){
                    var percent=Number(input*100).toFixed(0);
                    percent=percent+"%";
                    return percent;
                }else{
                    return  input;
                }

            };
        })
        .filter("mobilePhone", function () {
            return function (input) {
                var phone = input;

                if (input && input.length === 11) {
                    phone = (input.substring(0, 3) + " " + input.substring(3, 7) + " " + input.substring(7, 11));
                }
                return phone;
            };
        })
        .filter("firstText", [
            function () {
                return function (input) {
                    return input ? input.substring(0, 1).toLocaleUpperCase() : "";
                };
            }
        ])
        .filter("dateFormat", [
            function () {
                return function (input) {
                    input=Number(input);
                    return input ?  moment(input).format("YYYY-MM-DD") : "";
                };
            }
        ])
        .filter("timeFullFormat", [
            function () {
                return function (input) {
                    input=Number(input);
                    return input ?  moment(input).format("YYYY-MM-DD HH:mm") : "";
                };
            }
        ])
        .filter("timeReturnFormat", [
            function () {
                return function (input) {

                    if(input){
                        if(input.indexOf(" ")==10){
                            var time ;
                            time =input.substr(0,10)+"\r\n"+input.substr(11,5);
                            return time ;
                        }else{
                            input=Number(input);
                            return input ?  moment(input).format("YYYY-MM-DD")+ "\r\n" + moment(input).format("HH:mm") : "";
                        }
                    }else{
                        return;
                    }

                };
            }
        ])
        .filter("timeFormat", [
            function () {
                return function (input) {
                    input=Number(input);
                    return input ?  moment(input).format("HH:mm") : "";
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
        .filter("sexIcon", [
            function () {
                return function (input) {
                    var icon="icon-user";
                    switch (input)
                    {
                        case "F":
                            icon="icon-female";
                            break;
                        case "M":
                            icon="icon-male";
                            break;
                        default :
                            break;

                    }
                    return icon;
                };
            }
        ])
        .filter("isActive", [
            function () {
                return function (input) {
                    var isActive="有效";
                    switch (input)
                    {
                        case false:
                            isActive="无效";
                            break;
                        case true:
                            isActive="有效";
                            break;
                        default :
                            break;

                    }
                    return isActive;
                };
            }
        ])
        .filter("yesNo", [
            function () {
                return function (input) {
                    var yesNo="";
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
        .filter("moneyType", [
            function () {
                return function (input) {
                    switch (input)
                    {
                        case "CNY":
                            input="人民币";
                            break;
                        case "HKD":
                            input="港币";
                            break;
                        case "USD":
                            input="美元";
                            break;
                    }
                    return input;
                };
            }
        ])
        .filter("xnSearch", [
            function () {
                return function (arr, key) {
                    if(!key) {
                        return arr;
                    } else {
                        var list = [];
                        for(var i=0; i<arr.length; i++) {
                            if(arr[i].name.indexOf(key)>=0)
                                list.push(arr[i]);
                        }
                        return list;
                    }
                };
            }
        ]);

})();

//验证
angular.module("xn.directive.common",["xn/template/common.html"]).provider('xnValidator', [function () {
    var defaultRules = {
            required: "该选项不能为空",
            maxlength: "该选项输入值长度不能大于{maxlength}",
            minlength: "该选项输入值长度不能小于{minlength}",
            email: "输入邮件的格式不正确",
            repeat: "两次输入不一致",
            pattern: "该选项输入格式不正确",
            number: "必须输入数字",
            xnuniquecheck: "该输入值已经存在，请重新输入"
        },
        elemTypes = ['text', 'password', 'email', 'number', ['textarea'], ['select'], ['select-one']];

    var validatorFn = function () {
        this.elemTypes = elemTypes;
        this.rules = [];
        this.isEmpty = function (object) {
            if (object === undefined || object === null) {
                return true;
            }
            if (object instanceof Array && object.length === 0) {
                return true;
            }
            return false;
        };
        this.defaultShowError = function (elem, errorMessages) {
            var $elem = angular.element(elem);
            var $group = $elem.parent().parent();
            if (!this.isEmpty($group) && !$group.hasClass("has-error")) {
                $group.addClass("has-error");
                $elem.after('<span class="xn-error">' + errorMessages[0] + '</span>');
            }
        };
        this.defaultRemoveError = function (elem) {
            var $elem = angular.element(elem);
            var $group = $elem.parent().parent();
            if (!this.isEmpty($group) && $group.hasClass("has-error")) {
                $group.removeClass("has-error");
                $elem.next(".xn-error").remove();
            }
        };
        this.options = {
            blurTrig: false
        }
    };

    validatorFn.prototype = {
        constructor: validatorFn,
        config: function (options) {
            this.options = angular.extend(this.options, options);
        },
        setRules: function (rules) {
            this.rules = rules;
        },
        getErrorMessage: function (validationName, elem) {
            var msgTpl = null;
            if (!this.isEmpty(this.rules[elem.name]) && !this.isEmpty(this.rules[elem.name][validationName])) {
                msgTpl = this.rules[elem.name][validationName];
            }
            switch (validationName) {
                case "maxlength":
                    if (msgTpl !== null) {
                        return msgTpl.replace("{maxlength}", elem.getAttribute("ng-maxlength"));
                    }
                    return defaultRules.maxlength.replace("{maxlength}", elem.getAttribute("ng-maxlength"));
                case "minlength":
                    if (msgTpl !== null) {
                        return msgTpl.replace("{minlength}", elem.getAttribute("ng-minlength"));
                    }
                    return defaultRules.minlength.replace("{minlength}", elem.getAttribute("ng-minlength"));
                default :
                {
                    if (msgTpl !== null) {
                        return msgTpl;
                    }
                    if (defaultRules[validationName] === null) {
                        throw new Error("该验证规则(" + validationName + ")默认错误信息没有设置！");
                    }
                    return defaultRules[validationName];
                }

            }
        },
        getErrorMessages: function (elem, errors) {
            var elementErrors = [];
            for (var err in errors) {
                if (errors[err]) {
                    var msg = this.getErrorMessage(err, elem);
                    elementErrors.push(msg);
                }
            }
            return elementErrors;
        },
        showError: function (elem, errorMessages, options) {
            var useOptions = angular.extend({}, this.options, options);
            if (useOptions.showError === false) {
                return;
            }
            angular.element(elem).removeClass("valid").addClass("error");
            if (angular.isFunction(useOptions.showError)) {
                return useOptions.showError(elem, errorMessages);
            }
            if (useOptions.showError === true) {
                return this.defaultShowError(elem, errorMessages);
            }
        },
        removeError: function (elem, options) {
            var useOptions = angular.extend({}, this.options, options);
            if (useOptions.removeError === false) {
                return;
            }
            angular.element(elem).removeClass("error").addClass("valid");
            if (angular.isFunction(useOptions.removeError)) {
                return useOptions.removeError(elem);
            }
            if (useOptions.removeError === true) {
                return this.defaultRemoveError(elem);
            }
        }
    };

    var validator = new validatorFn();

    this.config = function (options) {
        validator.config(options);
    };

    this.setRules = function (rules) {
        validator.setRules(rules);
    };

    this.$get = function () {
        return validator;
    };
}])
    //复选框list可控制排列方式
    .directive("xnCheckboxListLayout", function() {
        "use strict";
        return {
            restrict: "AC",
            templateUrl: "xn/template/checkboxListLayout.html",
            scope: {
                checkboxs:'=ngModel',
                checkboxList: "=",
                method: "&",
                layout: "@"  //控制排列方式   horizontal横排＼vertical坚排
            },
            require: "?ngModel",
            link: function (scope, elem, attrs, ngModel, fn) {
                var count = 0;
                scope.originalList = [];

                if (!ngModel) {
                    return;
                }

                if(!scope.layout) {
                    scope.layout = "horizontal"
                }

                scope.$watch("checkboxList", function(val) {
                    scope.originalList = [];
                    $.extend(scope.originalList, val);
                }, true);

                scope.$watch("originalList", function(val) {
                    var all = {value:"全部", key:"all", state:false};
                    scope.checkboxs = [];
                    count = 0;

                    for(var i= 0, len=val.length; i<len; i++) {

                        if(true!=val[i].hide) {
                            count++;
                        }

                        if(val[i].state && true!=val[i].hide) {
                            scope.checkboxs.push(val[i].key);
                        }

                    }

                    if(scope.checkboxs.length==count) {
                        all.state = true;
                    }

                    val.unshift(all);

                    ngModel.$setViewValue(scope.checkboxs);

                    if(scope.method) {
                        scope.method();
                    }
                });

                scope.change=function(checkbox){
                    checkbox.state = !checkbox.state;

                    if("all"==checkbox.key) {
                        scope.checkboxs = [];

                        if(checkbox.state) {

                            for(var i= 0,len=scope.originalList.length; i<len; i++) {

                                if(true!=scope.originalList[i].hide) {
                                    scope.originalList[i].state = true;
                                }

                                if("all"!=scope.originalList[i].key && true!=scope.originalList[i].hide) {
                                    scope.checkboxs.push(scope.originalList[i].key);
                                }

                            }

                        } else {

                            for(var i= 0,len=scope.originalList.length; i<len; i++) {

                                if(true!=scope.originalList[i].hide) {
                                    scope.originalList[i].state = false;
                                }

                            }

                        }

                    } else {

                        if(!checkbox.state) {

                            for(var i= 0,len=scope.originalList.length; i<len; i++) {

                                if(checkbox.key==scope.checkboxs[i]) {
                                    scope.checkboxs.splice(i, 1);
                                }

                            }

                        } else {
                            scope.checkboxs.push(checkbox.key);
                        }

                    }

                };
            }
        }
    })
    //复选框list
    .directive("xnCheckboxList",["$parse", function($parse) {
        "use strict";
        return {
            restrict: "AC",
            templateUrl: "xn/template/common/checkboxList.html",
            scope: {
                checkboxs:'=ngModel',
                checkboxList: "=",
                method: "&"
            },
            require: "?ngModel",
            link: function (scope, elem, attrs, ngModel) {
                var checkbox = scope.checkboxs={listKey:[],list:[]};

                if (!ngModel) {
                    return;
                }

                scope.$watch(function(){
                    return scope.checkboxList;
                }, function(newval) {
                    scope.checkboxs={
                        listKey:[],
                        list:[]
                    };
                    for(var i=0; i<newval.length;i++){
                        if(newval[i].state){
                            scope.checkboxs.listKey.push(newval[i].key);
                            scope.checkboxs.list.push(newval[i]);
                        }
                    }
                    ngModel.$setViewValue(scope.checkboxs);
                    if(scope.method) {
                        scope.method();
                    }
                },true);
            }
        };
    }])

    //单选框list可控制排列方式
    .directive("xnRadioList", function() {
        "use strict";
        return {
            restrict: "AC",
            templateUrl: "xn/template/common/radioList.html",
            scope: {
                radioChoosed: "=ngModel",
                radioList: "=",
                layout: "@"  //控制排列方式   horizontal横排＼vertical坚排
            },
            require: "?ngModel",
            link: function (scope, elem, attrs, ngModel, fn) {
                scope.originalList = [];

                if (!ngModel) {
                    return;
                }

                if(!scope.layout) {
                    scope.layout = "horizontal"
                }

                scope.$watch("radioList", function(val) {
                    scope.originalList = [];
                    $.extend(scope.originalList, val);
                }, true);

                scope.$watch("originalList", function(val) {
                    scope.radioChoosed = "";

                    for(var i= 0, len=val.length; i<len; i++) {
                        if(val[i].state ) {
                            scope.radioChoosed = val[i].key;
                        }
                    }
                    ngModel.$setViewValue(scope.radioChoosed);
                });

                scope.change=function(radio){
                    radio.state = true;
                    scope.radioChoosed = radio.key;
                    for(var i= 0, len=scope.originalList.length; i<len; i++){
                        if(scope.originalList[i].key!=radio.key){
                            scope.originalList[i].state = false;
                        }
                    }

                };
            }
        }
    })
    //禁用
    .directive("xnDisabled", ["XN_BEGIN_REQUEST", "XN_END_REQUEST", function (XN_BEGIN_REQUEST, XN_END_REQUEST) {
        'use strict';
        return {
            restrict: "A",
            link: function (scope, element) {
                scope.$on(XN_BEGIN_REQUEST, function () {
                    // got the request start notification, show the element  console.log("接收到了 XN_BEGIN_REQUEST")
                    element.attr({disabled:"disabled"});
                    element.addClass("disabled");
                });
                scope.$on(XN_END_REQUEST, function () {
                    // got the request end notification, hide the element
                    element.attr({disabled:"true"});
                    element.removeClass("disabled");
                    element.removeAttr("disabled");
                });
            }
        };
    }])
    //遍历
    .directive("xnRepeat", [function () {
        'use strict';
        return {
            restrict: "AE",
            require: "ngModel",
            link: function (scope, elem, attrs, ctrl) {
                var otherInput = elem.inheritedData("$formController")[attrs.xnRepeat];

                ctrl.$parsers.push(function (value) {
                    if (value === otherInput.$viewValue) {
                        ctrl.$setValidity("repeat", true);
                        return value;
                    }
                    ctrl.$setValidity("repeat", false);
                });
                otherInput.$parsers.push(function (value) {
                    ctrl.$setValidity("repeat", value === ctrl.$viewValue);
                    return value;
                });
            }
        };
    }])
    //将复选框变单选
    .directive("xnUniqueCheck", ['$timeout', '$http', function ($timeout, $http) {
        return{
            require: "ngModel",
            link: function (scope, elem, attrs, ngModel) {
                var doValidate = function () {
                    var attValues = scope.$eval(attrs.xnUniqueCheck);
                    var url = attValues.url;
                    var isExists = attValues.isExists;//default is true
                    $http.get(url).success(function (result) {
                        if (isExists === false) {
                            ngModel.$setValidity('xnuniquecheck', result.data);
                        }
                        else {
                            ngModel.$setValidity('xnuniquecheck', !result.data);
                        }
                    });
                };

                scope.$watch(attrs.ngModel, function (newValue) {
                    if (_.isEmpty(newValue)) {
                    } else if (!scope[elem[0].form.name][elem[0].name].$dirty) {
                        doValidate();
                    }
                });

                elem.bind("blur", function () {
                    $timeout(function () {
                        if (scope[elem[0].form.name][elem[0].name].$invalid) {
                            return;
                        }
                        doValidate();

                    });
                });
                elem.bind("focus", function () {
                    $timeout(function () {
                        ngModel.$setValidity('xnuniquecheck', true);
                    });
                });
            }
        };
    }])
    .directive('xnHasPermission', ["permissionService", function(permissionService) {
        return {
            link: function (scope, element, attrs) {
                if (!_.isString(attrs.xnHasPermission))
                    throw "hasPermission value must be a string";

                var value = attrs.xnHasPermission.trim();
                //！是非操作，标识没有该权限项
                var notPermissionFlag = value[0] === '!';
                if (notPermissionFlag) {
                    value = value.slice(1).trim();
                }

                function toggleVisibilityBasedOnPermission() {
                    var hasPermission = permissionService.hasPermission(value);

                    if (hasPermission && !notPermissionFlag || !hasPermission && notPermissionFlag)
                        element.show();
                    else
                        element.hide();
                }

                toggleVisibilityBasedOnPermission();
                scope.$on('permissionsChanged', toggleVisibilityBasedOnPermission);
            }
        };
    }])
    //默认图片
    .directive('xnImg', [function () {
        return {
            restrict: "AE",
            link: function (scope, element) {
                element.bind("error",function(){
                    element.attr({src: "/home/images/logo.jpg"});
                });
            }
        };
    }])
    //必输
    .directive('xnRequired', [function () {
        return {
            restrict: "AEC",
            link: function (scope,element) {
                if( element.attr("placeholder")==undefined){
                    element.attr("placeholder","(必填)");
                }else{
                    element.attr("placeholder",element.attr("placeholder")+"(必填)");
                };
            }
        };
    }])
    //获取焦点
    .directive('xnHasFocus', function() {
        return{
            link:function(scope, element, attrs) {
                scope.$watch(attrs.xnHasFocus, function (nVal, oVal) {
                    if(oVal){
                        element[0].focus();
                    }
                });
                element.bind('blur', function() {
                    scope.$apply(attrs.xnHasFocus + " = false");
                });
                element.bind('keydown', function (e) {
                    if (e.which == 13){
                        scope.$apply(attrs.xnHasFocus + " = false");
                    }
                });
            }
        };
    })
    //发票类的表单，点击触发显示编辑框
    .directive('xnClickEdit', function(){
        return {
            require: "?ngModel",
            restrict: 'AE',
            link: function(scope, iElm, attrs){
                iElm.bind("click", function(){
                    iElm.addClass("xn-click-edit-hover");
                    iElm.find(".xn-click-input").show();
                    iElm.find(".xn-click-input").focus();
                    iElm.find(".xn-click-input").select();
                });
                if(!attrs.id){
                    iElm.find(".xn-click-input").bind("blur",function(){
                        iElm.removeClass("xn-click-edit-hover");
                        iElm.find(".xn-click-input").hide();
                    });
                }else{
                    scope.getClickPoint = function(tar) {
                        if(tar.id==attrs.id){
                            scope.count++;
                        }
                        if(tar.parentElement){
                            scope.getClickPoint(tar.parentElement);
                        }
                    };
                    angular.element(document).bind("click", function(e) {
                        scope.count = 0;
                        scope.getClickPoint(e.target);
                        if(scope.count == 0) {
                            scope.$apply(function(){
                                iElm.removeClass("xn-click-edit-hover");
                                iElm.find(".xn-click-input").hide();
                            });
                        }
                    });
                }

            }
        };
    })
    .directive('input', function(){
        return {
            require: "?ngModel",
            restrict: 'E',
            link: function(scope, iElm, attr){
                scope.elmIsFocus = false;
                if(iElm[0].type === "text" && attr.isClickSelect != "false") {
                    iElm.bind("click", function(){
                        if(!scope.elmIsFocus){
                            this.select();
                            scope.elmIsFocus = true;
                        }
                    });
                    iElm.bind("blur", function(){
                        scope.elmIsFocus = false;
                    });
                }
            }
        };
    })
    .directive('textarea', function(){
        return {
            require: "?ngModel",
            restrict: 'E',
            link: function(scope, iElm, attr){
                scope.elmIsFocus = false;
                if(iElm[0].type === "textarea" && attr.isClickSelect != "false") {
                    iElm.bind("click", function(){
                        if(!scope.elmIsFocus){
                            this.select();
                            scope.elmIsFocus = true;
                        }
                    });
                    iElm.bind("blur", function(){
                        scope.elmIsFocus = false;
                    });
                }
            }
        };
    })
    .directive('xnFixTop', [function () {
        return {
            restrict: "C",
            scope: {
                yOffset: "@",
                yShifting: "@"
            },
            link: function (scope, elm) {
                if(!scope.yShifting)
                    scope.yShifting = 0;
                if(!scope.yOffset)
                    scope.yOffset = 0;
                var startPos = $(elm).offset().top;
                var width = $(elm).css("width");
                $.event.add(window, "scroll", function() {
                    var p = $(window).scrollTop();
                    $(elm).css('position',((p + Number(scope.yShifting)) > startPos) ? 'fixed' : 'relative');
                    $(elm).css('top',((p + Number(scope.yShifting)) > startPos) ? scope.yOffset : '');
                    $(elm).css('width', width);
                });
            }
        };
    }])
    //  返回顶部与在线留言 todo  1滚动不是逐渐上去，2，没有隐藏
    .directive('xnBackToTop', ["$location","$anchorScroll",function ($location,$anchorScroll) {
        return {
            template:
                "<ul>\n" +
                "<li class='backToTop'>\n"+
                "<a  ng-click='backToTop(header,0)'>\n"+
                "<span class='gotop-icon icon  icon-up-1'></span>"+
                "<span class='gotop-font'>返回<br>顶部</span>"+
                "</a>\n"+
                "</li>\n" +
                "<li>\n"+
                "<a ng-href='{{url}}' target='_blank'>\n"+
                "<span class='gotop-icon icon icon-idea'></span>"+
                "<span class='gotop-font'>反馈<br>建议</span>"+
                "</a>\n"+
                "</li>\n" +
                "</ul>",
            restrict: "C",
            link: function (scope, elem, attrs, ngModel) {
                attrs.$observe("feedbackUrl", function (value){
                    if(value){
                        scope.url= value;
                    }else{
                        return
                    }
                });
                scope.backToTop = function(id){
                    $location.hash(id);
                    $anchorScroll();
                };
            }
        };
    }])
    .directive("xnPositiveNumber", function() {
        return {
            restrict: "A",
            require: "^ngModel",
            scope:{
                data: "=ngModel"
            },
            link: function(scope, elements, attres) {
                if(!scope.data)
                    scope.data = 0;
                if(scope.data<0)
                    scope.data = -scope.data;
                scope.$watch("data", function(val) {
                    if(scope.data<0)
                        scope.data = -scope.data;
                });
            }
        };
    })
    .directive('xnTagInput', [function () {
        return {
            restrict: "AE",
            scope: {
                data: "=ngModel",
                name: "@"
            },
            require: 'ngModel',
            priority: 1,
            link: function($scope, element, attrs, ngModel) {
                if(!ngModel) return;

                var str = $scope.data;

                if(!str) str= "";

                var strList = [];

                if(str.length>0) strList = JSON.parse(str);

                var count = 0;

                $scope.$watch("data", function(newVal, oldVal) {
                    if(newVal) strList = JSON.parse(newVal);
                    $scope.init();
                });

                $scope.bindDelete = function(id) {
                    angular.element("#"+id).on("click", function(e) {
                        angular.element("#li"+angular.element(this).attr('id')).remove();
                        strList = JSON.parse($scope.data);
                        strList.splice(Number(angular.element(this).attr('id')), 1);
                        str = JSON.stringify(strList);
                        ngModel.$setViewValue(str);
                    });
                };

                $scope.init = function() {
                    count = 0;
                    angular.element("#xnInput_out_div01").remove();
                    var xnInputDiv = "<div class='xnInput_out_div' id='xnInput_out_div01'><ul id='inner_ul' class='xnInput_ul'>";
                    xnInputDiv += "<li id='last_li'><input type='text' name='"+$scope.name+"' id='xnInput_input01' class='xnInput_input'/></li></ul></div>";
                    angular.element(element).before(xnInputDiv);
                    for(var i=0; i<strList.length; i++) {
                        angular.element("#last_li").before("<li id='li"+(count>=10?count:'0'+count)+"' class='con_li'><div>"+strList[i]+"</div><a href='javascript:void(0);' class='li_a' id='"+(count>=10?count:'0'+count)+"'><i class='icon icon-delete'></i></a></li>");
                        $scope.bindDelete(count>=10?count:'0'+count);
                        count ++;
                    }
                    angular.element("#xnInput_input01").on("focus", function(e) {
                        angular.element("#xnInput_out_div01").addClass("input_outline");
                    });
                    angular.element("#xnInput_input01").on("blur", function(e) {
                        angular.element("#xnInput_out_div01").removeClass("input_outline");
                    });
                    angular.element("#xnInput_out_div01").on("click", function(e) {
                        angular.element("#xnInput_input01").focus();
                    });
                    angular.element("#xnInput_input01").on("keydown", function(e) {
                        if(e.keyCode==13 && angular.element(this).val()) {
                            var val = angular.element(this).val();
                            var num = 0;
                            for(var i=0; i<strList.length; i++) {
                                if(strList[i]==val) num ++;
                            }
                            if(num==0) strList.push(val);
                            str = JSON.stringify(strList);
                            angular.element(this).val("");
                            ngModel.$setViewValue(str);
                            $scope.$apply();
                        }
                    });
                };

                ngModel.$parsers.push(function (value) {
                    var div = angular.element(element).prev();
                    angular.element(div)
                        .toggleClass('ng-invalid', !ngModel.$valid)
                        .toggleClass('ng-valid', ngModel.$valid)
                        .toggleClass('ng-invalid-required', !ngModel.$valid)
                        .toggleClass('ng-valid-required', ngModel.$valid)
                        .toggleClass('ng-dirty', ngModel.$dirty)
                        .toggleClass('ng-pristine', ngModel.$pristine);
                    return value;
                });
            }
        };
    }])
    .directive("logo", [function() {
        return {
            restrict: "AE",
            scope: {
                forwardUrl: "@",
                applicationCode: "@",
                logoClass: "@",
                appList: "=",
                iconBaseUrl: "@",
                allApplicationUrl: "@"
            },
            templateUrl: "logo/tpl.html"
        }
    }])
    .directive("quickSearchBox", [function() {
        var link = function($scope, element, attrs, ngModel) {
            if(!ngModel) {
                return;
            }
            $scope.data="";

            if(!$scope.ngRequired) {
                $scope.ngRequired = false;
            }

            $scope.globalSearch = function(e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.boxWrapClass = "box_wrap_animation";
                angular.element("#search_box").focus();
            };

            angular.element(document).on("click", function(e) {
                $scope.$apply(function() {
                    $scope.boxWrapClass = "";
                    $scope.data="";
                });
            });

            $scope.search = function(e) {
                if(e.keyCode==13) {
                    $scope.doSearch();
                }
            };
        };
        return {
            restrict: "AEC",
            scope: {
                name: "@",
                ngRequired: "@",
                doSearch: "&",
                data: "=ngModel"
            },
            require: "ngModel",
            replace: true,
            template: "<div class='box_wrap' id='box_wrap' ng-click='globalSearch($event)' ng-class='boxWrapClass'>"+
                "<input ng-model='data' ng-keydown='search($event)' class='search_box' type='text' id=\"search_box\" ng-blur=\"changeStyle()\" placeholder=\"搜索\" name='{{name}}' ng-required='{{ngRequired}}'/>"+
                "<i class='icon icon-chaxun01' id='icon-chaxun01' ng-click='doSearch()'></i>"+
                "</div>",
            link: link
        };
    }])
    .value("xnConfig", [])
    .directive("personalCenter", ["xnConfig", function(xnConfig) {
        var config = [];
        if(xnConfig) config = angular.extend(config, xnConfig);
        return {
            restrict: "AE",
            scope: {
                avatarUrl: "@",
                messageList: "=",
                messageDetail: "&",
                moreMessage: "&",
                homeUrl: "@",
                taskList: "=",
                moreTask: "&",
                taskDetail: "&",
                messageCount: "@",
                taskCount: "@"
            },
            link: function($scope, element, ngModel) {
                if(config) {
                    $scope.xnConfig = config
                }

                if(!$scope.messageCount) {
                    $scope.messageCount = 0;
                }

                if(!$scope.taskCount) {
                    $scope.taskCount = 0;
                }
            },
            templateUrl: "personalCenter/tpl.html"
        };
    }])
    .directive("xnMessageSlide", function() {
        var link = function($scope, element, attrs, ngModel, fn) {
            $scope.messageCode = "";
            $scope.messageContent = "";

            $scope.$watch("errors", function(newVal, oldVal){
                if(newVal && newVal.length>0) {
                    var error = newVal[0];
                    if(error.code.indexOf("_")>0)
                        error.code = error.code.split("_")[1];
                    $scope.messageCode = error.code.toLocaleLowerCase();
                    $scope.messageContent = error.message;
                    $scope.errors = [];
                    setTimeout(function() {
                        if($scope.messageCode=="success") location.href= $scope.forwardUrl;
                        $scope.$apply(function(){
                            $scope.messageCode = "";
                        });
                    }, $scope.howLong);
                }
            }, true);
        };
        return {
            restrict: "AE",
            scope: {
                errors: "=",
                howLong: "=",
                forwardUrl: "="
            },
            link: link,
            replace: true,
            template: "<div id='xnMessage' class='xnMessage xnMessage_{{messageCode}}'><div class='content'><h5 class='title'>提示信息：</h5>{{messageContent}}</div></div>"
        };
    })
    .directive("xnMakesure", function() {
        var link = function($scope, element, attrs, ngModel, fn) {

            if(!$scope.content) {
                $scope.content = "";
            }

            $scope.page = document.getElementsByTagName("body")[0];

            angular.element(element).on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                var point = getMousePoint(e);
                var deleteDialog = document.getElementById("delete_dialog");

                if(deleteDialog) {
                    var parent = deleteDialog.parentNode;
                    parent.removeChild(deleteDialog);
                }
                deleteDialog = document.createElement("div");
                deleteDialog.setAttribute("id", "delete_dialog");
                deleteDialog.setAttribute("class", "delete_dialog_wrap");
                deleteDialog.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                };

                var titleUl = document.createElement("ul");
                titleUl.setAttribute("class", "dialog_title");
                var titleLiLeft = document.createElement("li");
                if($scope.title) {
                    var title = document.createElement("h4");
                    var titleText = document.createTextNode($scope.title);
                    title.appendChild(titleText);
                    titleLiLeft.appendChild(title);
                }
                var titleLiRight = document.createElement("li");
                titleLiRight.setAttribute("class", "icon icon-close");
                titleLiRight.onclick = function() {
                    deleteDialog.style.visibility = "hidden";
                };
                titleUl.appendChild(titleLiLeft);
                titleUl.appendChild(titleLiRight);

                var contentTable = document.createElement("div");
                contentTable.setAttribute("class", "content_table");

                var contentDiv = document.createElement("div");
                contentDiv.setAttribute("class", "delete_dialog_content");
                if($scope.content) {
                    var content = document.createTextNode($scope.content);
                    contentDiv.appendChild(content);
                }

                contentTable.appendChild(contentDiv);

                var btnUl = document.createElement("ul");
                btnUl.setAttribute("class", "btn_wrap");

                var btnLiLeft = document.createElement("li");
                var btnLiRight = document.createElement("li");

                var sure = document.createElement("button");
                var sureText = document.createTextNode("确定");
                sure.onclick = function() {
                    if($scope.method) {
                        $scope.$apply(function() {
                            $scope.method();
                        });
                    }
                    deleteDialog.style.visibility = "hidden";
                };
                sure.setAttribute("class", "btn-danger btn");
                sure.appendChild(sureText);
                btnLiLeft.appendChild(sure);

                var abolish = document.createElement("button");
                var abolishText = document.createTextNode("取消");
                abolish.onclick = function() {
                    deleteDialog.style.visibility = "hidden";
                };
                abolish.setAttribute("class", "btn-default btn");
                abolish.appendChild(abolishText);
                btnLiRight.appendChild(abolish);

                btnUl.appendChild(btnLiLeft);
                btnUl.appendChild(btnLiRight);

                deleteDialog.appendChild(titleUl);
                deleteDialog.appendChild(contentTable);
                deleteDialog.appendChild(btnUl);
                $scope.page.appendChild(deleteDialog);
                deleteDialog.style.top =  point.y-135+"px";
                deleteDialog.style.left =  point.x-75+"px";
            });

            angular.element(document).on("click", function(e) {
                var deleteDialog = document.getElementById("delete_dialog");

                if(deleteDialog) {
                    var parent = deleteDialog.parentNode;
                    parent.removeChild(deleteDialog);
                }
            });
        };
        return {
            restrict: "AE",
            scope: {
                content: "@",
                method: "&",
                title: "@"
            },
            link: link
        };
    })
    .directive("xnArrow", function() {
        var link = function($scope, element, attrs, ngModel, fn) {
            var time = new Date().getTime();
            $scope.id = "canvas_" + time;

            angular.element("#"+$scope.id).ready(function() {
                var canvas = document.getElementById($scope.id);

                var context = canvas.getContext("2d");

                if(!$scope.color) {
                    $scope.color = "#cdcdcd";
                }

                var init = function(co, state) {
                    var color = "#fff";

                    if(co) {
                        color = co;
                    }

                    clean();

                    if(!state) {
                        context.beginPath();
                        context.moveTo(0, 9);
                        context.lineTo(10, 17);
                        context.lineTo(20, 9);
                        context.lineTo(0, 9);
                        context.fillStyle="#ececec";
                        context.fill();
                        context.closePath();

                        context.beginPath();
                        context.moveTo(2, 5);
                        context.lineTo(10, 11);
                        context.lineTo(18, 5);
                        context.strokeStyle=color;
                        context.lineWidth = 2;
                        context.stroke();
                        context.closePath();
                    } else {
                        context.beginPath();
                        context.moveTo(2, 8);
                        context.lineTo(10, 2);
                        context.lineTo(18, 8);
                        context.strokeStyle=color;
                        context.lineWidth = 2;
                        context.stroke();
                        context.closePath();
                    }
                };

                function clean(){
                    context.clearRect(0, 0, 20, 20);
                }

                if(canvas.attachEvent) {
                    canvas.attachEvent("onmouseover", function() {
                        init($scope.color, $scope.state)
                    });
                    canvas.attachEvent("onmouseout", function() {
                        init(null, $scope.state)
                    });
                    canvas.attachEvent("onclick", function() {
                        $scope.state = !$scope.state;
                        init(null, $scope.state);
                    });
                } else {
                    canvas.addEventListener("mouseover", function() {
                        init($scope.color, $scope.state)
                    }, false);
                    canvas.addEventListener("mouseout", function() {
                        init(null, $scope.state)
                    }, false);
                    canvas.addEventListener("click", function() {
                        $scope.state = !$scope.state;
                        init(null, $scope.state);
                    });
                }

                init(null, null);

            });
        };

        return {
            restrict: "AE",
            scope: {
                state: "=",
                color: "@"
            },
            link: link,
            template: "<canvas id='{{id}}' class='arrow-box' width='20' height='20'></canvas>"
        };
    });

angular.module("xn/template/common.html",[]).run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/checkboxListLayout.html",
        "<ul class='xn-checkboxList-wrap' ng-class='\"vertical\"==layout?\"xn-checkboxList-wrap-1\":\"xn-checkboxList-wrap-2\"'>"+
            "<li ng-repeat='checkbox in originalList' ng-hide='checkbox.hide'>"+
                "<label class='xn-label-checkboxLayout' ng-click='change(checkbox)'>"+
                    "<span class='icon icon-check-box'>" +
                    "<i class='icon icon-right_3' ng-if='checkbox.state'></i>" +
                    "</span>"+
                    "<span class='xn-checkboxList-value'>{{checkbox.value}}</span>"+
                "</label>"+
            "</li>"+
        "</ul>"
    );
    $templateCache.put("xn/template/common/checkboxList.html",
            "<div class='checkboxList-outer'>"+
            "	<label class=\"mr_15 xn-label-checkbox\" ng-hide='checkbox.hide' ng-repeat=\"checkbox in checkboxList\">"+
            "  		<i class=\"xn-checkbox\"></i>"+
            "  		<i class=\"icon icon-right_3\" ng-if=\"checkbox.state\"></i>"+
            "   	<input type=\"checkbox\" class=\"xn-checkbox-input\" id=\"{{checkbox.key}}{{$index}}\" name=\"{{checkbox.key}}{{$index}}\"  " +
            "       ng-model=\"checkbox.state\">{{checkbox.value}}"+
            "	</label>"+
            "</div>"
    );
    $templateCache.put("xn/template/common/radioList.html",
        "<ul class='xn-radioList-wrap' ng-class='\"vertical\"==layout?\"xn-radioList-wrap-1\":\"xn-radioList-wrap-2\"'>"+
            "<li ng-repeat='radio in originalList'>"+
                "<label class='xn-label-radio' ng-click='change(radio)'>" +
                    "<span ng-class='radio.state?\"radio-btn-choosed\":\"radio-btn\"'></span>" +
                    "<span class='xn-radioList-value'>{{radio.value}}</span>"+
                "</label>"+
                "<span class='xn-radioList-remark' ng-if='radio.remark'>{{radio.remark}}</span>"+
            "</li>"+
        "</ul>"
    );

    $templateCache.put("logo/tpl.html",
            "<div class=\"logo_box_wrap clearfix\" ng-init=\"appDivShow=false\">"+
            "<a class=\"logo_forward\" href=\"{{forwardUrl}}\">"+
            "<div ng-mouseover=\"appDivShow=true\" ng-mouseleave=\"appDivShow=false\" class=\"{{logoClass}} logo_title xn-{{applicationCode}}\" ng-init=\"appCode='{{applicationCode}}'\">"+
            "</div>"+
            "</a>"+
            "<div ng-show=\"appDivShow\" class=\"app_widget\" ng-mouseenter=\"appDivShow=true\" ng-mouseleave=\"appDivShow=false\">"+
            "<div class=\"arrow_div\"></div>"+
            "<div class=\"widget_inner\">"+
            "<ul class=\"app_ul\">"+
            "<li class=\"app_li\" ng-repeat='app in appList'><a href=\"{{app.url}}\"><div class=\"img_div\"><img width='64' height='64' ng-src='{{iconBaseUrl}}icon/application/{{app.applicationId}}.png@64w_64h_90q.jpg'/></div><div class=\"label_div\">{{app.applicationName}}</div></a></li>"+
            "<li class=\"app_li\"><a href='{{allApplicationUrl}}'><div class=\"img_div\"><div class=\"more_app\">更多应用</div></div></a></li>"+
            "</ul>"+
            "</div>"+
            "</div>"+
            "</div>"
    );

    $templateCache.put("personalCenter/tpl.html",
            "<div ng-init=\"show=false;taskDivShow=false;showSetting=false\" class='center_box_wrap'>"+
            "<div class=\"xn-email icon icon-tips\" ng-click=\"moreMessage()\" ng-mouseover=\"show=true\" ng-mouseleave=\"show=false\">"+
            "<a ng-if=\"messageCount>0\" class=\"badge\">{{messageCount}}</a>"+
            "</div>"+
            "<div class=\"xn-message\" ng-show=\"show\" ng-mouseover=\"show=true\" ng-mouseleave=\"show=false\">"+
            "<div class=\"xn-hideMessage-top\"></div>"+
            "<div class=\"modal-content xn-hideMessage showMessage\">"+
            "<div class=\"xn-header-message\">"+
            "<ul class=\"content-line\">"+
            "<li ng-repeat=\"message in messageList\">"+
            "<a href=\"javascript:void(0)\" ng-click=\"messageDetail(message.id)\">"+
            "<span class=\"xn-view\">{{message.messageTitle}}</span>"+
            "</a>"+
            "</li>"+
            "</ul>"+
            "<br/>"+
            "</div>"+
            "<div class=\"xn-header-message-more\">"+
            "<a href='javascript:void(0)' ng-click=\"moreMessage()\">"+
            "<span>查看所有的消息</span>"+
            "</a>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<div class=\"xn-task icon icon-mission\" ng-mouseover=\"taskDivShow=true\" ng-mouseout=\"taskDivShow=false\">"+
            "<a class=\"badge\" ng-if='taskCount>0'>{{taskCount}}</a>"+
            "</div>"+
            "<div class=\"task_list_div\" ng-show=\"taskDivShow\" ng-mouseover=\"taskDivShow=true\" ng-mouseout=\"taskDivShow=false\">"+
            "<div class=\"arrow\"></div>"+
            "<div class=\"mission_div\">"+
            "<div class=\"mission_inner_div\">"+
            "<ul>"+
            "<li ng-repeat=\"task in taskList\">"+
            "<a href=\"javascript:void(0)\">"+
            "<div class=\"li_div\">"+
            "<div class=\"avatar_div\">"+
            "<img class=\"avatar f-left\" ng-src=\"{{task.owner.avatar}}\">"+
            "</div>"+
            "<div class=\"mission_body\">"+
            "<div>{{task.owner.name}}</div>"+
            "<div>{{task.title}}</div>"+
            "</div>"+
            "</div>"+
            "</a>"+
            "</li>"+
            "</ul>"+
            "</div>"+
            "<div class=\"more_div\">"+
            "<a href=\"javascript:void(0)\">查看更多动态</a>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<div ng-mouseover=\"showSetting=true\" ng-mouseleave=\"showSetting=false\" class=\"avatar_div\">"+
            "<img class=\"avatar f-right\" ng-src=\"{{avatarUrl}}@40w_40h_90q\">"+
            "</div>"+
            "<div class=\"hideSetting showSetting setting_div\" ng-show=\"showSetting\" ng-mouseover=\"showSetting=true\" ng-mouseleave=\"showSetting=false\">"+
            "<div class=\"hideSetting-top\"></div>"+
            "<div class=\"hideSetting-content clearfix\">"+
            "<ul>"+
            "<li>"+
            "<a title=\"关于本系统\" href=\"{{homeUrl}}\" target=\"_blank\">"+
            "<i class=\"icon icon-system\"></i>关于本系统"+
            "</a>"+
            "</li>"+
            "<li class=\"bb\">"+
            "<a title=\"应用商店\" class=\"disabled\">"+
            "<i class=\"icon icon-store\"></i>应用商店"+
            "</a>"+
            "</li>"+
            "<li>"+
            "<a title=\"系统偏好设置\" class=\"disabled\">"+
            "<i class=\"icon icon-system_individuation\"></i>系统偏好设置"+
            "</a>"+
            "</li>"+
            "<li>"+
            "<a title=\"承租人信息\" href=\"{{xnConfig.myUrl}}tenant\">"+
            "<i class=\"icon icon-renter\"></i>承租人信息"+
            "</a>"+
            "</li>"+
            "<li>"+
            "<a title=\"修改密码\" href=\"{{xnConfig.authUrl}}change.htm\">"+
            "<i class=\"icon icon-tubiaoxiugaimima01\"></i>修改密码"+
            "</a>"+
            "</li>"+
            "<li class=\"bb\">"+
            "<a title=\"个人信息\" href=\"{{xnConfig.myUrl}}profileView\">"+
            "<i class=\"icon icon-personal_information\"></i>个人信息"+
            "</a>"+
            "</li>"+
            "<li>"+
            "<a title=\"最近使用的功能\" class=\"disabled\">"+
            "<i class=\"icon icon-Recently\"></i>最近使用的功能"+
            "</a>"+
            "</li>"+
            "<li class=\"bb\">"+
            "<a title=\"历史记录\" class=\"disabled\">"+
            "<i class=\"icon icon-history\"></i>历史记录"+
            "</a>"+
            "</li>"+
            "</ul>"+
            "<a class=\"btn f-right exit btn-danger\" href=\"{{xnConfig.authUrl}}logout.htm\">注销</a>"+
            "</div>"+
            "</div>"+
            "</div>"
    );
}]);
/**
 * Created by Administrator on 2015/2/27.
 */
angular.module("xn.directive.form",[])
    //表单验证
    .directive("xnFormValidate", ['$parse', 'xnValidator', function ($parse, xnValidator) {
        return{
            link: function (scope, form, attr) {
                var formElem = form[0],
                    formName = form.attr("name"),
                    formSubmitFn = $parse(attr.xnSubmit),
                    options = scope.$eval(attr.xnFormValidate);
                // xnFormValidate has value,watch it
                if (attr.xnFormValidate) {
                    scope.$watch(attr.xnFormValidate, function (newValue) {
                        if (newValue) {
                            options = angular.extend({}, xnValidator.options, newValue);
                        }
                    }, true)
                }
                options = angular.extend({}, xnValidator.options, options);

                //初始化验证规则，并时时监控输入值的变话
                for (var i = 0; i < formElem.length; i++) {
                    var elem = formElem[i];
                    var $elem = angular.element(elem);
                    if (xnValidator.elemTypes.toString().indexOf(elem.type) > -1 && !xnValidator.isEmpty(elem.name)) {
                        var $viewValueName = formName + "." + elem.name + ".$viewValue";
                        //监控输入框的value值当有变化时移除错误信息
                        //可以修改成当输入框验证通过时才移除错误信息，只要监控$valid属性即可
                        scope.$watch("[" + $viewValueName + "," + i + "]", function (newValue) {
                            var $elem = formElem[newValue[1]];
                            scope[formName].$errors = [];
                            xnValidator.removeError($elem, options);
                        }, true);

                        //光标移走的时候触发验证信息
                        if (options.blurTrig) {
                            $elem.bind("blur", function () {
                                if (!options.blurTrig) {
                                    return;
                                }
                                var $elem = angular.element(this);
                                if (!scope[formName][this.name].$valid) {
                                    var errorMessages = xnValidator.getErrorMessages(this, scope[formName][this.name].$error);
                                    xnValidator.showError($elem, errorMessages, options);
                                } else {
                                    xnValidator.removeError($elem, options);
                                }
                            });
                        }
                    }
                }
                //触发验证事件
                var doValidate = function () {
                    var errorMessages = [];
                    //循环验证
                    for (var i = 0; i < formElem.length; i++) {
                        var elem = formElem[i];
                        if (xnValidator.elemTypes.toString().indexOf(elem.type) > -1 && !xnValidator.isEmpty(elem.name)) {
                            if(scope[formName][elem.name]) {
                                if (scope[formName][elem.name].$valid) {
                                    angular.element(elem).removeClass("error").addClass("valid");
                                    continue;
                                } else {
                                    var elementErrors = xnValidator.getErrorMessages(elem, scope[formName][elem.name].$error);
                                    errorMessages.push(elementErrors[0]);
                                    xnValidator.removeError(elem, options);
                                    xnValidator.showError(elem, elementErrors, options);
                                    angular.element(elem).removeClass("valid").addClass("error");
                                }
                            }
                        }
                    }
                    if (!xnValidator.isEmpty(errorMessages) && errorMessages.length > 0) {
                        scope[formName].$errors = errorMessages;
                    } else {
                        scope[formName].$errors = [];
                    }
                    if (!scope.$$phase) {
                        scope.$apply(scope[formName].$errors);
                    }
                };
                scope[formName].doValidate = doValidate;
                //xnSubmit is function
                if (attr.xnSubmit && angular.isFunction(formSubmitFn)) {

                    form.bind("submit", function () {
                        doValidate();
                        if (scope[formName].$valid && angular.isFunction(formSubmitFn)) {
                            scope.$apply(function () {
                                formSubmitFn(scope);
                            });
                        }
                    });
                }
            }
        };
    }])
    .directive("xnFormSubmit", ['$parse', "XN_BEGIN_REQUEST", "XN_END_REQUEST", function ($parse, XN_BEGIN_REQUEST, XN_END_REQUEST){
        "use strict";
        return{
            link: function (scope, element, attr) {
                var validSuccessFn = $parse(attr.xnFormSubmit);
                var formName = element.parents("form").attr("name");
                var form = scope.$eval(formName);
                if (!form) {
                    throw new Error("xnFormSubmit form is empty.");
                    return;
                }
                element.bind("click", function () {
                    if (angular.isFunction(form.doValidate)) {
                        form.doValidate();
                    }
                    if (form.$valid && angular.isFunction(validSuccessFn)) {
                        scope.$apply(function () {
                            validSuccessFn(scope);
                        });
                    }
                });
                scope.$on(XN_BEGIN_REQUEST, function () {
                    // got the request start notification, show the element  console.log("接收到了 XN_BEGIN_REQUEST")
                    element.attr({disabled:"disabled"});
                    element.addClass("disabled");

                });

                scope.$on(XN_END_REQUEST, function () {
                    // got the request end notification, hide the element
                    element.attr({disabled:"true"});
                    element.removeClass("disabled");
                    element.removeAttr("disabled");
                });

            }
        };
    }])
    .directive("xnSubmitEnter", ['$parse', "XN_BEGIN_REQUEST", "XN_END_REQUEST", function ($parse, XN_BEGIN_REQUEST, XN_END_REQUEST) {
        return{
            link: function (scope, element, attr) {
                var validSuccessFn = $parse(attr.xnSubmitEnter);
                var formName = element.parents("form").attr("name");
                var form = scope.$eval(formName);
                if (!form) {
                    throw new Error("xnSubmitEnter form is empty.");
                    return;
                }
                element.bind("click", function () {
                    if (angular.isFunction(form.doValidate)) {
                        form.doValidate();
                    }
                    if (form.$valid && angular.isFunction(validSuccessFn)) {
                        scope.$apply(function () {
                            validSuccessFn(scope);
                        });
                    }
                });

                element.parents("form").bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        var currentInput = document.activeElement;
                        //获取元素设置是否回车
                        var submitEnter = true;
                        if(angular.element(currentInput).attr("data-submit-enter")=="false"){
                            submitEnter=false;
                        }
                        if (currentInput.type !== "textarea" && submitEnter) {
                            element.find("button").focus();//修改之前的代码
                            currentInput.focus();
                            if (angular.isFunction(form.doValidate)) {
                                form.doValidate();
                            }
                            event.preventDefault();
                            if (form.$valid && angular.isFunction(validSuccessFn)) {
                                scope.$apply(function () {
                                    validSuccessFn(scope);
                                });
                            }
                        }
                    }
                });
                scope.$on(XN_BEGIN_REQUEST, function () {
                    // got the request start notification, show the element  console.log("接收到了 XN_BEGIN_REQUEST")
                    element.attr({disabled:"disabled"});
                    element.addClass("disabled");

                });

                scope.$on(XN_END_REQUEST, function () {
                    // got the request end notification, hide the element
                    element.attr({disabled:"true"});
                    element.removeClass("disabled");
                    element.removeAttr("disabled");
                });
            }
        };
    }]);
angular.module("xn.directive.navigation",[]).directive('xnNav', ["$window",function ($window) {
    return {
        restrict: "AC",
        link: function (scope, element,attrs) {
            var scrollTop=0;
            var setTop=attrs.xnNavTop;
            if(setTop==undefined || setTop=="null"){
                setTop=element[0].offsetTop;
            }
            angular.element($window).bind("scroll", function(e){
                scrollTop=angular.element("body")[0].scrollTop||document.documentElement.scrollTop;
                if(scrollTop>setTop){
                    element.css({"position": "fixed","top":"0px","z-index":"999"});
                }else{
                    element.css({"position": "relative","top":"0px","z-index":"999"});
                }
            })
        }
    };
}]);


/**
 * Created by DEV005 on 2015/2/26.
 * 赵星
 */
angular.module("xn.directive.loading",[])
    .directive('xnNprogress', ["XN_BEGIN_REQUEST", "XN_END_REQUEST",function (XN_BEGIN_REQUEST, XN_END_REQUEST) {
        return {
            restrict: "A",
            link: function (scope, element) {
                // hide the element initially


                scope.$on(XN_BEGIN_REQUEST, function () {
                    // got the request start notification, show the element  console.log("接收到了 XN_BEGIN_REQUEST")
                    NProgress.start();
                });

                scope.$on(XN_END_REQUEST, function () {
                    // got the request end notification, hide the element
                    NProgress.done();
                });
            }
        };
    }]);
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.1.6';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   * 
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;
    
    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() == "resolved") {
        return this;
      }
      
      if (current == 0) {
        NProgress.start();
      }
      
      initial++;
      current++;
      
      $promise.always(function() {
        current--;
        if (current == 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });
      
      return this;
    };
    
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent')
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/**
 * Created by DEV003 on 2014/12/26.
 */

angular.module("xn/template/xnAttachmentBox.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/xnAttachmentBox.html",
        "<div class=\"xn-attachments-box\" ng-show=\"isOpenBox\">"+
        "      <div class=\"xn-attachments-bg\" ng-click=\"closeAttachment()\"></div>"+
        "      <div class=\"xn-attachments-popup\">"+
        "          <div class=\"popup-head\">上传附件  <i ng-click=\"closeAttachment()\" class=\"attachment-close\"></i></div>"+
        "          <div class=\"tab-title clearfix\">"+
        "              <div class=\"tab-title-box clearfix\">"+
        "                  <span class=\"tab-title-disk \" ng-class=\"{'tab-title-bottom':isDisk}\" ng-click=\"attachmentDisk()\">网盘</span>" +
            "<span>|</span>" +
            "<span class=\"tab-title-locality \" ng-class=\"{'tab-title-bottom':!isDisk}\" ng-click=\"attachmentLocality()\">本地</span>"+
        "              </div>"+
        "              <label class=\"attachmentInputFile\" for=\"{{attachmentBox.selectItemId}}\">添加文件"+
        "                  <input type=\"file\" class=\"none\" id=\"{{attachmentBox.selectItemId}}\"  accept='{{filterUpType}}'  multiple  ng-click=\"upload()\"  >"+
        "              </label>"+
        "          </div>"+
        "          <div class=\"tab-box\">"+
        "              <div class=\"tab-box-disk\"  ng-show=\"isDisk\">"+
        "                  <ul class=\"clearfix\">"+
        "                      <li  ng-show='prentList.length>1' ng-click=\"getBack()\">"+
        "                          <div class=\"tab-box-img go-back\"></div>"+
        "                      </li>"+
        "                      <li  ng-repeat=\"folder in folderList\" ng-click=\"getFolderFile(folder.id)\" >"+
        "                          <div class=\"tab-box-img folder\"></div>"+
        "                          <div class=\"tab-box-title\">{{folder.name}}</div>"+
        "                      </li>"+
        "                      <li  ng-repeat=\"file in fileList\" ng-class=\"{'select':file.state}\" ng-click=\"selectFile($index)\">"+
        "                          <div class=\"tab-box-img  {{file.file.extension | attachmentFileType}}\"  ng-style=file.newImgUrl ></div>" +
        "                          <div class=\"tab-box-title\">{{file.fileName}}</div>"+
        "                      </li>"+
        "                  </ul>"+
        "              </div>"+
        "              <div class=\"tab-box-locality\"  ng-show=\"!isDisk\">"+
        "                  <ul class=\"clearfix\">"+
        "                      <li  ng-repeat=\"file in fileLocalityList\" ng-class=\"{'select':file.state}\" ng-click=\"selectLocalityFile($index)\">"+
        "                          <div class=\"tab-box-img  {{file.file.extension|attachmentFileType}}\"  ng-style=file.newImgUrl ></div>" +
        "                          <div class=\"tab-box-title\">{{file.fileName}}</div>"+
        "                      </li>"+
        "                  </ul>"+
        "              </div>"+
        "          </div>"+
        "          <div class=\"clearfix\" ></div>"+
        "          <div class=\"popup-foot\">"+
        "              <button class=\"popup-foot-bottom\" ng-click=\"saveAttachment()\">完成</button>"+
        "          </div>"+
        "      </div>"+
        "  </div >");
}]);

angular.module("xn/template/xnAttachmentBoxSingle.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/xnAttachmentBoxSingle.html",
        "<div class=\"xn-attachments-box\" ng-show=\"isOpenBoxSingle\">"+
        "      <div class=\"xn-attachments-bg\" ng-click=\"closeAttachment()\"></div>"+
        "      <div class=\"xn-attachments-popup\">"+
        "          <div class=\"popup-head\">附件  <i ng-click=\"closeAttachment()\" class=\"attachment-close\"></i></div>"+
        "          <div class=\"tab-title clearfix\">"+
        "              <div class=\"tab-title-box clearfix\">"+
        "                  <span class=\"tab-title-disk \" ng-class=\"{'tab-title-bottom':isDisk}\" ng-click=\"attachmentDisk()\">网盘</span>" +
            "<span>|</span>" +
            "<span class=\"tab-title-locality \" ng-class=\"{'tab-title-bottom':!isDisk}\" ng-click=\"attachmentLocality()\">本地</span>"+
        "              </div>"+
        "              <label class=\"attachmentInputFile\" for=\"{{attachmentBox.selectItemId}}\">添加文件"+
        "                  <input type=\"file\" class=\"none\" id=\"{{attachmentBox.selectItemId}}\"  accept='{{filterUpType}}'   ng-click=\"upload()\"  >"+
        "              </label>"+
        "          </div>"+
        "          <div class=\"tab-box\">"+
        "              <div class=\"tab-box-disk\"  ng-show=\"isDisk\">"+
        "                  <ul class=\"clearfix\">"+
        "                      <li  ng-show='prentList.length>1' ng-click=\"getBack()\">"+
        "                          <div class=\"tab-box-img go-back\"></div>"+
        "                      </li>"+
        "                      <li  ng-repeat=\"folder in folderList\" ng-click=\"getFolderFile(folder.id)\" >"+
        "                          <div class=\"tab-box-img folder\"></div>"+
        "                          <div class=\"tab-box-title\">{{folder.name}}</div>"+
        "                      </li>"+
        "                      <li  ng-repeat=\"file in fileList\" ng-class=\"{'select':file.state}\" ng-click=\"selectFile($index)\">"+
        "                          <div class=\"tab-box-img  {{file.file.extension | attachmentFileType}}\"  ng-style=file.newImgUrl ></div>" +
        "                          <div class=\"tab-box-title\">{{file.fileName}}</div>"+
        "                      </li>"+
        "                  </ul>"+
        "              </div>"+
        "              <div class=\"tab-box-locality\"  ng-show=\"!isDisk\">"+
        "                  <ul class=\"clearfix\">"+
        "                      <li  ng-repeat=\"file in fileLocalityList\" ng-class=\"{'select':file.state}\" ng-click=\"selectLocalityFile($index)\">"+
        "                          <div class=\"tab-box-img  {{file.file.extension|attachmentFileType}}\" ng-style=file.newImgUrl ></div>" +
        "                          <div class=\"tab-box-title\">{{file.fileName}}</div>"+
        "                      </li>"+
        "                  </ul>"+
        "              </div>"+
        "          </div>"+
        "          <div class=\"clearfix\" ></div>"+
        "          <div class=\"popup-foot\">"+
        "              <button class=\"popup-foot-bottom\" ng-click=\"saveAttachment()\">完成</button>"+
        "          </div>"+
        "      </div>"+
        "  </div >");
}]);

angular.module("xn/template/fileEdit.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/xnFileEdit.html",
            "<div class=\"xn-employee-upload\">"+
            "   <ul class=\"xn-upload-img clearfix\">"+
            "       <li class=\"clearfix\" ng-repeat=\"item in file.list\">"+
            "           <i  class=\"icon icon-delete\" ng-click=\"deleteItem($index)\"></i>"+

            "           <img   ng-click=\"attachmentViewOpen(item.filePath)\"  class=\"upload-img\" ng-src=\"{{item.filePath}}@170w_100h_0e\" width=\"170\" height=\"100\" />"+
/*            "           <div ng-show=\"!{{item.displayName | isImg}}\" class=\"upload-name\">{{item.displayName}}</div>"+*/

            "       </li>"+
            "       <li class=\"clearfix\" >"+
            "               <div  class=\"upload-add\" ng-click=\"openFile()\"  >"+
            "                   <i class=\"icon icon-add\"  ></i>"+
            "                   <div class=\"upload-add-title\">添加</div>"+
            "               </div>"+
            "       </li>" +
            "    </ul>"+
            "    <div xn-attachment-box  ng-Model=\"filePopup\"  data-is-open=\"isOpen\"" +
            "    data-type='{{type}}'     data-max-size=\"{{maxSize}}\"></div>"+

            "    <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\"></div>  " +
            "    <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "        <div class='xn-attachmentView-box-nr'  >" +
            "            <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
            "           <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "        </div>    " +
            "    </div>"+
            " </div>");
}]);

angular.module("xn/template/fileView.html", []).run(["$templateCache", function ($templateCache){
    "use strict";
    $templateCache.put("xn/template/xnFileView.html",
            "<div class=\"xn-employee-upload\">"+
            "    <ul class=\"xn-upload-img clearfix\">"+
            "        <li class=\"clearfix\" ng-repeat=\"item in file.list\">"+
            "          <img   ng-click=\"attachmentViewOpen(item.filePath)\" class=\"upload-img\" ng-src=\"{{item.filePath}}@170w_100h_0e\" width=\"170\" height=\"100\" />"+
/*            "          <a href='{{item.filePath}}'>  " +
            "               <div ng-show=\"!{{item.displayName | isImg}}\" class=\"upload-name\">{{item.displayName}}</div>"+
            "          </a>"+*/
            "       </li>"+
            "    </ul>"+
            "    <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\"></div>  " +
            "    <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "        <div class='xn-attachmentView-box-nr'  >" +
            "            <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
            "           <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "        </div>    " +
            "    </div>"+
            " </div>");
}]);

angular.module("xn/template/attachmentEdit.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/attachmentEdit.html",
            "<div class=\"xn-employee-upload\">"+
            "   <ul class=\"xn-upload-img clearfix\">"+
            "       <li class=\"clearfix\" ng-repeat=\"item in attachment.list\">"+
            "           <i  class=\"icon icon-delete\" ng-click=\"deleteItem(item.id)\"></i>"+
             "          <img ng-show=\"{{item.displayName | isImg}}\" ng-click=\"attachmentViewOpen(item.filePath)\"  class=\"upload-img\" ng-src=\"{{item.filePathUrl}}\" width=\"170\" height=\"100\" />"+
            "           <a  href='{{item.filePath}}'>"+
            "               <div ng-show=\"!{{item.displayName | isImg}}\" class=\"upload-name\">{{item.displayName}}</div>"+
            "           </a>"+
            "       </li>"+
            "       <li class=\"clearfix\" >"+
            "               <div  class=\"upload-add\" ng-click=\"openAttachment()\"  >"+
            "                   <i class=\"icon icon-add\"  ></i>"+
            "                   <div class=\"upload-add-title\">添加</div>"+
            "               </div>"+
            "       </li>" +
            "    </ul>"+
            "    <div xn-attachment-box  ng-Model=\"attachmentPopup\"  data-is-open=\"isOpen\" " +
            "   data-type='{{attachment.type}}'     data-max-size=\"{{attachment.size}}\"></div>"+
            "   <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\"></div>  " +
            "    <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "        <div class='xn-attachmentView-box-nr'  >" +
            "            <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
            "           <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "        </div>" +
            "    </div>"+
            " </div>");
}]);
angular.module("xn/template/attachmentView.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/attachmentView.html",
            "<div class=\"xn-employee-upload\">"+
            "    <ul class=\"xn-upload-img clearfix\">"+
            "        <li class=\"clearfix\" ng-repeat=\"item in attachment.list\">"+
            "          <img ng-show=\"{{item.displayName | isImg}}\"  ng-click=\"attachmentViewOpen(item.filePath)\" class=\"upload-img\" ng-src=\"{{item.filePathUrl}}\" width=\"170\" height=\"100\" />"+
            "          <a href='{{item.filePath}}'>  " +
            "               <div ng-show=\"!{{item.displayName | isImg}}\" class=\"upload-name\">{{item.displayName}}</div>"+
            "          </a>"+
            "       </li>"+
            "   </ul>"+
            "   <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\"></div>  " +
            "    <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "        <div class='xn-attachmentView-box-nr'  >" +
            "            <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
             "           <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "        </div>    " +
            "    </div>"+
            " </div>");
}]);
angular.module("xn/template/attSingleEdit.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/attSingleEdit.html",
            "<div>" +
            "   <label class=\"clearfix\" >"+
            "    <div ng-if=\"attachment.item\" >" +
            "      <i ng-if=\"attachment.item\" class=\"icon icon-delete\" ng-click=\"deleteItem(attachment.item.id)\"></i>"+
            "         <img ng-show=\"{{attachment.item.displayName | isImg}}\"  ng-click=\"attachmentViewOpen(attachment.item.filePath)\"  class=\"upload-img\" ng-src=\"{{attachment.item.filePath}}@170w_100h_90q\" width=\"170\" height=\"100\" />"+
            "         <a  href='{{attachment.item.filePath}}' >"+
            "             <div ng-show=\"!{{attachment.item.displayName | isImg}}\" class=\"upload-name\">{{attachment.item.displayName}}</div>"+
            "         </a>"+
            "      </div>"+
            "      <div  ng-if=\"!attachment.item\"  class=\"upload-add\"    ng-click=\"openAttachment()\">"+
            "          <i class=\"icon icon-add\"></i> " +
            "          <div class=\"upload-add-title\">{{attachment.title}}</div>" +
            "      </div>"+
            "   </label>"+
            "   <div xn-attachment-box-single  ng-Model=\"attachmentPopup\"  data-is-open-single=\"isOpenSingle\"" +
            "   data-type='{{attachment.type}}'     data-max-size=\"{{attachment.size}}\"></div>"+
            "   <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\" ></div>  " +
            "    <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "        <div class='xn-attachmentView-box-nr'  >" +
            "            <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
            "           <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "        </div>    " +
            "   </div>"+
            "</div>");
}]);

angular.module("xn/template/attSingleView.html", []).run(["$templateCache", function ($templateCache) {
    "use strict";
    $templateCache.put("xn/template/attSingleView.html",
            "<div  class=\"xn-employee-upload\">" +
            "   <ul class=\"xn-upload-img clearfix\" >" +
            "       <li class=\"clearfix\" ng-show=\"attachment.item\" >"+
            "           <img  ng-show=\"isImg\"   ng-click=\"attachmentViewOpen(attachment.item.filePath)\"   class=\"upload-img\"  ng-src=\"{{attachment.item.filePath}}@145w_90h_90q\" width=\"170\" height=\"100\" />"+
            "          <a  href='{{attachment.item.filePath}}' ng-show=\"!isImg\"  >  " +
            "               <div  class=\"upload-name\">{{attachment.item.displayName}}</div>"+
            "          </a>"+
            "       </li>    "+
            "       <li class=\"clearfix\" ng-show=\"!attachment.item\" >"+
            "          <img  class=\"upload-img\" ng-src=\"{{attachment.defaultPath}}\" width=\"170\" height=\"100\" />" +
            "       </li>    "+
            "    </ul>"+
            "      <div class='xn-attachmentView-bj' ng-show=\"attachmentState\" ng-click=\"attachmentViewClose()\"></div>  " +
            "       <div class='xn-attachmentView-box'  ng-show=\"attachmentState\"> " +
            "           <div class='xn-attachmentView-box-nr'  >" +
            "               <i class='icon icon-close' ng-click=\"attachmentViewClose()\"></i>" +
            "              <img class='xn-attachmentView-box-img' ng-src='{{attachmentView}}'>" +
            "           </div>    " +
            "       </div>"+
            "</div>"
    );
}]);

var xnAttachmentBox = function ($http,$filter,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/xnAttachmentBox.html",
        scope: {
            itemList: '=ngModel',
            isOpenBox:"=isOpen",
            maxSize:"@",
            type:"@"
        },
        replace: true,
        require: "?ngModel",
        link: function (scope,elem,atter,ngModel){
            //面包屑
            scope.prentList =[];
            var isOpenBox=scope.isOpenBox;

            var isDisk=scope.isDisk=true;
            var itemList=scope.itemList;

            //上传文件控制
            scope.filterUpType=$filter('attachmentFilterType')(scope.type);
            scope.filterPostType=$filter('attachmentPostType')(scope.type);

            scope.attachmentBox=[];

            //监控打开

            scope.$watch( function(){
               return scope.isOpenBox;
            },function(newData,oldData){
                if(newData){
                    angular.forEach(scope.fileLocalityList,function(fileLocality){
                        fileLocality.state=false;
                    });
                    scope.itemList={
                        idList:[],
                        attachmentList:[]
                    };

                    scope.attachmentDisk();
                }
            });
            scope.attachmentBox.selectItemId = "XX"+new Date().getTime();
            var selectItem = document.getElementById(scope.attachmentBox.selectItemId);
            var i = 0;
            while(selectItem != null){
                scope.attachmentBox.selectItemId = "XX"+new Date().getTime()+i;
                selectItem = document.getElementById( scope.attachmentBox.selectItemId);
                i++;
            }

            if(scope.attachmentBox.businessId != null){

            } else{
                scope.attachmentBox.businessId =1;
            }
            var diskId = null;
            var folderId=null;
            var disk;
            scope.folderList = [];
            scope.fileList = [];
            //本地文件
            scope.fileLocalityList=[];
            //获取用户的基本信息
            /* $http({
                    method: 'POST',
                    url: "/system/api.do",
                    params: {"method": "api.system.userinformation.get"}
                 }).success(function(data){
                     if (data.errors === null || data.errors.length > 0) {
                         dialogService.tip(data.errors);
                     } else if (!data.user.diskId) {
                         $http({
                             method: 'POST',
                             url: "/api/foundation.do",
                             params: {
                                 "method": "api.foundation.disk.apply"},
                                 data: {
                                     name : "我的网盘"
                                 }
                             }
                         ).success(function(newData){
                                 if (data.errors === null || data.errors.length > 0) {
                                     dialogService.tip(data.errors);
                                 }else{
                                     diskId = newData.id;
                                     scope.getDisk(diskId);
                                 }
                             })
                     } else {
                         diskId = data.user.diskId;
                         scope.getDisk(diskId);
                     }
                 });*/

            scope.getDisk=function(diskId){
                // 获取磁盘的信息
                $http({
                    method: 'POST',
                    url: "/api/foundation.do",
                    params: {
                        "method": "api.foundation.disk.get"
                    },
                    data: {
                        id : diskId
                    }
                }).success(function(data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    }else{
                        disk = data.disk;
                        scope.getFolderFile(disk.rootFolderId);
                    }
                });
            };

            scope.findFolderFile = function(parentId) {
                folderId = parentId;
                // 获取根目录文件和文件夹列表
                $http({
                    method: 'POST',
                    url: "/api/foundation.do",
                    params: {
                        "method": "api.foundation.folder.file.find"
                    },
                    data: {
                        parentId : parentId,
                        pageSize:0,
                        type:scope.filterPostType
                    }
                }).success(function (data) {
                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    }else{
                        scope.folderList = data.folderList;
                        scope.fileList=[];
                        angular.forEach(data.folderFileList,function(folder){
                            folder.state=false;
                            if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                            }else{
                                folder.newimgUrl="";
                            }
                            scope.fileList.push(folder) ;

                        });
                    }
                });
            };

            //上传附件
            scope.upload = function(){
                if(!scope.isDisk){
                    folderId=scope.prentList[0];
                }
                var fileId=document.getElementById(scope.attachmentBox.selectItemId);
                fileId.onchange=function(){
                    if(fileId){
                        var fileList = document.getElementById(scope.attachmentBox.selectItemId).files;
                        for(var i=0;i<fileList.length;i++){
                            if(scope.maxSize){
                               if(Number(scope.maxSize)*1024*1024 <=fileList[i].size){
                                   if(0==i){
                                       dialogService.tip([{"message":"上传文件不能大于"+scope.maxSize+"M!" }]);
                                       return;
                                   }else{
                                       dialogService.tip([{"message":"第"+i+"上传文件不能大于"+scope.maxSize+"M!" }]);
                                       return;
                                   }
                               }
                            }

                            var file = fileList[i];
                            var fd = new FormData();
                            fd.append("File", file);
                            fd.append("DiskId", diskId);
                            fd.append("FolderId", folderId);

                            $http({
                                method: 'POST',
                                url: "/api/diskFileUpload.do",
                                headers: {'Content-Type': undefined },
                                transformRequest: angular.identity,
                                data: fd

                            }).success(function(data) {
                                if (data.errors === null || data.errors.length > 0) {
                                    dialogService.tip(data.errors);
                                } else {
                                    if(scope.isDisk){
                                        //网盘
                                        var  folder={
                                            state:false,
                                            id:data.id,
                                            fileName:data.name,
                                            path:data.url,
                                            file:{
                                                id:data.fileId,
                                                extension:data.ext
                                            }
                                        };
                                        if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                            folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                                        }else{
                                            folder.newimgUrl="";
                                        }
                                        scope.fileList.push(folder) ;

                                    }else{
                                        // 本地
                                        var  folder={
                                            state:false,
                                            id:data.id,
                                            fileName:data.name,
                                            path:data.url,
                                            file:{
                                                id:data.fileId,
                                                extension:data.ext
                                            }
                                        };
                                        if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                            folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                                        }else{
                                            folder.newimgUrl="";
                                        }
                                        scope.fileLocalityList.push(folder) ;
                                    }
                                }
                            });

                        }
                    }
                };
            };

            //选择文件
            scope.selectFile=function(index){
                scope.fileList[index].state=!scope.fileList[index].state;
            };

            //选择文件
            scope.selectLocalityFile=function(index){
                scope.fileLocalityList[index].state=!scope.fileLocalityList[index].state;
            };

            //获取文件
            scope.getFolderFile=function(id){
                scope.prentList.push(id);
                scope.findFolderFile(id);
            };

            //返回上一级
            scope.getBack=function(){
                scope.prentList.splice(scope.prentList.length-1,1);
                scope.findFolderFile(scope.prentList[scope.prentList.length-1]);
            };

            //切换
            scope.attachmentDisk=function(){
                scope.isDisk=true;
                scope.prentList.splice(1, scope.prentList.length-1);
                scope.findFolderFile(scope.prentList[0])
            };
            scope.attachmentLocality=function(){
                angular.forEach(scope.fileLocalityList,function(fileLocality){
                    fileLocality.state=false;
                });
                scope.isDisk=false;
            };


            //关闭
            scope.closeAttachment=function(){
                scope.isOpenBox=false;
                scope.itemList={
                    idList:[],
                    attachmentList:[]
                };
            };
            //保存
            scope.saveAttachment=function(){
                scope.itemList={
                    idList:[],
                    attachmentList:[]
                };
                if(scope.isDisk){
                    angular.forEach(scope.fileList,function(file){
                        if(file.state){
                            scope.itemList.idList.push(file.file.id);
                            scope.itemList.attachmentList.push(file);
                        }
                    });
                }else{
                    angular.forEach(scope.fileLocalityList,function(fileLocality){
                        if(fileLocality.state){
                            scope.itemList.idList.push(fileLocality.file.id);
                            scope.itemList.attachmentList.push(fileLocality);
                        }
                    });
                }
                scope.isOpenBox=false;
            }
        }
    };
};

var xnAttachmentBoxSingle = function ($http,$filter,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/xnAttachmentBoxSingle.html",
        scope: {
            itemList: '=ngModel',
            isOpenBoxSingle:"=isOpenSingle",
            maxSize:"@",
            type:"@"
        },
        replace: true,
        require: "?ngModel",
        link: function (scope,elem,atter,ngModel){
            //面包屑
            scope.prentList =[];
            var isOpenBoxSingle=scope.isOpenBoxSingle;

            var isDisk=scope.isDisk=true;
            var itemList=scope.itemList;

            scope.attachmentBox=[];

            //上传文件控制
            scope.filterUpType=$filter('attachmentFilterType')(scope.type);
            scope.filterPostType=$filter('attachmentPostType')(scope.type);

            //监控打开
            scope.$watch( function(){
               return scope.isOpenBoxSingle;
            },function(newData){
                angular.forEach(scope.fileLocalityList,function(fileLocality){
                    fileLocality.state=false;
                });
                if(newData){
                    scope.itemList={
                        idList:"",
                        attachmentList:""
                    };
                    scope.attachmentDisk();
                }
            });
            scope.attachmentBox.selectItemId = "XX"+new Date().getTime();
            var selectItem = document.getElementById(scope.attachmentBox.selectItemId);
            var i = 0;
            while(selectItem != null){
                scope.attachmentBox.selectItemId = "XX"+new Date().getTime()+i;
                selectItem = document.getElementById( scope.attachmentBox.selectItemId);
                i++;
            }

            if(scope.attachmentBox.businessId != null){

            } else{
                scope.attachmentBox.businessId =1;
            }
            var diskId = null;
            var folderId=null;
            var disk;
            scope.folderList = [];
            scope.fileList = [];
            //本地文件
            scope.fileLocalityList=[];
            //获取用户的基本信息
             $http({
                    method: 'POST',
                    url: "/system/api.do",
                    params: {"method": "api.system.userinformation.get"}
                 }).success(function(data){
                     if (data.errors === null || data.errors.length > 0) {
                         dialogService.tip(data.errors);
                     } else if (!data.user.diskId) {
                         $http({
                             method: 'POST',
                             url: "/api/foundation.do",
                             params: {
                                 "method": "api.foundation.disk.apply"},
                                 data: {
                                     name : "我的网盘"
                                 }
                             }
                         ).success(function(newData){
                                 if (data.errors === null || data.errors.length > 0) {
                                     dialogService.tip(data.errors);
                                 }else{
                                     diskId = newData.id;
                                 }
                             })
                     } else {
                         diskId = data.user.diskId;
                     }
                     // 获取磁盘的信息
                     $http({
                         method: 'POST',
                         url: "/api/foundation.do",
                         params: {
                             "method": "api.foundation.disk.get"
                         },
                         data: {
                             id : diskId
                         }
                     }).success(function(data) {
                         if (data.errors === null || data.errors.length > 0) {
                             dialogService.tip(data.errors);
                         }else{
                             disk = data.disk;
                             scope.getFolderFile(disk.rootFolderId);
                         }
                     });
             });
            scope.findFolderFile = function(parentId) {
                folderId = parentId;
                // 获取根目录文件和文件夹列表
                $http({
                    method: 'POST',
                    url: "/api/foundation.do",
                    params: {
                        "method": "api.foundation.folder.file.find"
                    },
                    data: {
                        parentId : parentId,
                        pageSize:0,
                        type:scope.filterPostType
                    }
                }).success(function (data) {

                    if (data.errors === null || data.errors.length > 0) {
                        dialogService.tip(data.errors);
                    }else{
                        scope.folderList = data.folderList;
                        scope.fileList=[];
                        angular.forEach(data.folderFileList,function(folder){
                            folder.state=false;
                            if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                            }else{
                                folder.newimgUrl="";
                            }
                            scope.fileList.push(folder) ;
                        });
                    }
                });
            };

            //上传附件
            scope.upload = function(){
                if(!scope.isDisk){
                    folderId=scope.prentList[0];
                }
                var fileId=document.getElementById(scope.attachmentBox.selectItemId);
                fileId.onchange=function(){
                    if(fileId){
                        var fileList = document.getElementById(scope.attachmentBox.selectItemId).files;
                        for(var i=0;i<fileList.length;i++){
                            if(scope.maxSize){
                                if(Number(scope.maxSize)*1024*1024 <=fileList[i].size){
                                    dialogService.tip([{"message":"上传文件不能大于"+scope.maxSize+"M!" }]);
                                    return;
                                }
                            }

                            var file = fileList[i];
                            var fd = new FormData();
                            fd.append("File", file);
                            fd.append("DiskId", diskId);
                            fd.append("FolderId", folderId);

                            $http({
                                method: 'POST',
                                url: "/api/diskFileUpload.do",
                                headers: {'Content-Type': undefined },
                                transformRequest: angular.identity,
                                data: fd

                            }).success(function(data) {
                                if (data.errors === null || data.errors.length > 0) {
                                    dialogService.tip(data.errors);
                                } else {
                                    if(scope.isDisk){
                                        //网盘
                                        var  folder={
                                            state:false,
                                            id:data.id,
                                            fileName:data.name,
                                            path:data.url,
                                            file:{
                                                id:data.fileId,
                                                extension:data.ext
                                            }
                                        };
                                        if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                            folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                                        }else{
                                            folder.newimgUrl="";
                                        }
                                        scope.fileList.push(folder) ;

                                    }else{
                                        // 本地
                                        var  folder={
                                            state:false,
                                            id:data.id,
                                            fileName:data.name,
                                            path:data.url,
                                            file:{
                                                id:data.fileId,
                                                extension:data.ext
                                            }
                                        };
                                        if($filter('attachmentFileType')(folder.file.extension)=="img"){
                                            folder.newImgUrl={"background-image":"url(\""+folder.path+"@65w_50h_0e\")"};
                                        }else{
                                            folder.newimgUrl="";
                                        }
                                        scope.fileLocalityList.push(folder) ;
                                    }
                                }
                            });

                        }
                    }
                };
            };

            //选择文件
            scope.selectFile=function(index){
                angular.forEach(scope.fileList,function(file){
                    file.state=false;
                });
                scope.fileList[index].state=true;
            };

            //选择文件
            scope.selectLocalityFile=function(index){
                angular.forEach(scope.fileLocalityList,function(file){
                    file.state=false;
                });
                scope.fileLocalityList[index].state=true;
            };

            //获取文件
            scope.getFolderFile=function(id){
                scope.prentList.push(id);
                scope.findFolderFile(id);
            };

            //返回上一级
            scope.getBack=function(){
                scope.prentList.splice(scope.prentList.length-1,1);
                scope.findFolderFile(scope.prentList[scope.prentList.length-1]);
            };

            //切换
            scope.attachmentDisk=function(){
                scope.isDisk=true;
                scope.prentList.splice(1, scope.prentList.length-1);
                scope.findFolderFile(scope.prentList[0])
            };
            scope.attachmentLocality=function(){
                angular.forEach(scope.fileLocalityList,function(fileLocality){
                    fileLocality.state=false;
                });
                scope.isDisk=false;
            };


            //关闭
            scope.closeAttachment=function(){
                scope.isOpenBoxSingle=false;
                scope.itemList={
                    idList:"",
                    attachmentList:""
                };
            };
            //保存
            scope.saveAttachment=function(){
                scope.itemList={
                    idList:"",
                    attachmentList:""
                };
                if(scope.isDisk){
                    angular.forEach(scope.fileList,function(file){
                        if(file.state){
                            scope.itemList.idList=file.file.id;
                            scope.itemList.attachmentList=file;
                        }
                    });
                }else{
                    angular.forEach(scope.fileLocalityList,function(fileLocality){
                        if(fileLocality.state){
                            scope.itemList.idList=fileLocality.file.id;
                            scope.itemList.attachmentList=fileLocality;
                        }
                    });
                }
                scope.isOpenBoxSingle=false;
            }
        }
    };
};

var xnFileEdit = function ($http,$filter,AttachmentService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/xnFileEdit.html",
        scope: {file: '=ngModel',
        maxSize:"@",
        type:"@"
        },
        replace: true,
        require: "?ngModel",
        link: function (scope,elem,attr,ngModel) {
            scope.isOpen=false;
            scope.filePopup={
                idList:[],
                attachmentList:[]
            };
            scope.openFile=function(){
                scope.isOpen=true;
            };

            var file=scope.file;
            file.list=[];


            scope.$watch(function(){
                return  scope.isOpen;
            },function(newData){
               if(!newData){
                    for(var i=0;i<scope.filePopup.idList.length;i++){
                        var deal=scope.filePopup.attachmentList[i];
                        scope.file.list.push({id:deal.file.id,filePath:deal.path}) ;
                        scope.file.ids.push(deal.file.id) ;
                    }
                   scope.filePopup={
                       idList:[],
                       attachmentList:[]
                   };
                }
            });
            var isFirst=true;
            scope.$watch(function(){
                return scope.file.ids;
            },function(newVal,oldVal){
                if(newVal.length && isFirst){
                    //加载附件
                    AttachmentService.apiFoundationFilePathGetList(file).success(function(data){
                        if(data.errors === null || data.errors.length > 0){
                            dialogService.tip(data.errors);
                        } else {
                           var filePathMap = data.filePathMap;
                            scope.file.list = [];
                            if(filePathMap != null){
                                for(var fileId in filePathMap){
                                    scope.file.list.push({id:fileId,filePath:filePathMap[fileId]});
                                }
                            }
                        }
                    });
                    isFirst=false;
                }
            });
            //删除
            scope.deleteItem =function($index){
                scope.file.ids.splice($index,1);
                scope.file.list.splice($index,1);
            };


            scope.attachmentState=false;
            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;
                /*     scope.attachmentView="background-image:url(\""+url+"\")";*/
                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            };

        }
    };
};

var xnFileView = function ($http,$filter,AttachmentService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/xnFileView.html",
        scope: {file: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope,ngModel) {
            if (!ngModel) return;
            var file = scope.file;

            scope.attachmentView="";
            scope.attachmentState=false;

            var isFirst=true;
            scope.$watch(function(){
                return scope.file.ids;
            },function(newVal,oldVal){
                if(newVal.length && isFirst){
                    //加载附件
                    AttachmentService.apiFoundationFilePathGetList(file).success(function(data){
                        if(data.errors === null || data.errors.length > 0){
                            dialogService.tip(data.errors);
                        } else {
                            var filePathMap = data.filePathMap;
                            scope.file.list = [];
                            if(filePathMap != null){
                                for(var fileId in filePathMap){
                                    scope.file.list.push({id:fileId,filePath:filePathMap[fileId]});
                                }
                            }
                        }
                    });
                    isFirst=false;
                }
            });

            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;
                /*     scope.attachmentView="background-image:url(\""+url+"\")";*/
                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            };

        }
    };
};

var xnAttachmentEdit = function ($http,$filter,FoundationService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/attachmentEdit.html",
        scope: {attachment: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope,elem,attr,ngModel) {
            scope.isOpen=false;
            //图片预览

            scope.attachmentPopup={
                idList:[],
                attachmentList:[]
            };

            scope.openAttachment=function(){
                scope.isOpen=true;
             //   elem.find(".xn-attachments-box").addClass("xn-attachments-box-open");
            };

            var attachment=scope.attachment;
            attachment.list=[];

            scope.attachment.files={};

            scope.$watch(function(){
                return  scope.isOpen;
            },function(newdata){
                if(!newdata){
                    for(var i=0;i<scope.attachmentPopup.idList.length;i++){
                        $http({
                            method: 'POST',
                            url: "/api/foundation.do",
                            params: {
                                "method": "api.foundation.attachment.uploadbyfileid"
                            },
                            data: {
                                fileId : scope.attachmentPopup.idList[i],
                                businessId:attachment.businessId,
                                businessType:attachment.businessType,
                                businessCategory:attachment.businessCategory
                            }
                        }).success(function (data) {
                            if(data.errors === null || data.errors.length > 0){
                                dialogService.tip(data.errors);
                            }else{
                                var deal=data.attachment;
                                if($filter('isImg')(deal.displayName)){
                                    deal.filePathUrl = deal.filePath+"@170w_100h_0e";
                                }
                                attachment.list.push(deal) ;
                            }
                        });
                    }
                    scope.attachment.files=angular.copy(scope.attachmentPopup);
                }else{
                    scope.attachment.files={};
                }
            });
            if(attachment.businessId != null){
                //加载附件
                FoundationService.apiFoundationAttachmentGetListByBizInfo(attachment).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    } else {
                       angular.forEach(data.attachmentList,function(folder){
                           if($filter('isImg')(folder.displayName)){
                               folder.filePathUrl = folder.filePath+"@170w_100h_0e";
                           }
                            attachment.list.push(folder) ;
                       });
                    }
                });
            } else{
                attachment.businessId =1;
            }

            scope.attachmentState=false;
            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;
                /*     scope.attachmentView="background-image:url(\""+url+"\")";*/
                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            };



            //删除附件
            scope.deleteItem =function(id){
                FoundationService.apiFoundationAttachmentDelete({attachmentId : id}).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    } else {
                        for(var i= 0;i <attachment.list.length;i++){
                            if(id === attachment.list[i].id){
                                attachment.list.splice(i,1);
                                break;
                            }
                        }
                    }
                });
            };
        }
    };
};

var xnAttachmentView = function ($http,$filter,FoundationService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/attachmentView.html",
        scope: {attachment: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope,ngModel) {
            if (!ngModel) return;
            var attachment = scope.attachment;
            scope.attachmentView="";
            scope.attachmentState=false;
            //加载附件
            FoundationService.apiFoundationAttachmentGetListByBizInfo(attachment).success(function(data){
                if(data.errors === null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                } else {
                    angular.forEach(data.attachmentList,function(folder){
                        if($filter('isImg')(folder.displayName)){
                            folder.filePathUrl = folder.filePath+"@170w_100h_0e";
                        }
                        attachment.list.push(folder) ;
                    });
                }
            });
            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;
           /*     scope.attachmentView="background-image:url(\""+url+"\")";*/
                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            }

        }
    };
};

var xnAttSingleEdit = function ($http,$filter,FoundationService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/attSingleEdit.html",
        scope: {attachment: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope) {
            scope.isOpenSingle=false;
            scope.openAttachment=function(){
                scope.isOpenSingle=true;
            };
            scope.attachmentPopup={
                idList:"",
                attachmentList:""
            };

            var attachment = scope.attachment;
            scope.attachment.files={};

            attachment.selectItemId = "XX"+new Date().getTime();
            var selectItem = document.getElementById(attachment.selectItemId);
            var i = 0;
            while(selectItem != null){
                attachment.selectItemId = "XX"+new Date().getTime()+i;
                selectItem = document.getElementById(attachment.selectItemId);
                i++;
            }

            if(attachment.businessId != null){
                //加载附件
                FoundationService.apiFoundationAttachmentGetListByBizInfo(attachment).success(function(data){
                    if(data.errors === null || data.errors.length > 0){
                        dialogService.tip(data.errors);
                    } else {
                        if(data.attachmentList.length != 0){
                            attachment.item = data.attachmentList[0];
                        }

                    }
                });
            } else{
                attachment.businessId =1;
            }
            scope.$watch(function(){
                return  scope.isOpenSingle;
            },function(newdata){
                if(!newdata){
                    if(scope.attachmentPopup.idList){
                        $http({
                            method: 'POST',
                            url: "/api/foundation.do",
                            params: {
                                "method": "api.foundation.attachment.uploadbyfileid"
                            },
                            data: {
                                fileId : scope.attachmentPopup.idList,
                                businessId:attachment.businessId,
                                businessType:attachment.businessType,
                                businessCategory:attachment.businessCategory
                            }
                        }).success(function (data) {
                            if(data.errors === null || data.errors.length > 0){
                                dialogService.tip(data.errors);
                            }else{
                                attachment.item=data.attachment ;
                            }
                        });
                        scope.attachment.files=angular.copy(scope.attachmentPopup);
                    }else{
                        scope.attachment.files={};
                    }

                }
            });

            //删除附件
            scope.deleteItem =function(id){
                var dialogDefaults = {
                    size:"sm"
                };
                var dialogOptions = {
                    closeButtonText: "取消",
                    actionButtonText: "删除",
                    headerText: "删除....?",
                    bodyText: "你确定删除附件吗？",
                    callback: function () {
                        FoundationService.apiFoundationAttachmentDelete({attachmentId : id}).success(function(data){
                            if(data.errors === null || data.errors.length > 0){
                                dialogService.tip(data.errors);
                            } else {
                                attachment.item = null;
                            }
                        });
                    }
                };
                dialogService.confirm(dialogDefaults, dialogOptions);
            };


            scope.attachmentState=false;
            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;
                /*     scope.attachmentView="background-image:url(\""+url+"\")";*/
                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            };
        }
    };
};

var xnAttSingleView = function ($http,$filter,FoundationService,dialogService) {
    return {
        restrict: "A",
        templateUrl: "xn/template/attSingleView.html",
        scope: {attachment: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope,ngModel) {
            if (!ngModel) return;
            var attachment = scope.attachment;
            scope.isImg=false;

            //加载附件
            FoundationService.apiFoundationAttachmentGetListByBizInfo(attachment).success(function(data){

                if(data.errors === null || data.errors.length > 0){
                    dialogService.tip(data.errors);
                } else {
                    if(data.attachmentList.length != 0){
                        attachment.item = data.attachmentList[0];
                    }
                }
            });
            scope.$watch(function(){
                return  attachment.item;
            },function( newData){
                if(newData){
                    if($filter('isImg')(newData.displayName)){
                        scope.isImg=true
                    }
                }
            },true);


            scope.attachmentState=false;
            //打开预览
            scope.attachmentViewOpen=function(url){
                scope.attachmentView=url;

                scope.attachmentState=true;
            };

            //关闭预览
            scope.attachmentViewClose=function(){
                scope.attachmentView="";
                scope.attachmentState=false;
            }
        }
    };
};

//文本框粘贴图片
var xnImgPaste=function($http,$filter,FoundationService,dialogService){
    return {
        restrict: "A",
        scope: {attachment: '=xnAttachment'},
        require: "?xnAttachment",
        link: function (scope, elem) {
            var attachment=scope.attachment;
            if(!attachment) return ;
            elem.bind("paste",function(e){
                var clipboard = e.originalEvent.clipboardData;
                for(var i=0,len=clipboard.items.length; i<len; i++) {
                    if(clipboard.items[i].kind == 'file' || clipboard.items[i].type.indexOf('image') > -1) {
                        var imageFile = clipboard.items[i].getAsFile();
                        imageFile.name = new Date().getTime()+".png";
                        FoundationService.apiFoundationAttachmentUpload(imageFile,attachment.businessId,attachment.businessType,attachment.businessCategory).success(function(data){
                            if(data.errors === null || data.errors.length > 0){
                                dialogService.tip(data.errors);
                            }else{
                                attachment.list.push(data.attachment);
                            }
                        });
                    }
                }
            });
        }
    };
};

angular.module("xn.directive.attachment", ["ng", "xn.service.foundation",
    "xn/template/xnAttachmentBox.html",
    "xn/template/xnAttachmentBoxSingle.html",
    "xn/template/fileEdit.html",
    "xn/template/fileView.html",
    "xn/template/attachmentEdit.html",
    "xn/template/attachmentView.html",
    "xn/template/attSingleEdit.html",
    "xn/template/attSingleView.html"])
    .filter("attachmentFileType", [
        function () {
            return function (input) {
                switch (input)
                {
                    case "folder":
                        input="folder";
                        break;
                    case "xlsx":
                    case "xls":
                        input="xls";
                        break;
                    case "docx":
                    case "doc":
                        input="doc";
                        break;
                    case "pptx":
                    case "ppt":
                        input="ppt";
                        break;
                    case "txt":
                        input="txt";
                        break;
                    case "pdf":
                        input="pdf";
                        break;
                    case "zip":
                    case "rar":
                        input="zip";
                        break;
                    case "jpeg":
                    case "jpg":
                    case "png":
                    case "gif":
                        input="img";
                        break;
                    default:
                        input="other";
                        break;
                }
                return input;
            };
        }
    ])
    .filter("attachmentFilterType", [
        function () {
            return function (input) {
                switch (input)
                {
                    case "image":
                        input="image/gif, image/jpeg ,image/jpg,image/png";
                        break;
                    case "document":
                       input="application/msword," +  //word
                           "application/vnd.ms-excel," +
                            "application/pdf," +        //pdf
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document,"+     // (for .document files)
                            "text/plain," +              //txt
                           "application/vnd.ms-powerpoint," +  //ppt
                           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet," +  //xlsx
                           "application/vnd.openxmlformats-officedocument.presentationml.presentation," +  //pptx
                           "application/vnd.openxmlformats-officedocument.wordprocessingml.template,"+  //(for .docx files)
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation,"+ //(for .pptx files)
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow,"+  //(for .ppsx files)
                            "application/vnd.openxmlformats-officedocument.presentationml.template,"+   //(for .potx files)
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,"+        //(for .xlsx files)
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template,"+     // (for .xltx files)

                            "application/x-pci,"+
                            "application/x-pcl,"+
                            "application/x-pcx,"+
                            "application/vnd.adobe.pdx,"+
                            "application/x-pkcs12,"+
                            "application/x-pgl,"+
                            "application-pki.pko,"+
                            "application/x-perl,"+
                            "application/x-xls,"+
                            "application/x-xlw";
                        break;
                    case "video":
                        input="audio/mp3,audio/x-ms-wma,video/mp4,video/avi,video/x-ms-wmv," +
                            "application/x-shockwave-flash,rm," +
                            "application/vnd.rn-realmedia-vbr";  //rmvb
                        break;
                    default:
                        input="";
                        break;
                }
                return input;
            };
        },
    ])
    .filter("attachmentPostType", [
        function () {
            return function (input) {
                switch (input)
                {
                    case "video":
                    case "VIDEO":
                        input="AUDIO_VIDEO";
                        break;
                    case "document":
                    case "DOCUMENT":
                       input="DOCUMENT";
                        break;
                    case "PICTURE":
                    case "picture":
                    case "IMAGE":
                    case "image":
                        input="PICTURE";
                        break;
                    default:
                        input="ALL";
                        break;
                }
                return input;
            };
        },
    ])

    .directive('xnAttachmentBox', ["$http","$filter","dialogService", xnAttachmentBox])
    .directive('xnAttachmentBoxSingle', ["$http","$filter","dialogService", xnAttachmentBoxSingle])
    .directive('xnFileEdit', ["$http","$filter","AttachmentService","dialogService", xnFileEdit])
    .directive('xnFileView', ["$http","$filter","AttachmentService","dialogService", xnFileView])
    .directive('xnAttachmentEdit', ["$http","$filter","FoundationService","dialogService", xnAttachmentEdit])
    .directive('xnAttachmentView', ["$http","$filter","FoundationService","dialogService", xnAttachmentView])
    .directive('xnAttSingleEdit', ["$http","$filter","FoundationService","dialogService", xnAttSingleEdit])
    .directive('xnAttSingleView', ["$http","$filter","FoundationService","dialogService", xnAttSingleView])
    .directive('xnImgPaste', ["$http","$filter","FoundationService","dialogService", xnImgPaste])
    .factory('AttachmentService', ['$http', function ($http) {
        var service = {};
        var url = "/api/foundation.do";

        service.apiFoundationFilePathGetList = function (data) {
            return $http({
                method: 'POST',
                url: url,
                data: data,
                params: {"method": "api.foundation.filepath.getlist"} });
        };

        return service;
    }]);


angular.module("xn/template/select.html",[]).run(["$templateCache", function($templateCache){
    "use strict";
    $templateCache.put("xn/template/select/xnMultipleSelectTree.html",
            "<div class='xn-tree-multipselect'>"
            +"    <div ng-click='showContent($event)'>"
            +"      <input type='text' class='form-control' name=\"{{name}}\" ng-model='showName' ng-required=\"required \" readonly='readonly'/>"
            +"      <i class='icon icon-downward-1'></i>"
            +"    </div>"
            +"    <div ng-hide=\"isHide\" class='xn-tree-list-div'>"
            +"        <div class='level-0'>"
            +"            <div class='btn btn-link f-left' ng-click='doConfirm()'><span>关闭</span></div>"
            +"            <div class='btn btn-link f-right' ng-click='doConsole()'><span>取消选择</span></div>"
            +"        </div>"
            +"        <div class='level-content'>"
            +"            <div class='level-content-box'>"
            +"                <div class='level-{{data.level}} xn-tree-item' ng-repeat='data in selectedDataList' ng-click='doChoose(data)'>"
            +"                    <div class='xn-label-checkbox' ng-style='data.style'>"
            +"                        <i class='xn-checkbox selected_space' ></i>"
            +"                        <i class='icon icon-right_3 selected_icon' ng-show='data.isSelected'></i>"
            +"                        {{data.name}}"
            +"                    </div>"
            +"                </div>"
            +"            </div>"
            +"        </div>"
            +"    </div>"
            +"</div>"
    );
    $templateCache.put("xn/template/select/xnSelectTree.html",
            "<div class='xn-tree-select'>"
            +"    <input class='form-control' name='{{name}}' id='xn_select_tree_input' ng-model='selectedData.name' ng-required='required' readonly='readonly'/>"
            +"    <div class='xn-tree-list'>"
            +"        <div class='cancel_cl' ng-click='closeSelect()'>"
            +"            <div class='btn btn-link'>取消选择</div>"
            +"        </div>"
            +"        <div class='level-content'>"
            +"        <div class='level-{{data.level}} xn-tree-item' ng-repeat='data in selectedDataList' ng-click='closeSelect(data)'>"
            +"            <div>{{data.name}}</div>"
            +"        </div>"
            +"        </div>"
            +"    </div>"
            +"</div>"
    );
    $templateCache.put("xn/template/select/lookup.html",
            "<div id='{{id}}' class='xn_select_outer'><div class='xn_select_outer_div'>"
            +"  <div class='xn_select_input_div' ng-click='showTable($event)' ng-mouseover='showDelete=true' ng-mouseout='showDelete=false'>"
            +"      <input type='text' ng-required='required' id='tableText' name='{{name}}' ng-model='showField' class='xn_select_input' readonly='readonly' />"
            +"      <i class='icon icon-delete' ng-click='deleteData($event)' ng-show=\"showDelete\"></i>"
            +"      <span class='icon icon-apostrophe'></span>"
            +"  </div>"
            +"</div>"
            +"<div ng-show='vm.showDiv' ng-click='stopEvent($event)' id=\"{{showDivId}}\" class='xn_show_div' ng-style=vm.width >"
            +"  <div class='content'>"
            +"       <div class='sort_area'></div>"
            +"       <div ng-transclude class='transclude_div'></div>"
            +"       <div class='pagination'>"
            +"                  <div class='icon icon-up' ng-if=\"options.pageNumber>1\" ng-click='search(\"pre\", $event)'></div>"
            +"                  <div class='icon icon-up icon-up-disable' ng-if=\"options.pageNumber<=1\"></div>"
            +"                  <div class='icon icon-down' ng-if=\"options.pageNumber<options.totalCount/options.pageSize\" ng-click='search(\"next\", $event)'></div>"
            +"                  <div class='icon icon-down icon-down-disable' ng-if=\"options.pageNumber>=options.totalCount/options.pageSize\"></div>"
            +"       </div>"
            +"    </div>"
            +"   <div class='search_div'>"
            +"          <div class='search_input_div'>"
            +"               <input ng-keydown=\"find($event)\" type=\"text\" class=\"form-control\" name=\"keyword\" ng-model=\"options.keyword\" placeholder=\"{{placeHolder}}\" autofocus>"
            +"               <span class='searc_icon_search icon icon-search' ng-click=\"search('', $event)\"></span>"
            +"          </div>"
            +"      </div>"
            +"  </div>"
            +"</div>"
    );
    $templateCache.put("xn/template/select/xnFilterSelect.html",
            "<div class='xn-filter-select_outer' ng-click='showContent($event)'>"
            +"  <div class='input_div' ng-mouseover='deleteShow=true' ng-mouseout='deleteShow=false'>"
            +"      <i class='icon icon-delete' ng-click='deleteData($event)' ng-show='deleteShow'></i>"
            +"      <i class='icon icon-downward-1'></i>"
            +"      <input type='text' class='form-control' ng-required='required' name={{name}} ng-model='showVal' readonly='readonly'/>"
            +"  </div>"
            +"  <div ng-show='contentDiv' class='content_div_cl'>"
            +"      <input type='text' name='{{name+\"FilterOption\"}}' ng-click='keepShowContent($event)' ng-model='filterOption' placeholder='请输入要查询的内容'/>"
            +"      <ul class='content_div_ul_cl'><li class='content_div_li_cl' ng-repeat='data in selectData | xnSearch:filterOption' ng-click='select(data, $event)'>{{data.name}}</li></ul>"
            +"  </div>"
            +"</div>"
    );
    $templateCache.put("xn/template/select/xnCreateSelect.html",
        "<div class='xn-create-select_outer' ng-click='showContent($event)'>"
        +"  <div class='input_div' ng-mouseover='deleteShow=true' ng-mouseout='deleteShow=false'>"
        +"      <i class='icon icon-delete' ng-click='deleteData($event)' ng-show='deleteShow'></i>"
        +"      <i class='icon icon-downward-1'></i>"
        +"      <input type='text' class='form-control' ng-required='required' name={{name}} ng-model='showVal' readonly='readonly'/>"
        +"  </div>"
        +"  <div ng-show='contentDiv' class='content_div_cl'>"
        +"      <ul class='content_div_ul_cl'><li class='content_div_li_cl' ng-repeat='data in selectData' ng-click='select(data, $event)'>{{data.name}}</li></ul>"
        +"      <div class='content_div_create'><i class='icon icon-add' ng-click='goCreate($event)'></i><a ng-click='goCreate($event)'>{{createInfo}}</a></div>"
        +"  </div>"
        +"</div>"
    );
    $templateCache.put("xn/template/select/xnFilterInput.html",
            "<div class='xn-filter-input' id=\"{{xnFilterInputId}}\">"+
            "    <input type='text' class='form-control' name='{{name}}' ng-model='selectedData.value'  " +
            "      ng-focus=\"setListShow()\" ng-required='required'/>"+
            "      <ul class='xn-filter-input-list' ng-hide=\"0>=selectList.length\">" +
            "           <li  ng-repeat='data in selectList' ng-click='select(data)'>{{data.value}}</li>" +
            "      </ul>"+
            "</div>"
    );
}]);
/*ng-blur=\"isShow=false\"*/
angular.module("xn.directive.select",["xn/template/select.html"])
    .directive("xnSelectTree", function() {
        return {
            restrict:"AE",
            scope:{
                selectData :"=selectData",
                selectedData : "=ngModel",
                name: "@",
                required : "@"
            },
            required: "?ngModel",
            templateUrl: "xn/template/select/xnSelectTree.html",
            link: function(scope, element, attrs) {
                if(!scope.selectData)
                    scope.selectData = [];

                if(!scope.required)
                    scope.required = false;

                if(!scope.name)
                    scope.name = "selectName";

                angular.element(".xn-tree-list").hide();

                //查找子节点
                scope.getChild = function(scope, pid, dataList, level){
                    level ++;
                    angular.forEach(dataList, function(data){
                        if(data.parentId === pid){
                            data.level = level;
                            scope.selectedDataList.push(data);
                            scope.getChild(scope, data.id, dataList, level);
                        }
                    });
                };

                //生成树结构
                scope.doList=function(){
                    scope.selectedDataList=[];
                    if(scope.selectData.length>0){
                        angular.forEach(scope.selectData,function(d){
                            if(d.parentId == null){
                                d.level = 0;
                                scope.selectedDataList.push(d);
                                scope.getChild(scope, d.id, scope.selectData, d.level);
                            }
                        });
                    }
                };

                scope.closeSelect = function(data){
                    scope.selectedData=data;
                    angular.element(".xn-tree-list").hide();
                };

                scope.$watch("selectData", function(newVal, oldVal) {
                    if(angular.isArray(newVal)){
                        scope.selectData = newVal;
                        scope.doList();
                    }
                });

                //对document绑定一个影藏Div方法
                angular.element(document).click(function (e) {
                    if(! angular.element(e.target).is("#xn_select_tree_input")){
                        angular.element(".xn-tree-list").hide();
                    }else{
                        angular.element(".xn-tree-list").toggle();
                    }
                });
            }
        };
    })
    .directive("xnMultipleSelectTree", function() {
        return {
            restrict:"AE",
            scope:{
                selectData: "=",
                selectedData: "=ngModel",
                name: "@",
                required: "@"
            },
            require: "^ngModel",
            replace: true,
            link: function($scope, element, attrs, ngModel, fn) {
                $scope.isHide = true;

                if(!ngModel) {
                    return ;
                }

                if(!$scope.selectData) {
                    $scope.selectData = [];
                }

                if(!$scope.selectedData) {
                    $scope.selectedData = [];
                }

                if(!$scope.required) {
                    $scope.required = false;
                }

                //查找子节点
                $scope.getChild = function($scope, pid, dataList, level, isSelected, isPush){
                    level ++;
                    angular.forEach(dataList, function(data){
                        if(data.parentId === pid){
                            data.isSelected=isSelected;
                            if(isPush){
                                data.level = level;
                                $scope.selectedDataList.push(data);
                                data.style = {'margin-left':15*level+'px'};
                            }
                            $scope.getChild($scope, data.id, dataList, level, isSelected, isPush);
                        }
                    });
                };

                //生成树结构
                $scope.doList=function(){
                    $scope.selectedDataList=[];
                    $scope.selectDataList = $scope.selectData;
                    if($scope.selectData.length>0){
                        angular.forEach($scope.selectData,function(data){
                            if(data.parentId == null){
                                data.level = 0;
                                data.isSelected=false;
                                $scope.selectedDataList.push(data);
                                $scope.getChild($scope, data.id, $scope.selectData, data.level, false, true);
                            }
                        });
                    }
                };

                $scope.doChoose = function(data){
                    data.isSelected = !data.isSelected;
                    if(data.isSelected) $scope.selectedData.push(data);
                    if(data.isSelected==false) {
                        for(var i= 0, len=$scope.selectedData.length; i<len; i++) {
                            if($scope.selectedData[i]==data) $scope.selectedData.splice(i, 1);
                        }
                    }
                    $scope.selectedDataName = [];
                    angular.forEach($scope.selectedData, function (data) {
                        if(data.isSelected) $scope.selectedDataName.push(data.name);
                    });
                    $scope.showName = $scope.selectedDataName.join();
                };

                $scope.doConfirm = function(){
                    $scope.isHide = true;
                };

                $scope.doConsole = function(){
                    $scope.selectedData = [];
                };

                $scope.$watch("selectData", function(newVal, oldVal) {
                    if(angular.isArray(newVal)){
                        $scope.selectData = newVal;
                        $scope.doList();
                        if(0>=newVal.length) {
                            $scope.selectedData = [];
                            $scope.showName = "";
                        } else {
                            $scope.selectedDataName = [];
                            for(var i= 0,len=$scope.selectedData.length; i<len; i++) {
                                var count = 0;
                                for(var j= 0,l=newVal.length; j<l; j++) {
                                    if($scope.selectedData[i].id==newVal[j].id) {
                                        count ++;
                                    }
                                }
                                if(0<count) {
                                    $scope.selectedDataName.push($scope.selectedData[i].name);
                                }
                                if(0>=count) {
                                    $scope.selectedData.splice(i, 1);
                                }
                            }
                        }
                    }
                });

                $scope.$watch("selectedData", function(newVal, oldVal) {
                    $scope.selectedDataName = [];
                    if(angular.isArray(newVal) && newVal.length==0) {
                        $scope.showName = "";
                        $scope.doList();
                    }
                    if(angular.isArray(newVal) && newVal.length>0){
                        $scope.doConfirm();
                        for(var i= 0, len=newVal.length; i<len; i++) {
                            for(var j= 0, len1=$scope.selectData.length; j<len1; j++) {
                                if($scope.selectData[j].id==newVal[i].id) {
                                    $scope.selectedDataName.push($scope.selectData[j].name);
                                    $scope.selectData[j].isSelected = true;
                                }
                            }
                        }
                        $scope.showName = $scope.selectedDataName.join(",");
                    }
                });

                $scope.showContent = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.isHide = !$scope.isHide;
                };

                angular.element(element).click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });

                angular.element(document).click(function (e) {
                    $scope.$apply(function() {
                        $scope.isHide = true;
                    });
                });
            },
            templateUrl: "xn/template/select/xnMultipleSelectTree.html"
        };
    })
    .directive("bothListSelect", function() {
        return {
            scope: {
                selectData :"=",
                selectedData : "=ngModel",
                title : "@selectTitle",
                language:"@"
            },
            require: "ngModel",
            restrict:"AEC",
            template :"<div class='xn_select_panel'>"
                +"<div class='xn_select_div'>"
                +"<div class='xn_select_head'>"
                +"<input type='text' class='filter_input' ng-model='filterOption' name='filterOption' placeholder='{{vm.selectName}} {{title}}'/>"
                +"</div>"
                +"<ul ng-show='selectShow' class='xn_select_body_ul'>"
                +"<li ng-click='changeCl(data.id)' class='xn_select_body_li {{data.cl}}' ng-repeat='data in selectData | xnSearch:filterOption' ng-dblclick='select(data.id)'>{{data.name}}</li>"
                +"</ul>"
                +"</div>"
                +"<div class='xn_select_middle_icondiv'>"
                +"<div class='pt_20'><i ng-click='getAll()' class='icon icon-rightward_2 xn_select_middle_icon_first'></i></div>"
                +"<div class='pt_20'><i ng-click='get()' class='icon icon-rightward_1 xn_select_middle_icon_first'></i></div> "
                +"<div class='pt_30 xn_select_middle_icon_seconde'><i ng-click='remove()' class='icon icon-leftward_1'></i></div>"
                +"<div class='pt_20 xn_select_middle_icon_seconde'><i ng-click='removeAll()' class='icon icon-leftward_2'></i></div>"
                +"</div>"
                +"<div class='xn_select_div'>"
                +"<div class='xn_select_head' ng-click='selectedShow=!selectedShow'><i ng-if='selectedShow' class='icon icon-downward-1 xn_select_shape'></i><i ng-if='!selectedShow' class='icon icon-rightward xn_select_shape'></i><span class='title_span'>{{vm.selectedName}} {{title}}</span></div>"
                +"<ul ng-show='selectedShow' class='xn_select_body_ul'><li ng-click='changeCl(dData.id)' class='xn_select_body_li {{dData.cl}}' ng-repeat='dData in selectedData' ng-dblclick='cancel(dData.id)'>{{dData.name}}</li></ul></div>"
                +"</div>",
            link: function(scope, element, attres, controller, transcludeFn) {
                if(scope.selectData==undefined)
                    scope.selectData = [];
                if(scope.selectedData==undefined)
                    scope.selectedData = [];
                scope.selectShow = true;
                scope.selectedShow = true;
                if(!scope.selectData)
                    scope.selectData = [];
                if(!scope.selectedData)
                    scope.selectedData = [];

                scope.vm={
                    selectName:"请选择",
                    selectedName:"已选择"
                };
                console.log(scope.language)

                if(scope.language=="en"){
                    console.log(scope.language)
                    scope.vm={
                        selectName:"select ",
                        selectedName:"selected "
                    };
                }

                scope.seprateData = function() {
                    for(var i=0; i<scope.selectData.length; ) {
                        scope.selectData[i].cl = "";
                        scope.selectData[i].isChecked = false;
                        var count = 0;
                        for(var j=0; j<scope.selectedData.length; j++) {
                            scope.selectedData[j].cl = "";
                            scope.selectedData[j].isChecked = false;
                            if(scope.selectData[i].id==scope.selectedData[j].id)
                                count++;
                        }
                        if(count>0)
                            scope.selectData.splice(i, 1);
                        else
                            i++;
                    }
                };

                scope.$watch('selectData', function(newVal, oldVal) {
                    if(newVal)
                        scope.seprateData();
                });

                scope.$watch('selectedData', function(newVal, oldVal) {
                    if(newVal)
                        scope.seprateData();
                });

                //双击选择
                scope.select = function(id) {
                    for(var i=0; i<scope.selectData.length; i++) {
                        if(scope.selectData[i].id==id) {
                            scope.selectData[i].isChecked = false;
                            scope.selectData[i].cl = "";
                            scope.selectedData.push(scope.selectData[i]);
                            scope.selectData.splice(i, 1);
                        }
                    }
                };

                //双击取消选择
                scope.cancel = function(id) {
                    for(var i=0; i<scope.selectedData.length; i++) {
                        if(scope.selectedData[i].id==id) {
                            scope.selectedData[i].isChecked = false;
                            scope.selectedData[i].cl = "";
                            scope.selectData.push(scope.selectedData[i]);
                            scope.selectedData.splice(i, 1);
                        }
                    }
                };

                //选中某条数据样式加载
                scope.changeCl = function(id) {
                    for(var i=0; i<scope.selectData.length; i++) {
                        scope.selectData[i].cl = "";
                        scope.selectData[i].isChecked = false;
                        if(scope.selectData[i].id==id) {
                            scope.selectData[i].cl = "xn_selected_li";
                            scope.selectData[i].isChecked = true;
                        }
                    }
                    for(var i=0; i<scope.selectedData.length; i++) {
                        scope.selectedData[i].cl = "";
                        scope.selectedData[i].isChecked = false;
                        if(scope.selectedData[i].id==id) {
                            scope.selectedData[i].cl = "xn_selected_li";
                            scope.selectedData[i].isChecked = true;
                        }
                    }
                };

                //点击右箭头选择
                scope.get = function() {
                    for(var i=0; i<scope.selectData.length; ) {
                        scope.selectData[i].cl = "";
                        if(scope.selectShow) {
                            if(scope.selectData[i].isChecked) {
                                scope.selectData[i].isChecked = false;
                                scope.selectedData.push(scope.selectData[i]);
                                scope.selectData.splice(i, 1);
                            } else {
                                i++;
                            }
                        } else {
                            scope.selectData[i].isChecked = false;
                            scope.selectedData.push(scope.selectData[i]);
                            scope.selectData.splice(i, 1);
                        }
                    }
                };

                //点击左箭头取消选择
                scope.remove = function() {
                    for(var i=0; i<scope.selectedData.length; ) {
                        scope.selectedData[i].cl = "";
                        if(scope.selectedShow) {
                            if(scope.selectedData[i].isChecked) {
                                scope.selectedData[i].isChecked = false;
                                scope.selectData.push(scope.selectedData[i]);
                                scope.selectedData.splice(i, 1);
                            } else {
                                i++;
                            }
                        } else {
                            scope.selectedData[i].isChecked = false;
                            scope.selectData.push(scope.selectedData[i]);
                            scope.selectedData.splice(i, 1);
                        }
                    }
                };

                //选择全部
                scope.getAll = function() {
                    for(var i=0; i<scope.selectData.length; ) {
                        scope.selectData[i].cl = "";
                        scope.selectData[i].isChecked = false;
                        scope.selectedData.push(scope.selectData[i]);
                        scope.selectData.splice(i, 1);
                    }
                };

                //移除全部
                scope.removeAll = function() {
                    for(var i=0; i<scope.selectedData.length; ) {
                        scope.selectedData[i].cl = "";
                        scope.selectedData[i].isChecked = false;
                        scope.selectData.push(scope.selectedData[i]);
                        scope.selectedData.splice(i, 1);
                    }
                };
            }
        }
    })
    .directive("bothTreeListSelect", function() {
        return {
            scope: {
                selectData :"=",
                selectedData : "=ngModel",
                title : "@selectTitle",
                language:"@"
            },
            require: "ngModel",
            restrict:"AEC",
            template :"<div class='xn_tree_select_panel'>"
                +"<div class='xn_select_div'>"
                +"<div class='xn_select_head' ng-click='selectShow=!selectShow'>"
                +"<i ng-if='selectShow' class='icon icon-downward-1 xn_select_shape'></i>"
                +"<i ng-if='!selectShow' class='icon icon-rightward xn_select_shape'></i>"
                +"<span class='title_span'>{{vm.selectName}} {{title}}</span>"
                +"</div>"
                +"<ul ng-show='selectShow' class='xn_select_body_ul'>"
                +"<li ng-repeat='data in selectData'> "
                +"<div ng-click='changeCl(data,\"left\", selectData)' ng-dblclick='select(data, selectData)'class='xn_select_body_li {{data.cl}}'> {{data.name}}</div> "
                +"<ul class='inner_ul' ng-if='data.children!=undefined && data.children.length>0'> "
                +"<li ng-repeat='child in data.children'> "
                +"<div ng-click='changeCl(child, \"left\", data.children)' ng-dblclick='select(child, data.children)'class='xn_select_body_li {{child.cl}} inner_ul_div'>{{child.name}}</div>"
                +"<ul class='inner_ul' ng-if='child.children!=undefined && child.children.length>0'> "
                +"<li ng-repeat='ch in child.children'>"
                +"<div ng-click='changeCl(ch, \"left\", child.children)' ng-dblclick='select(ch, child.children)'class='xn_select_body_li {{ch.cl}} inner_thired_div'>{{ch.name}}</div>"
                +"</li>"
                +"</ul>"
                +"</li>"
                +"</ul>"
                +"</li>"
                +"</ul>"
                +"</div>"
                +"<div class='xn_select_middle_icondiv'>"
                +"<div class='pt_20'><i ng-click='getAll()' class='icon icon-rightward_2 xn_select_middle_icon_first'></i></div>"
                +"<div class='pt_20'><i ng-click='get(selectData)' class='icon icon-rightward_1 xn_select_middle_icon_first'></i></div> "
                +"<div class='pt_30 xn_select_middle_icon_seconde'><i ng-click='remove(selectedData)' class='icon icon-leftward_1'></i></div>"
                +"<div class='pt_20 xn_select_middle_icon_seconde'><i ng-click='removeAll()' class='icon icon-leftward_2'></i></div>"
                +"</div>"
                +"<div class='xn_select_div'>"
                +"<div class='xn_select_head' ng-click='selectedShow=!selectedShow'> "
                +"<i ng-if='selectedShow' class='icon icon-downward-1 xn_select_shape'></i> "
                +"<i ng-if='!selectedShow' class='icon icon-rightward xn_select_shape'></i> "
                +"<span class='title_span'>{{vm.selectedName}} {{title}}</span> "
                +"</div> "
                +"<ul ng-show='selectedShow' class='xn_select_body_ul'> "
                +"<li ng-repeat='dData in selectedData'> "
                +"<div ng-click='changeCl(dData, \"right\", selectedData)' ng-dblclick='cancel(dData, selectedData)' class='xn_select_body_li {{dData.cl}}'>{{dData.name}}</div> "
                +"<ul class='inner_ul' ng-if='dData.children!=undefined && dData.children.length>0'> "
                +"<li ng-repeat='child in dData.children'> "
                +"<div ng-click='changeCl(child,\"right\", dData.children)' ng-dblclick='cancel(child, dData.children)' class='xn_select_body_li {{child.cl}} inner_ul_div'>{{child.name}}</div>"
                +"<ul class='inner_ul' ng-if='child.children!=undefined && child.children.length>0'> "
                +"<li ng-repeat='ch in child.children'>"
                +"<div ng-click='changeCl(ch, \"right\", child.children)' ng-dblclick='cancel(ch, child.children)'class='xn_select_body_li {{ch.cl}} inner_thired_div'>{{ch.name}}</div>"
                +"</li>"
                +"</ul>"
                +"</li>"
                +"</ul>"
                +"</li> "
                +"</ul> "
                +"</div>"
                +"</div>",
            link: function(scope, element, attres, ngModel, transcludeFn) {
                if(!ngModel) return ;
                scope.selectShow = true;
                scope.selectedShow = true;
                var collection = [];
                scope.singleSelect = {};
                scope.singleSelectList = [];
                scope.toword = "";
                scope.type = "init";
                scope.vm={
                    selectName:"请选择",
                    selectedName:"已选择"
                };
                console.log(scope.language)

                if(scope.language=="en"){
                    console.log(scope.language)
                    scope.vm={
                        selectName:"select ",
                        selectedName:"selected "
                    };
                }

                if(!scope.selectData) scope.selectData = [];
                if(!scope.selectedData) scope.selectedData = [];

                //分离数据
                scope.separateData = function() {
                    for(var i=0; i<scope.selectData.length; ) {
                        scope.selectData[i].cl = "";
                        scope.selectData[i].isChecked = false;
                        var count = 0;
                        for(var j=0; j<scope.selectedData.length; j++) {
                            scope.selectedData[j].cl = "";
                            scope.selectedData[j].isChecked = false;
                            if(scope.selectData[i].id==scope.selectedData[j].id) count++;
                        }
                        if(count>0) scope.selectData.splice(i, 1);
                        else  i++;
                    }
                };

                scope.$watch('selectData', function(newVal, oldVal) {
                    if(newVal && newVal.length>0 && scope.type == "init") {
                        scope.selectList = angular.copy(scope.selectData);
                        scope.separateData();
                        scope.createTree();
                    }
                });

                scope.$watch('selectedData', function(newVal, oldVal) {
                    if(newVal && newVal.length>0 && scope.type == "init") {
                        scope.separateData();
                        scope.createTree();
                    }
                });

                scope.makeTree = function(source, result, select, level, data) {
                    level = level || 1;
                    if(!select) {
                        for(var i=0; i<source.length; ) {
                            if(!source[i].pId) {
                                source[i].level = level;
                                result.push(source[i]);
                                source.splice(i, 1);
                            } else {
                                i++;
                            }
                        }
                        for(var i=0; i<result.length; i++) {
                            scope.makeSecondTree(source, result[i], level);
                        }
                    } else {
                        if(level==1) {
                            for(var i=0; i<source.length; ) {
                                if(source[i].pId==data.id) {
                                    if(!data.children) data.children = [];
                                    data.children.push(source[i]);
                                    source.splice(i, 1);
                                } else {
                                    var s = 0;
                                    if(data.children) {
                                        for(var j=0; j<data.children.length; j++) {
                                            if(data.children[j].id==source[i].pId) {
                                                if(!data.children[j].children) data.children[j].children = [];
                                                data.children[j].children.push(source[i]);
                                                source.splice(i, 1);
                                                s++;
                                                break;
                                            }
                                        }
                                    } else {
                                        i++;
                                    }
                                    if(s==0) i++;
                                }
                            }
                            result.push(data);
                            for(var num in source) {
                                result.push(source[num]);
                            }
                        } else if(level==2) {
                            for(var i=0; i<source.length; ) {
                                if(source[i].pId==data.id) {
                                    if(!data.children) data.children = [];
                                    data.children.push(source[i]);
                                    source.splice(i, 1);
                                } else {
                                    i++;
                                }
                            }
                            for(var i=0; i<source.length; ) {
                                if(data && source[i].id==data.pId) {
                                    if(!source[i].children) source[i].children = [];
                                    source[i].children.push(data);
                                    data = null;
                                    break;
                                } else {
                                    i++;
                                }
                            }
                            if(data) source.push(data);
                            for(var num in source) {
                                result.push(source[num]);
                            }
                            source.splice(0, source.length);
                        } else {
                            for(var i=0; i<source.length; i++) {
                                if(source[i].level==2 && source[i].id==data.pId) {
                                    if(!source[i].children) source[i].children = [];
                                    source[i].children.push(data);
                                    data = null;
                                    break;
                                }
                                if(source[i].level==1 && source[i].children) {
                                    for(var j=0; j<source[i].children.length; j++) {
                                        if(data && source[i].children[j].id==data.pId) {
                                            if(!source[i].children[j].children) source[i].children[j].children = [];
                                            source[i].children[j].children.push(data);
                                            data = null;
                                            break;
                                        }
                                    }
                                }
                                if(!data) break;
                            }
                            if(data) source.push(data);
                            for(var num in source) {
                                result.push(source[num]);
                            }
                            source.splice(0, source.length);
                        }
                    }
                };

                scope.makeSecondTree = function(source, data, level) {
                    level ++;
                    var list = [];
                    for(var i=0; i<source.length; ) {
                        if(source[i].pId==data.id) {
                            source[i].level = level;
                            if(!data.children) data.children = [];
                            data.children.push(source[i]);
                            list.push(source[i]);
                            source.splice(i, 1);
                        } else {
                            i++;
                        }
                    }
                    for(var i=0; i<list.length; i++) {
                        scope.makeThirdTree(source, list[i], level);
                    }
                };

                scope.makeThirdTree = function(source, data, level) {
                    level ++;
                    for(var i=0; i<source.length; ) {
                        if(source[i].pId==data.id) {
                            source[i].level = level;
                            if(!data.children) data.children = [];
                            data.children.push(source[i]);
                            source.splice(i, 1);
                        } else {
                            i++;
                        }
                    }
                };

                scope.createTree = function() {
                    collection = angular.copy(scope.selectData);
                    scope.selectData.splice(0, scope.selectData.length);
                    scope.makeTree(collection, scope.selectData, false);
                    collection = angular.copy(scope.selectedData);
                    scope.selectedData.splice(0, scope.selectedData.length);
                    scope.makeTree(collection, scope.selectedData, false);
                };

                //双击选择
                scope.select = function(data, list) {
                    scope.type = "select";
                    for(var i=0; i<list.length; i++) {
                        if(list[i].id==data.id) {
                            list[i].isChecked = false;
                            list[i].cl = "";
                            list.splice(i, 1);
                        }
                    }
                    collection = [];
                    collection = scope.selectedData;
                    scope.selectedData = [];
                    scope.makeTree(collection, scope.selectedData, true, data.level, data);
                };

                //双击取消选择
                scope.cancel = function(data, list) {
                    scope.type = "select";
                    for(var i=0; i<list.length; i++) {
                        if(list[i].id==data.id) {
                            list[i].isChecked = false;
                            list[i].cl = "";
                            list.splice(i, 1);
                        }
                    }
                    collection = [];
                    collection = scope.selectData;
                    scope.selectData = [];
                    scope.makeTree(collection, scope.selectData, true, data.level, data);
                };

                //选中某条数据样式加载
                scope.changeCl = function(data, toword, list) {
                    scope.singleSelect = data;
                    scope.singleSelectList = list;
                    scope.toword = toword;
                    for(var i=0; i<scope.selectData.length; i++) {
                        scope.selectData[i].cl = "";
                        scope.selectData[i].isChecked = false;
                        if(scope.selectData[i].children && scope.selectData[i].children.length>0) {
                            for(var j=0; j<scope.selectData[i].children.length; j++) {
                                scope.selectData[i].children[j].cl="";
                                scope.selectData[i].children[j].isChecked="";
                                if(scope.selectData[i].children[j].children && scope.selectData[i].children[j].children.length>0) {
                                    for(var d in scope.selectData[i].children[j].children) {
                                        scope.selectData[i].children[j].children[d].cl="";
                                        scope.selectData[i].children[j].children[d].isChecked="";
                                    }
                                }
                            }
                        }
                    }
                    for(var i=0; i<scope.selectedData.length; i++) {
                        scope.selectedData[i].cl = "";
                        scope.selectedData[i].isChecked = false;
                        if(scope.selectedData[i].children && scope.selectedData[i].children.length>0) {
                            for(var j=0; j<scope.selectedData[i].children.length; j++) {
                                scope.selectedData[i].children[j].cl="";
                                scope.selectedData[i].children[j].isChecked="";
                                if(scope.selectedData[i].children[j].children && scope.selectedData[i].children[j].children.length>0) {
                                    for(var d in scope.selectedData[i].children[j].children) {
                                        scope.selectedData[i].children[j].children[d].cl="";
                                        scope.selectedData[i].children[j].children[d].isChecked="";
                                    }
                                }
                            }
                        }
                    }
                    data.cl = "xn_selected_li";
                    data.isChecked = true;
                };

                //点击右箭头选择
                scope.get = function(list) {
                    if(scope.toword=="left") {
                        scope.select(scope.singleSelect, scope.singleSelectList);
                    }
                };

                //点击左箭头取消选择
                scope.remove = function(list) {
                    if(scope.toword=="right") {
                        scope.cancel(scope.singleSelect, scope.singleSelectList);
                    }
                };

                //选择全部
                scope.getAll = function() {
                    scope.selectData.splice(0, scope.selectData.length);
                    scope.selectedData.splice(0, scope.selectedData.length);
                    scope.selectedData = angular.copy(scope.selectList);
                    scope.createTree();
                };

                //移除全部
                scope.removeAll = function() {
                    scope.selectData.splice(0, scope.selectData.length);
                    scope.selectedData.splice(0, scope.selectedData.length);
                    scope.selectData = angular.copy(scope.selectList);
                    scope.createTree();
                };
            }
        }
    })
    .directive("lookup", function() {
        return {
            restrict :"AEC",
            scope: {
                options : "=",
                showField : "=",
                data : "=ngModel",
                searchParameter:"=",
                required : "@",
                name : "@",
                showWidth : "@",
                placeHolder : "@"
            },
            require: "^ngModel",
            replace: true,
            transclude:true,
            link: function($scope, element, attres, controller, transcludeFn) {
                $scope.count = 0;
                $scope.vm={
                    showDiv:false
                }
                /* $scope.showDiv = false;*/
                $scope.showDelete = false;
                $scope.options.keyword = "";
                $scope.options.maxPageSize = 5;
                var time = new Date().getTime();
                $scope.id = "xnTableSelect_" + time;
                $scope.showDivId = "showDiv_" + time;

                if(!$scope.required) {
                    $scope.required = false;
                }

                if(!$scope.showField) {
                    $scope.showField = "";
                }

                if(!$scope.options.totalCount) {
                    $scope.options.totalCount = 0;
                }
                $scope.vm={};
                if($scope.showWidth){
                    $scope.vm.width={width:$scope.showWidth+"px"};

                    console.log($scope.vm);
                }else{
                    $scope.vm.width=""
                }

                //下拉DIV显示和隐藏
                $scope.showTable = function(e) {
                    /*  e.preventDefault();
                     e.stopPropagation();*/
                    $scope.options.keyword = "";
                    $scope.options.pageNumber=1;
                    $scope.vm.showDiv = !$scope.vm.showDiv;
                    if($scope.vm.showDiv){
                        $scope.$parent[$scope.options.methodName]($scope.searchParameter)
                    };
                };

                $scope.find = function(e) {
                    if(event.keyCode==13){
                        e.preventDefault();
                        $scope.$parent[$scope.options.methodName]($scope.searchParameter);
                    }
                };

                //搜索
                $scope.search = function(str, e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if("pre"==str) $scope.options.pageNumber--;
                    if("next"==str) $scope.options.pageNumber++;
                    $scope.$parent[$scope.options.methodName]($scope.searchParameter);
                };

                //监控关键值
                $scope.$watch("data", function(newVal, oldVal) {
                   if(newVal){
                        $scope.vm.showDiv = false;
                   }
                });

                $scope.stopEvent = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                };

                var getPar = function(tar) {
                    if(tar.id==$scope.id){
                        $scope.count++;
                    }
                    if(tar.parentElement){
                        getPar(tar.parentElement);
                    }
                };
                angular.element(document).bind("click", function(e) {
                    $scope.count = 0;
                    getPar(e.target);
                    if($scope.count == 0) {
                        $scope.$apply(function(){
                            $scope.vm.showDiv = false;
                        })
                    }
                });

                $scope.deleteData = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.data=undefined;
                    $scope.showField= "";
                };
            },
            templateUrl: "xn/template/select/lookup.html"
        }
    })
    .directive("xnFilterSelect", function() {
        return {
            restrict:"AE",
            scope:{
                selectData:"=",
                selectedData: "=ngModel",
                name: "@",
                required: "@"
            },
            require: "^ngModel",
            link: function($scope, element, attres, controller, transcludeFn) {
                $scope.contentDiv = false;
                $scope.deleteShow = false;
                $scope.contentId = new Date().getTime() + "_id";

                if(!$scope.selectData) {
                    $scope.selectData = [];
                }

                if(!$scope.required) {
                    $scope.required = false;
                }

                if(!$scope.name) {
                    $scope.name = "selectName";
                }

                $scope.showContent = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.contentDiv = !$scope.contentDiv;
                };

                $scope.keepShowContent=function(e){
                    e.preventDefault();
                    e.stopPropagation();
                };
                $scope.select = function(data, e){
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.selectedData = data;
                    $scope.showVal = data.name;
                    $scope.contentDiv = false;
                    $scope.filterOption = "";
                };




                $scope.$watch("selectedData",function(){
                    if($scope.selectedData){
                        $scope.showVal=$scope.selectedData.name;

                    }
                });


                angular.element(document).bind("click", function (e) {
                    $scope.$apply(function () {
                        $scope.contentDiv = false;
                    });
                });

                $scope.deleteData = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.showVal = "";
                    $scope.selectedData = null;
                };

            },
            templateUrl: "xn/template/select/xnFilterSelect.html"
        };
    })
    .directive("xnCreateSelect", function() {
        return {
            restrict:"AE",
            scope:{
                selectData:"=",
                selectedData: "=ngModel",
                name: "@",
                required: "@",
                createLink: "@",
                createInfo: "@"
            },
            require: "^ngModel",
            templateUrl: "xn/template/select/xnCreateSelect.html",
            link: function($scope, element, attrs, controller) {
                if(!$scope.selectData)
                    $scope.selectData = [];
                if(!$scope.required)
                    $scope.required = false;
                if(!$scope.name)
                    $scope.name = "selectName";

                $scope.count = 0;
                $scope.contentDiv = false;
                $scope.deleteShow = false;
                $scope.contentId = new Date().getTime() + "_id";

                $scope.goCreate = function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    window.location = $scope.createLink;
                }

                $scope.showContent = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.contentDiv = !$scope.contentDiv;
                };

                $scope.select = function(data,e){
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.selectedData = data;
                    $scope.showVal = data.name;
                    $scope.contentDiv = false;
                };

                angular.element(document).bind("click", function (e) {
                    $scope.$apply(function () {
                        $scope.contentDiv = false;
                    });
                });

                $scope.deleteData = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope.showVal = "";
                    $scope.selectedData = null;
                };

            }
        };
    })
    .directive("xnFilterInput", function() {
        return {
            restrict:"AE",
            scope:{
                selectList:"=",
                selectedData: "=ngModel",
                name: "@",
                required: "@"
            },
            require: "ngModel",
            templateUrl: "xn/template/select/xnFilterInput.html",
            link: function(scope, element, attres, controller) {
                scope.isShow=false;

                if(!scope.selectedData){
                    scope.selectedData ={"key":"",value:""};
                }
                if(!scope.required){
                    scope.required = false;
                }
                if(!scope.name){
                    scope.name = "selectName";
                }
                scope.xnFilterInputId = "inputId"+new Date().getTime();
                angular.element("#"+scope.xnFilterInputId+" input").live("keydown",function(e){
                    scope.selectedData.key="";
                });

                scope.select = function(data){
                    scope.selectedData =angular.copy(data);
                    angular.element("#"+scope.xnFilterInputId+" ul").hide();
                };
                scope.setListShow = function(){
                    angular.element("#"+scope.xnFilterInputId+" ul").show();
                };


                var getPar = function(tar) {
                    if(tar.id==scope.xnFilterInputId){
                        scope.count++;
                    }
                    if(tar.parentElement){
                        getPar(tar.parentElement);
                    }
                };
                angular.element(document).bind("click", function(e) {
                    scope.count = 0;
                    getPar(e.target);
                    if(scope.count == 0) {
                        angular.element("#"+scope.xnFilterInputId+" ul").hide();
                    }
                });
            }
        };
    })
    .directive("triggerSelect", [function() {
        var link = function($scope, element, attrs, ngModel, fn) {
            if(!ngModel) {
                return ;
            }

            var time = new Date().getTime();

            $scope.inputId = "input_"+time;

            $scope.lbShow = false;

            $scope.selectList = [];

            if(!$scope.data) {
                $scope.data = 0;
            }

            angular.element("#"+$scope.inputId).ready(function() {
                if("true"==$scope.readonly) {
                    angular.element("#"+$scope.inputId).attr("readonly", "");
                }
                angular.element("#"+$scope.inputId).attr("name", $scope.name);
            });

            if(!$scope.selectOption) {
                $scope.selectOption = [0, 0, 1];
            }

            if($scope.selectOption) {
                if(!$scope.selectOption[0]) {
                    $scope.selectOption[0] = 0;
                }
                if(!$scope.selectOption[1]) {
                    $scope.selectOption[1] = 0;
                }
                if(!$scope.selectOption[2]) {
                    $scope.selectOption[2] = 1;
                }
            }

            for(var i=0; i<$scope.selectOption[1]; i++) {
                if(0==i%$scope.selectOption[2]) {
                    $scope.selectList.push(i);
                }
            }

            $scope.add = function(e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.data = $scope.data-0;
                if($scope.selectOption[0]==$scope.selectOption[1]) {
                    $scope.data+=$scope.selectOption[2];
                } else {
                    if($scope.selectList && 0<$scope.selectList.length) {
                        if($scope.data<$scope.selectList[$scope.selectList.length-1]) {
                            $scope.data+=$scope.selectOption[2];
                        }
                    } else {
                        if($scope.data<$scope.selectOption[1]) {
                            $scope.data+=$scope.selectOption[2];
                        }
                    }
                }
            };

            $scope.subtract = function(e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.data = $scope.data-0;
                if($scope.data>$scope.selectOption[0]) {
                    if($scope.data>0) {
                        $scope.data-=$scope.selectOption[2];
                    }
                    if(0>=$scope.data && "true"==$scope.minus) {
                        $scope.data-=$scope.selectOption[2];
                    }
                }
                if($scope.data<=$scope.selectOption[0]) {
                    if("true"==$scope.minus) {
                        $scope.data-=$scope.selectOption[2];
                    }
                }
            };

            $scope.select = function(option, e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.data = option;
                $scope.lbShow=false;
            };

            angular.element(document).on("click", function() {
                $scope.$apply(function() {
                    $scope.lbShow=false;
                });
            });

            $scope.keepShow = function(e) {
                e.preventDefault();
                e.stopPropagation();
            };

            $scope.check = function() {
                if($scope.data>$scope.selectOption[1]-1) {
                    $scope.data = $scope.selectOption[1]-1;
                }
            };

            $scope.show = function(e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.lbShow=true;
            };
        };
        return {
            restrict: "AE",
            scope: {
                data: "=ngModel",
                selectOption: "=",
                name: "@",
                required: "@",
                minus: "@",
                readonly: "@"
            },
            require: "^ngModel",
            link: link,
            replace: true,
            template: "<div class='trigger_select_wrap' ng-click='keepShow($event)'>"
                +"  <div class='input_box'>"
                +"      <input type='text' id='{{inputId}}' ng-change='check()' ng-click='show($event)' ng-model='data' class='form-control' ng-require='{{required}}'>"
                +"      <div class='ctrl_wrap'><div class='icon icon-upward-1' ng-click='add($event)'></div><div class='icon icon-downward-1' ng-click='subtract($event)'></div></div>"
                +"  </div>"
                +"  <div class='lb' ng-if='selectList && selectList.length>0' ng-show='lbShow'>"
                +"      <ul>"
                +"          <li ng-repeat='selectData in selectList' ng-click='select(selectData, $event)'>{{selectData}}</li>"
                +"      </ul>"
                +"  </div>"
                +"</div>"
        };
    }])
    .filter("xnSearch", [
        function () {
            return function (arr, key) {
                if(!key) {
                    return arr;
                } else {
                    var list = [];
                    for(var i=0; i<arr.length; i++) {
                        if(arr[i].name.indexOf(key)>=0)
                            list.push(arr[i]);
                    }
                    return list;
                }
            };
        }
    ]);

var areaData=[
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
    {id:820000,name:"澳门特别行政区",pid:"86",type:"province",pinyin:"ao men te bie xing zheng qu",py:"amtbxzq",prefix:"a"},
    {id:110100,name:"北京市",pid:"110000",type:"city",pinyin:"bei jing shi",py:"bjs",prefix:"b"},
    {id:120100,name:"天津市",pid:"120000",type:"city",pinyin:"tian jin shi",py:"tjs",prefix:"t"},
    {id:130100,name:"石家庄市",pid:"130000",type:"city",pinyin:"shi jia zhuang shi",py:"sjzs",prefix:"s"},
    {id:130200,name:"唐山市",pid:"130000",type:"city",pinyin:"tang shan shi",py:"tss",prefix:"t"},
    {id:130300,name:"秦皇岛市",pid:"130000",type:"city",pinyin:"qin huang dao shi",py:"qhds",prefix:"q"},
    {id:130400,name:"邯郸市",pid:"130000",type:"city",pinyin:"han dan shi",py:"hds",prefix:"h"},
    {id:130500,name:"邢台市",pid:"130000",type:"city",pinyin:"xing tai shi",py:"xts",prefix:"x"},
    {id:130600,name:"保定市",pid:"130000",type:"city",pinyin:"bao ding shi",py:"bds",prefix:"b"},
    {id:130700,name:"张家口市",pid:"130000",type:"city",pinyin:"zhang jia kou shi",py:"zjks",prefix:"z"},
    {id:130800,name:"承德市",pid:"130000",type:"city",pinyin:"cheng de shi",py:"cds",prefix:"c"},
    {id:130900,name:"沧州市",pid:"130000",type:"city",pinyin:"cang zhou shi",py:"czs",prefix:"c"},
    {id:131000,name:"廊坊市",pid:"130000",type:"city",pinyin:"lang fang shi",py:"lfs",prefix:"l"},
    {id:131100,name:"衡水市",pid:"130000",type:"city",pinyin:"heng shui shi",py:"hss",prefix:"h"},
    {id:140100,name:"太原市",pid:"140000",type:"city",pinyin:"tai yuan shi",py:"tys",prefix:"t"},
    {id:140200,name:"大同市",pid:"140000",type:"city",pinyin:"da tong shi",py:"dts",prefix:"d"},
    {id:140300,name:"阳泉市",pid:"140000",type:"city",pinyin:"yang quan shi",py:"yqs",prefix:"y"},
    {id:140400,name:"长治市",pid:"140000",type:"city",pinyin:"chang zhi shi",py:"czs",prefix:"c"},
    {id:140500,name:"晋城市",pid:"140000",type:"city",pinyin:"jin cheng shi",py:"jcs",prefix:"j"},
    {id:140600,name:"朔州市",pid:"140000",type:"city",pinyin:"shuo zhou shi",py:"szs",prefix:"s"},
    {id:140700,name:"晋中市",pid:"140000",type:"city",pinyin:"jin zhong shi",py:"jzs",prefix:"j"},
    {id:140800,name:"运城市",pid:"140000",type:"city",pinyin:"yun cheng shi",py:"ycs",prefix:"y"},
    {id:140900,name:"忻州市",pid:"140000",type:"city",pinyin:"xin zhou shi",py:"xzs",prefix:"x"},
    {id:141000,name:"临汾市",pid:"140000",type:"city",pinyin:"lin fen shi",py:"lfs",prefix:"l"},
    {id:141100,name:"吕梁市",pid:"140000",type:"city",pinyin:"lv liang shi",py:"lls",prefix:"l"},
    {id:150100,name:"呼和浩特市",pid:"150000",type:"city",pinyin:"hu he hao te shi",py:"hhhts",prefix:"h"},
    {id:150200,name:"包头市",pid:"150000",type:"city",pinyin:"bao tou shi",py:"bts",prefix:"b"},
    {id:150300,name:"乌海市",pid:"150000",type:"city",pinyin:"wu hai shi",py:"whs",prefix:"w"},
    {id:150400,name:"赤峰市",pid:"150000",type:"city",pinyin:"chi feng shi",py:"cfs",prefix:"c"},
    {id:150500,name:"通辽市",pid:"150000",type:"city",pinyin:"tong liao shi",py:"tls",prefix:"t"},
    {id:150600,name:"鄂尔多斯市",pid:"150000",type:"city",pinyin:"e er duo si shi",py:"eedss",prefix:"e"},
    {id:150700,name:"呼伦贝尔市",pid:"150000",type:"city",pinyin:"hu lun bei er shi",py:"hlbes",prefix:"h"},
    {id:150800,name:"巴彦淖尔市",pid:"150000",type:"city",pinyin:"ba yan nao er shi",py:"bynes",prefix:"b"},
    {id:150900,name:"乌兰察布市",pid:"150000",type:"city",pinyin:"wu lan cha bu shi",py:"wlcbs",prefix:"w"},
    {id:152200,name:"兴安盟",pid:"150000",type:"city",pinyin:"xing an meng",py:"xam",prefix:"x"},
    {id:152500,name:"锡林郭勒盟",pid:"150000",type:"city",pinyin:"xi lin guo le meng",py:"xlglm",prefix:"x"},
    {id:152900,name:"阿拉善盟",pid:"150000",type:"city",pinyin:"a la shan meng",py:"alsm",prefix:"a"},
    {id:210100,name:"沈阳市",pid:"210000",type:"city",pinyin:"shen yang shi",py:"sys",prefix:"s"},
    {id:210200,name:"大连市",pid:"210000",type:"city",pinyin:"da lian shi",py:"dls",prefix:"d"},
    {id:210300,name:"鞍山市",pid:"210000",type:"city",pinyin:"an shan shi",py:"ass",prefix:"a"},
    {id:210400,name:"抚顺市",pid:"210000",type:"city",pinyin:"fu shun shi",py:"fss",prefix:"f"},
    {id:210500,name:"本溪市",pid:"210000",type:"city",pinyin:"ben xi shi",py:"bxs",prefix:"b"},
    {id:210600,name:"丹东市",pid:"210000",type:"city",pinyin:"dan dong shi",py:"dds",prefix:"d"},
    {id:210700,name:"锦州市",pid:"210000",type:"city",pinyin:"jin zhou shi",py:"jzs",prefix:"j"},
    {id:210800,name:"营口市",pid:"210000",type:"city",pinyin:"ying kou shi",py:"yks",prefix:"y"},
    {id:210900,name:"阜新市",pid:"210000",type:"city",pinyin:"fu xin shi",py:"fxs",prefix:"f"},
    {id:211000,name:"辽阳市",pid:"210000",type:"city",pinyin:"liao yang shi",py:"lys",prefix:"l"},
    {id:211100,name:"盘锦市",pid:"210000",type:"city",pinyin:"pan jin shi",py:"pjs",prefix:"p"},
    {id:211200,name:"铁岭市",pid:"210000",type:"city",pinyin:"tie ling shi",py:"tls",prefix:"t"},
    {id:211300,name:"朝阳市",pid:"210000",type:"city",pinyin:"chao yang shi",py:"cys",prefix:"c"},
    {id:211400,name:"葫芦岛市",pid:"210000",type:"city",pinyin:"hu lu dao shi",py:"hlds",prefix:"h"},
    {id:220100,name:"长春市",pid:"220000",type:"city",pinyin:"chang chun shi",py:"ccs",prefix:"c"},
    {id:220200,name:"吉林市",pid:"220000",type:"city",pinyin:"ji lin shi",py:"jls",prefix:"j"},
    {id:220300,name:"四平市",pid:"220000",type:"city",pinyin:"si ping shi",py:"sps",prefix:"s"},
    {id:220400,name:"辽源市",pid:"220000",type:"city",pinyin:"liao yuan shi",py:"lys",prefix:"l"},
    {id:220500,name:"通化市",pid:"220000",type:"city",pinyin:"tong hua shi",py:"ths",prefix:"t"},
    {id:220600,name:"白山市",pid:"220000",type:"city",pinyin:"bai shan shi",py:"bss",prefix:"b"},
    {id:220700,name:"松原市",pid:"220000",type:"city",pinyin:"song yuan shi",py:"sys",prefix:"s"},
    {id:220800,name:"白城市",pid:"220000",type:"city",pinyin:"bai cheng shi",py:"bcs",prefix:"b"},
    {id:222400,name:"延边朝鲜族自治州",pid:"220000",type:"city",pinyin:"yan bian chao xian zu zi zhi zhou",py:"ybcxzzzz",prefix:"y"},
    {id:230100,name:"哈尔滨市",pid:"230000",type:"city",pinyin:"ha er bin shi",py:"hebs",prefix:"h"},
    {id:230200,name:"齐齐哈尔市",pid:"230000",type:"city",pinyin:"qi qi ha er shi",py:"qqhes",prefix:"q"},
    {id:230300,name:"鸡西市",pid:"230000",type:"city",pinyin:"ji xi shi",py:"jxs",prefix:"j"},
    {id:230400,name:"鹤岗市",pid:"230000",type:"city",pinyin:"he gang shi",py:"hgs",prefix:"h"},
    {id:230500,name:"双鸭山市",pid:"230000",type:"city",pinyin:"shuang ya shan shi",py:"syss",prefix:"s"},
    {id:230600,name:"大庆市",pid:"230000",type:"city",pinyin:"da qing shi",py:"dqs",prefix:"d"},
    {id:230700,name:"伊春市",pid:"230000",type:"city",pinyin:"yi chun shi",py:"ycs",prefix:"y"},
    {id:230800,name:"佳木斯市",pid:"230000",type:"city",pinyin:"jia mu si shi",py:"jmss",prefix:"j"},
    {id:230900,name:"七台河市",pid:"230000",type:"city",pinyin:"qi tai he shi",py:"qths",prefix:"q"},
    {id:231000,name:"牡丹江市",pid:"230000",type:"city",pinyin:"mu dan jiang shi",py:"mdjs",prefix:"m"},
    {id:231100,name:"黑河市",pid:"230000",type:"city",pinyin:"hei he shi",py:"hhs",prefix:"h"},
    {id:231200,name:"绥化市",pid:"230000",type:"city",pinyin:"sui hua shi",py:"shs",prefix:"s"},
    {id:232700,name:"大兴安岭地区",pid:"230000",type:"city",pinyin:"da xing an ling di qu",py:"dxaldq",prefix:"d"},
    {id:310100,name:"上海市",pid:"310000",type:"city",pinyin:"shang hai shi",py:"shs",prefix:"s"},
    {id:320100,name:"南京市",pid:"320000",type:"city",pinyin:"nan jing shi",py:"njs",prefix:"n"},
    {id:320200,name:"无锡市",pid:"320000",type:"city",pinyin:"wu xi shi",py:"wxs",prefix:"w"},
    {id:320300,name:"徐州市",pid:"320000",type:"city",pinyin:"xu zhou shi",py:"xzs",prefix:"x"},
    {id:320400,name:"常州市",pid:"320000",type:"city",pinyin:"chang zhou shi",py:"czs",prefix:"c"},
    {id:320500,name:"苏州市",pid:"320000",type:"city",pinyin:"su zhou shi",py:"szs",prefix:"s"},
    {id:320600,name:"南通市",pid:"320000",type:"city",pinyin:"nan tong shi",py:"nts",prefix:"n"},
    {id:320700,name:"连云港市",pid:"320000",type:"city",pinyin:"lian yun gang shi",py:"lygs",prefix:"l"},
    {id:320800,name:"淮安市",pid:"320000",type:"city",pinyin:"huai an shi",py:"has",prefix:"h"},
    {id:320900,name:"盐城市",pid:"320000",type:"city",pinyin:"yan cheng shi",py:"ycs",prefix:"y"},
    {id:321000,name:"扬州市",pid:"320000",type:"city",pinyin:"yang zhou shi",py:"yzs",prefix:"y"},
    {id:321100,name:"镇江市",pid:"320000",type:"city",pinyin:"zhen jiang shi",py:"zjs",prefix:"z"},
    {id:321200,name:"泰州市",pid:"320000",type:"city",pinyin:"tai zhou shi",py:"tzs",prefix:"t"},
    {id:321300,name:"宿迁市",pid:"320000",type:"city",pinyin:"su qian shi",py:"sqs",prefix:"s"},
    {id:330100,name:"杭州市",pid:"330000",type:"city",pinyin:"hang zhou shi",py:"hzs",prefix:"h"},
    {id:330200,name:"宁波市",pid:"330000",type:"city",pinyin:"ning bo shi",py:"nbs",prefix:"n"},
    {id:330300,name:"温州市",pid:"330000",type:"city",pinyin:"wen zhou shi",py:"wzs",prefix:"w"},
    {id:330400,name:"嘉兴市",pid:"330000",type:"city",pinyin:"jia xing shi",py:"jxs",prefix:"j"},
    {id:330500,name:"湖州市",pid:"330000",type:"city",pinyin:"hu zhou shi",py:"hzs",prefix:"h"},
    {id:330600,name:"绍兴市",pid:"330000",type:"city",pinyin:"shao xing shi",py:"sxs",prefix:"s"},
    {id:330700,name:"金华市",pid:"330000",type:"city",pinyin:"jin hua shi",py:"jhs",prefix:"j"},
    {id:330800,name:"衢州市",pid:"330000",type:"city",pinyin:"qu zhou shi",py:"qzs",prefix:"q"},
    {id:330900,name:"舟山市",pid:"330000",type:"city",pinyin:"zhou shan shi",py:"zss",prefix:"z"},
    {id:331000,name:"台州市",pid:"330000",type:"city",pinyin:"tai zhou shi",py:"tzs",prefix:"t"},
    {id:331100,name:"丽水市",pid:"330000",type:"city",pinyin:"li shui shi",py:"lss",prefix:"l"},
    {id:340100,name:"合肥市",pid:"340000",type:"city",pinyin:"he fei shi",py:"hfs",prefix:"h"},
    {id:340200,name:"芜湖市",pid:"340000",type:"city",pinyin:"wu hu shi",py:"whs",prefix:"w"},
    {id:340300,name:"蚌埠市",pid:"340000",type:"city",pinyin:"beng bu shi",py:"bbs",prefix:"b"},
    {id:340400,name:"淮南市",pid:"340000",type:"city",pinyin:"huai nan shi",py:"hns",prefix:"h"},
    {id:340500,name:"马鞍山市",pid:"340000",type:"city",pinyin:"ma an shan shi",py:"mass",prefix:"m"},
    {id:340600,name:"淮北市",pid:"340000",type:"city",pinyin:"huai bei shi",py:"hbs",prefix:"h"},
    {id:340700,name:"铜陵市",pid:"340000",type:"city",pinyin:"tong ling shi",py:"tls",prefix:"t"},
    {id:340800,name:"安庆市",pid:"340000",type:"city",pinyin:"an qing shi",py:"aqs",prefix:"a"},
    {id:341000,name:"黄山市",pid:"340000",type:"city",pinyin:"huang shan shi",py:"hss",prefix:"h"},
    {id:341100,name:"滁州市",pid:"340000",type:"city",pinyin:"chu zhou shi",py:"czs",prefix:"c"},
    {id:341200,name:"阜阳市",pid:"340000",type:"city",pinyin:"fu yang shi",py:"fys",prefix:"f"},
    {id:341300,name:"宿州市",pid:"340000",type:"city",pinyin:"su zhou shi",py:"szs",prefix:"s"},
    {id:341500,name:"六安市",pid:"340000",type:"city",pinyin:"liu an shi",py:"las",prefix:"l"},
    {id:341600,name:"亳州市",pid:"340000",type:"city",pinyin:"bo zhou shi",py:"bzs",prefix:"b"},
    {id:341700,name:"池州市",pid:"340000",type:"city",pinyin:"chi zhou shi",py:"czs",prefix:"c"},
    {id:341800,name:"宣城市",pid:"340000",type:"city",pinyin:"xuan cheng shi",py:"xcs",prefix:"x"},
    {id:350100,name:"福州市",pid:"350000",type:"city",pinyin:"fu zhou shi",py:"fzs",prefix:"f"},
    {id:350200,name:"厦门市",pid:"350000",type:"city",pinyin:"xia men shi",py:"xms",prefix:"x"},
    {id:350300,name:"莆田市",pid:"350000",type:"city",pinyin:"pu tian shi",py:"pts",prefix:"p"},
    {id:350400,name:"三明市",pid:"350000",type:"city",pinyin:"san ming shi",py:"sms",prefix:"s"},
    {id:350500,name:"泉州市",pid:"350000",type:"city",pinyin:"quan zhou shi",py:"qzs",prefix:"q"},
    {id:350600,name:"漳州市",pid:"350000",type:"city",pinyin:"zhang zhou shi",py:"zzs",prefix:"z"},
    {id:350700,name:"南平市",pid:"350000",type:"city",pinyin:"nan ping shi",py:"nps",prefix:"n"},
    {id:350800,name:"龙岩市",pid:"350000",type:"city",pinyin:"long yan shi",py:"lys",prefix:"l"},
    {id:350900,name:"宁德市",pid:"350000",type:"city",pinyin:"ning de shi",py:"nds",prefix:"n"},
    {id:360100,name:"南昌市",pid:"360000",type:"city",pinyin:"nan chang shi",py:"ncs",prefix:"n"},
    {id:360200,name:"景德镇市",pid:"360000",type:"city",pinyin:"jing de zhen shi",py:"jdzs",prefix:"j"},
    {id:360300,name:"萍乡市",pid:"360000",type:"city",pinyin:"ping xiang shi",py:"pxs",prefix:"p"},
    {id:360400,name:"九江市",pid:"360000",type:"city",pinyin:"jiu jiang shi",py:"jjs",prefix:"j"},
    {id:360500,name:"新余市",pid:"360000",type:"city",pinyin:"xin yu shi",py:"xys",prefix:"x"},
    {id:360600,name:"鹰潭市",pid:"360000",type:"city",pinyin:"ying tan shi",py:"yts",prefix:"y"},
    {id:360700,name:"赣州市",pid:"360000",type:"city",pinyin:"gan zhou shi",py:"gzs",prefix:"g"},
    {id:360800,name:"吉安市",pid:"360000",type:"city",pinyin:"ji an shi",py:"jas",prefix:"j"},
    {id:360900,name:"宜春市",pid:"360000",type:"city",pinyin:"yi chun shi",py:"ycs",prefix:"y"},
    {id:361000,name:"抚州市",pid:"360000",type:"city",pinyin:"fu zhou shi",py:"fzs",prefix:"f"},
    {id:361100,name:"上饶市",pid:"360000",type:"city",pinyin:"shang rao shi",py:"srs",prefix:"s"},
    {id:370100,name:"济南市",pid:"370000",type:"city",pinyin:"ji nan shi",py:"jns",prefix:"j"},
    {id:370200,name:"青岛市",pid:"370000",type:"city",pinyin:"qing dao shi",py:"qds",prefix:"q"},
    {id:370300,name:"淄博市",pid:"370000",type:"city",pinyin:"zi bo shi",py:"zbs",prefix:"z"},
    {id:370400,name:"枣庄市",pid:"370000",type:"city",pinyin:"zao zhuang shi",py:"zzs",prefix:"z"},
    {id:370500,name:"东营市",pid:"370000",type:"city",pinyin:"dong ying shi",py:"dys",prefix:"d"},
    {id:370600,name:"烟台市",pid:"370000",type:"city",pinyin:"yan tai shi",py:"yts",prefix:"y"},
    {id:370700,name:"潍坊市",pid:"370000",type:"city",pinyin:"wei fang shi",py:"wfs",prefix:"w"},
    {id:370800,name:"济宁市",pid:"370000",type:"city",pinyin:"ji ning shi",py:"jns",prefix:"j"},
    {id:370900,name:"泰安市",pid:"370000",type:"city",pinyin:"tai an shi",py:"tas",prefix:"t"},
    {id:371000,name:"威海市",pid:"370000",type:"city",pinyin:"wei hai shi",py:"whs",prefix:"w"},
    {id:371100,name:"日照市",pid:"370000",type:"city",pinyin:"ri zhao shi",py:"rzs",prefix:"r"},
    {id:371200,name:"莱芜市",pid:"370000",type:"city",pinyin:"lai wu shi",py:"lws",prefix:"l"},
    {id:371300,name:"临沂市",pid:"370000",type:"city",pinyin:"lin yi shi",py:"lys",prefix:"l"},
    {id:371400,name:"德州市",pid:"370000",type:"city",pinyin:"de zhou shi",py:"dzs",prefix:"d"},
    {id:371500,name:"聊城市",pid:"370000",type:"city",pinyin:"liao cheng shi",py:"lcs",prefix:"l"},
    {id:371600,name:"滨州市",pid:"370000",type:"city",pinyin:"bin zhou shi",py:"bzs",prefix:"b"},
    {id:371700,name:"菏泽市",pid:"370000",type:"city",pinyin:"he ze shi",py:"hzs",prefix:"h"},
    {id:410100,name:"郑州市",pid:"410000",type:"city",pinyin:"zheng zhou shi",py:"zzs",prefix:"z"},
    {id:410200,name:"开封市",pid:"410000",type:"city",pinyin:"kai feng shi",py:"kfs",prefix:"k"},
    {id:410300,name:"洛阳市",pid:"410000",type:"city",pinyin:"luo yang shi",py:"lys",prefix:"l"},
    {id:410400,name:"平顶山市",pid:"410000",type:"city",pinyin:"ping ding shan shi",py:"pdss",prefix:"p"},
    {id:410500,name:"安阳市",pid:"410000",type:"city",pinyin:"an yang shi",py:"ays",prefix:"a"},
    {id:410600,name:"鹤壁市",pid:"410000",type:"city",pinyin:"he bi shi",py:"hbs",prefix:"h"},
    {id:410700,name:"新乡市",pid:"410000",type:"city",pinyin:"xin xiang shi",py:"xxs",prefix:"x"},
    {id:410800,name:"焦作市",pid:"410000",type:"city",pinyin:"jiao zuo shi",py:"jzs",prefix:"j"},
    {id:410900,name:"濮阳市",pid:"410000",type:"city",pinyin:"pu yang shi",py:"pys",prefix:"p"},
    {id:411000,name:"许昌市",pid:"410000",type:"city",pinyin:"xu chang shi",py:"xcs",prefix:"x"},
    {id:411100,name:"漯河市",pid:"410000",type:"city",pinyin:"luo he shi",py:"lhs",prefix:"l"},
    {id:411200,name:"三门峡市",pid:"410000",type:"city",pinyin:"san men xia shi",py:"smxs",prefix:"s"},
    {id:411300,name:"南阳市",pid:"410000",type:"city",pinyin:"nan yang shi",py:"nys",prefix:"n"},
    {id:411400,name:"商丘市",pid:"410000",type:"city",pinyin:"shang qiu shi",py:"sqs",prefix:"s"},
    {id:411500,name:"信阳市",pid:"410000",type:"city",pinyin:"xin yang shi",py:"xys",prefix:"x"},
    {id:411600,name:"周口市",pid:"410000",type:"city",pinyin:"zhou kou shi",py:"zks",prefix:"z"},
    {id:411700,name:"驻马店市",pid:"410000",type:"city",pinyin:"zhu ma dian shi",py:"zmds",prefix:"z"},
    {id:419000,name:"省直辖县级行政区划",pid:"410000",type:"city",pinyin:"sheng zhi xia xian ji xing zheng qu hua",py:"szxxjxzqh",prefix:"s"},
    {id:420100,name:"武汉市",pid:"420000",type:"city",pinyin:"wu han shi",py:"whs",prefix:"w"},
    {id:420200,name:"黄石市",pid:"420000",type:"city",pinyin:"huang shi shi",py:"hss",prefix:"h"},
    {id:420300,name:"十堰市",pid:"420000",type:"city",pinyin:"shi yan shi",py:"sys",prefix:"s"},
    {id:420500,name:"宜昌市",pid:"420000",type:"city",pinyin:"yi chang shi",py:"ycs",prefix:"y"},
    {id:420600,name:"襄阳市",pid:"420000",type:"city",pinyin:"xiang yang shi",py:"xys",prefix:"x"},
    {id:420700,name:"鄂州市",pid:"420000",type:"city",pinyin:"e zhou shi",py:"ezs",prefix:"e"},
    {id:420800,name:"荆门市",pid:"420000",type:"city",pinyin:"jing men shi",py:"jms",prefix:"j"},
    {id:420900,name:"孝感市",pid:"420000",type:"city",pinyin:"xiao gan shi",py:"xgs",prefix:"x"},
    {id:421000,name:"荆州市",pid:"420000",type:"city",pinyin:"jing zhou shi",py:"jzs",prefix:"j"},
    {id:421100,name:"黄冈市",pid:"420000",type:"city",pinyin:"huang gang shi",py:"hgs",prefix:"h"},
    {id:421200,name:"咸宁市",pid:"420000",type:"city",pinyin:"xian ning shi",py:"xns",prefix:"x"},
    {id:421300,name:"随州市",pid:"420000",type:"city",pinyin:"sui zhou shi",py:"szs",prefix:"s"},
    {id:422800,name:"恩施土家族苗族自治州",pid:"420000",type:"city",pinyin:"en shi tu jia zu miao zu zi zhi zhou",py:"estjzmzzzz",prefix:"e"},
    {id:429000,name:"省直辖县级行政区划",pid:"420000",type:"city",pinyin:"sheng zhi xia xian ji xing zheng qu hua",py:"szxxjxzqh",prefix:"s"},
    {id:430100,name:"长沙市",pid:"430000",type:"city",pinyin:"chang sha shi",py:"css",prefix:"c"},
    {id:430200,name:"株洲市",pid:"430000",type:"city",pinyin:"zhu zhou shi",py:"zzs",prefix:"z"},
    {id:430300,name:"湘潭市",pid:"430000",type:"city",pinyin:"xiang tan shi",py:"xts",prefix:"x"},
    {id:430400,name:"衡阳市",pid:"430000",type:"city",pinyin:"heng yang shi",py:"hys",prefix:"h"},
    {id:430500,name:"邵阳市",pid:"430000",type:"city",pinyin:"shao yang shi",py:"sys",prefix:"s"},
    {id:430600,name:"岳阳市",pid:"430000",type:"city",pinyin:"yue yang shi",py:"yys",prefix:"y"},
    {id:430700,name:"常德市",pid:"430000",type:"city",pinyin:"chang de shi",py:"cds",prefix:"c"},
    {id:430800,name:"张家界市",pid:"430000",type:"city",pinyin:"zhang jia jie shi",py:"zjjs",prefix:"z"},
    {id:430900,name:"益阳市",pid:"430000",type:"city",pinyin:"yi yang shi",py:"yys",prefix:"y"},
    {id:431000,name:"郴州市",pid:"430000",type:"city",pinyin:"chen zhou shi",py:"czs",prefix:"c"},
    {id:431100,name:"永州市",pid:"430000",type:"city",pinyin:"yong zhou shi",py:"yzs",prefix:"y"},
    {id:431200,name:"怀化市",pid:"430000",type:"city",pinyin:"huai hua shi",py:"hhs",prefix:"h"},
    {id:431300,name:"娄底市",pid:"430000",type:"city",pinyin:"lou di shi",py:"lds",prefix:"l"},
    {id:433100,name:"湘西土家族苗族自治州",pid:"430000",type:"city",pinyin:"xiang xi tu jia zu miao zu zi zhi zhou",py:"xxtjzmzzzz",prefix:"x"},
    {id:440100,name:"广州市",pid:"440000",type:"city",pinyin:"guang zhou shi",py:"gzs",prefix:"g"},
    {id:440200,name:"韶关市",pid:"440000",type:"city",pinyin:"shao guan shi",py:"sgs",prefix:"s"},
    {id:440300,name:"深圳市",pid:"440000",type:"city",pinyin:"shen zhen shi",py:"szs",prefix:"s"},
    {id:440400,name:"珠海市",pid:"440000",type:"city",pinyin:"zhu hai shi",py:"zhs",prefix:"z"},
    {id:440500,name:"汕头市",pid:"440000",type:"city",pinyin:"shan tou shi",py:"sts",prefix:"s"},
    {id:440600,name:"佛山市",pid:"440000",type:"city",pinyin:"fo shan shi",py:"fss",prefix:"f"},
    {id:440700,name:"江门市",pid:"440000",type:"city",pinyin:"jiang men shi",py:"jms",prefix:"j"},
    {id:440800,name:"湛江市",pid:"440000",type:"city",pinyin:"zhan jiang shi",py:"zjs",prefix:"z"},
    {id:440900,name:"茂名市",pid:"440000",type:"city",pinyin:"mao ming shi",py:"mms",prefix:"m"},
    {id:441200,name:"肇庆市",pid:"440000",type:"city",pinyin:"zhao qing shi",py:"zqs",prefix:"z"},
    {id:441300,name:"惠州市",pid:"440000",type:"city",pinyin:"hui zhou shi",py:"hzs",prefix:"h"},
    {id:441400,name:"梅州市",pid:"440000",type:"city",pinyin:"mei zhou shi",py:"mzs",prefix:"m"},
    {id:441500,name:"汕尾市",pid:"440000",type:"city",pinyin:"shan wei shi",py:"sws",prefix:"s"},
    {id:441600,name:"河源市",pid:"440000",type:"city",pinyin:"he yuan shi",py:"hys",prefix:"h"},
    {id:441700,name:"阳江市",pid:"440000",type:"city",pinyin:"yang jiang shi",py:"yjs",prefix:"y"},
    {id:441800,name:"清远市",pid:"440000",type:"city",pinyin:"qing yuan shi",py:"qys",prefix:"q"},
    {id:441900,name:"东莞市",pid:"440000",type:"city",pinyin:"dong guan shi",py:"dgs",prefix:"d"},
    {id:442000,name:"中山市",pid:"440000",type:"city",pinyin:"zhong shan shi",py:"zss",prefix:"z"},
    {id:445100,name:"潮州市",pid:"440000",type:"city",pinyin:"chao zhou shi",py:"czs",prefix:"c"},
    {id:445200,name:"揭阳市",pid:"440000",type:"city",pinyin:"jie yang shi",py:"jys",prefix:"j"},
    {id:445300,name:"云浮市",pid:"440000",type:"city",pinyin:"yun fu shi",py:"yfs",prefix:"y"},
    {id:450100,name:"南宁市",pid:"450000",type:"city",pinyin:"nan ning shi",py:"nns",prefix:"n"},
    {id:450200,name:"柳州市",pid:"450000",type:"city",pinyin:"liu zhou shi",py:"lzs",prefix:"l"},
    {id:450300,name:"桂林市",pid:"450000",type:"city",pinyin:"gui lin shi",py:"gls",prefix:"g"},
    {id:450400,name:"梧州市",pid:"450000",type:"city",pinyin:"wu zhou shi",py:"wzs",prefix:"w"},
    {id:450500,name:"北海市",pid:"450000",type:"city",pinyin:"bei hai shi",py:"bhs",prefix:"b"},
    {id:450600,name:"防城港市",pid:"450000",type:"city",pinyin:"fang cheng gang shi",py:"fcgs",prefix:"f"},
    {id:450700,name:"钦州市",pid:"450000",type:"city",pinyin:"qin zhou shi",py:"qzs",prefix:"q"},
    {id:450800,name:"贵港市",pid:"450000",type:"city",pinyin:"gui gang shi",py:"ggs",prefix:"g"},
    {id:450900,name:"玉林市",pid:"450000",type:"city",pinyin:"yu lin shi",py:"yls",prefix:"y"},
    {id:451000,name:"百色市",pid:"450000",type:"city",pinyin:"bai se shi",py:"bss",prefix:"b"},
    {id:451100,name:"贺州市",pid:"450000",type:"city",pinyin:"he zhou shi",py:"hzs",prefix:"h"},
    {id:451200,name:"河池市",pid:"450000",type:"city",pinyin:"he chi shi",py:"hcs",prefix:"h"},
    {id:451300,name:"来宾市",pid:"450000",type:"city",pinyin:"lai bin shi",py:"lbs",prefix:"l"},
    {id:451400,name:"崇左市",pid:"450000",type:"city",pinyin:"chong zuo shi",py:"czs",prefix:"c"},
    {id:460100,name:"海口市",pid:"460000",type:"city",pinyin:"hai kou shi",py:"hks",prefix:"h"},
    {id:460200,name:"三亚市",pid:"460000",type:"city",pinyin:"san ya shi",py:"sys",prefix:"s"},
    {id:460300,name:"三沙市",pid:"460000",type:"city",pinyin:"san sha shi",py:"sss",prefix:"s"},
    {id:469000,name:"省直辖县级行政区划",pid:"460000",type:"city",pinyin:"sheng zhi xia xian ji xing zheng qu hua",py:"szxxjxzqh",prefix:"s"},
    {id:500100,name:"重庆市",pid:"500000",type:"city",pinyin:"chong qing shi",py:"cqs",prefix:"c"},
    {id:510100,name:"成都市",pid:"510000",type:"city",pinyin:"cheng dou shi",py:"cds",prefix:"c"},
    {id:510300,name:"自贡市",pid:"510000",type:"city",pinyin:"zi gong shi",py:"zgs",prefix:"z"},
    {id:510400,name:"攀枝花市",pid:"510000",type:"city",pinyin:"pan zhi hua shi",py:"pzhs",prefix:"p"},
    {id:510500,name:"泸州市",pid:"510000",type:"city",pinyin:"lu zhou shi",py:"lzs",prefix:"l"},
    {id:510600,name:"德阳市",pid:"510000",type:"city",pinyin:"de yang shi",py:"dys",prefix:"d"},
    {id:510700,name:"绵阳市",pid:"510000",type:"city",pinyin:"mian yang shi",py:"mys",prefix:"m"},
    {id:510800,name:"广元市",pid:"510000",type:"city",pinyin:"guang yuan shi",py:"gys",prefix:"g"},
    {id:510900,name:"遂宁市",pid:"510000",type:"city",pinyin:"sui ning shi",py:"sns",prefix:"s"},
    {id:511000,name:"内江市",pid:"510000",type:"city",pinyin:"nei jiang shi",py:"njs",prefix:"n"},
    {id:511100,name:"乐山市",pid:"510000",type:"city",pinyin:"le shan shi",py:"lss",prefix:"l"},
    {id:511300,name:"南充市",pid:"510000",type:"city",pinyin:"nan chong shi",py:"ncs",prefix:"n"},
    {id:511400,name:"眉山市",pid:"510000",type:"city",pinyin:"mei shan shi",py:"mss",prefix:"m"},
    {id:511500,name:"宜宾市",pid:"510000",type:"city",pinyin:"yi bin shi",py:"ybs",prefix:"y"},
    {id:511600,name:"广安市",pid:"510000",type:"city",pinyin:"guang an shi",py:"gas",prefix:"g"},
    {id:511700,name:"达州市",pid:"510000",type:"city",pinyin:"da zhou shi",py:"dzs",prefix:"d"},
    {id:511800,name:"雅安市",pid:"510000",type:"city",pinyin:"ya an shi",py:"yas",prefix:"y"},
    {id:511900,name:"巴中市",pid:"510000",type:"city",pinyin:"ba zhong shi",py:"bzs",prefix:"b"},
    {id:512000,name:"资阳市",pid:"510000",type:"city",pinyin:"zi yang shi",py:"zys",prefix:"z"},
    {id:513200,name:"阿坝藏族羌族自治州",pid:"510000",type:"city",pinyin:"a ba zang zu qiang zu zi zhi zhou",py:"abzzqzzzz",prefix:"a"},
    {id:513300,name:"甘孜藏族自治州",pid:"510000",type:"city",pinyin:"gan zi zang zu zi zhi zhou",py:"gzzzzzz",prefix:"g"},
    {id:513400,name:"凉山彝族自治州",pid:"510000",type:"city",pinyin:"liang shan yi zu zi zhi zhou",py:"lsyzzzz",prefix:"l"},
    {id:520100,name:"贵阳市",pid:"520000",type:"city",pinyin:"gui yang shi",py:"gys",prefix:"g"},
    {id:520200,name:"六盘水市",pid:"520000",type:"city",pinyin:"liu pan shui shi",py:"lpss",prefix:"l"},
    {id:520300,name:"遵义市",pid:"520000",type:"city",pinyin:"zun yi shi",py:"zys",prefix:"z"},
    {id:520400,name:"安顺市",pid:"520000",type:"city",pinyin:"an shun shi",py:"ass",prefix:"a"},
    {id:520500,name:"毕节市",pid:"520000",type:"city",pinyin:"bi jie shi",py:"bjs",prefix:"b"},
    {id:520600,name:"铜仁市",pid:"520000",type:"city",pinyin:"tong ren shi",py:"trs",prefix:"t"},
    {id:522300,name:"黔西南布依族苗族自治州",pid:"520000",type:"city",pinyin:"qian xi nan bu yi zu miao zu zi zhi zhou",py:"qxnbyzmzzzz",prefix:"q"},
    {id:522600,name:"黔东南苗族侗族自治州",pid:"520000",type:"city",pinyin:"qian dong nan miao zu dong zu zi zhi zhou",py:"qdnmzdzzzz",prefix:"q"},
    {id:522700,name:"黔南布依族苗族自治州",pid:"520000",type:"city",pinyin:"qian nan bu yi zu miao zu zi zhi zhou",py:"qnbyzmzzzz",prefix:"q"},
    {id:530100,name:"昆明市",pid:"530000",type:"city",pinyin:"kun ming shi",py:"kms",prefix:"k"},
    {id:530300,name:"曲靖市",pid:"530000",type:"city",pinyin:"qu jing shi",py:"qjs",prefix:"q"},
    {id:530400,name:"玉溪市",pid:"530000",type:"city",pinyin:"yu xi shi",py:"yxs",prefix:"y"},
    {id:530500,name:"保山市",pid:"530000",type:"city",pinyin:"bao shan shi",py:"bss",prefix:"b"},
    {id:530600,name:"昭通市",pid:"530000",type:"city",pinyin:"zhao tong shi",py:"zts",prefix:"z"},
    {id:530700,name:"丽江市",pid:"530000",type:"city",pinyin:"li jiang shi",py:"ljs",prefix:"l"},
    {id:530800,name:"普洱市",pid:"530000",type:"city",pinyin:"pu er shi",py:"pes",prefix:"p"},
    {id:530900,name:"临沧市",pid:"530000",type:"city",pinyin:"lin cang shi",py:"lcs",prefix:"l"},
    {id:532300,name:"楚雄彝族自治州",pid:"530000",type:"city",pinyin:"chu xiong yi zu zi zhi zhou",py:"cxyzzzz",prefix:"c"},
    {id:532500,name:"红河哈尼族彝族自治州",pid:"530000",type:"city",pinyin:"hong he ha ni zu yi zu zi zhi zhou",py:"hhhnzyzzzz",prefix:"h"},
    {id:532600,name:"文山壮族苗族自治州",pid:"530000",type:"city",pinyin:"wen shan zhuang zu miao zu zi zhi zhou",py:"wszzmzzzz",prefix:"w"},
    {id:532800,name:"西双版纳傣族自治州",pid:"530000",type:"city",pinyin:"xi shuang ban na dai zu zi zhi zhou",py:"xsbndzzzz",prefix:"x"},
    {id:532900,name:"大理白族自治州",pid:"530000",type:"city",pinyin:"da li bai zu zi zhi zhou",py:"dlbzzzz",prefix:"d"},
    {id:533100,name:"德宏傣族景颇族自治州",pid:"530000",type:"city",pinyin:"de hong dai zu jing po zu zi zhi zhou",py:"dhdzjpzzzz",prefix:"d"},
    {id:533300,name:"怒江傈僳族自治州",pid:"530000",type:"city",pinyin:"nu jiang li su zu zi zhi zhou",py:"njlszzzz",prefix:"n"},
    {id:533400,name:"迪庆藏族自治州",pid:"530000",type:"city",pinyin:"di qing zang zu zi zhi zhou",py:"dqzzzzz",prefix:"d"},
    {id:540100,name:"拉萨市",pid:"540000",type:"city",pinyin:"la sa shi",py:"lss",prefix:"l"},
    {id:542100,name:"昌都地区",pid:"540000",type:"city",pinyin:"chang dou di qu",py:"cddq",prefix:"c"},
    {id:542200,name:"山南地区",pid:"540000",type:"city",pinyin:"shan nan di qu",py:"sndq",prefix:"s"},
    {id:542300,name:"日喀则地区",pid:"540000",type:"city",pinyin:"ri ka ze di qu",py:"rkzdq",prefix:"r"},
    {id:542400,name:"那曲地区",pid:"540000",type:"city",pinyin:"na qu di qu",py:"nqdq",prefix:"n"},
    {id:542500,name:"阿里地区",pid:"540000",type:"city",pinyin:"a li di qu",py:"aldq",prefix:"a"},
    {id:542600,name:"林芝地区",pid:"540000",type:"city",pinyin:"lin zhi di qu",py:"lzdq",prefix:"l"},
    {id:610100,name:"西安市",pid:"610000",type:"city",pinyin:"xi an shi",py:"xas",prefix:"x"},
    {id:610200,name:"铜川市",pid:"610000",type:"city",pinyin:"tong chuan shi",py:"tcs",prefix:"t"},
    {id:610300,name:"宝鸡市",pid:"610000",type:"city",pinyin:"bao ji shi",py:"bjs",prefix:"b"},
    {id:610400,name:"咸阳市",pid:"610000",type:"city",pinyin:"xian yang shi",py:"xys",prefix:"x"},
    {id:610500,name:"渭南市",pid:"610000",type:"city",pinyin:"wei nan shi",py:"wns",prefix:"w"},
    {id:610600,name:"延安市",pid:"610000",type:"city",pinyin:"yan an shi",py:"yas",prefix:"y"},
    {id:610700,name:"汉中市",pid:"610000",type:"city",pinyin:"han zhong shi",py:"hzs",prefix:"h"},
    {id:610800,name:"榆林市",pid:"610000",type:"city",pinyin:"yu lin shi",py:"yls",prefix:"y"},
    {id:610900,name:"安康市",pid:"610000",type:"city",pinyin:"an kang shi",py:"aks",prefix:"a"},
    {id:611000,name:"商洛市",pid:"610000",type:"city",pinyin:"shang luo shi",py:"sls",prefix:"s"},
    {id:620100,name:"兰州市",pid:"620000",type:"city",pinyin:"lan zhou shi",py:"lzs",prefix:"l"},
    {id:620200,name:"嘉峪关市",pid:"620000",type:"city",pinyin:"jia yu guan shi",py:"jygs",prefix:"j"},
    {id:620300,name:"金昌市",pid:"620000",type:"city",pinyin:"jin chang shi",py:"jcs",prefix:"j"},
    {id:620400,name:"白银市",pid:"620000",type:"city",pinyin:"bai yin shi",py:"bys",prefix:"b"},
    {id:620500,name:"天水市",pid:"620000",type:"city",pinyin:"tian shui shi",py:"tss",prefix:"t"},
    {id:620600,name:"武威市",pid:"620000",type:"city",pinyin:"wu wei shi",py:"wws",prefix:"w"},
    {id:620700,name:"张掖市",pid:"620000",type:"city",pinyin:"zhang ye shi",py:"zys",prefix:"z"},
    {id:620800,name:"平凉市",pid:"620000",type:"city",pinyin:"ping liang shi",py:"pls",prefix:"p"},
    {id:620900,name:"酒泉市",pid:"620000",type:"city",pinyin:"jiu quan shi",py:"jqs",prefix:"j"},
    {id:621000,name:"庆阳市",pid:"620000",type:"city",pinyin:"qing yang shi",py:"qys",prefix:"q"},
    {id:621100,name:"定西市",pid:"620000",type:"city",pinyin:"ding xi shi",py:"dxs",prefix:"d"},
    {id:621200,name:"陇南市",pid:"620000",type:"city",pinyin:"long nan shi",py:"lns",prefix:"l"},
    {id:622900,name:"临夏回族自治州",pid:"620000",type:"city",pinyin:"lin xia hui zu zi zhi zhou",py:"lxhzzzz",prefix:"l"},
    {id:623000,name:"甘南藏族自治州",pid:"620000",type:"city",pinyin:"gan nan zang zu zi zhi zhou",py:"gnzzzzz",prefix:"g"},
    {id:630100,name:"西宁市",pid:"630000",type:"city",pinyin:"xi ning shi",py:"xns",prefix:"x"},
    {id:630200,name:"海东市",pid:"630000",type:"city",pinyin:"hai dong shi",py:"hds",prefix:"h"},
    {id:632200,name:"海北藏族自治州",pid:"630000",type:"city",pinyin:"hai bei zang zu zi zhi zhou",py:"hbzzzzz",prefix:"h"},
    {id:632300,name:"黄南藏族自治州",pid:"630000",type:"city",pinyin:"huang nan zang zu zi zhi zhou",py:"hnzzzzz",prefix:"h"},
    {id:632500,name:"海南藏族自治州",pid:"630000",type:"city",pinyin:"hai nan zang zu zi zhi zhou",py:"hnzzzzz",prefix:"h"},
    {id:632600,name:"果洛藏族自治州",pid:"630000",type:"city",pinyin:"guo luo zang zu zi zhi zhou",py:"glzzzzz",prefix:"g"},
    {id:632700,name:"玉树藏族自治州",pid:"630000",type:"city",pinyin:"yu shu zang zu zi zhi zhou",py:"yszzzzz",prefix:"y"},
    {id:632800,name:"海西蒙古族藏族自治州",pid:"630000",type:"city",pinyin:"hai xi meng gu zu zang zu zi zhi zhou",py:"hxmgzzzzzz",prefix:"h"},
    {id:640100,name:"银川市",pid:"640000",type:"city",pinyin:"yin chuan shi",py:"ycs",prefix:"y"},
    {id:640200,name:"石嘴山市",pid:"640000",type:"city",pinyin:"shi zui shan shi",py:"szss",prefix:"s"},
    {id:640300,name:"吴忠市",pid:"640000",type:"city",pinyin:"wu zhong shi",py:"wzs",prefix:"w"},
    {id:640400,name:"固原市",pid:"640000",type:"city",pinyin:"gu yuan shi",py:"gys",prefix:"g"},
    {id:640500,name:"中卫市",pid:"640000",type:"city",pinyin:"zhong wei shi",py:"zws",prefix:"z"},
    {id:650100,name:"乌鲁木齐市",pid:"650000",type:"city",pinyin:"wu lu mu qi shi",py:"wlmqs",prefix:"w"},
    {id:650200,name:"克拉玛依市",pid:"650000",type:"city",pinyin:"ke la ma yi shi",py:"klmys",prefix:"k"},
    {id:652100,name:"吐鲁番地区",pid:"650000",type:"city",pinyin:"tu lu fan di qu",py:"tlfdq",prefix:"t"},
    {id:652200,name:"哈密地区",pid:"650000",type:"city",pinyin:"ha mi di qu",py:"hmdq",prefix:"h"},
    {id:652300,name:"昌吉回族自治州",pid:"650000",type:"city",pinyin:"chang ji hui zu zi zhi zhou",py:"cjhzzzz",prefix:"c"},
    {id:652700,name:"博尔塔拉蒙古自治州",pid:"650000",type:"city",pinyin:"bo er ta la meng gu zi zhi zhou",py:"betlmgzzz",prefix:"b"},
    {id:652800,name:"巴音郭楞蒙古自治州",pid:"650000",type:"city",pinyin:"ba yin guo leng meng gu zi zhi zhou",py:"byglmgzzz",prefix:"b"},
    {id:652900,name:"阿克苏地区",pid:"650000",type:"city",pinyin:"a ke su di qu",py:"aksdq",prefix:"a"},
    {id:653000,name:"克孜勒苏柯尔克孜自治州",pid:"650000",type:"city",pinyin:"ke zi le su ke er ke zi zi zhi zhou",py:"kzlskekzzzz",prefix:"k"},
    {id:653100,name:"喀什地区",pid:"650000",type:"city",pinyin:"ka shi di qu",py:"ksdq",prefix:"k"},
    {id:653200,name:"和田地区",pid:"650000",type:"city",pinyin:"he tian di qu",py:"htdq",prefix:"h"},
    {id:654000,name:"伊犁哈萨克自治州",pid:"650000",type:"city",pinyin:"yi li ha sa ke zi zhi zhou",py:"ylhskzzz",prefix:"y"},
    {id:654200,name:"塔城地区",pid:"650000",type:"city",pinyin:"ta cheng di qu",py:"tcdq",prefix:"t"},
    {id:654300,name:"阿勒泰地区",pid:"650000",type:"city",pinyin:"a le tai di qu",py:"altdq",prefix:"a"},
    {id:659000,name:"直辖县",pid:"650000",type:"city",pinyin:"zhi xia xian",py:"zxx",prefix:"z"},
    {id:710100,name:"台北市",pid:"710000",type:"city",pinyin:"tai bei shi",py:"tbs",prefix:"t"},
    {id:710200,name:"高雄市",pid:"710000",type:"city",pinyin:"gao xiong shi",py:"gxs",prefix:"g"},
    {id:710300,name:"台南市",pid:"710000",type:"city",pinyin:"tai nan shi",py:"tns",prefix:"t"},
    {id:710400,name:"台中市",pid:"710000",type:"city",pinyin:"tai zhong shi",py:"tzs",prefix:"t"},
    {id:710500,name:"金门县",pid:"710000",type:"city",pinyin:"jin men xian",py:"jmx",prefix:"j"},
    {id:710600,name:"南投县",pid:"710000",type:"city",pinyin:"nan tou xian",py:"ntx",prefix:"n"},
    {id:710700,name:"基隆市",pid:"710000",type:"city",pinyin:"ji long shi",py:"jls",prefix:"j"},
    {id:710800,name:"新竹市",pid:"710000",type:"city",pinyin:"xin zhu shi",py:"xzs",prefix:"x"},
    {id:710900,name:"嘉义市",pid:"710000",type:"city",pinyin:"jia yi shi",py:"jys",prefix:"j"},
    {id:711100,name:"新北市",pid:"710000",type:"city",pinyin:"xin bei shi",py:"xbs",prefix:"x"},
    {id:711200,name:"宜兰县",pid:"710000",type:"city",pinyin:"yi lan xian",py:"ylx",prefix:"y"},
    {id:711300,name:"新竹县",pid:"710000",type:"city",pinyin:"xin zhu xian",py:"xzx",prefix:"x"},
    {id:711400,name:"桃园县",pid:"710000",type:"city",pinyin:"tao yuan xian",py:"tyx",prefix:"t"},
    {id:711500,name:"苗栗县",pid:"710000",type:"city",pinyin:"miao li xian",py:"mlx",prefix:"m"},
    {id:711700,name:"彰化县",pid:"710000",type:"city",pinyin:"zhang hua xian",py:"zhx",prefix:"z"},
    {id:711900,name:"嘉义县",pid:"710000",type:"city",pinyin:"jia yi xian",py:"jyx",prefix:"j"},
    {id:712100,name:"云林县",pid:"710000",type:"city",pinyin:"yun lin xian",py:"ylx",prefix:"y"},
    {id:712400,name:"屏东县",pid:"710000",type:"city",pinyin:"ping dong xian",py:"pdx",prefix:"p"},
    {id:712500,name:"台东县",pid:"710000",type:"city",pinyin:"tai dong xian",py:"tdx",prefix:"t"},
    {id:712600,name:"花莲县",pid:"710000",type:"city",pinyin:"hua lian xian",py:"hlx",prefix:"h"},
    {id:712700,name:"澎湖县",pid:"710000",type:"city",pinyin:"peng hu xian",py:"phx",prefix:"p"},
    {id:712800,name:"连江县",pid:"710000",type:"city",pinyin:"lian jiang xian",py:"ljx",prefix:"l"},
    {id:810100,name:"香港岛",pid:"810000",type:"city",pinyin:"xiang gang dao",py:"xgd",prefix:"x"},
    {id:810200,name:"九龙",pid:"810000",type:"city",pinyin:"jiu long",py:"jl",prefix:"j"},
    {id:810300,name:"新界",pid:"810000",type:"city",pinyin:"xin jie",py:"xj",prefix:"x"},
    {id:820100,name:"澳门半岛",pid:"820000",type:"city",pinyin:"ao men ban dao",py:"ambd",prefix:"a"},
    {id:820200,name:"离岛",pid:"820000",type:"city",pinyin:"li dao",py:"ld",prefix:"l"},
    {id:110101,name:"东城区",pid:"110100",type:"district",pinyin:"dong cheng qu",py:"dcq",prefix:"d"},
    {id:110102,name:"西城区",pid:"110100",type:"district",pinyin:"xi cheng qu",py:"xcq",prefix:"x"},
    {id:110105,name:"朝阳区",pid:"110100",type:"district",pinyin:"chao yang qu",py:"cyq",prefix:"c"},
    {id:110106,name:"丰台区",pid:"110100",type:"district",pinyin:"feng tai qu",py:"ftq",prefix:"f"},
    {id:110107,name:"石景山区",pid:"110100",type:"district",pinyin:"shi jing shan qu",py:"sjsq",prefix:"s"},
    {id:110108,name:"海淀区",pid:"110100",type:"district",pinyin:"hai dian qu",py:"hdq",prefix:"h"},
    {id:110109,name:"门头沟区",pid:"110100",type:"district",pinyin:"men tou gou qu",py:"mtgq",prefix:"m"},
    {id:110111,name:"房山区",pid:"110100",type:"district",pinyin:"fang shan qu",py:"fsq",prefix:"f"},
    {id:110112,name:"通州区",pid:"110100",type:"district",pinyin:"tong zhou qu",py:"tzq",prefix:"t"},
    {id:110113,name:"顺义区",pid:"110100",type:"district",pinyin:"shun yi qu",py:"syq",prefix:"s"},
    {id:110114,name:"昌平区",pid:"110100",type:"district",pinyin:"chang ping qu",py:"cpq",prefix:"c"},
    {id:110115,name:"大兴区",pid:"110100",type:"district",pinyin:"da xing qu",py:"dxq",prefix:"d"},
    {id:110116,name:"怀柔区",pid:"110100",type:"district",pinyin:"huai rou qu",py:"hrq",prefix:"h"},
    {id:110117,name:"平谷区",pid:"110100",type:"district",pinyin:"ping gu qu",py:"pgq",prefix:"p"},
    {id:110228,name:"密云县",pid:"110200",type:"district",pinyin:"mi yun xian",py:"myx",prefix:"m"},
    {id:110229,name:"延庆县",pid:"110200",type:"district",pinyin:"yan qing xian",py:"yqx",prefix:"y"},
    {id:120101,name:"和平区",pid:"120100",type:"district",pinyin:"he ping qu",py:"hpq",prefix:"h"},
    {id:120102,name:"河东区",pid:"120100",type:"district",pinyin:"he dong qu",py:"hdq",prefix:"h"},
    {id:120103,name:"河西区",pid:"120100",type:"district",pinyin:"he xi qu",py:"hxq",prefix:"h"},
    {id:120104,name:"南开区",pid:"120100",type:"district",pinyin:"nan kai qu",py:"nkq",prefix:"n"},
    {id:120105,name:"河北区",pid:"120100",type:"district",pinyin:"he bei qu",py:"hbq",prefix:"h"},
    {id:120106,name:"红桥区",pid:"120100",type:"district",pinyin:"hong qiao qu",py:"hqq",prefix:"h"},
    {id:120110,name:"东丽区",pid:"120100",type:"district",pinyin:"dong li qu",py:"dlq",prefix:"d"},
    {id:120111,name:"西青区",pid:"120100",type:"district",pinyin:"xi qing qu",py:"xqq",prefix:"x"},
    {id:120112,name:"津南区",pid:"120100",type:"district",pinyin:"jin nan qu",py:"jnq",prefix:"j"},
    {id:120113,name:"北辰区",pid:"120100",type:"district",pinyin:"bei chen qu",py:"bcq",prefix:"b"},
    {id:120114,name:"武清区",pid:"120100",type:"district",pinyin:"wu qing qu",py:"wqq",prefix:"w"},
    {id:120115,name:"宝坻区",pid:"120100",type:"district",pinyin:"bao chi qu",py:"bcq",prefix:"b"},
    {id:120116,name:"滨海新区",pid:"120100",type:"district",pinyin:"bin hai xin qu",py:"bhxq",prefix:"b"},
    {id:120221,name:"宁河县",pid:"120200",type:"district",pinyin:"ning he xian",py:"nhx",prefix:"n"},
    {id:120223,name:"静海县",pid:"120200",type:"district",pinyin:"jing hai xian",py:"jhx",prefix:"j"},
    {id:120225,name:"蓟县",pid:"120200",type:"district",pinyin:"ji xian",py:"jx",prefix:"j"},
    {id:130102,name:"长安区",pid:"130100",type:"district",pinyin:"chang an qu",py:"caq",prefix:"c"},
    {id:130103,name:"桥东区",pid:"130100",type:"district",pinyin:"qiao dong qu",py:"qdq",prefix:"q"},
    {id:130104,name:"桥西区",pid:"130100",type:"district",pinyin:"qiao xi qu",py:"qxq",prefix:"q"},
    {id:130105,name:"新华区",pid:"130100",type:"district",pinyin:"xin hua qu",py:"xhq",prefix:"x"},
    {id:130107,name:"井陉矿区",pid:"130100",type:"district",pinyin:"jing xing kuang qu",py:"jxkq",prefix:"j"},
    {id:130108,name:"裕华区",pid:"130100",type:"district",pinyin:"yu hua qu",py:"yhq",prefix:"y"},
    {id:130121,name:"井陉县",pid:"130100",type:"district",pinyin:"jing xing xian",py:"jxx",prefix:"j"},
    {id:130123,name:"正定县",pid:"130100",type:"district",pinyin:"zheng ding xian",py:"zdx",prefix:"z"},
    {id:130124,name:"栾城县",pid:"130100",type:"district",pinyin:"luan cheng xian",py:"lcx",prefix:"l"},
    {id:130125,name:"行唐县",pid:"130100",type:"district",pinyin:"xing tang xian",py:"xtx",prefix:"x"},
    {id:130126,name:"灵寿县",pid:"130100",type:"district",pinyin:"ling shou xian",py:"lsx",prefix:"l"},
    {id:130127,name:"高邑县",pid:"130100",type:"district",pinyin:"gao yi xian",py:"gyx",prefix:"g"},
    {id:130128,name:"深泽县",pid:"130100",type:"district",pinyin:"shen ze xian",py:"szx",prefix:"s"},
    {id:130129,name:"赞皇县",pid:"130100",type:"district",pinyin:"zan huang xian",py:"zhx",prefix:"z"},
    {id:130130,name:"无极县",pid:"130100",type:"district",pinyin:"wu ji xian",py:"wjx",prefix:"w"},
    {id:130131,name:"平山县",pid:"130100",type:"district",pinyin:"ping shan xian",py:"psx",prefix:"p"},
    {id:130132,name:"元氏县",pid:"130100",type:"district",pinyin:"yuan shi xian",py:"ysx",prefix:"y"},
    {id:130133,name:"赵县",pid:"130100",type:"district",pinyin:"zhao xian",py:"zx",prefix:"z"},
    {id:130181,name:"辛集市",pid:"130100",type:"district",pinyin:"xin ji shi",py:"xjs",prefix:"x"},
    {id:130182,name:"藁城市",pid:"130100",type:"district",pinyin:"gao cheng shi",py:"gcs",prefix:"g"},
    {id:130183,name:"晋州市",pid:"130100",type:"district",pinyin:"jin zhou shi",py:"jzs",prefix:"j"},
    {id:130184,name:"新乐市",pid:"130100",type:"district",pinyin:"xin le shi",py:"xls",prefix:"x"},
    {id:130185,name:"鹿泉市",pid:"130100",type:"district",pinyin:"lu quan shi",py:"lqs",prefix:"l"},
    {id:130202,name:"路南区",pid:"130200",type:"district",pinyin:"lu nan qu",py:"lnq",prefix:"l"},
    {id:130203,name:"路北区",pid:"130200",type:"district",pinyin:"lu bei qu",py:"lbq",prefix:"l"},
    {id:130204,name:"古冶区",pid:"130200",type:"district",pinyin:"gu ye qu",py:"gyq",prefix:"g"},
    {id:130205,name:"开平区",pid:"130200",type:"district",pinyin:"kai ping qu",py:"kpq",prefix:"k"},
    {id:130207,name:"丰南区",pid:"130200",type:"district",pinyin:"feng nan qu",py:"fnq",prefix:"f"},
    {id:130208,name:"丰润区",pid:"130200",type:"district",pinyin:"feng run qu",py:"frq",prefix:"f"},
    {id:130209,name:"曹妃甸区",pid:"130200",type:"district",pinyin:"cao fei dian qu",py:"cfdq",prefix:"c"},
    {id:130223,name:"滦县",pid:"130200",type:"district",pinyin:"luan xian",py:"lx",prefix:"l"},
    {id:130224,name:"滦南县",pid:"130200",type:"district",pinyin:"luan nan xian",py:"lnx",prefix:"l"},
    {id:130225,name:"乐亭县",pid:"130200",type:"district",pinyin:"le ting xian",py:"ltx",prefix:"l"},
    {id:130227,name:"迁西县",pid:"130200",type:"district",pinyin:"qian xi xian",py:"qxx",prefix:"q"},
    {id:130229,name:"玉田县",pid:"130200",type:"district",pinyin:"yu tian xian",py:"ytx",prefix:"y"},
    {id:130281,name:"遵化市",pid:"130200",type:"district",pinyin:"zun hua shi",py:"zhs",prefix:"z"},
    {id:130283,name:"迁安市",pid:"130200",type:"district",pinyin:"qian an shi",py:"qas",prefix:"q"},
    {id:130302,name:"海港区",pid:"130300",type:"district",pinyin:"hai gang qu",py:"hgq",prefix:"h"},
    {id:130303,name:"山海关区",pid:"130300",type:"district",pinyin:"shan hai guan qu",py:"shgq",prefix:"s"},
    {id:130304,name:"北戴河区",pid:"130300",type:"district",pinyin:"bei dai he qu",py:"bdhq",prefix:"b"},
    {id:130321,name:"青龙满族自治县",pid:"130300",type:"district",pinyin:"qing long man zu zi zhi xian",py:"qlmzzzx",prefix:"q"},
    {id:130322,name:"昌黎县",pid:"130300",type:"district",pinyin:"chang li xian",py:"clx",prefix:"c"},
    {id:130323,name:"抚宁县",pid:"130300",type:"district",pinyin:"fu ning xian",py:"fnx",prefix:"f"},
    {id:130324,name:"卢龙县",pid:"130300",type:"district",pinyin:"lu long xian",py:"llx",prefix:"l"},
    {id:130402,name:"邯山区",pid:"130400",type:"district",pinyin:"han shan qu",py:"hsq",prefix:"h"},
    {id:130403,name:"丛台区",pid:"130400",type:"district",pinyin:"cong tai qu",py:"ctq",prefix:"c"},
    {id:130404,name:"复兴区",pid:"130400",type:"district",pinyin:"fu xing qu",py:"fxq",prefix:"f"},
    {id:130406,name:"峰峰矿区",pid:"130400",type:"district",pinyin:"feng feng kuang qu",py:"ffkq",prefix:"f"},
    {id:130421,name:"邯郸县",pid:"130400",type:"district",pinyin:"han dan xian",py:"hdx",prefix:"h"},
    {id:130423,name:"临漳县",pid:"130400",type:"district",pinyin:"lin zhang xian",py:"lzx",prefix:"l"},
    {id:130424,name:"成安县",pid:"130400",type:"district",pinyin:"cheng an xian",py:"cax",prefix:"c"},
    {id:130425,name:"大名县",pid:"130400",type:"district",pinyin:"da ming xian",py:"dmx",prefix:"d"},
    {id:130426,name:"涉县",pid:"130400",type:"district",pinyin:"she xian",py:"sx",prefix:"s"},
    {id:130427,name:"磁县",pid:"130400",type:"district",pinyin:"ci xian",py:"cx",prefix:"c"},
    {id:130428,name:"肥乡县",pid:"130400",type:"district",pinyin:"fei xiang xian",py:"fxx",prefix:"f"},
    {id:130429,name:"永年县",pid:"130400",type:"district",pinyin:"yong nian xian",py:"ynx",prefix:"y"},
    {id:130430,name:"邱县",pid:"130400",type:"district",pinyin:"qiu xian",py:"qx",prefix:"q"},
    {id:130431,name:"鸡泽县",pid:"130400",type:"district",pinyin:"ji ze xian",py:"jzx",prefix:"j"},
    {id:130432,name:"广平县",pid:"130400",type:"district",pinyin:"guang ping xian",py:"gpx",prefix:"g"},
    {id:130433,name:"馆陶县",pid:"130400",type:"district",pinyin:"guan tao xian",py:"gtx",prefix:"g"},
    {id:130434,name:"魏县",pid:"130400",type:"district",pinyin:"wei xian",py:"wx",prefix:"w"},
    {id:130435,name:"曲周县",pid:"130400",type:"district",pinyin:"qu zhou xian",py:"qzx",prefix:"q"},
    {id:130481,name:"武安市",pid:"130400",type:"district",pinyin:"wu an shi",py:"was",prefix:"w"},
    {id:130502,name:"桥东区",pid:"130500",type:"district",pinyin:"qiao dong qu",py:"qdq",prefix:"q"},
    {id:130503,name:"桥西区",pid:"130500",type:"district",pinyin:"qiao xi qu",py:"qxq",prefix:"q"},
    {id:130521,name:"邢台县",pid:"130500",type:"district",pinyin:"xing tai xian",py:"xtx",prefix:"x"},
    {id:130522,name:"临城县",pid:"130500",type:"district",pinyin:"lin cheng xian",py:"lcx",prefix:"l"},
    {id:130523,name:"内丘县",pid:"130500",type:"district",pinyin:"nei qiu xian",py:"nqx",prefix:"n"},
    {id:130524,name:"柏乡县",pid:"130500",type:"district",pinyin:"bo xiang xian",py:"bxx",prefix:"b"},
    {id:130525,name:"隆尧县",pid:"130500",type:"district",pinyin:"long yao xian",py:"lyx",prefix:"l"},
    {id:130526,name:"任县",pid:"130500",type:"district",pinyin:"ren xian",py:"rx",prefix:"r"},
    {id:130527,name:"南和县",pid:"130500",type:"district",pinyin:"nan he xian",py:"nhx",prefix:"n"},
    {id:130528,name:"宁晋县",pid:"130500",type:"district",pinyin:"ning jin xian",py:"njx",prefix:"n"},
    {id:130529,name:"巨鹿县",pid:"130500",type:"district",pinyin:"ju lu xian",py:"jlx",prefix:"j"},
    {id:130530,name:"新河县",pid:"130500",type:"district",pinyin:"xin he xian",py:"xhx",prefix:"x"},
    {id:130531,name:"广宗县",pid:"130500",type:"district",pinyin:"guang zong xian",py:"gzx",prefix:"g"},
    {id:130532,name:"平乡县",pid:"130500",type:"district",pinyin:"ping xiang xian",py:"pxx",prefix:"p"},
    {id:130533,name:"威县",pid:"130500",type:"district",pinyin:"wei xian",py:"wx",prefix:"w"},
    {id:130534,name:"清河县",pid:"130500",type:"district",pinyin:"qing he xian",py:"qhx",prefix:"q"},
    {id:130535,name:"临西县",pid:"130500",type:"district",pinyin:"lin xi xian",py:"lxx",prefix:"l"},
    {id:130581,name:"南宫市",pid:"130500",type:"district",pinyin:"nan gong shi",py:"ngs",prefix:"n"},
    {id:130582,name:"沙河市",pid:"130500",type:"district",pinyin:"sha he shi",py:"shs",prefix:"s"},
    {id:130602,name:"新市区",pid:"130600",type:"district",pinyin:"xin shi qu",py:"xsq",prefix:"x"},
    {id:130603,name:"北市区",pid:"130600",type:"district",pinyin:"bei shi qu",py:"bsq",prefix:"b"},
    {id:130604,name:"南市区",pid:"130600",type:"district",pinyin:"nan shi qu",py:"nsq",prefix:"n"},
    {id:130621,name:"满城县",pid:"130600",type:"district",pinyin:"man cheng xian",py:"mcx",prefix:"m"},
    {id:130622,name:"清苑县",pid:"130600",type:"district",pinyin:"qing yuan xian",py:"qyx",prefix:"q"},
    {id:130623,name:"涞水县",pid:"130600",type:"district",pinyin:"lai shui xian",py:"lsx",prefix:"l"},
    {id:130624,name:"阜平县",pid:"130600",type:"district",pinyin:"fu ping xian",py:"fpx",prefix:"f"},
    {id:130625,name:"徐水县",pid:"130600",type:"district",pinyin:"xu shui xian",py:"xsx",prefix:"x"},
    {id:130626,name:"定兴县",pid:"130600",type:"district",pinyin:"ding xing xian",py:"dxx",prefix:"d"},
    {id:130627,name:"唐县",pid:"130600",type:"district",pinyin:"tang xian",py:"tx",prefix:"t"},
    {id:130628,name:"高阳县",pid:"130600",type:"district",pinyin:"gao yang xian",py:"gyx",prefix:"g"},
    {id:130629,name:"容城县",pid:"130600",type:"district",pinyin:"rong cheng xian",py:"rcx",prefix:"r"},
    {id:130630,name:"涞源县",pid:"130600",type:"district",pinyin:"lai yuan xian",py:"lyx",prefix:"l"},
    {id:130631,name:"望都县",pid:"130600",type:"district",pinyin:"wang dou xian",py:"wdx",prefix:"w"},
    {id:130632,name:"安新县",pid:"130600",type:"district",pinyin:"an xin xian",py:"axx",prefix:"a"},
    {id:130633,name:"易县",pid:"130600",type:"district",pinyin:"yi xian",py:"yx",prefix:"y"},
    {id:130634,name:"曲阳县",pid:"130600",type:"district",pinyin:"qu yang xian",py:"qyx",prefix:"q"},
    {id:130635,name:"蠡县",pid:"130600",type:"district",pinyin:"li xian",py:"lx",prefix:"l"},
    {id:130636,name:"顺平县",pid:"130600",type:"district",pinyin:"shun ping xian",py:"spx",prefix:"s"},
    {id:130637,name:"博野县",pid:"130600",type:"district",pinyin:"bo ye xian",py:"byx",prefix:"b"},
    {id:130638,name:"雄县",pid:"130600",type:"district",pinyin:"xiong xian",py:"xx",prefix:"x"},
    {id:130681,name:"涿州市",pid:"130600",type:"district",pinyin:"zhuo zhou shi",py:"zzs",prefix:"z"},
    {id:130682,name:"定州市",pid:"130600",type:"district",pinyin:"ding zhou shi",py:"dzs",prefix:"d"},
    {id:130683,name:"安国市",pid:"130600",type:"district",pinyin:"an guo shi",py:"ags",prefix:"a"},
    {id:130684,name:"高碑店市",pid:"130600",type:"district",pinyin:"gao bei dian shi",py:"gbds",prefix:"g"},
    {id:130702,name:"桥东区",pid:"130700",type:"district",pinyin:"qiao dong qu",py:"qdq",prefix:"q"},
    {id:130703,name:"桥西区",pid:"130700",type:"district",pinyin:"qiao xi qu",py:"qxq",prefix:"q"},
    {id:130705,name:"宣化区",pid:"130700",type:"district",pinyin:"xuan hua qu",py:"xhq",prefix:"x"},
    {id:130706,name:"下花园区",pid:"130700",type:"district",pinyin:"xia hua yuan qu",py:"xhyq",prefix:"x"},
    {id:130721,name:"宣化县",pid:"130700",type:"district",pinyin:"xuan hua xian",py:"xhx",prefix:"x"},
    {id:130722,name:"张北县",pid:"130700",type:"district",pinyin:"zhang bei xian",py:"zbx",prefix:"z"},
    {id:130723,name:"康保县",pid:"130700",type:"district",pinyin:"kang bao xian",py:"kbx",prefix:"k"},
    {id:130724,name:"沽源县",pid:"130700",type:"district",pinyin:"gu yuan xian",py:"gyx",prefix:"g"},
    {id:130725,name:"尚义县",pid:"130700",type:"district",pinyin:"shang yi xian",py:"syx",prefix:"s"},
    {id:130726,name:"蔚县",pid:"130700",type:"district",pinyin:"yu xian",py:"yx",prefix:"y"},
    {id:130727,name:"阳原县",pid:"130700",type:"district",pinyin:"yang yuan xian",py:"yyx",prefix:"y"},
    {id:130728,name:"怀安县",pid:"130700",type:"district",pinyin:"huai an xian",py:"hax",prefix:"h"},
    {id:130729,name:"万全县",pid:"130700",type:"district",pinyin:"wan quan xian",py:"wqx",prefix:"w"},
    {id:130730,name:"怀来县",pid:"130700",type:"district",pinyin:"huai lai xian",py:"hlx",prefix:"h"},
    {id:130731,name:"涿鹿县",pid:"130700",type:"district",pinyin:"zhuo lu xian",py:"zlx",prefix:"z"},
    {id:130732,name:"赤城县",pid:"130700",type:"district",pinyin:"chi cheng xian",py:"ccx",prefix:"c"},
    {id:130733,name:"崇礼县",pid:"130700",type:"district",pinyin:"chong li xian",py:"clx",prefix:"c"},
    {id:130802,name:"双桥区",pid:"130800",type:"district",pinyin:"shuang qiao qu",py:"sqq",prefix:"s"},
    {id:130803,name:"双滦区",pid:"130800",type:"district",pinyin:"shuang luan qu",py:"slq",prefix:"s"},
    {id:130804,name:"鹰手营子矿区",pid:"130800",type:"district",pinyin:"ying shou ying zi kuang qu",py:"ysyzkq",prefix:"y"},
    {id:130821,name:"承德县",pid:"130800",type:"district",pinyin:"cheng de xian",py:"cdx",prefix:"c"},
    {id:130822,name:"兴隆县",pid:"130800",type:"district",pinyin:"xing long xian",py:"xlx",prefix:"x"},
    {id:130823,name:"平泉县",pid:"130800",type:"district",pinyin:"ping quan xian",py:"pqx",prefix:"p"},
    {id:130824,name:"滦平县",pid:"130800",type:"district",pinyin:"luan ping xian",py:"lpx",prefix:"l"},
    {id:130825,name:"隆化县",pid:"130800",type:"district",pinyin:"long hua xian",py:"lhx",prefix:"l"},
    {id:130826,name:"丰宁满族自治县",pid:"130800",type:"district",pinyin:"feng ning man zu zi zhi xian",py:"fnmzzzx",prefix:"f"},
    {id:130827,name:"宽城满族自治县",pid:"130800",type:"district",pinyin:"kuan cheng man zu zi zhi xian",py:"kcmzzzx",prefix:"k"},
    {id:130828,name:"围场满族蒙古族自治县",pid:"130800",type:"district",pinyin:"wei chang man zu meng gu zu zi zhi xian",py:"wcmzmgzzzx",prefix:"w"},
    {id:130902,name:"新华区",pid:"130900",type:"district",pinyin:"xin hua qu",py:"xhq",prefix:"x"},
    {id:130903,name:"运河区",pid:"130900",type:"district",pinyin:"yun he qu",py:"yhq",prefix:"y"},
    {id:130921,name:"沧县",pid:"130900",type:"district",pinyin:"cang xian",py:"cx",prefix:"c"},
    {id:130922,name:"青县",pid:"130900",type:"district",pinyin:"qing xian",py:"qx",prefix:"q"},
    {id:130923,name:"东光县",pid:"130900",type:"district",pinyin:"dong guang xian",py:"dgx",prefix:"d"},
    {id:130924,name:"海兴县",pid:"130900",type:"district",pinyin:"hai xing xian",py:"hxx",prefix:"h"},
    {id:130925,name:"盐山县",pid:"130900",type:"district",pinyin:"yan shan xian",py:"ysx",prefix:"y"},
    {id:130926,name:"肃宁县",pid:"130900",type:"district",pinyin:"su ning xian",py:"snx",prefix:"s"},
    {id:130927,name:"南皮县",pid:"130900",type:"district",pinyin:"nan pi xian",py:"npx",prefix:"n"},
    {id:130928,name:"吴桥县",pid:"130900",type:"district",pinyin:"wu qiao xian",py:"wqx",prefix:"w"},
    {id:130929,name:"献县",pid:"130900",type:"district",pinyin:"xian xian",py:"xx",prefix:"x"},
    {id:130930,name:"孟村回族自治县",pid:"130900",type:"district",pinyin:"meng cun hui zu zi zhi xian",py:"mchzzzx",prefix:"m"},
    {id:130981,name:"泊头市",pid:"130900",type:"district",pinyin:"bo tou shi",py:"bts",prefix:"b"},
    {id:130982,name:"任丘市",pid:"130900",type:"district",pinyin:"ren qiu shi",py:"rqs",prefix:"r"},
    {id:130983,name:"黄骅市",pid:"130900",type:"district",pinyin:"huang hua shi",py:"hhs",prefix:"h"},
    {id:130984,name:"河间市",pid:"130900",type:"district",pinyin:"he jian shi",py:"hjs",prefix:"h"},
    {id:131002,name:"安次区",pid:"131000",type:"district",pinyin:"an ci qu",py:"acq",prefix:"a"},
    {id:131003,name:"广阳区",pid:"131000",type:"district",pinyin:"guang yang qu",py:"gyq",prefix:"g"},
    {id:131022,name:"固安县",pid:"131000",type:"district",pinyin:"gu an xian",py:"gax",prefix:"g"},
    {id:131023,name:"永清县",pid:"131000",type:"district",pinyin:"yong qing xian",py:"yqx",prefix:"y"},
    {id:131024,name:"香河县",pid:"131000",type:"district",pinyin:"xiang he xian",py:"xhx",prefix:"x"},
    {id:131025,name:"大城县",pid:"131000",type:"district",pinyin:"da cheng xian",py:"dcx",prefix:"d"},
    {id:131026,name:"文安县",pid:"131000",type:"district",pinyin:"wen an xian",py:"wax",prefix:"w"},
    {id:131028,name:"大厂回族自治县",pid:"131000",type:"district",pinyin:"da chang hui zu zi zhi xian",py:"dchzzzx",prefix:"d"},
    {id:131081,name:"霸州市",pid:"131000",type:"district",pinyin:"ba zhou shi",py:"bzs",prefix:"b"},
    {id:131082,name:"三河市",pid:"131000",type:"district",pinyin:"san he shi",py:"shs",prefix:"s"},
    {id:131102,name:"桃城区",pid:"131100",type:"district",pinyin:"tao cheng qu",py:"tcq",prefix:"t"},
    {id:131121,name:"枣强县",pid:"131100",type:"district",pinyin:"zao qiang xian",py:"zqx",prefix:"z"},
    {id:131122,name:"武邑县",pid:"131100",type:"district",pinyin:"wu yi xian",py:"wyx",prefix:"w"},
    {id:131123,name:"武强县",pid:"131100",type:"district",pinyin:"wu qiang xian",py:"wqx",prefix:"w"},
    {id:131124,name:"饶阳县",pid:"131100",type:"district",pinyin:"rao yang xian",py:"ryx",prefix:"r"},
    {id:131125,name:"安平县",pid:"131100",type:"district",pinyin:"an ping xian",py:"apx",prefix:"a"},
    {id:131126,name:"故城县",pid:"131100",type:"district",pinyin:"gu cheng xian",py:"gcx",prefix:"g"},
    {id:131127,name:"景县",pid:"131100",type:"district",pinyin:"jing xian",py:"jx",prefix:"j"},
    {id:131128,name:"阜城县",pid:"131100",type:"district",pinyin:"fu cheng xian",py:"fcx",prefix:"f"},
    {id:131181,name:"冀州市",pid:"131100",type:"district",pinyin:"ji zhou shi",py:"jzs",prefix:"j"},
    {id:131182,name:"深州市",pid:"131100",type:"district",pinyin:"shen zhou shi",py:"szs",prefix:"s"},
    {id:140105,name:"小店区",pid:"140100",type:"district",pinyin:"xiao dian qu",py:"xdq",prefix:"x"},
    {id:140106,name:"迎泽区",pid:"140100",type:"district",pinyin:"ying ze qu",py:"yzq",prefix:"y"},
    {id:140107,name:"杏花岭区",pid:"140100",type:"district",pinyin:"xing hua ling qu",py:"xhlq",prefix:"x"},
    {id:140108,name:"尖草坪区",pid:"140100",type:"district",pinyin:"jian cao ping qu",py:"jcpq",prefix:"j"},
    {id:140109,name:"万柏林区",pid:"140100",type:"district",pinyin:"wan bo lin qu",py:"wblq",prefix:"w"},
    {id:140110,name:"晋源区",pid:"140100",type:"district",pinyin:"jin yuan qu",py:"jyq",prefix:"j"},
    {id:140121,name:"清徐县",pid:"140100",type:"district",pinyin:"qing xu xian",py:"qxx",prefix:"q"},
    {id:140122,name:"阳曲县",pid:"140100",type:"district",pinyin:"yang qu xian",py:"yqx",prefix:"y"},
    {id:140123,name:"娄烦县",pid:"140100",type:"district",pinyin:"lou fan xian",py:"lfx",prefix:"l"},
    {id:140181,name:"古交市",pid:"140100",type:"district",pinyin:"gu jiao shi",py:"gjs",prefix:"g"},
    {id:140202,name:"城区",pid:"140200",type:"district",pinyin:"cheng qu",py:"cq",prefix:"c"},
    {id:140203,name:"矿区",pid:"140200",type:"district",pinyin:"kuang qu",py:"kq",prefix:"k"},
    {id:140211,name:"南郊区",pid:"140200",type:"district",pinyin:"nan jiao qu",py:"njq",prefix:"n"},
    {id:140212,name:"新荣区",pid:"140200",type:"district",pinyin:"xin rong qu",py:"xrq",prefix:"x"},
    {id:140221,name:"阳高县",pid:"140200",type:"district",pinyin:"yang gao xian",py:"ygx",prefix:"y"},
    {id:140222,name:"天镇县",pid:"140200",type:"district",pinyin:"tian zhen xian",py:"tzx",prefix:"t"},
    {id:140223,name:"广灵县",pid:"140200",type:"district",pinyin:"guang ling xian",py:"glx",prefix:"g"},
    {id:140224,name:"灵丘县",pid:"140200",type:"district",pinyin:"ling qiu xian",py:"lqx",prefix:"l"},
    {id:140225,name:"浑源县",pid:"140200",type:"district",pinyin:"hun yuan xian",py:"hyx",prefix:"h"},
    {id:140226,name:"左云县",pid:"140200",type:"district",pinyin:"zuo yun xian",py:"zyx",prefix:"z"},
    {id:140227,name:"大同县",pid:"140200",type:"district",pinyin:"da tong xian",py:"dtx",prefix:"d"},
    {id:140302,name:"城区",pid:"140300",type:"district",pinyin:"cheng qu",py:"cq",prefix:"c"},
    {id:140303,name:"矿区",pid:"140300",type:"district",pinyin:"kuang qu",py:"kq",prefix:"k"},
    {id:140311,name:"郊区",pid:"140300",type:"district",pinyin:"jiao qu",py:"jq",prefix:"j"},
    {id:140321,name:"平定县",pid:"140300",type:"district",pinyin:"ping ding xian",py:"pdx",prefix:"p"},
    {id:140322,name:"盂县",pid:"140300",type:"district",pinyin:"yu xian",py:"yx",prefix:"y"},
    {id:140402,name:"城区",pid:"140400",type:"district",pinyin:"cheng qu",py:"cq",prefix:"c"},
    {id:140411,name:"郊区",pid:"140400",type:"district",pinyin:"jiao qu",py:"jq",prefix:"j"},
    {id:140421,name:"长治县",pid:"140400",type:"district",pinyin:"chang zhi xian",py:"czx",prefix:"c"},
    {id:140423,name:"襄垣县",pid:"140400",type:"district",pinyin:"xiang yuan xian",py:"xyx",prefix:"x"},
    {id:140424,name:"屯留县",pid:"140400",type:"district",pinyin:"tun liu xian",py:"tlx",prefix:"t"},
    {id:140425,name:"平顺县",pid:"140400",type:"district",pinyin:"ping shun xian",py:"psx",prefix:"p"},
    {id:140426,name:"黎城县",pid:"140400",type:"district",pinyin:"li cheng xian",py:"lcx",prefix:"l"},
    {id:140427,name:"壶关县",pid:"140400",type:"district",pinyin:"hu guan xian",py:"hgx",prefix:"h"},
    {id:140428,name:"长子县",pid:"140400",type:"district",pinyin:"zhang zi xian",py:"zzx",prefix:"z"},
    {id:140429,name:"武乡县",pid:"140400",type:"district",pinyin:"wu xiang xian",py:"wxx",prefix:"w"},
    {id:140430,name:"沁县",pid:"140400",type:"district",pinyin:"qin xian",py:"qx",prefix:"q"},
    {id:140431,name:"沁源县",pid:"140400",type:"district",pinyin:"qin yuan xian",py:"qyx",prefix:"q"},
    {id:140481,name:"潞城市",pid:"140400",type:"district",pinyin:"lu cheng shi",py:"lcs",prefix:"l"},
    {id:140502,name:"城区",pid:"140500",type:"district",pinyin:"cheng qu",py:"cq",prefix:"c"},
    {id:140521,name:"沁水县",pid:"140500",type:"district",pinyin:"qin shui xian",py:"qsx",prefix:"q"},
    {id:140522,name:"阳城县",pid:"140500",type:"district",pinyin:"yang cheng xian",py:"ycx",prefix:"y"},
    {id:140524,name:"陵川县",pid:"140500",type:"district",pinyin:"ling chuan xian",py:"lcx",prefix:"l"},
    {id:140525,name:"泽州县",pid:"140500",type:"district",pinyin:"ze zhou xian",py:"zzx",prefix:"z"},
    {id:140581,name:"高平市",pid:"140500",type:"district",pinyin:"gao ping shi",py:"gps",prefix:"g"},
    {id:140602,name:"朔城区",pid:"140600",type:"district",pinyin:"shuo cheng qu",py:"scq",prefix:"s"},
    {id:140603,name:"平鲁区",pid:"140600",type:"district",pinyin:"ping lu qu",py:"plq",prefix:"p"},
    {id:140621,name:"山阴县",pid:"140600",type:"district",pinyin:"shan yin xian",py:"syx",prefix:"s"},
    {id:140622,name:"应县",pid:"140600",type:"district",pinyin:"ying xian",py:"yx",prefix:"y"},
    {id:140623,name:"右玉县",pid:"140600",type:"district",pinyin:"you yu xian",py:"yyx",prefix:"y"},
    {id:140624,name:"怀仁县",pid:"140600",type:"district",pinyin:"huai ren xian",py:"hrx",prefix:"h"},
    {id:140702,name:"榆次区",pid:"140700",type:"district",pinyin:"yu ci qu",py:"ycq",prefix:"y"},
    {id:140721,name:"榆社县",pid:"140700",type:"district",pinyin:"yu she xian",py:"ysx",prefix:"y"},
    {id:140722,name:"左权县",pid:"140700",type:"district",pinyin:"zuo quan xian",py:"zqx",prefix:"z"},
    {id:140723,name:"和顺县",pid:"140700",type:"district",pinyin:"he shun xian",py:"hsx",prefix:"h"},
    {id:140724,name:"昔阳县",pid:"140700",type:"district",pinyin:"xi yang xian",py:"xyx",prefix:"x"},
    {id:140725,name:"寿阳县",pid:"140700",type:"district",pinyin:"shou yang xian",py:"syx",prefix:"s"},
    {id:140726,name:"太谷县",pid:"140700",type:"district",pinyin:"tai gu xian",py:"tgx",prefix:"t"},
    {id:140727,name:"祁县",pid:"140700",type:"district",pinyin:"qi xian",py:"qx",prefix:"q"},
    {id:140728,name:"平遥县",pid:"140700",type:"district",pinyin:"ping yao xian",py:"pyx",prefix:"p"},
    {id:140729,name:"灵石县",pid:"140700",type:"district",pinyin:"ling shi xian",py:"lsx",prefix:"l"},
    {id:140781,name:"介休市",pid:"140700",type:"district",pinyin:"jie xiu shi",py:"jxs",prefix:"j"},
    {id:140802,name:"盐湖区",pid:"140800",type:"district",pinyin:"yan hu qu",py:"yhq",prefix:"y"},
    {id:140821,name:"临猗县",pid:"140800",type:"district",pinyin:"lin yi xian",py:"lyx",prefix:"l"},
    {id:140822,name:"万荣县",pid:"140800",type:"district",pinyin:"wan rong xian",py:"wrx",prefix:"w"},
    {id:140823,name:"闻喜县",pid:"140800",type:"district",pinyin:"wen xi xian",py:"wxx",prefix:"w"},
    {id:140824,name:"稷山县",pid:"140800",type:"district",pinyin:"ji shan xian",py:"jsx",prefix:"j"},
    {id:140825,name:"新绛县",pid:"140800",type:"district",pinyin:"xin jiang xian",py:"xjx",prefix:"x"},
    {id:140826,name:"绛县",pid:"140800",type:"district",pinyin:"jiang xian",py:"jx",prefix:"j"},
    {id:140827,name:"垣曲县",pid:"140800",type:"district",pinyin:"yuan qu xian",py:"yqx",prefix:"y"},
    {id:140828,name:"夏县",pid:"140800",type:"district",pinyin:"xia xian",py:"xx",prefix:"x"},
    {id:140829,name:"平陆县",pid:"140800",type:"district",pinyin:"ping lu xian",py:"plx",prefix:"p"},
    {id:140830,name:"芮城县",pid:"140800",type:"district",pinyin:"rui cheng xian",py:"rcx",prefix:"r"},
    {id:140881,name:"永济市",pid:"140800",type:"district",pinyin:"yong ji shi",py:"yjs",prefix:"y"},
    {id:140882,name:"河津市",pid:"140800",type:"district",pinyin:"he jin shi",py:"hjs",prefix:"h"},
    {id:140902,name:"忻府区",pid:"140900",type:"district",pinyin:"xin fu qu",py:"xfq",prefix:"x"},
    {id:140921,name:"定襄县",pid:"140900",type:"district",pinyin:"ding xiang xian",py:"dxx",prefix:"d"},
    {id:140922,name:"五台县",pid:"140900",type:"district",pinyin:"wu tai xian",py:"wtx",prefix:"w"},
    {id:140923,name:"代县",pid:"140900",type:"district",pinyin:"dai xian",py:"dx",prefix:"d"},
    {id:140924,name:"繁峙县",pid:"140900",type:"district",pinyin:"fan zhi xian",py:"fzx",prefix:"f"},
    {id:140925,name:"宁武县",pid:"140900",type:"district",pinyin:"ning wu xian",py:"nwx",prefix:"n"},
    {id:140926,name:"静乐县",pid:"140900",type:"district",pinyin:"jing le xian",py:"jlx",prefix:"j"},
    {id:140927,name:"神池县",pid:"140900",type:"district",pinyin:"shen chi xian",py:"scx",prefix:"s"},
    {id:140928,name:"五寨县",pid:"140900",type:"district",pinyin:"wu zhai xian",py:"wzx",prefix:"w"},
    {id:140929,name:"岢岚县",pid:"140900",type:"district",pinyin:"ke lan xian",py:"klx",prefix:"k"},
    {id:140930,name:"河曲县",pid:"140900",type:"district",pinyin:"he qu xian",py:"hqx",prefix:"h"},
    {id:140931,name:"保德县",pid:"140900",type:"district",pinyin:"bao de xian",py:"bdx",prefix:"b"},
    {id:140932,name:"偏关县",pid:"140900",type:"district",pinyin:"pian guan xian",py:"pgx",prefix:"p"},
    {id:140981,name:"原平市",pid:"140900",type:"district",pinyin:"yuan ping shi",py:"yps",prefix:"y"},
    {id:141002,name:"尧都区",pid:"141000",type:"district",pinyin:"yao dou qu",py:"ydq",prefix:"y"},
    {id:141021,name:"曲沃县",pid:"141000",type:"district",pinyin:"qu wo xian",py:"qwx",prefix:"q"},
    {id:141022,name:"翼城县",pid:"141000",type:"district",pinyin:"yi cheng xian",py:"ycx",prefix:"y"},
    {id:141023,name:"襄汾县",pid:"141000",type:"district",pinyin:"xiang fen xian",py:"xfx",prefix:"x"},
    {id:141024,name:"洪洞县",pid:"141000",type:"district",pinyin:"hong dong xian",py:"hdx",prefix:"h"},
    {id:141025,name:"古县",pid:"141000",type:"district",pinyin:"gu xian",py:"gx",prefix:"g"},
    {id:141026,name:"安泽县",pid:"141000",type:"district",pinyin:"an ze xian",py:"azx",prefix:"a"},
    {id:141027,name:"浮山县",pid:"141000",type:"district",pinyin:"fu shan xian",py:"fsx",prefix:"f"},
    {id:141028,name:"吉县",pid:"141000",type:"district",pinyin:"ji xian",py:"jx",prefix:"j"},
    {id:141029,name:"乡宁县",pid:"141000",type:"district",pinyin:"xiang ning xian",py:"xnx",prefix:"x"},
    {id:141030,name:"大宁县",pid:"141000",type:"district",pinyin:"da ning xian",py:"dnx",prefix:"d"},
    {id:141031,name:"隰县",pid:"141000",type:"district",pinyin:"xi xian",py:"xx",prefix:"x"},
    {id:141032,name:"永和县",pid:"141000",type:"district",pinyin:"yong he xian",py:"yhx",prefix:"y"},
    {id:141033,name:"蒲县",pid:"141000",type:"district",pinyin:"pu xian",py:"px",prefix:"p"},
    {id:141034,name:"汾西县",pid:"141000",type:"district",pinyin:"fen xi xian",py:"fxx",prefix:"f"},
    {id:141081,name:"侯马市",pid:"141000",type:"district",pinyin:"hou ma shi",py:"hms",prefix:"h"},
    {id:141082,name:"霍州市",pid:"141000",type:"district",pinyin:"huo zhou shi",py:"hzs",prefix:"h"},
    {id:141102,name:"离石区",pid:"141100",type:"district",pinyin:"li shi qu",py:"lsq",prefix:"l"},
    {id:141121,name:"文水县",pid:"141100",type:"district",pinyin:"wen shui xian",py:"wsx",prefix:"w"},
    {id:141122,name:"交城县",pid:"141100",type:"district",pinyin:"jiao cheng xian",py:"jcx",prefix:"j"},
    {id:141123,name:"兴县",pid:"141100",type:"district",pinyin:"xing xian",py:"xx",prefix:"x"},
    {id:141124,name:"临县",pid:"141100",type:"district",pinyin:"lin xian",py:"lx",prefix:"l"},
    {id:141125,name:"柳林县",pid:"141100",type:"district",pinyin:"liu lin xian",py:"llx",prefix:"l"},
    {id:141126,name:"石楼县",pid:"141100",type:"district",pinyin:"shi lou xian",py:"slx",prefix:"s"},
    {id:141127,name:"岚县",pid:"141100",type:"district",pinyin:"lan xian",py:"lx",prefix:"l"},
    {id:141128,name:"方山县",pid:"141100",type:"district",pinyin:"fang shan xian",py:"fsx",prefix:"f"},
    {id:141129,name:"中阳县",pid:"141100",type:"district",pinyin:"zhong yang xian",py:"zyx",prefix:"z"},
    {id:141130,name:"交口县",pid:"141100",type:"district",pinyin:"jiao kou xian",py:"jkx",prefix:"j"},
    {id:141181,name:"孝义市",pid:"141100",type:"district",pinyin:"xiao yi shi",py:"xys",prefix:"x"},
    {id:141182,name:"汾阳市",pid:"141100",type:"district",pinyin:"fen yang shi",py:"fys",prefix:"f"},
    {id:150102,name:"新城区",pid:"150100",type:"district",pinyin:"xin cheng qu",py:"xcq",prefix:"x"},
    {id:150103,name:"回民区",pid:"150100",type:"district",pinyin:"hui min qu",py:"hmq",prefix:"h"},
    {id:150104,name:"玉泉区",pid:"150100",type:"district",pinyin:"yu quan qu",py:"yqq",prefix:"y"},
    {id:150105,name:"赛罕区",pid:"150100",type:"district",pinyin:"sai han qu",py:"shq",prefix:"s"},
    {id:150121,name:"土默特左旗",pid:"150100",type:"district",pinyin:"tu mo te zuo qi",py:"tmtzq",prefix:"t"},
    {id:150122,name:"托克托县",pid:"150100",type:"district",pinyin:"tuo ke tuo xian",py:"tktx",prefix:"t"},
    {id:150123,name:"和林格尔县",pid:"150100",type:"district",pinyin:"he lin ge er xian",py:"hlgex",prefix:"h"},
    {id:150124,name:"清水河县",pid:"150100",type:"district",pinyin:"qing shui he xian",py:"qshx",prefix:"q"},
    {id:150125,name:"武川县",pid:"150100",type:"district",pinyin:"wu chuan xian",py:"wcx",prefix:"w"},
    {id:150202,name:"东河区",pid:"150200",type:"district",pinyin:"dong he qu",py:"dhq",prefix:"d"},
    {id:150203,name:"昆都仑区",pid:"150200",type:"district",pinyin:"kun dou lun qu",py:"kdlq",prefix:"k"},
    {id:150204,name:"青山区",pid:"150200",type:"district",pinyin:"qing shan qu",py:"qsq",prefix:"q"},
    {id:150205,name:"石拐区",pid:"150200",type:"district",pinyin:"shi guai qu",py:"sgq",prefix:"s"},
    {id:150206,name:"白云鄂博矿区",pid:"150200",type:"district",pinyin:"bai yun e bo kuang qu",py:"byebkq",prefix:"b"},
    {id:150207,name:"九原区",pid:"150200",type:"district",pinyin:"jiu yuan qu",py:"jyq",prefix:"j"},
    {id:150221,name:"土默特右旗",pid:"150200",type:"district",pinyin:"tu mo te you qi",py:"tmtyq",prefix:"t"},
    {id:150222,name:"固阳县",pid:"150200",type:"district",pinyin:"gu yang xian",py:"gyx",prefix:"g"},
    {id:150223,name:"达尔罕茂明安联合旗",pid:"150200",type:"district",pinyin:"da er han mao ming an lian he qi",py:"dehmmalhq",prefix:"d"},
    {id:150302,name:"海勃湾区",pid:"150300",type:"district",pinyin:"hai bo wan qu",py:"hbwq",prefix:"h"},
    {id:150303,name:"海南区",pid:"150300",type:"district",pinyin:"hai nan qu",py:"hnq",prefix:"h"},
    {id:150304,name:"乌达区",pid:"150300",type:"district",pinyin:"wu da qu",py:"wdq",prefix:"w"},
    {id:150402,name:"红山区",pid:"150400",type:"district",pinyin:"hong shan qu",py:"hsq",prefix:"h"},
    {id:150403,name:"元宝山区",pid:"150400",type:"district",pinyin:"yuan bao shan qu",py:"ybsq",prefix:"y"},
    {id:150404,name:"松山区",pid:"150400",type:"district",pinyin:"song shan qu",py:"ssq",prefix:"s"},
    {id:150421,name:"阿鲁科尔沁旗",pid:"150400",type:"district",pinyin:"a lu ke er qin qi",py:"alkeqq",prefix:"a"},
    {id:150422,name:"巴林左旗",pid:"150400",type:"district",pinyin:"ba lin zuo qi",py:"blzq",prefix:"b"},
    {id:150423,name:"巴林右旗",pid:"150400",type:"district",pinyin:"ba lin you qi",py:"blyq",prefix:"b"},
    {id:150424,name:"林西县",pid:"150400",type:"district",pinyin:"lin xi xian",py:"lxx",prefix:"l"},
    {id:150425,name:"克什克腾旗",pid:"150400",type:"district",pinyin:"ke shen ke teng qi",py:"ksktq",prefix:"k"},
    {id:150426,name:"翁牛特旗",pid:"150400",type:"district",pinyin:"weng niu te qi",py:"wntq",prefix:"w"},
    {id:150428,name:"喀喇沁旗",pid:"150400",type:"district",pinyin:"ka la qin qi",py:"klqq",prefix:"k"},
    {id:150429,name:"宁城县",pid:"150400",type:"district",pinyin:"ning cheng xian",py:"ncx",prefix:"n"},
    {id:150430,name:"敖汉旗",pid:"150400",type:"district",pinyin:"ao han qi",py:"ahq",prefix:"a"},
    {id:150502,name:"科尔沁区",pid:"150500",type:"district",pinyin:"ke er qin qu",py:"keqq",prefix:"k"},
    {id:150521,name:"科尔沁左翼中旗",pid:"150500",type:"district",pinyin:"ke er qin zuo yi zhong qi",py:"keqzyzq",prefix:"k"},
    {id:150522,name:"科尔沁左翼后旗",pid:"150500",type:"district",pinyin:"ke er qin zuo yi hou qi",py:"keqzyhq",prefix:"k"},
    {id:150523,name:"开鲁县",pid:"150500",type:"district",pinyin:"kai lu xian",py:"klx",prefix:"k"},
    {id:150524,name:"库伦旗",pid:"150500",type:"district",pinyin:"ku lun qi",py:"klq",prefix:"k"},
    {id:150525,name:"奈曼旗",pid:"150500",type:"district",pinyin:"nai man qi",py:"nmq",prefix:"n"},
    {id:150526,name:"扎鲁特旗",pid:"150500",type:"district",pinyin:"zha lu te qi",py:"zltq",prefix:"z"},
    {id:150581,name:"霍林郭勒市",pid:"150500",type:"district",pinyin:"huo lin guo le shi",py:"hlgls",prefix:"h"},
    {id:150602,name:"东胜区",pid:"150600",type:"district",pinyin:"dong sheng qu",py:"dsq",prefix:"d"},
    {id:150621,name:"达拉特旗",pid:"150600",type:"district",pinyin:"da la te qi",py:"dltq",prefix:"d"},
    {id:150622,name:"准格尔旗",pid:"150600",type:"district",pinyin:"zhun ge er qi",py:"zgeq",prefix:"z"},
    {id:150623,name:"鄂托克前旗",pid:"150600",type:"district",pinyin:"e tuo ke qian qi",py:"etkqq",prefix:"e"},
    {id:150624,name:"鄂托克旗",pid:"150600",type:"district",pinyin:"e tuo ke qi",py:"etkq",prefix:"e"},
    {id:150625,name:"杭锦旗",pid:"150600",type:"district",pinyin:"hang jin qi",py:"hjq",prefix:"h"},
    {id:150626,name:"乌审旗",pid:"150600",type:"district",pinyin:"wu shen qi",py:"wsq",prefix:"w"},
    {id:150627,name:"伊金霍洛旗",pid:"150600",type:"district",pinyin:"yi jin huo luo qi",py:"yjhlq",prefix:"y"},
    {id:150702,name:"海拉尔区",pid:"150700",type:"district",pinyin:"hai la er qu",py:"hleq",prefix:"h"},
    {id:150703,name:"扎赉诺尔区",pid:"150700",type:"district",pinyin:"zha lai nuo er qu",py:"zlneq",prefix:"z"},
    {id:150721,name:"阿荣旗",pid:"150700",type:"district",pinyin:"a rong qi",py:"arq",prefix:"a"},
    {id:150722,name:"莫力达瓦达斡尔族自治旗",pid:"150700",type:"district",pinyin:"mo li da wa da wo er zu zi zhi qi",py:"mldwdwezzzq",prefix:"m"},
    {id:150723,name:"鄂伦春自治旗",pid:"150700",type:"district",pinyin:"e lun chun zi zhi qi",py:"elczzq",prefix:"e"},
    {id:150724,name:"鄂温克族自治旗",pid:"150700",type:"district",pinyin:"e wen ke zu zi zhi qi",py:"ewkzzzq",prefix:"e"},
    {id:150725,name:"陈巴尔虎旗",pid:"150700",type:"district",pinyin:"chen ba er hu qi",py:"cbehq",prefix:"c"},
    {id:150726,name:"新巴尔虎左旗",pid:"150700",type:"district",pinyin:"xin ba er hu zuo qi",py:"xbehzq",prefix:"x"},
    {id:150727,name:"新巴尔虎右旗",pid:"150700",type:"district",pinyin:"xin ba er hu you qi",py:"xbehyq",prefix:"x"},
    {id:150781,name:"满洲里市",pid:"150700",type:"district",pinyin:"man zhou li shi",py:"mzls",prefix:"m"},
    {id:150782,name:"牙克石市",pid:"150700",type:"district",pinyin:"ya ke shi shi",py:"ykss",prefix:"y"},
    {id:150783,name:"扎兰屯市",pid:"150700",type:"district",pinyin:"zha lan tun shi",py:"zlts",prefix:"z"},
    {id:150784,name:"额尔古纳市",pid:"150700",type:"district",pinyin:"e er gu na shi",py:"eegns",prefix:"e"},
    {id:150785,name:"根河市",pid:"150700",type:"district",pinyin:"gen he shi",py:"ghs",prefix:"g"},
    {id:150802,name:"临河区",pid:"150800",type:"district",pinyin:"lin he qu",py:"lhq",prefix:"l"},
    {id:150821,name:"五原县",pid:"150800",type:"district",pinyin:"wu yuan xian",py:"wyx",prefix:"w"},
    {id:150822,name:"磴口县",pid:"150800",type:"district",pinyin:"deng kou xian",py:"dkx",prefix:"d"},
    {id:150823,name:"乌拉特前旗",pid:"150800",type:"district",pinyin:"wu la te qian qi",py:"wltqq",prefix:"w"},
    {id:150824,name:"乌拉特中旗",pid:"150800",type:"district",pinyin:"wu la te zhong qi",py:"wltzq",prefix:"w"},
    {id:150825,name:"乌拉特后旗",pid:"150800",type:"district",pinyin:"wu la te hou qi",py:"wlthq",prefix:"w"},
    {id:150826,name:"杭锦后旗",pid:"150800",type:"district",pinyin:"hang jin hou qi",py:"hjhq",prefix:"h"},
    {id:150902,name:"集宁区",pid:"150900",type:"district",pinyin:"ji ning qu",py:"jnq",prefix:"j"},
    {id:150921,name:"卓资县",pid:"150900",type:"district",pinyin:"zhuo zi xian",py:"zzx",prefix:"z"},
    {id:150922,name:"化德县",pid:"150900",type:"district",pinyin:"hua de xian",py:"hdx",prefix:"h"},
    {id:150923,name:"商都县",pid:"150900",type:"district",pinyin:"shang dou xian",py:"sdx",prefix:"s"},
    {id:150924,name:"兴和县",pid:"150900",type:"district",pinyin:"xing he xian",py:"xhx",prefix:"x"},
    {id:150925,name:"凉城县",pid:"150900",type:"district",pinyin:"liang cheng xian",py:"lcx",prefix:"l"},
    {id:150926,name:"察哈尔右翼前旗",pid:"150900",type:"district",pinyin:"cha ha er you yi qian qi",py:"cheyyqq",prefix:"c"},
    {id:150927,name:"察哈尔右翼中旗",pid:"150900",type:"district",pinyin:"cha ha er you yi zhong qi",py:"cheyyzq",prefix:"c"},
    {id:150928,name:"察哈尔右翼后旗",pid:"150900",type:"district",pinyin:"cha ha er you yi hou qi",py:"cheyyhq",prefix:"c"},
    {id:150929,name:"四子王旗",pid:"150900",type:"district",pinyin:"si zi wang qi",py:"szwq",prefix:"s"},
    {id:150981,name:"丰镇市",pid:"150900",type:"district",pinyin:"feng zhen shi",py:"fzs",prefix:"f"},
    {id:152201,name:"乌兰浩特市",pid:"152200",type:"district",pinyin:"wu lan hao te shi",py:"wlhts",prefix:"w"},
    {id:152202,name:"阿尔山市",pid:"152200",type:"district",pinyin:"a er shan shi",py:"aess",prefix:"a"},
    {id:152221,name:"科尔沁右翼前旗",pid:"152200",type:"district",pinyin:"ke er qin you yi qian qi",py:"keqyyqq",prefix:"k"},
    {id:152222,name:"科尔沁右翼中旗",pid:"152200",type:"district",pinyin:"ke er qin you yi zhong qi",py:"keqyyzq",prefix:"k"},
    {id:152223,name:"扎赉特旗",pid:"152200",type:"district",pinyin:"zha lai te qi",py:"zltq",prefix:"z"},
    {id:152224,name:"突泉县",pid:"152200",type:"district",pinyin:"tu quan xian",py:"tqx",prefix:"t"},
    {id:152501,name:"二连浩特市",pid:"152500",type:"district",pinyin:"er lian hao te shi",py:"elhts",prefix:"e"},
    {id:152502,name:"锡林浩特市",pid:"152500",type:"district",pinyin:"xi lin hao te shi",py:"xlhts",prefix:"x"},
    {id:152522,name:"阿巴嘎旗",pid:"152500",type:"district",pinyin:"a ba ga qi",py:"abgq",prefix:"a"},
    {id:152523,name:"苏尼特左旗",pid:"152500",type:"district",pinyin:"su ni te zuo qi",py:"sntzq",prefix:"s"},
    {id:152524,name:"苏尼特右旗",pid:"152500",type:"district",pinyin:"su ni te you qi",py:"sntyq",prefix:"s"},
    {id:152525,name:"东乌珠穆沁旗",pid:"152500",type:"district",pinyin:"dong wu zhu mu qin qi",py:"dwzmqq",prefix:"d"},
    {id:152526,name:"西乌珠穆沁旗",pid:"152500",type:"district",pinyin:"xi wu zhu mu qin qi",py:"xwzmqq",prefix:"x"},
    {id:152527,name:"太仆寺旗",pid:"152500",type:"district",pinyin:"tai pu si qi",py:"tpsq",prefix:"t"},
    {id:152528,name:"镶黄旗",pid:"152500",type:"district",pinyin:"xiang huang qi",py:"xhq",prefix:"x"},
    {id:152529,name:"正镶白旗",pid:"152500",type:"district",pinyin:"zheng xiang bai qi",py:"zxbq",prefix:"z"},
    {id:152530,name:"正蓝旗",pid:"152500",type:"district",pinyin:"zheng lan qi",py:"zlq",prefix:"z"},
    {id:152531,name:"多伦县",pid:"152500",type:"district",pinyin:"duo lun xian",py:"dlx",prefix:"d"},
    {id:152921,name:"阿拉善左旗",pid:"152900",type:"district",pinyin:"a la shan zuo qi",py:"alszq",prefix:"a"},
    {id:152922,name:"阿拉善右旗",pid:"152900",type:"district",pinyin:"a la shan you qi",py:"alsyq",prefix:"a"},
    {id:152923,name:"额济纳旗",pid:"152900",type:"district",pinyin:"e ji na qi",py:"ejnq",prefix:"e"},
    {id:210102,name:"和平区",pid:"210100",type:"district",pinyin:"he ping qu",py:"hpq",prefix:"h"},
    {id:210103,name:"沈河区",pid:"210100",type:"district",pinyin:"shen he qu",py:"shq",prefix:"s"},
    {id:210104,name:"大东区",pid:"210100",type:"district",pinyin:"da dong qu",py:"ddq",prefix:"d"},
    {id:210105,name:"皇姑区",pid:"210100",type:"district",pinyin:"huang gu qu",py:"hgq",prefix:"h"},
    {id:210106,name:"铁西区",pid:"210100",type:"district",pinyin:"tie xi qu",py:"txq",prefix:"t"},
    {id:210111,name:"苏家屯区",pid:"210100",type:"district",pinyin:"su jia tun qu",py:"sjtq",prefix:"s"},
    {id:210112,name:"东陵区",pid:"210100",type:"district",pinyin:"dong ling qu",py:"dlq",prefix:"d"},
    {id:210113,name:"沈北新区",pid:"210100",type:"district",pinyin:"shen bei xin qu",py:"sbxq",prefix:"s"},
    {id:210114,name:"于洪区",pid:"210100",type:"district",pinyin:"yu hong qu",py:"yhq",prefix:"y"},
    {id:210122,name:"辽中县",pid:"210100",type:"district",pinyin:"liao zhong xian",py:"lzx",prefix:"l"},
    {id:210123,name:"康平县",pid:"210100",type:"district",pinyin:"kang ping xian",py:"kpx",prefix:"k"},
    {id:210124,name:"法库县",pid:"210100",type:"district",pinyin:"fa ku xian",py:"fkx",prefix:"f"},
    {id:210181,name:"新民市",pid:"210100",type:"district",pinyin:"xin min shi",py:"xms",prefix:"x"},
    {id:210202,name:"中山区",pid:"210200",type:"district",pinyin:"zhong shan qu",py:"zsq",prefix:"z"},
    {id:210203,name:"西岗区",pid:"210200",type:"district",pinyin:"xi gang qu",py:"xgq",prefix:"x"},
    {id:210204,name:"沙河口区",pid:"210200",type:"district",pinyin:"sha he kou qu",py:"shkq",prefix:"s"},
    {id:210211,name:"甘井子区",pid:"210200",type:"district",pinyin:"gan jing zi qu",py:"gjzq",prefix:"g"},
    {id:210212,name:"旅顺口区",pid:"210200",type:"district",pinyin:"lv shun kou qu",py:"lskq",prefix:"l"},
    {id:210213,name:"金州区",pid:"210200",type:"district",pinyin:"jin zhou qu",py:"jzq",prefix:"j"},
    {id:210224,name:"长海县",pid:"210200",type:"district",pinyin:"chang hai xian",py:"chx",prefix:"c"},
    {id:210281,name:"瓦房店市",pid:"210200",type:"district",pinyin:"wa fang dian shi",py:"wfds",prefix:"w"},
    {id:210282,name:"普兰店市",pid:"210200",type:"district",pinyin:"pu lan dian shi",py:"plds",prefix:"p"},
    {id:210283,name:"庄河市",pid:"210200",type:"district",pinyin:"zhuang he shi",py:"zhs",prefix:"z"},
    {id:210302,name:"铁东区",pid:"210300",type:"district",pinyin:"tie dong qu",py:"tdq",prefix:"t"},
    {id:210303,name:"铁西区",pid:"210300",type:"district",pinyin:"tie xi qu",py:"txq",prefix:"t"},
    {id:210304,name:"立山区",pid:"210300",type:"district",pinyin:"li shan qu",py:"lsq",prefix:"l"},
    {id:210311,name:"千山区",pid:"210300",type:"district",pinyin:"qian shan qu",py:"qsq",prefix:"q"},
    {id:210321,name:"台安县",pid:"210300",type:"district",pinyin:"tai an xian",py:"tax",prefix:"t"},
    {id:210323,name:"岫岩满族自治县",pid:"210300",type:"district",pinyin:"xiu yan man zu zi zhi xian",py:"xymzzzx",prefix:"x"},
    {id:210381,name:"海城市",pid:"210300",type:"district",pinyin:"hai cheng shi",py:"hcs",prefix:"h"},
    {id:210402,name:"新抚区",pid:"210400",type:"district",pinyin:"xin fu qu",py:"xfq",prefix:"x"},
    {id:210403,name:"东洲区",pid:"210400",type:"district",pinyin:"dong zhou qu",py:"dzq",prefix:"d"},
    {id:210404,name:"望花区",pid:"210400",type:"district",pinyin:"wang hua qu",py:"whq",prefix:"w"},
    {id:210411,name:"顺城区",pid:"210400",type:"district",pinyin:"shun cheng qu",py:"scq",prefix:"s"},
    {id:210421,name:"抚顺县",pid:"210400",type:"district",pinyin:"fu shun xian",py:"fsx",prefix:"f"},
    {id:210422,name:"新宾满族自治县",pid:"210400",type:"district",pinyin:"xin bin man zu zi zhi xian",py:"xbmzzzx",prefix:"x"},
    {id:210423,name:"清原满族自治县",pid:"210400",type:"district",pinyin:"qing yuan man zu zi zhi xian",py:"qymzzzx",prefix:"q"},
    {id:210502,name:"平山区",pid:"210500",type:"district",pinyin:"ping shan qu",py:"psq",prefix:"p"},
    {id:210503,name:"溪湖区",pid:"210500",type:"district",pinyin:"xi hu qu",py:"xhq",prefix:"x"},
    {id:210504,name:"明山区",pid:"210500",type:"district",pinyin:"ming shan qu",py:"msq",prefix:"m"},
    {id:210505,name:"南芬区",pid:"210500",type:"district",pinyin:"nan fen qu",py:"nfq",prefix:"n"},
    {id:210521,name:"本溪满族自治县",pid:"210500",type:"district",pinyin:"ben xi man zu zi zhi xian",py:"bxmzzzx",prefix:"b"},
    {id:210522,name:"桓仁满族自治县",pid:"210500",type:"district",pinyin:"huan ren man zu zi zhi xian",py:"hrmzzzx",prefix:"h"},
    {id:210602,name:"元宝区",pid:"210600",type:"district",pinyin:"yuan bao qu",py:"ybq",prefix:"y"},
    {id:210603,name:"振兴区",pid:"210600",type:"district",pinyin:"zhen xing qu",py:"zxq",prefix:"z"},
    {id:210604,name:"振安区",pid:"210600",type:"district",pinyin:"zhen an qu",py:"zaq",prefix:"z"},
    {id:210624,name:"宽甸满族自治县",pid:"210600",type:"district",pinyin:"kuan dian man zu zi zhi xian",py:"kdmzzzx",prefix:"k"},
    {id:210681,name:"东港市",pid:"210600",type:"district",pinyin:"dong gang shi",py:"dgs",prefix:"d"},
    {id:210682,name:"凤城市",pid:"210600",type:"district",pinyin:"feng cheng shi",py:"fcs",prefix:"f"},
    {id:210702,name:"古塔区",pid:"210700",type:"district",pinyin:"gu ta qu",py:"gtq",prefix:"g"},
    {id:210703,name:"凌河区",pid:"210700",type:"district",pinyin:"ling he qu",py:"lhq",prefix:"l"},
    {id:210711,name:"太和区",pid:"210700",type:"district",pinyin:"tai he qu",py:"thq",prefix:"t"},
    {id:210726,name:"黑山县",pid:"210700",type:"district",pinyin:"hei shan xian",py:"hsx",prefix:"h"},
    {id:210727,name:"义县",pid:"210700",type:"district",pinyin:"yi xian",py:"yx",prefix:"y"},
    {id:210781,name:"凌海市",pid:"210700",type:"district",pinyin:"ling hai shi",py:"lhs",prefix:"l"},
    {id:210782,name:"北镇市",pid:"210700",type:"district",pinyin:"bei zhen shi",py:"bzs",prefix:"b"},
    {id:210802,name:"站前区",pid:"210800",type:"district",pinyin:"zhan qian qu",py:"zqq",prefix:"z"},
    {id:210803,name:"西市区",pid:"210800",type:"district",pinyin:"xi shi qu",py:"xsq",prefix:"x"},
    {id:210804,name:"鲅鱼圈区",pid:"210800",type:"district",pinyin:"ba yu quan qu",py:"byqq",prefix:"b"},
    {id:210811,name:"老边区",pid:"210800",type:"district",pinyin:"lao bian qu",py:"lbq",prefix:"l"},
    {id:210881,name:"盖州市",pid:"210800",type:"district",pinyin:"gai zhou shi",py:"gzs",prefix:"g"},
    {id:210882,name:"大石桥市",pid:"210800",type:"district",pinyin:"da shi qiao shi",py:"dsqs",prefix:"d"},
    {id:210902,name:"海州区",pid:"210900",type:"district",pinyin:"hai zhou qu",py:"hzq",prefix:"h"},
    {id:210903,name:"新邱区",pid:"210900",type:"district",pinyin:"xin qiu qu",py:"xqq",prefix:"x"},
    {id:210904,name:"太平区",pid:"210900",type:"district",pinyin:"tai ping qu",py:"tpq",prefix:"t"},
    {id:210905,name:"清河门区",pid:"210900",type:"district",pinyin:"qing he men qu",py:"qhmq",prefix:"q"},
    {id:210911,name:"细河区",pid:"210900",type:"district",pinyin:"xi he qu",py:"xhq",prefix:"x"},
    {id:210921,name:"阜新蒙古族自治县",pid:"210900",type:"district",pinyin:"fu xin meng gu zu zi zhi xian",py:"fxmgzzzx",prefix:"f"},
    {id:210922,name:"彰武县",pid:"210900",type:"district",pinyin:"zhang wu xian",py:"zwx",prefix:"z"},
    {id:211002,name:"白塔区",pid:"211000",type:"district",pinyin:"bai ta qu",py:"btq",prefix:"b"},
    {id:211003,name:"文圣区",pid:"211000",type:"district",pinyin:"wen sheng qu",py:"wsq",prefix:"w"},
    {id:211004,name:"宏伟区",pid:"211000",type:"district",pinyin:"hong wei qu",py:"hwq",prefix:"h"},
    {id:211005,name:"弓长岭区",pid:"211000",type:"district",pinyin:"gong chang ling qu",py:"gclq",prefix:"c"},
    {id:211011,name:"太子河区",pid:"211000",type:"district",pinyin:"tai zi he qu",py:"tzhq",prefix:"t"},
    {id:211021,name:"辽阳县",pid:"211000",type:"district",pinyin:"liao yang xian",py:"lyx",prefix:"l"},
    {id:211081,name:"灯塔市",pid:"211000",type:"district",pinyin:"deng ta shi",py:"dts",prefix:"d"},
    {id:211102,name:"双台子区",pid:"211100",type:"district",pinyin:"shuang tai zi qu",py:"stzq",prefix:"s"},
    {id:211103,name:"兴隆台区",pid:"211100",type:"district",pinyin:"xing long tai qu",py:"xltq",prefix:"x"},
    {id:211121,name:"大洼县",pid:"211100",type:"district",pinyin:"da wa xian",py:"dwx",prefix:"d"},
    {id:211122,name:"盘山县",pid:"211100",type:"district",pinyin:"pan shan xian",py:"psx",prefix:"p"},
    {id:211202,name:"银州区",pid:"211200",type:"district",pinyin:"yin zhou qu",py:"yzq",prefix:"y"},
    {id:211204,name:"清河区",pid:"211200",type:"district",pinyin:"qing he qu",py:"qhq",prefix:"q"},
    {id:211221,name:"铁岭县",pid:"211200",type:"district",pinyin:"tie ling xian",py:"tlx",prefix:"t"},
    {id:211223,name:"西丰县",pid:"211200",type:"district",pinyin:"xi feng xian",py:"xfx",prefix:"x"},
    {id:211224,name:"昌图县",pid:"211200",type:"district",pinyin:"chang tu xian",py:"ctx",prefix:"c"},
    {id:211281,name:"调兵山市",pid:"211200",type:"district",pinyin:"diao bing shan shi",py:"dbss",prefix:"d"},
    {id:211282,name:"开原市",pid:"211200",type:"district",pinyin:"kai yuan shi",py:"kys",prefix:"k"},
    {id:211302,name:"双塔区",pid:"211300",type:"district",pinyin:"shuang ta qu",py:"stq",prefix:"s"},
    {id:211303,name:"龙城区",pid:"211300",type:"district",pinyin:"long cheng qu",py:"lcq",prefix:"l"},
    {id:211321,name:"朝阳县",pid:"211300",type:"district",pinyin:"chao yang xian",py:"cyx",prefix:"c"},
    {id:211322,name:"建平县",pid:"211300",type:"district",pinyin:"jian ping xian",py:"jpx",prefix:"j"},
    {id:211324,name:"喀喇沁左翼蒙古族自治县",pid:"211300",type:"district",pinyin:"ka la qin zuo yi meng gu zu zi zhi xian",py:"klqzymgzzzx",prefix:"k"},
    {id:211381,name:"北票市",pid:"211300",type:"district",pinyin:"bei piao shi",py:"bps",prefix:"b"},
    {id:211382,name:"凌源市",pid:"211300",type:"district",pinyin:"ling yuan shi",py:"lys",prefix:"l"},
    {id:211402,name:"连山区",pid:"211400",type:"district",pinyin:"lian shan qu",py:"lsq",prefix:"l"},
    {id:211403,name:"龙港区",pid:"211400",type:"district",pinyin:"long gang qu",py:"lgq",prefix:"l"},
    {id:211404,name:"南票区",pid:"211400",type:"district",pinyin:"nan piao qu",py:"npq",prefix:"n"},
    {id:211421,name:"绥中县",pid:"211400",type:"district",pinyin:"sui zhong xian",py:"szx",prefix:"s"},
    {id:211422,name:"建昌县",pid:"211400",type:"district",pinyin:"jian chang xian",py:"jcx",prefix:"j"},
    {id:211481,name:"兴城市",pid:"211400",type:"district",pinyin:"xing cheng shi",py:"xcs",prefix:"x"},
    {id:220102,name:"南关区",pid:"220100",type:"district",pinyin:"nan guan qu",py:"ngq",prefix:"n"},
    {id:220103,name:"宽城区",pid:"220100",type:"district",pinyin:"kuan cheng qu",py:"kcq",prefix:"k"},
    {id:220104,name:"朝阳区",pid:"220100",type:"district",pinyin:"chao yang qu",py:"cyq",prefix:"c"},
    {id:220105,name:"二道区",pid:"220100",type:"district",pinyin:"er dao qu",py:"edq",prefix:"e"},
    {id:220106,name:"绿园区",pid:"220100",type:"district",pinyin:"lv yuan qu",py:"lyq",prefix:"l"},
    {id:220112,name:"双阳区",pid:"220100",type:"district",pinyin:"shuang yang qu",py:"syq",prefix:"s"},
    {id:220122,name:"农安县",pid:"220100",type:"district",pinyin:"nong an xian",py:"nax",prefix:"n"},
    {id:220181,name:"九台市",pid:"220100",type:"district",pinyin:"jiu tai shi",py:"jts",prefix:"j"},
    {id:220182,name:"榆树市",pid:"220100",type:"district",pinyin:"yu shu shi",py:"yss",prefix:"y"},
    {id:220183,name:"德惠市",pid:"220100",type:"district",pinyin:"de hui shi",py:"dhs",prefix:"d"},
    {id:220202,name:"昌邑区",pid:"220200",type:"district",pinyin:"chang yi qu",py:"cyq",prefix:"c"},
    {id:220203,name:"龙潭区",pid:"220200",type:"district",pinyin:"long tan qu",py:"ltq",prefix:"l"},
    {id:220204,name:"船营区",pid:"220200",type:"district",pinyin:"chuan ying qu",py:"cyq",prefix:"c"},
    {id:220211,name:"丰满区",pid:"220200",type:"district",pinyin:"feng man qu",py:"fmq",prefix:"f"},
    {id:220221,name:"永吉县",pid:"220200",type:"district",pinyin:"yong ji xian",py:"yjx",prefix:"y"},
    {id:220281,name:"蛟河市",pid:"220200",type:"district",pinyin:"jiao he shi",py:"jhs",prefix:"j"},
    {id:220282,name:"桦甸市",pid:"220200",type:"district",pinyin:"hua dian shi",py:"hds",prefix:"h"},
    {id:220283,name:"舒兰市",pid:"220200",type:"district",pinyin:"shu lan shi",py:"sls",prefix:"s"},
    {id:220284,name:"磐石市",pid:"220200",type:"district",pinyin:"pan shi shi",py:"pss",prefix:"p"},
    {id:220302,name:"铁西区",pid:"220300",type:"district",pinyin:"tie xi qu",py:"txq",prefix:"t"},
    {id:220303,name:"铁东区",pid:"220300",type:"district",pinyin:"tie dong qu",py:"tdq",prefix:"t"},
    {id:220322,name:"梨树县",pid:"220300",type:"district",pinyin:"li shu xian",py:"lsx",prefix:"l"},
    {id:220323,name:"伊通满族自治县",pid:"220300",type:"district",pinyin:"yi tong man zu zi zhi xian",py:"ytmzzzx",prefix:"y"},
    {id:220381,name:"公主岭市",pid:"220300",type:"district",pinyin:"gong zhu ling shi",py:"gzls",prefix:"g"},
    {id:220382,name:"双辽市",pid:"220300",type:"district",pinyin:"shuang liao shi",py:"sls",prefix:"s"},
    {id:220402,name:"龙山区",pid:"220400",type:"district",pinyin:"long shan qu",py:"lsq",prefix:"l"},
    {id:220403,name:"西安区",pid:"220400",type:"district",pinyin:"xi an qu",py:"xaq",prefix:"x"},
    {id:220421,name:"东丰县",pid:"220400",type:"district",pinyin:"dong feng xian",py:"dfx",prefix:"d"},
    {id:220422,name:"东辽县",pid:"220400",type:"district",pinyin:"dong liao xian",py:"dlx",prefix:"d"},
    {id:220502,name:"东昌区",pid:"220500",type:"district",pinyin:"dong chang qu",py:"dcq",prefix:"d"},
    {id:220503,name:"二道江区",pid:"220500",type:"district",pinyin:"er dao jiang qu",py:"edjq",prefix:"e"},
    {id:220521,name:"通化县",pid:"220500",type:"district",pinyin:"tong hua xian",py:"thx",prefix:"t"},
    {id:220523,name:"辉南县",pid:"220500",type:"district",pinyin:"hui nan xian",py:"hnx",prefix:"h"},
    {id:220524,name:"柳河县",pid:"220500",type:"district",pinyin:"liu he xian",py:"lhx",prefix:"l"},
    {id:220581,name:"梅河口市",pid:"220500",type:"district",pinyin:"mei he kou shi",py:"mhks",prefix:"m"},
    {id:220582,name:"集安市",pid:"220500",type:"district",pinyin:"ji an shi",py:"jas",prefix:"j"},
    {id:220602,name:"浑江区",pid:"220600",type:"district",pinyin:"hun jiang qu",py:"hjq",prefix:"h"},
    {id:220605,name:"江源区",pid:"220600",type:"district",pinyin:"jiang yuan qu",py:"jyq",prefix:"j"},
    {id:220621,name:"抚松县",pid:"220600",type:"district",pinyin:"fu song xian",py:"fsx",prefix:"f"},
    {id:220622,name:"靖宇县",pid:"220600",type:"district",pinyin:"jing yu xian",py:"jyx",prefix:"j"},
    {id:220623,name:"长白朝鲜族自治县",pid:"220600",type:"district",pinyin:"chang bai chao xian zu zi zhi xian",py:"cbcxzzzx",prefix:"c"},
    {id:220681,name:"临江市",pid:"220600",type:"district",pinyin:"lin jiang shi",py:"ljs",prefix:"l"},
    {id:220702,name:"宁江区",pid:"220700",type:"district",pinyin:"ning jiang qu",py:"njq",prefix:"n"},
    {id:220721,name:"前郭尔罗斯蒙古族自治县",pid:"220700",type:"district",pinyin:"qian guo er luo si meng gu zu zi zhi xian",py:"qgelsmgzzzx",prefix:"q"},
    {id:220722,name:"长岭县",pid:"220700",type:"district",pinyin:"chang ling xian",py:"clx",prefix:"c"},
    {id:220723,name:"乾安县",pid:"220700",type:"district",pinyin:"qian an xian",py:"qax",prefix:"q"},
    {id:220781,name:"扶余市",pid:"220700",type:"district",pinyin:"fu yu shi",py:"fys",prefix:"f"},
    {id:220802,name:"洮北区",pid:"220800",type:"district",pinyin:"tao bei qu",py:"tbq",prefix:"t"},
    {id:220821,name:"镇赉县",pid:"220800",type:"district",pinyin:"zhen lai xian",py:"zlx",prefix:"z"},
    {id:220822,name:"通榆县",pid:"220800",type:"district",pinyin:"tong yu xian",py:"tyx",prefix:"t"},
    {id:220881,name:"洮南市",pid:"220800",type:"district",pinyin:"tao nan shi",py:"tns",prefix:"t"},
    {id:220882,name:"大安市",pid:"220800",type:"district",pinyin:"da an shi",py:"das",prefix:"d"},
    {id:222401,name:"延吉市",pid:"222400",type:"district",pinyin:"yan ji shi",py:"yjs",prefix:"y"},
    {id:222402,name:"图们市",pid:"222400",type:"district",pinyin:"tu men shi",py:"tms",prefix:"t"},
    {id:222403,name:"敦化市",pid:"222400",type:"district",pinyin:"dun hua shi",py:"dhs",prefix:"d"},
    {id:222404,name:"珲春市",pid:"222400",type:"district",pinyin:"hun chun shi",py:"hcs",prefix:"h"},
    {id:222405,name:"龙井市",pid:"222400",type:"district",pinyin:"long jing shi",py:"ljs",prefix:"l"},
    {id:222406,name:"和龙市",pid:"222400",type:"district",pinyin:"he long shi",py:"hls",prefix:"h"},
    {id:222424,name:"汪清县",pid:"222400",type:"district",pinyin:"wang qing xian",py:"wqx",prefix:"w"},
    {id:222426,name:"安图县",pid:"222400",type:"district",pinyin:"an tu xian",py:"atx",prefix:"a"},
    {id:230102,name:"道里区",pid:"230100",type:"district",pinyin:"dao li qu",py:"dlq",prefix:"d"},
    {id:230103,name:"南岗区",pid:"230100",type:"district",pinyin:"nan gang qu",py:"ngq",prefix:"n"},
    {id:230104,name:"道外区",pid:"230100",type:"district",pinyin:"dao wai qu",py:"dwq",prefix:"d"},
    {id:230108,name:"平房区",pid:"230100",type:"district",pinyin:"ping fang qu",py:"pfq",prefix:"p"},
    {id:230109,name:"松北区",pid:"230100",type:"district",pinyin:"song bei qu",py:"sbq",prefix:"s"},
    {id:230110,name:"香坊区",pid:"230100",type:"district",pinyin:"xiang fang qu",py:"xfq",prefix:"x"},
    {id:230111,name:"呼兰区",pid:"230100",type:"district",pinyin:"hu lan qu",py:"hlq",prefix:"h"},
    {id:230112,name:"阿城区",pid:"230100",type:"district",pinyin:"a cheng qu",py:"acq",prefix:"a"},
    {id:230123,name:"依兰县",pid:"230100",type:"district",pinyin:"yi lan xian",py:"ylx",prefix:"y"},
    {id:230124,name:"方正县",pid:"230100",type:"district",pinyin:"fang zheng xian",py:"fzx",prefix:"f"},
    {id:230125,name:"宾县",pid:"230100",type:"district",pinyin:"bin xian",py:"bx",prefix:"b"},
    {id:230126,name:"巴彦县",pid:"230100",type:"district",pinyin:"ba yan xian",py:"byx",prefix:"b"},
    {id:230127,name:"木兰县",pid:"230100",type:"district",pinyin:"mu lan xian",py:"mlx",prefix:"m"},
    {id:230128,name:"通河县",pid:"230100",type:"district",pinyin:"tong he xian",py:"thx",prefix:"t"},
    {id:230129,name:"延寿县",pid:"230100",type:"district",pinyin:"yan shou xian",py:"ysx",prefix:"y"},
    {id:230182,name:"双城市",pid:"230100",type:"district",pinyin:"shuang cheng shi",py:"scs",prefix:"s"},
    {id:230183,name:"尚志市",pid:"230100",type:"district",pinyin:"shang zhi shi",py:"szs",prefix:"s"},
    {id:230184,name:"五常市",pid:"230100",type:"district",pinyin:"wu chang shi",py:"wcs",prefix:"w"},
    {id:230202,name:"龙沙区",pid:"230200",type:"district",pinyin:"long sha qu",py:"lsq",prefix:"l"},
    {id:230203,name:"建华区",pid:"230200",type:"district",pinyin:"jian hua qu",py:"jhq",prefix:"j"},
    {id:230204,name:"铁锋区",pid:"230200",type:"district",pinyin:"tie feng qu",py:"tfq",prefix:"t"},
    {id:230205,name:"昂昂溪区",pid:"230200",type:"district",pinyin:"ang ang xi qu",py:"aaxq",prefix:"a"},
    {id:230206,name:"富拉尔基区",pid:"230200",type:"district",pinyin:"fu la er ji qu",py:"flejq",prefix:"f"},
    {id:230207,name:"碾子山区",pid:"230200",type:"district",pinyin:"nian zi shan qu",py:"nzsq",prefix:"n"},
    {id:230208,name:"梅里斯达斡尔族区",pid:"230200",type:"district",pinyin:"mei li si da wo er zu qu",py:"mlsdwezq",prefix:"m"},
    {id:230221,name:"龙江县",pid:"230200",type:"district",pinyin:"long jiang xian",py:"ljx",prefix:"l"},
    {id:230223,name:"依安县",pid:"230200",type:"district",pinyin:"yi an xian",py:"yax",prefix:"y"},
    {id:230224,name:"泰来县",pid:"230200",type:"district",pinyin:"tai lai xian",py:"tlx",prefix:"t"},
    {id:230225,name:"甘南县",pid:"230200",type:"district",pinyin:"gan nan xian",py:"gnx",prefix:"g"},
    {id:230227,name:"富裕县",pid:"230200",type:"district",pinyin:"fu yu xian",py:"fyx",prefix:"f"},
    {id:230229,name:"克山县",pid:"230200",type:"district",pinyin:"ke shan xian",py:"ksx",prefix:"k"},
    {id:230230,name:"克东县",pid:"230200",type:"district",pinyin:"ke dong xian",py:"kdx",prefix:"k"},
    {id:230231,name:"拜泉县",pid:"230200",type:"district",pinyin:"bai quan xian",py:"bqx",prefix:"b"},
    {id:230281,name:"讷河市",pid:"230200",type:"district",pinyin:"ne he shi",py:"nhs",prefix:"n"},
    {id:230302,name:"鸡冠区",pid:"230300",type:"district",pinyin:"ji guan qu",py:"jgq",prefix:"j"},
    {id:230303,name:"恒山区",pid:"230300",type:"district",pinyin:"heng shan qu",py:"hsq",prefix:"h"},
    {id:230304,name:"滴道区",pid:"230300",type:"district",pinyin:"di dao qu",py:"ddq",prefix:"d"},
    {id:230305,name:"梨树区",pid:"230300",type:"district",pinyin:"li shu qu",py:"lsq",prefix:"l"},
    {id:230306,name:"城子河区",pid:"230300",type:"district",pinyin:"cheng zi he qu",py:"czhq",prefix:"c"},
    {id:230307,name:"麻山区",pid:"230300",type:"district",pinyin:"ma shan qu",py:"msq",prefix:"m"},
    {id:230321,name:"鸡东县",pid:"230300",type:"district",pinyin:"ji dong xian",py:"jdx",prefix:"j"},
    {id:230381,name:"虎林市",pid:"230300",type:"district",pinyin:"hu lin shi",py:"hls",prefix:"h"},
    {id:230382,name:"密山市",pid:"230300",type:"district",pinyin:"mi shan shi",py:"mss",prefix:"m"},
    {id:230402,name:"向阳区",pid:"230400",type:"district",pinyin:"xiang yang qu",py:"xyq",prefix:"x"},
    {id:230403,name:"工农区",pid:"230400",type:"district",pinyin:"gong nong qu",py:"gnq",prefix:"g"},
    {id:230404,name:"南山区",pid:"230400",type:"district",pinyin:"nan shan qu",py:"nsq",prefix:"n"},
    {id:230405,name:"兴安区",pid:"230400",type:"district",pinyin:"xing an qu",py:"xaq",prefix:"x"},
    {id:230406,name:"东山区",pid:"230400",type:"district",pinyin:"dong shan qu",py:"dsq",prefix:"d"},
    {id:230407,name:"兴山区",pid:"230400",type:"district",pinyin:"xing shan qu",py:"xsq",prefix:"x"},
    {id:230421,name:"萝北县",pid:"230400",type:"district",pinyin:"luo bei xian",py:"lbx",prefix:"l"},
    {id:230422,name:"绥滨县",pid:"230400",type:"district",pinyin:"sui bin xian",py:"sbx",prefix:"s"},
    {id:230502,name:"尖山区",pid:"230500",type:"district",pinyin:"jian shan qu",py:"jsq",prefix:"j"},
    {id:230503,name:"岭东区",pid:"230500",type:"district",pinyin:"ling dong qu",py:"ldq",prefix:"l"},
    {id:230505,name:"四方台区",pid:"230500",type:"district",pinyin:"si fang tai qu",py:"sftq",prefix:"s"},
    {id:230506,name:"宝山区",pid:"230500",type:"district",pinyin:"bao shan qu",py:"bsq",prefix:"b"},
    {id:230521,name:"集贤县",pid:"230500",type:"district",pinyin:"ji xian xian",py:"jxx",prefix:"j"},
    {id:230522,name:"友谊县",pid:"230500",type:"district",pinyin:"you yi xian",py:"yyx",prefix:"y"},
    {id:230523,name:"宝清县",pid:"230500",type:"district",pinyin:"bao qing xian",py:"bqx",prefix:"b"},
    {id:230524,name:"饶河县",pid:"230500",type:"district",pinyin:"rao he xian",py:"rhx",prefix:"r"},
    {id:230602,name:"萨尔图区",pid:"230600",type:"district",pinyin:"sa er tu qu",py:"setq",prefix:"s"},
    {id:230603,name:"龙凤区",pid:"230600",type:"district",pinyin:"long feng qu",py:"lfq",prefix:"l"},
    {id:230604,name:"让胡路区",pid:"230600",type:"district",pinyin:"rang hu lu qu",py:"rhlq",prefix:"r"},
    {id:230605,name:"红岗区",pid:"230600",type:"district",pinyin:"hong gang qu",py:"hgq",prefix:"h"},
    {id:230606,name:"大同区",pid:"230600",type:"district",pinyin:"da tong qu",py:"dtq",prefix:"d"},
    {id:230621,name:"肇州县",pid:"230600",type:"district",pinyin:"zhao zhou xian",py:"zzx",prefix:"z"},
    {id:230622,name:"肇源县",pid:"230600",type:"district",pinyin:"zhao yuan xian",py:"zyx",prefix:"z"},
    {id:230623,name:"林甸县",pid:"230600",type:"district",pinyin:"lin dian xian",py:"ldx",prefix:"l"},
    {id:230624,name:"杜尔伯特蒙古族自治县",pid:"230600",type:"district",pinyin:"du er bo te meng gu zu zi zhi xian",py:"debtmgzzzx",prefix:"d"},
    {id:230702,name:"伊春区",pid:"230700",type:"district",pinyin:"yi chun qu",py:"ycq",prefix:"y"},
    {id:230703,name:"南岔区",pid:"230700",type:"district",pinyin:"nan cha qu",py:"ncq",prefix:"n"},
    {id:230704,name:"友好区",pid:"230700",type:"district",pinyin:"you hao qu",py:"yhq",prefix:"y"},
    {id:230705,name:"西林区",pid:"230700",type:"district",pinyin:"xi lin qu",py:"xlq",prefix:"x"},
    {id:230706,name:"翠峦区",pid:"230700",type:"district",pinyin:"cui luan qu",py:"clq",prefix:"c"},
    {id:230707,name:"新青区",pid:"230700",type:"district",pinyin:"xin qing qu",py:"xqq",prefix:"x"},
    {id:230708,name:"美溪区",pid:"230700",type:"district",pinyin:"mei xi qu",py:"mxq",prefix:"m"},
    {id:230709,name:"金山屯区",pid:"230700",type:"district",pinyin:"jin shan tun qu",py:"jstq",prefix:"j"},
    {id:230710,name:"五营区",pid:"230700",type:"district",pinyin:"wu ying qu",py:"wyq",prefix:"w"},
    {id:230711,name:"乌马河区",pid:"230700",type:"district",pinyin:"wu ma he qu",py:"wmhq",prefix:"w"},
    {id:230712,name:"汤旺河区",pid:"230700",type:"district",pinyin:"tang wang he qu",py:"twhq",prefix:"t"},
    {id:230713,name:"带岭区",pid:"230700",type:"district",pinyin:"dai ling qu",py:"dlq",prefix:"d"},
    {id:230714,name:"乌伊岭区",pid:"230700",type:"district",pinyin:"wu yi ling qu",py:"wylq",prefix:"w"},
    {id:230715,name:"红星区",pid:"230700",type:"district",pinyin:"hong xing qu",py:"hxq",prefix:"h"},
    {id:230716,name:"上甘岭区",pid:"230700",type:"district",pinyin:"shang gan ling qu",py:"sglq",prefix:"s"},
    {id:230722,name:"嘉荫县",pid:"230700",type:"district",pinyin:"jia yin xian",py:"jyx",prefix:"j"},
    {id:230781,name:"铁力市",pid:"230700",type:"district",pinyin:"tie li shi",py:"tls",prefix:"t"},
    {id:230803,name:"向阳区",pid:"230800",type:"district",pinyin:"xiang yang qu",py:"xyq",prefix:"x"},
    {id:230804,name:"前进区",pid:"230800",type:"district",pinyin:"qian jin qu",py:"qjq",prefix:"q"},
    {id:230805,name:"东风区",pid:"230800",type:"district",pinyin:"dong feng qu",py:"dfq",prefix:"d"},
    {id:230811,name:"郊区",pid:"230800",type:"district",pinyin:"jiao qu",py:"jq",prefix:"j"},
    {id:230822,name:"桦南县",pid:"230800",type:"district",pinyin:"hua nan xian",py:"hnx",prefix:"h"},
    {id:230826,name:"桦川县",pid:"230800",type:"district",pinyin:"hua chuan xian",py:"hcx",prefix:"h"},
    {id:230828,name:"汤原县",pid:"230800",type:"district",pinyin:"tang yuan xian",py:"tyx",prefix:"t"},
    {id:230833,name:"抚远县",pid:"230800",type:"district",pinyin:"fu yuan xian",py:"fyx",prefix:"f"},
    {id:230881,name:"同江市",pid:"230800",type:"district",pinyin:"tong jiang shi",py:"tjs",prefix:"t"},
    {id:230882,name:"富锦市",pid:"230800",type:"district",pinyin:"fu jin shi",py:"fjs",prefix:"f"},
    {id:230902,name:"新兴区",pid:"230900",type:"district",pinyin:"xin xing qu",py:"xxq",prefix:"x"},
    {id:230903,name:"桃山区",pid:"230900",type:"district",pinyin:"tao shan qu",py:"tsq",prefix:"t"},
    {id:230904,name:"茄子河区",pid:"230900",type:"district",pinyin:"qie zi he qu",py:"qzhq",prefix:"q"},
    {id:230921,name:"勃利县",pid:"230900",type:"district",pinyin:"bo li xian",py:"blx",prefix:"b"},
    {id:231002,name:"东安区",pid:"231000",type:"district",pinyin:"dong an qu",py:"daq",prefix:"d"},
    {id:231003,name:"阳明区",pid:"231000",type:"district",pinyin:"yang ming qu",py:"ymq",prefix:"y"},
    {id:231004,name:"爱民区",pid:"231000",type:"district",pinyin:"ai min qu",py:"amq",prefix:"a"},
    {id:231005,name:"西安区",pid:"231000",type:"district",pinyin:"xi an qu",py:"xaq",prefix:"x"},
    {id:231024,name:"东宁县",pid:"231000",type:"district",pinyin:"dong ning xian",py:"dnx",prefix:"d"},
    {id:231025,name:"林口县",pid:"231000",type:"district",pinyin:"lin kou xian",py:"lkx",prefix:"l"},
    {id:231081,name:"绥芬河市",pid:"231000",type:"district",pinyin:"sui fen he shi",py:"sfhs",prefix:"s"},
    {id:231083,name:"海林市",pid:"231000",type:"district",pinyin:"hai lin shi",py:"hls",prefix:"h"},
    {id:231084,name:"宁安市",pid:"231000",type:"district",pinyin:"ning an shi",py:"nas",prefix:"n"},
    {id:231085,name:"穆棱市",pid:"231000",type:"district",pinyin:"mu leng shi",py:"mls",prefix:"m"},
    {id:231102,name:"爱辉区",pid:"231100",type:"district",pinyin:"ai hui qu",py:"ahq",prefix:"a"},
    {id:231121,name:"嫩江县",pid:"231100",type:"district",pinyin:"nen jiang xian",py:"njx",prefix:"n"},
    {id:231123,name:"逊克县",pid:"231100",type:"district",pinyin:"xun ke xian",py:"xkx",prefix:"x"},
    {id:231124,name:"孙吴县",pid:"231100",type:"district",pinyin:"sun wu xian",py:"swx",prefix:"s"},
    {id:231181,name:"北安市",pid:"231100",type:"district",pinyin:"bei an shi",py:"bas",prefix:"b"},
    {id:231182,name:"五大连池市",pid:"231100",type:"district",pinyin:"wu da lian chi shi",py:"wdlcs",prefix:"w"},
    {id:231202,name:"北林区",pid:"231200",type:"district",pinyin:"bei lin qu",py:"blq",prefix:"b"},
    {id:231221,name:"望奎县",pid:"231200",type:"district",pinyin:"wang kui xian",py:"wkx",prefix:"w"},
    {id:231222,name:"兰西县",pid:"231200",type:"district",pinyin:"lan xi xian",py:"lxx",prefix:"l"},
    {id:231223,name:"青冈县",pid:"231200",type:"district",pinyin:"qing gang xian",py:"qgx",prefix:"q"},
    {id:231224,name:"庆安县",pid:"231200",type:"district",pinyin:"qing an xian",py:"qax",prefix:"q"},
    {id:231225,name:"明水县",pid:"231200",type:"district",pinyin:"ming shui xian",py:"msx",prefix:"m"},
    {id:231226,name:"绥棱县",pid:"231200",type:"district",pinyin:"sui leng xian",py:"slx",prefix:"s"},
    {id:231281,name:"安达市",pid:"231200",type:"district",pinyin:"an da shi",py:"ads",prefix:"a"},
    {id:231282,name:"肇东市",pid:"231200",type:"district",pinyin:"zhao dong shi",py:"zds",prefix:"z"},
    {id:231283,name:"海伦市",pid:"231200",type:"district",pinyin:"hai lun shi",py:"hls",prefix:"h"},
    {id:232721,name:"呼玛县",pid:"232700",type:"district",pinyin:"hu ma xian",py:"hmx",prefix:"h"},
    {id:232722,name:"塔河县",pid:"232700",type:"district",pinyin:"ta he xian",py:"thx",prefix:"t"},
    {id:232723,name:"漠河县",pid:"232700",type:"district",pinyin:"mo he xian",py:"mhx",prefix:"m"},
    {id:310101,name:"黄浦区",pid:"310100",type:"district",pinyin:"huang pu qu",py:"hpq",prefix:"h"},
    {id:310104,name:"徐汇区",pid:"310100",type:"district",pinyin:"xu hui qu",py:"xhq",prefix:"x"},
    {id:310105,name:"长宁区",pid:"310100",type:"district",pinyin:"chang ning qu",py:"cnq",prefix:"c"},
    {id:310106,name:"静安区",pid:"310100",type:"district",pinyin:"jing an qu",py:"jaq",prefix:"j"},
    {id:310107,name:"普陀区",pid:"310100",type:"district",pinyin:"pu tuo qu",py:"ptq",prefix:"p"},
    {id:310108,name:"闸北区",pid:"310100",type:"district",pinyin:"zha bei qu",py:"zbq",prefix:"z"},
    {id:310109,name:"虹口区",pid:"310100",type:"district",pinyin:"hong kou qu",py:"hkq",prefix:"h"},
    {id:310110,name:"杨浦区",pid:"310100",type:"district",pinyin:"yang pu qu",py:"ypq",prefix:"y"},
    {id:310112,name:"闵行区",pid:"310100",type:"district",pinyin:"min xing qu",py:"mxq",prefix:"m"},
    {id:310113,name:"宝山区",pid:"310100",type:"district",pinyin:"bao shan qu",py:"bsq",prefix:"b"},
    {id:310114,name:"嘉定区",pid:"310100",type:"district",pinyin:"jia ding qu",py:"jdq",prefix:"j"},
    {id:310115,name:"浦东新区",pid:"310100",type:"district",pinyin:"pu dong xin qu",py:"pdxq",prefix:"p"},
    {id:310116,name:"金山区",pid:"310100",type:"district",pinyin:"jin shan qu",py:"jsq",prefix:"j"},
    {id:310117,name:"松江区",pid:"310100",type:"district",pinyin:"song jiang qu",py:"sjq",prefix:"s"},
    {id:310118,name:"青浦区",pid:"310100",type:"district",pinyin:"qing pu qu",py:"qpq",prefix:"q"},
    {id:310120,name:"奉贤区",pid:"310100",type:"district",pinyin:"feng xian qu",py:"fxq",prefix:"f"},
    {id:310230,name:"崇明县",pid:"310200",type:"district",pinyin:"chong ming xian",py:"cmx",prefix:"c"},
    {id:320102,name:"玄武区",pid:"320100",type:"district",pinyin:"xuan wu qu",py:"xwq",prefix:"x"},
    {id:320104,name:"秦淮区",pid:"320100",type:"district",pinyin:"qin huai qu",py:"qhq",prefix:"q"},
    {id:320105,name:"建邺区",pid:"320100",type:"district",pinyin:"jian ye qu",py:"jyq",prefix:"j"},
    {id:320106,name:"鼓楼区",pid:"320100",type:"district",pinyin:"gu lou qu",py:"glq",prefix:"g"},
    {id:320111,name:"浦口区",pid:"320100",type:"district",pinyin:"pu kou qu",py:"pkq",prefix:"p"},
    {id:320113,name:"栖霞区",pid:"320100",type:"district",pinyin:"qi xia qu",py:"qxq",prefix:"q"},
    {id:320114,name:"雨花台区",pid:"320100",type:"district",pinyin:"yu hua tai qu",py:"yhtq",prefix:"y"},
    {id:320115,name:"江宁区",pid:"320100",type:"district",pinyin:"jiang ning qu",py:"jnq",prefix:"j"},
    {id:320116,name:"六合区",pid:"320100",type:"district",pinyin:"liu he qu",py:"lhq",prefix:"l"},
    {id:320117,name:"溧水区",pid:"320100",type:"district",pinyin:"li shui qu",py:"lsq",prefix:"l"},
    {id:320118,name:"高淳区",pid:"320100",type:"district",pinyin:"gao chun qu",py:"gcq",prefix:"g"},
    {id:320202,name:"崇安区",pid:"320200",type:"district",pinyin:"chong an qu",py:"caq",prefix:"c"},
    {id:320203,name:"南长区",pid:"320200",type:"district",pinyin:"nan chang qu",py:"ncq",prefix:"c"},
    {id:320204,name:"北塘区",pid:"320200",type:"district",pinyin:"bei tang qu",py:"btq",prefix:"b"},
    {id:320205,name:"锡山区",pid:"320200",type:"district",pinyin:"xi shan qu",py:"xsq",prefix:"x"},
    {id:320206,name:"惠山区",pid:"320200",type:"district",pinyin:"hui shan qu",py:"hsq",prefix:"h"},
    {id:320211,name:"滨湖区",pid:"320200",type:"district",pinyin:"bin hu qu",py:"bhq",prefix:"b"},
    {id:320281,name:"江阴市",pid:"320200",type:"district",pinyin:"jiang yin shi",py:"jys",prefix:"j"},
    {id:320282,name:"宜兴市",pid:"320200",type:"district",pinyin:"yi xing shi",py:"yxs",prefix:"y"},
    {id:320302,name:"鼓楼区",pid:"320300",type:"district",pinyin:"gu lou qu",py:"glq",prefix:"g"},
    {id:320303,name:"云龙区",pid:"320300",type:"district",pinyin:"yun long qu",py:"ylq",prefix:"y"},
    {id:320305,name:"贾汪区",pid:"320300",type:"district",pinyin:"jia wang qu",py:"jwq",prefix:"j"},
    {id:320311,name:"泉山区",pid:"320300",type:"district",pinyin:"quan shan qu",py:"qsq",prefix:"q"},
    {id:320312,name:"铜山区",pid:"320300",type:"district",pinyin:"tong shan qu",py:"tsq",prefix:"t"},
    {id:320321,name:"丰县",pid:"320300",type:"district",pinyin:"feng xian",py:"fx",prefix:"f"},
    {id:320322,name:"沛县",pid:"320300",type:"district",pinyin:"pei xian",py:"px",prefix:"p"},
    {id:320324,name:"睢宁县",pid:"320300",type:"district",pinyin:"sui ning xian",py:"snx",prefix:"s"},
    {id:320381,name:"新沂市",pid:"320300",type:"district",pinyin:"xin yi shi",py:"xys",prefix:"x"},
    {id:320382,name:"邳州市",pid:"320300",type:"district",pinyin:"pi zhou shi",py:"pzs",prefix:"p"},
    {id:320402,name:"天宁区",pid:"320400",type:"district",pinyin:"tian ning qu",py:"tnq",prefix:"t"},
    {id:320404,name:"钟楼区",pid:"320400",type:"district",pinyin:"zhong lou qu",py:"zlq",prefix:"z"},
    {id:320405,name:"戚墅堰区",pid:"320400",type:"district",pinyin:"qi shu yan qu",py:"qsyq",prefix:"q"},
    {id:320411,name:"新北区",pid:"320400",type:"district",pinyin:"xin bei qu",py:"xbq",prefix:"x"},
    {id:320412,name:"武进区",pid:"320400",type:"district",pinyin:"wu jin qu",py:"wjq",prefix:"w"},
    {id:320481,name:"溧阳市",pid:"320400",type:"district",pinyin:"li yang shi",py:"lys",prefix:"l"},
    {id:320482,name:"金坛市",pid:"320400",type:"district",pinyin:"jin tan shi",py:"jts",prefix:"j"},
    {id:320505,name:"虎丘区",pid:"320500",type:"district",pinyin:"hu qiu qu",py:"hqq",prefix:"h"},
    {id:320506,name:"吴中区",pid:"320500",type:"district",pinyin:"wu zhong qu",py:"wzq",prefix:"w"},
    {id:320507,name:"相城区",pid:"320500",type:"district",pinyin:"xiang cheng qu",py:"xcq",prefix:"x"},
    {id:320508,name:"姑苏区",pid:"320500",type:"district",pinyin:"gu su qu",py:"gsq",prefix:"g"},
    {id:320509,name:"吴江区",pid:"320500",type:"district",pinyin:"wu jiang qu",py:"wjq",prefix:"w"},
    {id:320581,name:"常熟市",pid:"320500",type:"district",pinyin:"chang shu shi",py:"css",prefix:"c"},
    {id:320582,name:"张家港市",pid:"320500",type:"district",pinyin:"zhang jia gang shi",py:"zjgs",prefix:"z"},
    {id:320583,name:"昆山市",pid:"320500",type:"district",pinyin:"kun shan shi",py:"kss",prefix:"k"},
    {id:320585,name:"太仓市",pid:"320500",type:"district",pinyin:"tai cang shi",py:"tcs",prefix:"t"},
    {id:320602,name:"崇川区",pid:"320600",type:"district",pinyin:"chong chuan qu",py:"ccq",prefix:"c"},
    {id:320611,name:"港闸区",pid:"320600",type:"district",pinyin:"gang zha qu",py:"gzq",prefix:"g"},
    {id:320612,name:"通州区",pid:"320600",type:"district",pinyin:"tong zhou qu",py:"tzq",prefix:"t"},
    {id:320621,name:"海安县",pid:"320600",type:"district",pinyin:"hai an xian",py:"hax",prefix:"h"},
    {id:320623,name:"如东县",pid:"320600",type:"district",pinyin:"ru dong xian",py:"rdx",prefix:"r"},
    {id:320681,name:"启东市",pid:"320600",type:"district",pinyin:"qi dong shi",py:"qds",prefix:"q"},
    {id:320682,name:"如皋市",pid:"320600",type:"district",pinyin:"ru gao shi",py:"rgs",prefix:"r"},
    {id:320684,name:"海门市",pid:"320600",type:"district",pinyin:"hai men shi",py:"hms",prefix:"h"},
    {id:320703,name:"连云区",pid:"320700",type:"district",pinyin:"lian yun qu",py:"lyq",prefix:"l"},
    {id:320705,name:"新浦区",pid:"320700",type:"district",pinyin:"xin pu qu",py:"xpq",prefix:"x"},
    {id:320706,name:"海州区",pid:"320700",type:"district",pinyin:"hai zhou qu",py:"hzq",prefix:"h"},
    {id:320721,name:"赣榆县",pid:"320700",type:"district",pinyin:"gan yu xian",py:"gyx",prefix:"g"},
    {id:320722,name:"东海县",pid:"320700",type:"district",pinyin:"dong hai xian",py:"dhx",prefix:"d"},
    {id:320723,name:"灌云县",pid:"320700",type:"district",pinyin:"guan yun xian",py:"gyx",prefix:"g"},
    {id:320724,name:"灌南县",pid:"320700",type:"district",pinyin:"guan nan xian",py:"gnx",prefix:"g"},
    {id:320802,name:"清河区",pid:"320800",type:"district",pinyin:"qing he qu",py:"qhq",prefix:"q"},
    {id:320803,name:"淮安区",pid:"320800",type:"district",pinyin:"huai an qu",py:"haq",prefix:"h"},
    {id:320804,name:"淮阴区",pid:"320800",type:"district",pinyin:"huai yin qu",py:"hyq",prefix:"h"},
    {id:320811,name:"清浦区",pid:"320800",type:"district",pinyin:"qing pu qu",py:"qpq",prefix:"q"},
    {id:320826,name:"涟水县",pid:"320800",type:"district",pinyin:"lian shui xian",py:"lsx",prefix:"l"},
    {id:320829,name:"洪泽县",pid:"320800",type:"district",pinyin:"hong ze xian",py:"hzx",prefix:"h"},
    {id:320830,name:"盱眙县",pid:"320800",type:"district",pinyin:"xu yi xian",py:"xyx",prefix:"x"},
    {id:320831,name:"金湖县",pid:"320800",type:"district",pinyin:"jin hu xian",py:"jhx",prefix:"j"},
    {id:320902,name:"亭湖区",pid:"320900",type:"district",pinyin:"ting hu qu",py:"thq",prefix:"t"},
    {id:320903,name:"盐都区",pid:"320900",type:"district",pinyin:"yan dou qu",py:"ydq",prefix:"y"},
    {id:320921,name:"响水县",pid:"320900",type:"district",pinyin:"xiang shui xian",py:"xsx",prefix:"x"},
    {id:320922,name:"滨海县",pid:"320900",type:"district",pinyin:"bin hai xian",py:"bhx",prefix:"b"},
    {id:320923,name:"阜宁县",pid:"320900",type:"district",pinyin:"fu ning xian",py:"fnx",prefix:"f"},
    {id:320924,name:"射阳县",pid:"320900",type:"district",pinyin:"she yang xian",py:"syx",prefix:"s"},
    {id:320925,name:"建湖县",pid:"320900",type:"district",pinyin:"jian hu xian",py:"jhx",prefix:"j"},
    {id:320981,name:"东台市",pid:"320900",type:"district",pinyin:"dong tai shi",py:"dts",prefix:"d"},
    {id:320982,name:"大丰市",pid:"320900",type:"district",pinyin:"da feng shi",py:"dfs",prefix:"d"},
    {id:321002,name:"广陵区",pid:"321000",type:"district",pinyin:"guang ling qu",py:"glq",prefix:"g"},
    {id:321003,name:"邗江区",pid:"321000",type:"district",pinyin:"han jiang qu",py:"hjq",prefix:"h"},
    {id:321012,name:"江都区",pid:"321000",type:"district",pinyin:"jiang dou qu",py:"jdq",prefix:"j"},
    {id:321023,name:"宝应县",pid:"321000",type:"district",pinyin:"bao ying xian",py:"byx",prefix:"b"},
    {id:321081,name:"仪征市",pid:"321000",type:"district",pinyin:"yi zheng shi",py:"yzs",prefix:"y"},
    {id:321084,name:"高邮市",pid:"321000",type:"district",pinyin:"gao you shi",py:"gys",prefix:"g"},
    {id:321102,name:"京口区",pid:"321100",type:"district",pinyin:"jing kou qu",py:"jkq",prefix:"j"},
    {id:321111,name:"润州区",pid:"321100",type:"district",pinyin:"run zhou qu",py:"rzq",prefix:"r"},
    {id:321112,name:"丹徒区",pid:"321100",type:"district",pinyin:"dan tu qu",py:"dtq",prefix:"d"},
    {id:321181,name:"丹阳市",pid:"321100",type:"district",pinyin:"dan yang shi",py:"dys",prefix:"d"},
    {id:321182,name:"扬中市",pid:"321100",type:"district",pinyin:"yang zhong shi",py:"yzs",prefix:"y"},
    {id:321183,name:"句容市",pid:"321100",type:"district",pinyin:"ju rong shi",py:"jrs",prefix:"j"},
    {id:321202,name:"海陵区",pid:"321200",type:"district",pinyin:"hai ling qu",py:"hlq",prefix:"h"},
    {id:321203,name:"高港区",pid:"321200",type:"district",pinyin:"gao gang qu",py:"ggq",prefix:"g"},
    {id:321204,name:"姜堰区",pid:"321200",type:"district",pinyin:"jiang yan qu",py:"jyq",prefix:"j"},
    {id:321281,name:"兴化市",pid:"321200",type:"district",pinyin:"xing hua shi",py:"xhs",prefix:"x"},
    {id:321282,name:"靖江市",pid:"321200",type:"district",pinyin:"jing jiang shi",py:"jjs",prefix:"j"},
    {id:321283,name:"泰兴市",pid:"321200",type:"district",pinyin:"tai xing shi",py:"txs",prefix:"t"},
    {id:321302,name:"宿城区",pid:"321300",type:"district",pinyin:"su cheng qu",py:"scq",prefix:"s"},
    {id:321311,name:"宿豫区",pid:"321300",type:"district",pinyin:"su yu qu",py:"syq",prefix:"s"},
    {id:321322,name:"沭阳县",pid:"321300",type:"district",pinyin:"shu yang xian",py:"syx",prefix:"s"},
    {id:321323,name:"泗阳县",pid:"321300",type:"district",pinyin:"si yang xian",py:"syx",prefix:"s"},
    {id:321324,name:"泗洪县",pid:"321300",type:"district",pinyin:"si hong xian",py:"shx",prefix:"s"},
    {id:330102,name:"上城区",pid:"330100",type:"district",pinyin:"shang cheng qu",py:"scq",prefix:"s"},
    {id:330103,name:"下城区",pid:"330100",type:"district",pinyin:"xia cheng qu",py:"xcq",prefix:"x"},
    {id:330104,name:"江干区",pid:"330100",type:"district",pinyin:"jiang gan qu",py:"jgq",prefix:"j"},
    {id:330105,name:"拱墅区",pid:"330100",type:"district",pinyin:"gong shu qu",py:"gsq",prefix:"g"},
    {id:330106,name:"西湖区",pid:"330100",type:"district",pinyin:"xi hu qu",py:"xhq",prefix:"x"},
    {id:330108,name:"滨江区",pid:"330100",type:"district",pinyin:"bin jiang qu",py:"bjq",prefix:"b"},
    {id:330109,name:"萧山区",pid:"330100",type:"district",pinyin:"xiao shan qu",py:"xsq",prefix:"x"},
    {id:330110,name:"余杭区",pid:"330100",type:"district",pinyin:"yu hang qu",py:"yhq",prefix:"y"},
    {id:330122,name:"桐庐县",pid:"330100",type:"district",pinyin:"tong lu xian",py:"tlx",prefix:"t"},
    {id:330127,name:"淳安县",pid:"330100",type:"district",pinyin:"chun an xian",py:"cax",prefix:"c"},
    {id:330182,name:"建德市",pid:"330100",type:"district",pinyin:"jian de shi",py:"jds",prefix:"j"},
    {id:330183,name:"富阳市",pid:"330100",type:"district",pinyin:"fu yang shi",py:"fys",prefix:"f"},
    {id:330185,name:"临安市",pid:"330100",type:"district",pinyin:"lin an shi",py:"las",prefix:"l"},
    {id:330203,name:"海曙区",pid:"330200",type:"district",pinyin:"hai shu qu",py:"hsq",prefix:"h"},
    {id:330204,name:"江东区",pid:"330200",type:"district",pinyin:"jiang dong qu",py:"jdq",prefix:"j"},
    {id:330205,name:"江北区",pid:"330200",type:"district",pinyin:"jiang bei qu",py:"jbq",prefix:"j"},
    {id:330206,name:"北仑区",pid:"330200",type:"district",pinyin:"bei lun qu",py:"blq",prefix:"b"},
    {id:330211,name:"镇海区",pid:"330200",type:"district",pinyin:"zhen hai qu",py:"zhq",prefix:"z"},
    {id:330212,name:"鄞州区",pid:"330200",type:"district",pinyin:"yin zhou qu",py:"yzq",prefix:"y"},
    {id:330225,name:"象山县",pid:"330200",type:"district",pinyin:"xiang shan xian",py:"xsx",prefix:"x"},
    {id:330226,name:"宁海县",pid:"330200",type:"district",pinyin:"ning hai xian",py:"nhx",prefix:"n"},
    {id:330281,name:"余姚市",pid:"330200",type:"district",pinyin:"yu yao shi",py:"yys",prefix:"y"},
    {id:330282,name:"慈溪市",pid:"330200",type:"district",pinyin:"ci xi shi",py:"cxs",prefix:"c"},
    {id:330283,name:"奉化市",pid:"330200",type:"district",pinyin:"feng hua shi",py:"fhs",prefix:"f"},
    {id:330302,name:"鹿城区",pid:"330300",type:"district",pinyin:"lu cheng qu",py:"lcq",prefix:"l"},
    {id:330303,name:"龙湾区",pid:"330300",type:"district",pinyin:"long wan qu",py:"lwq",prefix:"l"},
    {id:330304,name:"瓯海区",pid:"330300",type:"district",pinyin:"ou hai qu",py:"ohq",prefix:"o"},
    {id:330322,name:"洞头县",pid:"330300",type:"district",pinyin:"dong tou xian",py:"dtx",prefix:"d"},
    {id:330324,name:"永嘉县",pid:"330300",type:"district",pinyin:"yong jia xian",py:"yjx",prefix:"y"},
    {id:330326,name:"平阳县",pid:"330300",type:"district",pinyin:"ping yang xian",py:"pyx",prefix:"p"},
    {id:330327,name:"苍南县",pid:"330300",type:"district",pinyin:"cang nan xian",py:"cnx",prefix:"c"},
    {id:330328,name:"文成县",pid:"330300",type:"district",pinyin:"wen cheng xian",py:"wcx",prefix:"w"},
    {id:330329,name:"泰顺县",pid:"330300",type:"district",pinyin:"tai shun xian",py:"tsx",prefix:"t"},
    {id:330381,name:"瑞安市",pid:"330300",type:"district",pinyin:"rui an shi",py:"ras",prefix:"r"},
    {id:330382,name:"乐清市",pid:"330300",type:"district",pinyin:"le qing shi",py:"lqs",prefix:"l"},
    {id:330402,name:"南湖区",pid:"330400",type:"district",pinyin:"nan hu qu",py:"nhq",prefix:"n"},
    {id:330411,name:"秀洲区",pid:"330400",type:"district",pinyin:"xiu zhou qu",py:"xzq",prefix:"x"},
    {id:330421,name:"嘉善县",pid:"330400",type:"district",pinyin:"jia shan xian",py:"jsx",prefix:"j"},
    {id:330424,name:"海盐县",pid:"330400",type:"district",pinyin:"hai yan xian",py:"hyx",prefix:"h"},
    {id:330481,name:"海宁市",pid:"330400",type:"district",pinyin:"hai ning shi",py:"hns",prefix:"h"},
    {id:330482,name:"平湖市",pid:"330400",type:"district",pinyin:"ping hu shi",py:"phs",prefix:"p"},
    {id:330483,name:"桐乡市",pid:"330400",type:"district",pinyin:"tong xiang shi",py:"txs",prefix:"t"},
    {id:330502,name:"吴兴区",pid:"330500",type:"district",pinyin:"wu xing qu",py:"wxq",prefix:"w"},
    {id:330503,name:"南浔区",pid:"330500",type:"district",pinyin:"nan xun qu",py:"nxq",prefix:"n"},
    {id:330521,name:"德清县",pid:"330500",type:"district",pinyin:"de qing xian",py:"dqx",prefix:"d"},
    {id:330522,name:"长兴县",pid:"330500",type:"district",pinyin:"chang xing xian",py:"cxx",prefix:"c"},
    {id:330523,name:"安吉县",pid:"330500",type:"district",pinyin:"an ji xian",py:"ajx",prefix:"a"},
    {id:330602,name:"越城区",pid:"330600",type:"district",pinyin:"yue cheng qu",py:"ycq",prefix:"y"},
    {id:330621,name:"绍兴县",pid:"330600",type:"district",pinyin:"shao xing xian",py:"sxx",prefix:"s"},
    {id:330624,name:"新昌县",pid:"330600",type:"district",pinyin:"xin chang xian",py:"xcx",prefix:"x"},
    {id:330681,name:"诸暨市",pid:"330600",type:"district",pinyin:"zhu ji shi",py:"zjs",prefix:"z"},
    {id:330682,name:"上虞市",pid:"330600",type:"district",pinyin:"shang yu shi",py:"sys",prefix:"s"},
    {id:330683,name:"嵊州市",pid:"330600",type:"district",pinyin:"sheng zhou shi",py:"szs",prefix:"s"},
    {id:330702,name:"婺城区",pid:"330700",type:"district",pinyin:"wu cheng qu",py:"wcq",prefix:"w"},
    {id:330703,name:"金东区",pid:"330700",type:"district",pinyin:"jin dong qu",py:"jdq",prefix:"j"},
    {id:330723,name:"武义县",pid:"330700",type:"district",pinyin:"wu yi xian",py:"wyx",prefix:"w"},
    {id:330726,name:"浦江县",pid:"330700",type:"district",pinyin:"pu jiang xian",py:"pjx",prefix:"p"},
    {id:330727,name:"磐安县",pid:"330700",type:"district",pinyin:"pan an xian",py:"pax",prefix:"p"},
    {id:330781,name:"兰溪市",pid:"330700",type:"district",pinyin:"lan xi shi",py:"lxs",prefix:"l"},
    {id:330782,name:"义乌市",pid:"330700",type:"district",pinyin:"yi wu shi",py:"yws",prefix:"y"},
    {id:330783,name:"东阳市",pid:"330700",type:"district",pinyin:"dong yang shi",py:"dys",prefix:"d"},
    {id:330784,name:"永康市",pid:"330700",type:"district",pinyin:"yong kang shi",py:"yks",prefix:"y"},
    {id:330802,name:"柯城区",pid:"330800",type:"district",pinyin:"ke cheng qu",py:"kcq",prefix:"k"},
    {id:330803,name:"衢江区",pid:"330800",type:"district",pinyin:"qu jiang qu",py:"qjq",prefix:"q"},
    {id:330822,name:"常山县",pid:"330800",type:"district",pinyin:"chang shan xian",py:"csx",prefix:"c"},
    {id:330824,name:"开化县",pid:"330800",type:"district",pinyin:"kai hua xian",py:"khx",prefix:"k"},
    {id:330825,name:"龙游县",pid:"330800",type:"district",pinyin:"long you xian",py:"lyx",prefix:"l"},
    {id:330881,name:"江山市",pid:"330800",type:"district",pinyin:"jiang shan shi",py:"jss",prefix:"j"},
    {id:330902,name:"定海区",pid:"330900",type:"district",pinyin:"ding hai qu",py:"dhq",prefix:"d"},
    {id:330903,name:"普陀区",pid:"330900",type:"district",pinyin:"pu tuo qu",py:"ptq",prefix:"p"},
    {id:330921,name:"岱山县",pid:"330900",type:"district",pinyin:"dai shan xian",py:"dsx",prefix:"d"},
    {id:330922,name:"嵊泗县",pid:"330900",type:"district",pinyin:"sheng si xian",py:"ssx",prefix:"s"},
    {id:331002,name:"椒江区",pid:"331000",type:"district",pinyin:"jiao jiang qu",py:"jjq",prefix:"j"},
    {id:331003,name:"黄岩区",pid:"331000",type:"district",pinyin:"huang yan qu",py:"hyq",prefix:"h"},
    {id:331004,name:"路桥区",pid:"331000",type:"district",pinyin:"lu qiao qu",py:"lqq",prefix:"l"},
    {id:331021,name:"玉环县",pid:"331000",type:"district",pinyin:"yu huan xian",py:"yhx",prefix:"y"},
    {id:331022,name:"三门县",pid:"331000",type:"district",pinyin:"san men xian",py:"smx",prefix:"s"},
    {id:331023,name:"天台县",pid:"331000",type:"district",pinyin:"tian tai xian",py:"ttx",prefix:"t"},
    {id:331024,name:"仙居县",pid:"331000",type:"district",pinyin:"xian ju xian",py:"xjx",prefix:"x"},
    {id:331081,name:"温岭市",pid:"331000",type:"district",pinyin:"wen ling shi",py:"wls",prefix:"w"},
    {id:331082,name:"临海市",pid:"331000",type:"district",pinyin:"lin hai shi",py:"lhs",prefix:"l"},
    {id:331102,name:"莲都区",pid:"331100",type:"district",pinyin:"lian dou qu",py:"ldq",prefix:"l"},
    {id:331121,name:"青田县",pid:"331100",type:"district",pinyin:"qing tian xian",py:"qtx",prefix:"q"},
    {id:331122,name:"缙云县",pid:"331100",type:"district",pinyin:"jin yun xian",py:"jyx",prefix:"j"},
    {id:331123,name:"遂昌县",pid:"331100",type:"district",pinyin:"sui chang xian",py:"scx",prefix:"s"},
    {id:331124,name:"松阳县",pid:"331100",type:"district",pinyin:"song yang xian",py:"syx",prefix:"s"},
    {id:331125,name:"云和县",pid:"331100",type:"district",pinyin:"yun he xian",py:"yhx",prefix:"y"},
    {id:331126,name:"庆元县",pid:"331100",type:"district",pinyin:"qing yuan xian",py:"qyx",prefix:"q"},
    {id:331127,name:"景宁畲族自治县",pid:"331100",type:"district",pinyin:"jing ning she zu zi zhi xian",py:"jnszzzx",prefix:"j"},
    {id:331181,name:"龙泉市",pid:"331100",type:"district",pinyin:"long quan shi",py:"lqs",prefix:"l"},
    {id:340102,name:"瑶海区",pid:"340100",type:"district",pinyin:"yao hai qu",py:"yhq",prefix:"y"},
    {id:340103,name:"庐阳区",pid:"340100",type:"district",pinyin:"lu yang qu",py:"lyq",prefix:"l"},
    {id:340104,name:"蜀山区",pid:"340100",type:"district",pinyin:"shu shan qu",py:"ssq",prefix:"s"},
    {id:340111,name:"包河区",pid:"340100",type:"district",pinyin:"bao he qu",py:"bhq",prefix:"b"},
    {id:340121,name:"长丰县",pid:"340100",type:"district",pinyin:"chang feng xian",py:"cfx",prefix:"c"},
    {id:340122,name:"肥东县",pid:"340100",type:"district",pinyin:"fei dong xian",py:"fdx",prefix:"f"},
    {id:340123,name:"肥西县",pid:"340100",type:"district",pinyin:"fei xi xian",py:"fxx",prefix:"f"},
    {id:340124,name:"庐江县",pid:"340100",type:"district",pinyin:"lu jiang xian",py:"ljx",prefix:"l"},
    {id:340181,name:"巢湖市",pid:"340100",type:"district",pinyin:"chao hu shi",py:"chs",prefix:"c"},
    {id:340202,name:"镜湖区",pid:"340200",type:"district",pinyin:"jing hu qu",py:"jhq",prefix:"j"},
    {id:340203,name:"弋江区",pid:"340200",type:"district",pinyin:"yi jiang qu",py:"yjq",prefix:"y"},
    {id:340207,name:"鸠江区",pid:"340200",type:"district",pinyin:"jiu jiang qu",py:"jjq",prefix:"j"},
    {id:340208,name:"三山区",pid:"340200",type:"district",pinyin:"san shan qu",py:"ssq",prefix:"s"},
    {id:340221,name:"芜湖县",pid:"340200",type:"district",pinyin:"wu hu xian",py:"whx",prefix:"w"},
    {id:340222,name:"繁昌县",pid:"340200",type:"district",pinyin:"fan chang xian",py:"fcx",prefix:"f"},
    {id:340223,name:"南陵县",pid:"340200",type:"district",pinyin:"nan ling xian",py:"nlx",prefix:"n"},
    {id:340225,name:"无为县",pid:"340200",type:"district",pinyin:"wu wei xian",py:"wwx",prefix:"w"},
    {id:340302,name:"龙子湖区",pid:"340300",type:"district",pinyin:"long zi hu qu",py:"lzhq",prefix:"l"},
    {id:340303,name:"蚌山区",pid:"340300",type:"district",pinyin:"bang shan qu",py:"bsq",prefix:"b"},
    {id:340304,name:"禹会区",pid:"340300",type:"district",pinyin:"yu hui qu",py:"yhq",prefix:"y"},
    {id:340311,name:"淮上区",pid:"340300",type:"district",pinyin:"huai shang qu",py:"hsq",prefix:"h"},
    {id:340321,name:"怀远县",pid:"340300",type:"district",pinyin:"huai yuan xian",py:"hyx",prefix:"h"},
    {id:340322,name:"五河县",pid:"340300",type:"district",pinyin:"wu he xian",py:"whx",prefix:"w"},
    {id:340323,name:"固镇县",pid:"340300",type:"district",pinyin:"gu zhen xian",py:"gzx",prefix:"g"},
    {id:340402,name:"大通区",pid:"340400",type:"district",pinyin:"da tong qu",py:"dtq",prefix:"d"},
    {id:340403,name:"田家庵区",pid:"340400",type:"district",pinyin:"tian jia an qu",py:"tjaq",prefix:"t"},
    {id:340404,name:"谢家集区",pid:"340400",type:"district",pinyin:"xie jia ji qu",py:"xjjq",prefix:"x"},
    {id:340405,name:"八公山区",pid:"340400",type:"district",pinyin:"ba gong shan qu",py:"bgsq",prefix:"b"},
    {id:340406,name:"潘集区",pid:"340400",type:"district",pinyin:"pan ji qu",py:"pjq",prefix:"p"},
    {id:340421,name:"凤台县",pid:"340400",type:"district",pinyin:"feng tai xian",py:"ftx",prefix:"f"},
    {id:340503,name:"花山区",pid:"340500",type:"district",pinyin:"hua shan qu",py:"hsq",prefix:"h"},
    {id:340504,name:"雨山区",pid:"340500",type:"district",pinyin:"yu shan qu",py:"ysq",prefix:"y"},
    {id:340506,name:"博望区",pid:"340500",type:"district",pinyin:"bo wang qu",py:"bwq",prefix:"b"},
    {id:340521,name:"当涂县",pid:"340500",type:"district",pinyin:"dang tu xian",py:"dtx",prefix:"d"},
    {id:340522,name:"含山县",pid:"340500",type:"district",pinyin:"han shan xian",py:"hsx",prefix:"h"},
    {id:340523,name:"和县",pid:"340500",type:"district",pinyin:"he xian",py:"hx",prefix:"h"},
    {id:340602,name:"杜集区",pid:"340600",type:"district",pinyin:"du ji qu",py:"djq",prefix:"d"},
    {id:340603,name:"相山区",pid:"340600",type:"district",pinyin:"xiang shan qu",py:"xsq",prefix:"x"},
    {id:340604,name:"烈山区",pid:"340600",type:"district",pinyin:"lie shan qu",py:"lsq",prefix:"l"},
    {id:340621,name:"濉溪县",pid:"340600",type:"district",pinyin:"sui xi xian",py:"sxx",prefix:"s"},
    {id:340702,name:"铜官山区",pid:"340700",type:"district",pinyin:"tong guan shan qu",py:"tgsq",prefix:"t"},
    {id:340703,name:"狮子山区",pid:"340700",type:"district",pinyin:"shi zi shan qu",py:"szsq",prefix:"s"},
    {id:340711,name:"郊区",pid:"340700",type:"district",pinyin:"jiao qu",py:"jq",prefix:"j"},
    {id:340721,name:"铜陵县",pid:"340700",type:"district",pinyin:"tong ling xian",py:"tlx",prefix:"t"},
    {id:340802,name:"迎江区",pid:"340800",type:"district",pinyin:"ying jiang qu",py:"yjq",prefix:"y"},
    {id:340803,name:"大观区",pid:"340800",type:"district",pinyin:"da guan qu",py:"dgq",prefix:"d"},
    {id:340811,name:"宜秀区",pid:"340800",type:"district",pinyin:"yi xiu qu",py:"yxq",prefix:"y"},
    {id:340822,name:"怀宁县",pid:"340800",type:"district",pinyin:"huai ning xian",py:"hnx",prefix:"h"},
    {id:340823,name:"枞阳县",pid:"340800",type:"district",pinyin:"zong yang xian",py:"zyx",prefix:"z"},
    {id:340824,name:"潜山县",pid:"340800",type:"district",pinyin:"qian shan xian",py:"qsx",prefix:"q"},
    {id:340825,name:"太湖县",pid:"340800",type:"district",pinyin:"tai hu xian",py:"thx",prefix:"t"},
    {id:340826,name:"宿松县",pid:"340800",type:"district",pinyin:"su song xian",py:"ssx",prefix:"s"},
    {id:340827,name:"望江县",pid:"340800",type:"district",pinyin:"wang jiang xian",py:"wjx",prefix:"w"},
    {id:340828,name:"岳西县",pid:"340800",type:"district",pinyin:"yue xi xian",py:"yxx",prefix:"y"},
    {id:340881,name:"桐城市",pid:"340800",type:"district",pinyin:"tong cheng shi",py:"tcs",prefix:"t"},
    {id:341002,name:"屯溪区",pid:"341000",type:"district",pinyin:"tun xi qu",py:"txq",prefix:"t"},
    {id:341003,name:"黄山区",pid:"341000",type:"district",pinyin:"huang shan qu",py:"hsq",prefix:"h"},
    {id:341004,name:"徽州区",pid:"341000",type:"district",pinyin:"hui zhou qu",py:"hzq",prefix:"h"},
    {id:341021,name:"歙县",pid:"341000",type:"district",pinyin:"she xian",py:"sx",prefix:"s"},
    {id:341022,name:"休宁县",pid:"341000",type:"district",pinyin:"xiu ning xian",py:"xnx",prefix:"x"},
    {id:341023,name:"黟县",pid:"341000",type:"district",pinyin:"yi xian",py:"yx",prefix:"y"},
    {id:341024,name:"祁门县",pid:"341000",type:"district",pinyin:"qi men xian",py:"qmx",prefix:"q"},
    {id:341102,name:"琅琊区",pid:"341100",type:"district",pinyin:"lang ya qu",py:"lyq",prefix:"l"},
    {id:341103,name:"南谯区",pid:"341100",type:"district",pinyin:"nan qiao qu",py:"nqq",prefix:"n"},
    {id:341122,name:"来安县",pid:"341100",type:"district",pinyin:"lai an xian",py:"lax",prefix:"l"},
    {id:341124,name:"全椒县",pid:"341100",type:"district",pinyin:"quan jiao xian",py:"qjx",prefix:"q"},
    {id:341125,name:"定远县",pid:"341100",type:"district",pinyin:"ding yuan xian",py:"dyx",prefix:"d"},
    {id:341126,name:"凤阳县",pid:"341100",type:"district",pinyin:"feng yang xian",py:"fyx",prefix:"f"},
    {id:341181,name:"天长市",pid:"341100",type:"district",pinyin:"tian chang shi",py:"tcs",prefix:"c"},
    {id:341182,name:"明光市",pid:"341100",type:"district",pinyin:"ming guang shi",py:"mgs",prefix:"m"},
    {id:341202,name:"颍州区",pid:"341200",type:"district",pinyin:"ying zhou qu",py:"yzq",prefix:"y"},
    {id:341203,name:"颍东区",pid:"341200",type:"district",pinyin:"ying dong qu",py:"ydq",prefix:"y"},
    {id:341204,name:"颍泉区",pid:"341200",type:"district",pinyin:"ying quan qu",py:"yqq",prefix:"y"},
    {id:341221,name:"临泉县",pid:"341200",type:"district",pinyin:"lin quan xian",py:"lqx",prefix:"l"},
    {id:341222,name:"太和县",pid:"341200",type:"district",pinyin:"tai he xian",py:"thx",prefix:"t"},
    {id:341225,name:"阜南县",pid:"341200",type:"district",pinyin:"fu nan xian",py:"fnx",prefix:"f"},
    {id:341226,name:"颍上县",pid:"341200",type:"district",pinyin:"ying shang xian",py:"ysx",prefix:"y"},
    {id:341282,name:"界首市",pid:"341200",type:"district",pinyin:"jie shou shi",py:"jss",prefix:"j"},
    {id:341302,name:"埇桥区",pid:"341300",type:"district",pinyin:"yong qiao qu",py:"yqq",prefix:"y"},
    {id:341321,name:"砀山县",pid:"341300",type:"district",pinyin:"dang shan xian",py:"dsx",prefix:"d"},
    {id:341322,name:"萧县",pid:"341300",type:"district",pinyin:"xiao xian",py:"xx",prefix:"x"},
    {id:341323,name:"灵璧县",pid:"341300",type:"district",pinyin:"ling bi xian",py:"lbx",prefix:"l"},
    {id:341324,name:"泗县",pid:"341300",type:"district",pinyin:"si xian",py:"sx",prefix:"s"},
    {id:341502,name:"金安区",pid:"341500",type:"district",pinyin:"jin an qu",py:"jaq",prefix:"j"},
    {id:341503,name:"裕安区",pid:"341500",type:"district",pinyin:"yu an qu",py:"yaq",prefix:"y"},
    {id:341521,name:"寿县",pid:"341500",type:"district",pinyin:"shou xian",py:"sx",prefix:"s"},
    {id:341522,name:"霍邱县",pid:"341500",type:"district",pinyin:"huo qiu xian",py:"hqx",prefix:"h"},
    {id:341523,name:"舒城县",pid:"341500",type:"district",pinyin:"shu cheng xian",py:"scx",prefix:"s"},
    {id:341524,name:"金寨县",pid:"341500",type:"district",pinyin:"jin zhai xian",py:"jzx",prefix:"j"},
    {id:341525,name:"霍山县",pid:"341500",type:"district",pinyin:"huo shan xian",py:"hsx",prefix:"h"},
    {id:341602,name:"谯城区",pid:"341600",type:"district",pinyin:"qiao cheng qu",py:"qcq",prefix:"q"},
    {id:341621,name:"涡阳县",pid:"341600",type:"district",pinyin:"wo yang xian",py:"wyx",prefix:"w"},
    {id:341622,name:"蒙城县",pid:"341600",type:"district",pinyin:"meng cheng xian",py:"mcx",prefix:"m"},
    {id:341623,name:"利辛县",pid:"341600",type:"district",pinyin:"li xin xian",py:"lxx",prefix:"l"},
    {id:341702,name:"贵池区",pid:"341700",type:"district",pinyin:"gui chi qu",py:"gcq",prefix:"g"},
    {id:341721,name:"东至县",pid:"341700",type:"district",pinyin:"dong zhi xian",py:"dzx",prefix:"d"},
    {id:341722,name:"石台县",pid:"341700",type:"district",pinyin:"shi tai xian",py:"stx",prefix:"s"},
    {id:341723,name:"青阳县",pid:"341700",type:"district",pinyin:"qing yang xian",py:"qyx",prefix:"q"},
    {id:341802,name:"宣州区",pid:"341800",type:"district",pinyin:"xuan zhou qu",py:"xzq",prefix:"x"},
    {id:341821,name:"郎溪县",pid:"341800",type:"district",pinyin:"lang xi xian",py:"lxx",prefix:"l"},
    {id:341822,name:"广德县",pid:"341800",type:"district",pinyin:"guang de xian",py:"gdx",prefix:"g"},
    {id:341823,name:"泾县",pid:"341800",type:"district",pinyin:"jing xian",py:"jx",prefix:"j"},
    {id:341824,name:"绩溪县",pid:"341800",type:"district",pinyin:"ji xi xian",py:"jxx",prefix:"j"},
    {id:341825,name:"旌德县",pid:"341800",type:"district",pinyin:"jing de xian",py:"jdx",prefix:"j"},
    {id:341881,name:"宁国市",pid:"341800",type:"district",pinyin:"ning guo shi",py:"ngs",prefix:"n"},
    {id:350102,name:"鼓楼区",pid:"350100",type:"district",pinyin:"gu lou qu",py:"glq",prefix:"g"},
    {id:350103,name:"台江区",pid:"350100",type:"district",pinyin:"tai jiang qu",py:"tjq",prefix:"t"},
    {id:350104,name:"仓山区",pid:"350100",type:"district",pinyin:"cang shan qu",py:"csq",prefix:"c"},
    {id:350105,name:"马尾区",pid:"350100",type:"district",pinyin:"ma wei qu",py:"mwq",prefix:"m"},
    {id:350111,name:"晋安区",pid:"350100",type:"district",pinyin:"jin an qu",py:"jaq",prefix:"j"},
    {id:350121,name:"闽侯县",pid:"350100",type:"district",pinyin:"min hou xian",py:"mhx",prefix:"m"},
    {id:350122,name:"连江县",pid:"350100",type:"district",pinyin:"lian jiang xian",py:"ljx",prefix:"l"},
    {id:350123,name:"罗源县",pid:"350100",type:"district",pinyin:"luo yuan xian",py:"lyx",prefix:"l"},
    {id:350124,name:"闽清县",pid:"350100",type:"district",pinyin:"min qing xian",py:"mqx",prefix:"m"},
    {id:350125,name:"永泰县",pid:"350100",type:"district",pinyin:"yong tai xian",py:"ytx",prefix:"y"},
    {id:350128,name:"平潭县",pid:"350100",type:"district",pinyin:"ping tan xian",py:"ptx",prefix:"p"},
    {id:350181,name:"福清市",pid:"350100",type:"district",pinyin:"fu qing shi",py:"fqs",prefix:"f"},
    {id:350182,name:"长乐市",pid:"350100",type:"district",pinyin:"chang le shi",py:"cls",prefix:"c"},
    {id:350203,name:"思明区",pid:"350200",type:"district",pinyin:"si ming qu",py:"smq",prefix:"s"},
    {id:350205,name:"海沧区",pid:"350200",type:"district",pinyin:"hai cang qu",py:"hcq",prefix:"h"},
    {id:350206,name:"湖里区",pid:"350200",type:"district",pinyin:"hu li qu",py:"hlq",prefix:"h"},
    {id:350211,name:"集美区",pid:"350200",type:"district",pinyin:"ji mei qu",py:"jmq",prefix:"j"},
    {id:350212,name:"同安区",pid:"350200",type:"district",pinyin:"tong an qu",py:"taq",prefix:"t"},
    {id:350213,name:"翔安区",pid:"350200",type:"district",pinyin:"xiang an qu",py:"xaq",prefix:"x"},
    {id:350302,name:"城厢区",pid:"350300",type:"district",pinyin:"cheng xiang qu",py:"cxq",prefix:"c"},
    {id:350303,name:"涵江区",pid:"350300",type:"district",pinyin:"han jiang qu",py:"hjq",prefix:"h"},
    {id:350304,name:"荔城区",pid:"350300",type:"district",pinyin:"li cheng qu",py:"lcq",prefix:"l"},
    {id:350305,name:"秀屿区",pid:"350300",type:"district",pinyin:"xiu yu qu",py:"xyq",prefix:"x"},
    {id:350322,name:"仙游县",pid:"350300",type:"district",pinyin:"xian you xian",py:"xyx",prefix:"x"},
    {id:350402,name:"梅列区",pid:"350400",type:"district",pinyin:"mei lie qu",py:"mlq",prefix:"m"},
    {id:350403,name:"三元区",pid:"350400",type:"district",pinyin:"san yuan qu",py:"syq",prefix:"s"},
    {id:350421,name:"明溪县",pid:"350400",type:"district",pinyin:"ming xi xian",py:"mxx",prefix:"m"},
    {id:350423,name:"清流县",pid:"350400",type:"district",pinyin:"qing liu xian",py:"qlx",prefix:"q"},
    {id:350424,name:"宁化县",pid:"350400",type:"district",pinyin:"ning hua xian",py:"nhx",prefix:"n"},
    {id:350425,name:"大田县",pid:"350400",type:"district",pinyin:"da tian xian",py:"dtx",prefix:"d"},
    {id:350426,name:"尤溪县",pid:"350400",type:"district",pinyin:"you xi xian",py:"yxx",prefix:"y"},
    {id:350427,name:"沙县",pid:"350400",type:"district",pinyin:"sha xian",py:"sx",prefix:"s"},
    {id:350428,name:"将乐县",pid:"350400",type:"district",pinyin:"jiang le xian",py:"jlx",prefix:"j"},
    {id:350429,name:"泰宁县",pid:"350400",type:"district",pinyin:"tai ning xian",py:"tnx",prefix:"t"},
    {id:350430,name:"建宁县",pid:"350400",type:"district",pinyin:"jian ning xian",py:"jnx",prefix:"j"},
    {id:350481,name:"永安市",pid:"350400",type:"district",pinyin:"yong an shi",py:"yas",prefix:"y"},
    {id:350502,name:"鲤城区",pid:"350500",type:"district",pinyin:"li cheng qu",py:"lcq",prefix:"l"},
    {id:350503,name:"丰泽区",pid:"350500",type:"district",pinyin:"feng ze qu",py:"fzq",prefix:"f"},
    {id:350504,name:"洛江区",pid:"350500",type:"district",pinyin:"luo jiang qu",py:"ljq",prefix:"l"},
    {id:350505,name:"泉港区",pid:"350500",type:"district",pinyin:"quan gang qu",py:"qgq",prefix:"q"},
    {id:350521,name:"惠安县",pid:"350500",type:"district",pinyin:"hui an xian",py:"hax",prefix:"h"},
    {id:350524,name:"安溪县",pid:"350500",type:"district",pinyin:"an xi xian",py:"axx",prefix:"a"},
    {id:350525,name:"永春县",pid:"350500",type:"district",pinyin:"yong chun xian",py:"ycx",prefix:"y"},
    {id:350526,name:"德化县",pid:"350500",type:"district",pinyin:"de hua xian",py:"dhx",prefix:"d"},
    {id:350527,name:"金门县",pid:"350500",type:"district",pinyin:"jin men xian",py:"jmx",prefix:"j"},
    {id:350581,name:"石狮市",pid:"350500",type:"district",pinyin:"shi shi shi",py:"sss",prefix:"s"},
    {id:350582,name:"晋江市",pid:"350500",type:"district",pinyin:"jin jiang shi",py:"jjs",prefix:"j"},
    {id:350583,name:"南安市",pid:"350500",type:"district",pinyin:"nan an shi",py:"nas",prefix:"n"},
    {id:350602,name:"芗城区",pid:"350600",type:"district",pinyin:"xiang cheng qu",py:"xcq",prefix:"x"},
    {id:350603,name:"龙文区",pid:"350600",type:"district",pinyin:"long wen qu",py:"lwq",prefix:"l"},
    {id:350622,name:"云霄县",pid:"350600",type:"district",pinyin:"yun xiao xian",py:"yxx",prefix:"y"},
    {id:350623,name:"漳浦县",pid:"350600",type:"district",pinyin:"zhang pu xian",py:"zpx",prefix:"z"},
    {id:350624,name:"诏安县",pid:"350600",type:"district",pinyin:"zhao an xian",py:"zax",prefix:"z"},
    {id:350625,name:"长泰县",pid:"350600",type:"district",pinyin:"chang tai xian",py:"ctx",prefix:"c"},
    {id:350626,name:"东山县",pid:"350600",type:"district",pinyin:"dong shan xian",py:"dsx",prefix:"d"},
    {id:350627,name:"南靖县",pid:"350600",type:"district",pinyin:"nan jing xian",py:"njx",prefix:"n"},
    {id:350628,name:"平和县",pid:"350600",type:"district",pinyin:"ping he xian",py:"phx",prefix:"p"},
    {id:350629,name:"华安县",pid:"350600",type:"district",pinyin:"hua an xian",py:"hax",prefix:"h"},
    {id:350681,name:"龙海市",pid:"350600",type:"district",pinyin:"long hai shi",py:"lhs",prefix:"l"},
    {id:350702,name:"延平区",pid:"350700",type:"district",pinyin:"yan ping qu",py:"ypq",prefix:"y"},
    {id:350721,name:"顺昌县",pid:"350700",type:"district",pinyin:"shun chang xian",py:"scx",prefix:"s"},
    {id:350722,name:"浦城县",pid:"350700",type:"district",pinyin:"pu cheng xian",py:"pcx",prefix:"p"},
    {id:350723,name:"光泽县",pid:"350700",type:"district",pinyin:"guang ze xian",py:"gzx",prefix:"g"},
    {id:350724,name:"松溪县",pid:"350700",type:"district",pinyin:"song xi xian",py:"sxx",prefix:"s"},
    {id:350725,name:"政和县",pid:"350700",type:"district",pinyin:"zheng he xian",py:"zhx",prefix:"z"},
    {id:350781,name:"邵武市",pid:"350700",type:"district",pinyin:"shao wu shi",py:"sws",prefix:"s"},
    {id:350782,name:"武夷山市",pid:"350700",type:"district",pinyin:"wu yi shan shi",py:"wyss",prefix:"w"},
    {id:350783,name:"建瓯市",pid:"350700",type:"district",pinyin:"jian ou shi",py:"jos",prefix:"j"},
    {id:350784,name:"建阳市",pid:"350700",type:"district",pinyin:"jian yang shi",py:"jys",prefix:"j"},
    {id:350802,name:"新罗区",pid:"350800",type:"district",pinyin:"xin luo qu",py:"xlq",prefix:"x"},
    {id:350821,name:"长汀县",pid:"350800",type:"district",pinyin:"chang ting xian",py:"ctx",prefix:"c"},
    {id:350822,name:"永定县",pid:"350800",type:"district",pinyin:"yong ding xian",py:"ydx",prefix:"y"},
    {id:350823,name:"上杭县",pid:"350800",type:"district",pinyin:"shang hang xian",py:"shx",prefix:"s"},
    {id:350824,name:"武平县",pid:"350800",type:"district",pinyin:"wu ping xian",py:"wpx",prefix:"w"},
    {id:350825,name:"连城县",pid:"350800",type:"district",pinyin:"lian cheng xian",py:"lcx",prefix:"l"},
    {id:350881,name:"漳平市",pid:"350800",type:"district",pinyin:"zhang ping shi",py:"zps",prefix:"z"},
    {id:350902,name:"蕉城区",pid:"350900",type:"district",pinyin:"jiao cheng qu",py:"jcq",prefix:"j"},
    {id:350921,name:"霞浦县",pid:"350900",type:"district",pinyin:"xia pu xian",py:"xpx",prefix:"x"},
    {id:350922,name:"古田县",pid:"350900",type:"district",pinyin:"gu tian xian",py:"gtx",prefix:"g"},
    {id:350923,name:"屏南县",pid:"350900",type:"district",pinyin:"ping nan xian",py:"pnx",prefix:"p"},
    {id:350924,name:"寿宁县",pid:"350900",type:"district",pinyin:"shou ning xian",py:"snx",prefix:"s"},
    {id:350925,name:"周宁县",pid:"350900",type:"district",pinyin:"zhou ning xian",py:"znx",prefix:"z"},
    {id:350926,name:"柘荣县",pid:"350900",type:"district",pinyin:"zhe rong xian",py:"zrx",prefix:"z"},
    {id:350981,name:"福安市",pid:"350900",type:"district",pinyin:"fu an shi",py:"fas",prefix:"f"},
    {id:350982,name:"福鼎市",pid:"350900",type:"district",pinyin:"fu ding shi",py:"fds",prefix:"f"},
    {id:360102,name:"东湖区",pid:"360100",type:"district",pinyin:"dong hu qu",py:"dhq",prefix:"d"},
    {id:360103,name:"西湖区",pid:"360100",type:"district",pinyin:"xi hu qu",py:"xhq",prefix:"x"},
    {id:360104,name:"青云谱区",pid:"360100",type:"district",pinyin:"qing yun pu qu",py:"qypq",prefix:"q"},
    {id:360105,name:"湾里区",pid:"360100",type:"district",pinyin:"wan li qu",py:"wlq",prefix:"w"},
    {id:360111,name:"青山湖区",pid:"360100",type:"district",pinyin:"qing shan hu qu",py:"qshq",prefix:"q"},
    {id:360121,name:"南昌县",pid:"360100",type:"district",pinyin:"nan chang xian",py:"ncx",prefix:"n"},
    {id:360122,name:"新建县",pid:"360100",type:"district",pinyin:"xin jian xian",py:"xjx",prefix:"x"},
    {id:360123,name:"安义县",pid:"360100",type:"district",pinyin:"an yi xian",py:"ayx",prefix:"a"},
    {id:360124,name:"进贤县",pid:"360100",type:"district",pinyin:"jin xian xian",py:"jxx",prefix:"j"},
    {id:360202,name:"昌江区",pid:"360200",type:"district",pinyin:"chang jiang qu",py:"cjq",prefix:"c"},
    {id:360203,name:"珠山区",pid:"360200",type:"district",pinyin:"zhu shan qu",py:"zsq",prefix:"z"},
    {id:360222,name:"浮梁县",pid:"360200",type:"district",pinyin:"fu liang xian",py:"flx",prefix:"f"},
    {id:360281,name:"乐平市",pid:"360200",type:"district",pinyin:"le ping shi",py:"lps",prefix:"l"},
    {id:360302,name:"安源区",pid:"360300",type:"district",pinyin:"an yuan qu",py:"ayq",prefix:"a"},
    {id:360313,name:"湘东区",pid:"360300",type:"district",pinyin:"xiang dong qu",py:"xdq",prefix:"x"},
    {id:360321,name:"莲花县",pid:"360300",type:"district",pinyin:"lian hua xian",py:"lhx",prefix:"l"},
    {id:360322,name:"上栗县",pid:"360300",type:"district",pinyin:"shang li xian",py:"slx",prefix:"s"},
    {id:360323,name:"芦溪县",pid:"360300",type:"district",pinyin:"lu xi xian",py:"lxx",prefix:"l"},
    {id:360402,name:"庐山区",pid:"360400",type:"district",pinyin:"lu shan qu",py:"lsq",prefix:"l"},
    {id:360403,name:"浔阳区",pid:"360400",type:"district",pinyin:"xun yang qu",py:"xyq",prefix:"x"},
    {id:360421,name:"九江县",pid:"360400",type:"district",pinyin:"jiu jiang xian",py:"jjx",prefix:"j"},
    {id:360423,name:"武宁县",pid:"360400",type:"district",pinyin:"wu ning xian",py:"wnx",prefix:"w"},
    {id:360424,name:"修水县",pid:"360400",type:"district",pinyin:"xiu shui xian",py:"xsx",prefix:"x"},
    {id:360425,name:"永修县",pid:"360400",type:"district",pinyin:"yong xiu xian",py:"yxx",prefix:"y"},
    {id:360426,name:"德安县",pid:"360400",type:"district",pinyin:"de an xian",py:"dax",prefix:"d"},
    {id:360427,name:"星子县",pid:"360400",type:"district",pinyin:"xing zi xian",py:"xzx",prefix:"x"},
    {id:360428,name:"都昌县",pid:"360400",type:"district",pinyin:"dou chang xian",py:"dcx",prefix:"d"},
    {id:360429,name:"湖口县",pid:"360400",type:"district",pinyin:"hu kou xian",py:"hkx",prefix:"h"},
    {id:360430,name:"彭泽县",pid:"360400",type:"district",pinyin:"peng ze xian",py:"pzx",prefix:"p"},
    {id:360481,name:"瑞昌市",pid:"360400",type:"district",pinyin:"rui chang shi",py:"rcs",prefix:"r"},
    {id:360482,name:"共青城市",pid:"360400",type:"district",pinyin:"gong qing cheng shi",py:"gqcs",prefix:"g"},
    {id:360502,name:"渝水区",pid:"360500",type:"district",pinyin:"yu shui qu",py:"ysq",prefix:"y"},
    {id:360521,name:"分宜县",pid:"360500",type:"district",pinyin:"fen yi xian",py:"fyx",prefix:"f"},
    {id:360602,name:"月湖区",pid:"360600",type:"district",pinyin:"yue hu qu",py:"yhq",prefix:"y"},
    {id:360622,name:"余江县",pid:"360600",type:"district",pinyin:"yu jiang xian",py:"yjx",prefix:"y"},
    {id:360681,name:"贵溪市",pid:"360600",type:"district",pinyin:"gui xi shi",py:"gxs",prefix:"g"},
    {id:360702,name:"章贡区",pid:"360700",type:"district",pinyin:"zhang gong qu",py:"zgq",prefix:"z"},
    {id:360721,name:"赣县",pid:"360700",type:"district",pinyin:"gan xian",py:"gx",prefix:"g"},
    {id:360722,name:"信丰县",pid:"360700",type:"district",pinyin:"xin feng xian",py:"xfx",prefix:"x"},
    {id:360723,name:"大余县",pid:"360700",type:"district",pinyin:"da yu xian",py:"dyx",prefix:"d"},
    {id:360724,name:"上犹县",pid:"360700",type:"district",pinyin:"shang you xian",py:"syx",prefix:"s"},
    {id:360725,name:"崇义县",pid:"360700",type:"district",pinyin:"chong yi xian",py:"cyx",prefix:"c"},
    {id:360726,name:"安远县",pid:"360700",type:"district",pinyin:"an yuan xian",py:"ayx",prefix:"a"},
    {id:360727,name:"龙南县",pid:"360700",type:"district",pinyin:"long nan xian",py:"lnx",prefix:"l"},
    {id:360728,name:"定南县",pid:"360700",type:"district",pinyin:"ding nan xian",py:"dnx",prefix:"d"},
    {id:360729,name:"全南县",pid:"360700",type:"district",pinyin:"quan nan xian",py:"qnx",prefix:"q"},
    {id:360730,name:"宁都县",pid:"360700",type:"district",pinyin:"ning dou xian",py:"ndx",prefix:"n"},
    {id:360731,name:"于都县",pid:"360700",type:"district",pinyin:"yu dou xian",py:"ydx",prefix:"y"},
    {id:360732,name:"兴国县",pid:"360700",type:"district",pinyin:"xing guo xian",py:"xgx",prefix:"x"},
    {id:360733,name:"会昌县",pid:"360700",type:"district",pinyin:"hui chang xian",py:"hcx",prefix:"h"},
    {id:360734,name:"寻乌县",pid:"360700",type:"district",pinyin:"xun wu xian",py:"xwx",prefix:"x"},
    {id:360735,name:"石城县",pid:"360700",type:"district",pinyin:"shi cheng xian",py:"scx",prefix:"s"},
    {id:360781,name:"瑞金市",pid:"360700",type:"district",pinyin:"rui jin shi",py:"rjs",prefix:"r"},
    {id:360782,name:"南康市",pid:"360700",type:"district",pinyin:"nan kang shi",py:"nks",prefix:"n"},
    {id:360802,name:"吉州区",pid:"360800",type:"district",pinyin:"ji zhou qu",py:"jzq",prefix:"j"},
    {id:360803,name:"青原区",pid:"360800",type:"district",pinyin:"qing yuan qu",py:"qyq",prefix:"q"},
    {id:360821,name:"吉安县",pid:"360800",type:"district",pinyin:"ji an xian",py:"jax",prefix:"j"},
    {id:360822,name:"吉水县",pid:"360800",type:"district",pinyin:"ji shui xian",py:"jsx",prefix:"j"},
    {id:360823,name:"峡江县",pid:"360800",type:"district",pinyin:"xia jiang xian",py:"xjx",prefix:"x"},
    {id:360824,name:"新干县",pid:"360800",type:"district",pinyin:"xin gan xian",py:"xgx",prefix:"x"},
    {id:360825,name:"永丰县",pid:"360800",type:"district",pinyin:"yong feng xian",py:"yfx",prefix:"y"},
    {id:360826,name:"泰和县",pid:"360800",type:"district",pinyin:"tai he xian",py:"thx",prefix:"t"},
    {id:360827,name:"遂川县",pid:"360800",type:"district",pinyin:"sui chuan xian",py:"scx",prefix:"s"},
    {id:360828,name:"万安县",pid:"360800",type:"district",pinyin:"wan an xian",py:"wax",prefix:"w"},
    {id:360829,name:"安福县",pid:"360800",type:"district",pinyin:"an fu xian",py:"afx",prefix:"a"},
    {id:360830,name:"永新县",pid:"360800",type:"district",pinyin:"yong xin xian",py:"yxx",prefix:"y"},
    {id:360881,name:"井冈山市",pid:"360800",type:"district",pinyin:"jing gang shan shi",py:"jgss",prefix:"j"},
    {id:360902,name:"袁州区",pid:"360900",type:"district",pinyin:"yuan zhou qu",py:"yzq",prefix:"y"},
    {id:360921,name:"奉新县",pid:"360900",type:"district",pinyin:"feng xin xian",py:"fxx",prefix:"f"},
    {id:360922,name:"万载县",pid:"360900",type:"district",pinyin:"wan zai xian",py:"wzx",prefix:"w"},
    {id:360923,name:"上高县",pid:"360900",type:"district",pinyin:"shang gao xian",py:"sgx",prefix:"s"},
    {id:360924,name:"宜丰县",pid:"360900",type:"district",pinyin:"yi feng xian",py:"yfx",prefix:"y"},
    {id:360925,name:"靖安县",pid:"360900",type:"district",pinyin:"jing an xian",py:"jax",prefix:"j"},
    {id:360926,name:"铜鼓县",pid:"360900",type:"district",pinyin:"tong gu xian",py:"tgx",prefix:"t"},
    {id:360981,name:"丰城市",pid:"360900",type:"district",pinyin:"feng cheng shi",py:"fcs",prefix:"f"},
    {id:360982,name:"樟树市",pid:"360900",type:"district",pinyin:"zhang shu shi",py:"zss",prefix:"z"},
    {id:360983,name:"高安市",pid:"360900",type:"district",pinyin:"gao an shi",py:"gas",prefix:"g"},
    {id:361002,name:"临川区",pid:"361000",type:"district",pinyin:"lin chuan qu",py:"lcq",prefix:"l"},
    {id:361021,name:"南城县",pid:"361000",type:"district",pinyin:"nan cheng xian",py:"ncx",prefix:"n"},
    {id:361022,name:"黎川县",pid:"361000",type:"district",pinyin:"li chuan xian",py:"lcx",prefix:"l"},
    {id:361023,name:"南丰县",pid:"361000",type:"district",pinyin:"nan feng xian",py:"nfx",prefix:"n"},
    {id:361024,name:"崇仁县",pid:"361000",type:"district",pinyin:"chong ren xian",py:"crx",prefix:"c"},
    {id:361025,name:"乐安县",pid:"361000",type:"district",pinyin:"le an xian",py:"lax",prefix:"l"},
    {id:361026,name:"宜黄县",pid:"361000",type:"district",pinyin:"yi huang xian",py:"yhx",prefix:"y"},
    {id:361027,name:"金溪县",pid:"361000",type:"district",pinyin:"jin xi xian",py:"jxx",prefix:"j"},
    {id:361028,name:"资溪县",pid:"361000",type:"district",pinyin:"zi xi xian",py:"zxx",prefix:"z"},
    {id:361029,name:"东乡县",pid:"361000",type:"district",pinyin:"dong xiang xian",py:"dxx",prefix:"d"},
    {id:361030,name:"广昌县",pid:"361000",type:"district",pinyin:"guang chang xian",py:"gcx",prefix:"g"},
    {id:361102,name:"信州区",pid:"361100",type:"district",pinyin:"xin zhou qu",py:"xzq",prefix:"x"},
    {id:361121,name:"上饶县",pid:"361100",type:"district",pinyin:"shang rao xian",py:"srx",prefix:"s"},
    {id:361122,name:"广丰县",pid:"361100",type:"district",pinyin:"guang feng xian",py:"gfx",prefix:"g"},
    {id:361123,name:"玉山县",pid:"361100",type:"district",pinyin:"yu shan xian",py:"ysx",prefix:"y"},
    {id:361124,name:"铅山县",pid:"361100",type:"district",pinyin:"qian shan xian",py:"qsx",prefix:"q"},
    {id:361125,name:"横峰县",pid:"361100",type:"district",pinyin:"heng feng xian",py:"hfx",prefix:"h"},
    {id:361126,name:"弋阳县",pid:"361100",type:"district",pinyin:"yi yang xian",py:"yyx",prefix:"y"},
    {id:361127,name:"余干县",pid:"361100",type:"district",pinyin:"yu gan xian",py:"ygx",prefix:"y"},
    {id:361128,name:"鄱阳县",pid:"361100",type:"district",pinyin:"po yang xian",py:"pyx",prefix:"p"},
    {id:361129,name:"万年县",pid:"361100",type:"district",pinyin:"wan nian xian",py:"wnx",prefix:"w"},
    {id:361130,name:"婺源县",pid:"361100",type:"district",pinyin:"wu yuan xian",py:"wyx",prefix:"w"},
    {id:361181,name:"德兴市",pid:"361100",type:"district",pinyin:"de xing shi",py:"dxs",prefix:"d"},
    {id:370102,name:"历下区",pid:"370100",type:"district",pinyin:"li xia qu",py:"lxq",prefix:"l"},
    {id:370103,name:"市中区",pid:"370100",type:"district",pinyin:"shi zhong qu",py:"szq",prefix:"s"},
    {id:370104,name:"槐荫区",pid:"370100",type:"district",pinyin:"huai yin qu",py:"hyq",prefix:"h"},
    {id:370105,name:"天桥区",pid:"370100",type:"district",pinyin:"tian qiao qu",py:"tqq",prefix:"t"},
    {id:370112,name:"历城区",pid:"370100",type:"district",pinyin:"li cheng qu",py:"lcq",prefix:"l"},
    {id:370113,name:"长清区",pid:"370100",type:"district",pinyin:"chang qing qu",py:"cqq",prefix:"c"},
    {id:370124,name:"平阴县",pid:"370100",type:"district",pinyin:"ping yin xian",py:"pyx",prefix:"p"},
    {id:370125,name:"济阳县",pid:"370100",type:"district",pinyin:"ji yang xian",py:"jyx",prefix:"j"},
    {id:370126,name:"商河县",pid:"370100",type:"district",pinyin:"shang he xian",py:"shx",prefix:"s"},
    {id:370181,name:"章丘市",pid:"370100",type:"district",pinyin:"zhang qiu shi",py:"zqs",prefix:"z"},
    {id:370202,name:"市南区",pid:"370200",type:"district",pinyin:"shi nan qu",py:"snq",prefix:"s"},
    {id:370203,name:"市北区",pid:"370200",type:"district",pinyin:"shi bei qu",py:"sbq",prefix:"s"},
    {id:370211,name:"黄岛区",pid:"370200",type:"district",pinyin:"huang dao qu",py:"hdq",prefix:"h"},
    {id:370212,name:"崂山区",pid:"370200",type:"district",pinyin:"lao shan qu",py:"lsq",prefix:"l"},
    {id:370213,name:"李沧区",pid:"370200",type:"district",pinyin:"li cang qu",py:"lcq",prefix:"l"},
    {id:370214,name:"城阳区",pid:"370200",type:"district",pinyin:"cheng yang qu",py:"cyq",prefix:"c"},
    {id:370281,name:"胶州市",pid:"370200",type:"district",pinyin:"jiao zhou shi",py:"jzs",prefix:"j"},
    {id:370282,name:"即墨市",pid:"370200",type:"district",pinyin:"ji mo shi",py:"jms",prefix:"j"},
    {id:370283,name:"平度市",pid:"370200",type:"district",pinyin:"ping du shi",py:"pds",prefix:"p"},
    {id:370285,name:"莱西市",pid:"370200",type:"district",pinyin:"lai xi shi",py:"lxs",prefix:"l"},
    {id:370302,name:"淄川区",pid:"370300",type:"district",pinyin:"zi chuan qu",py:"zcq",prefix:"z"},
    {id:370303,name:"张店区",pid:"370300",type:"district",pinyin:"zhang dian qu",py:"zdq",prefix:"z"},
    {id:370304,name:"博山区",pid:"370300",type:"district",pinyin:"bo shan qu",py:"bsq",prefix:"b"},
    {id:370305,name:"临淄区",pid:"370300",type:"district",pinyin:"lin zi qu",py:"lzq",prefix:"l"},
    {id:370306,name:"周村区",pid:"370300",type:"district",pinyin:"zhou cun qu",py:"zcq",prefix:"z"},
    {id:370321,name:"桓台县",pid:"370300",type:"district",pinyin:"huan tai xian",py:"htx",prefix:"h"},
    {id:370322,name:"高青县",pid:"370300",type:"district",pinyin:"gao qing xian",py:"gqx",prefix:"g"},
    {id:370323,name:"沂源县",pid:"370300",type:"district",pinyin:"yi yuan xian",py:"yyx",prefix:"y"},
    {id:370402,name:"市中区",pid:"370400",type:"district",pinyin:"shi zhong qu",py:"szq",prefix:"s"},
    {id:370403,name:"薛城区",pid:"370400",type:"district",pinyin:"xue cheng qu",py:"xcq",prefix:"x"},
    {id:370404,name:"峄城区",pid:"370400",type:"district",pinyin:"yi cheng qu",py:"ycq",prefix:"y"},
    {id:370405,name:"台儿庄区",pid:"370400",type:"district",pinyin:"tai er zhuang qu",py:"tezq",prefix:"t"},
    {id:370406,name:"山亭区",pid:"370400",type:"district",pinyin:"shan ting qu",py:"stq",prefix:"s"},
    {id:370481,name:"滕州市",pid:"370400",type:"district",pinyin:"teng zhou shi",py:"tzs",prefix:"t"},
    {id:370502,name:"东营区",pid:"370500",type:"district",pinyin:"dong ying qu",py:"dyq",prefix:"d"},
    {id:370503,name:"河口区",pid:"370500",type:"district",pinyin:"he kou qu",py:"hkq",prefix:"h"},
    {id:370521,name:"垦利县",pid:"370500",type:"district",pinyin:"ken li xian",py:"klx",prefix:"k"},
    {id:370522,name:"利津县",pid:"370500",type:"district",pinyin:"li jin xian",py:"ljx",prefix:"l"},
    {id:370523,name:"广饶县",pid:"370500",type:"district",pinyin:"guang rao xian",py:"grx",prefix:"g"},
    {id:370602,name:"芝罘区",pid:"370600",type:"district",pinyin:"zhi fu qu",py:"zfq",prefix:"z"},
    {id:370611,name:"福山区",pid:"370600",type:"district",pinyin:"fu shan qu",py:"fsq",prefix:"f"},
    {id:370612,name:"牟平区",pid:"370600",type:"district",pinyin:"mou ping qu",py:"mpq",prefix:"m"},
    {id:370613,name:"莱山区",pid:"370600",type:"district",pinyin:"lai shan qu",py:"lsq",prefix:"l"},
    {id:370634,name:"长岛县",pid:"370600",type:"district",pinyin:"chang dao xian",py:"cdx",prefix:"c"},
    {id:370681,name:"龙口市",pid:"370600",type:"district",pinyin:"long kou shi",py:"lks",prefix:"l"},
    {id:370682,name:"莱阳市",pid:"370600",type:"district",pinyin:"lai yang shi",py:"lys",prefix:"l"},
    {id:370683,name:"莱州市",pid:"370600",type:"district",pinyin:"lai zhou shi",py:"lzs",prefix:"l"},
    {id:370684,name:"蓬莱市",pid:"370600",type:"district",pinyin:"peng lai shi",py:"pls",prefix:"p"},
    {id:370685,name:"招远市",pid:"370600",type:"district",pinyin:"zhao yuan shi",py:"zys",prefix:"z"},
    {id:370686,name:"栖霞市",pid:"370600",type:"district",pinyin:"qi xia shi",py:"qxs",prefix:"q"},
    {id:370687,name:"海阳市",pid:"370600",type:"district",pinyin:"hai yang shi",py:"hys",prefix:"h"},
    {id:370702,name:"潍城区",pid:"370700",type:"district",pinyin:"wei cheng qu",py:"wcq",prefix:"w"},
    {id:370703,name:"寒亭区",pid:"370700",type:"district",pinyin:"han ting qu",py:"htq",prefix:"h"},
    {id:370704,name:"坊子区",pid:"370700",type:"district",pinyin:"fang zi qu",py:"fzq",prefix:"f"},
    {id:370705,name:"奎文区",pid:"370700",type:"district",pinyin:"kui wen qu",py:"kwq",prefix:"k"},
    {id:370724,name:"临朐县",pid:"370700",type:"district",pinyin:"lin qu xian",py:"lqx",prefix:"l"},
    {id:370725,name:"昌乐县",pid:"370700",type:"district",pinyin:"chang le xian",py:"clx",prefix:"c"},
    {id:370781,name:"青州市",pid:"370700",type:"district",pinyin:"qing zhou shi",py:"qzs",prefix:"q"},
    {id:370782,name:"诸城市",pid:"370700",type:"district",pinyin:"zhu cheng shi",py:"zcs",prefix:"z"},
    {id:370783,name:"寿光市",pid:"370700",type:"district",pinyin:"shou guang shi",py:"sgs",prefix:"s"},
    {id:370784,name:"安丘市",pid:"370700",type:"district",pinyin:"an qiu shi",py:"aqs",prefix:"a"},
    {id:370785,name:"高密市",pid:"370700",type:"district",pinyin:"gao mi shi",py:"gms",prefix:"g"},
    {id:370786,name:"昌邑市",pid:"370700",type:"district",pinyin:"chang yi shi",py:"cys",prefix:"c"},
    {id:370802,name:"市中区",pid:"370800",type:"district",pinyin:"shi zhong qu",py:"szq",prefix:"s"},
    {id:370811,name:"任城区",pid:"370800",type:"district",pinyin:"ren cheng qu",py:"rcq",prefix:"r"},
    {id:370826,name:"微山县",pid:"370800",type:"district",pinyin:"wei shan xian",py:"wsx",prefix:"w"},
    {id:370827,name:"鱼台县",pid:"370800",type:"district",pinyin:"yu tai xian",py:"ytx",prefix:"y"},
    {id:370828,name:"金乡县",pid:"370800",type:"district",pinyin:"jin xiang xian",py:"jxx",prefix:"j"},
    {id:370829,name:"嘉祥县",pid:"370800",type:"district",pinyin:"jia xiang xian",py:"jxx",prefix:"j"},
    {id:370830,name:"汶上县",pid:"370800",type:"district",pinyin:"wen shang xian",py:"wsx",prefix:"w"},
    {id:370831,name:"泗水县",pid:"370800",type:"district",pinyin:"si shui xian",py:"ssx",prefix:"s"},
    {id:370832,name:"梁山县",pid:"370800",type:"district",pinyin:"liang shan xian",py:"lsx",prefix:"l"},
    {id:370881,name:"曲阜市",pid:"370800",type:"district",pinyin:"qu fu shi",py:"qfs",prefix:"q"},
    {id:370882,name:"兖州市",pid:"370800",type:"district",pinyin:"yan zhou shi",py:"yzs",prefix:"y"},
    {id:370883,name:"邹城市",pid:"370800",type:"district",pinyin:"zou cheng shi",py:"zcs",prefix:"z"},
    {id:370902,name:"泰山区",pid:"370900",type:"district",pinyin:"tai shan qu",py:"tsq",prefix:"t"},
    {id:370911,name:"岱岳区",pid:"370900",type:"district",pinyin:"dai yue qu",py:"dyq",prefix:"d"},
    {id:370921,name:"宁阳县",pid:"370900",type:"district",pinyin:"ning yang xian",py:"nyx",prefix:"n"},
    {id:370923,name:"东平县",pid:"370900",type:"district",pinyin:"dong ping xian",py:"dpx",prefix:"d"},
    {id:370982,name:"新泰市",pid:"370900",type:"district",pinyin:"xin tai shi",py:"xts",prefix:"x"},
    {id:370983,name:"肥城市",pid:"370900",type:"district",pinyin:"fei cheng shi",py:"fcs",prefix:"f"},
    {id:371002,name:"环翠区",pid:"371000",type:"district",pinyin:"huan cui qu",py:"hcq",prefix:"h"},
    {id:371081,name:"文登市",pid:"371000",type:"district",pinyin:"wen deng shi",py:"wds",prefix:"w"},
    {id:371082,name:"荣成市",pid:"371000",type:"district",pinyin:"rong cheng shi",py:"rcs",prefix:"r"},
    {id:371083,name:"乳山市",pid:"371000",type:"district",pinyin:"ru shan shi",py:"rss",prefix:"r"},
    {id:371102,name:"东港区",pid:"371100",type:"district",pinyin:"dong gang qu",py:"dgq",prefix:"d"},
    {id:371103,name:"岚山区",pid:"371100",type:"district",pinyin:"lan shan qu",py:"lsq",prefix:"l"},
    {id:371121,name:"五莲县",pid:"371100",type:"district",pinyin:"wu lian xian",py:"wlx",prefix:"w"},
    {id:371122,name:"莒县",pid:"371100",type:"district",pinyin:"ju xian",py:"jx",prefix:"j"},
    {id:371202,name:"莱城区",pid:"371200",type:"district",pinyin:"lai cheng qu",py:"lcq",prefix:"l"},
    {id:371203,name:"钢城区",pid:"371200",type:"district",pinyin:"gang cheng qu",py:"gcq",prefix:"g"},
    {id:371302,name:"兰山区",pid:"371300",type:"district",pinyin:"lan shan qu",py:"lsq",prefix:"l"},
    {id:371311,name:"罗庄区",pid:"371300",type:"district",pinyin:"luo zhuang qu",py:"lzq",prefix:"l"},
    {id:371312,name:"河东区",pid:"371300",type:"district",pinyin:"he dong qu",py:"hdq",prefix:"h"},
    {id:371321,name:"沂南县",pid:"371300",type:"district",pinyin:"yi nan xian",py:"ynx",prefix:"y"},
    {id:371322,name:"郯城县",pid:"371300",type:"district",pinyin:"tan cheng xian",py:"tcx",prefix:"t"},
    {id:371323,name:"沂水县",pid:"371300",type:"district",pinyin:"yi shui xian",py:"ysx",prefix:"y"},
    {id:371324,name:"苍山县",pid:"371300",type:"district",pinyin:"cang shan xian",py:"csx",prefix:"c"},
    {id:371325,name:"费县",pid:"371300",type:"district",pinyin:"fei xian",py:"fx",prefix:"f"},
    {id:371326,name:"平邑县",pid:"371300",type:"district",pinyin:"ping yi xian",py:"pyx",prefix:"p"},
    {id:371327,name:"莒南县",pid:"371300",type:"district",pinyin:"ju nan xian",py:"jnx",prefix:"j"},
    {id:371328,name:"蒙阴县",pid:"371300",type:"district",pinyin:"meng yin xian",py:"myx",prefix:"m"},
    {id:371329,name:"临沭县",pid:"371300",type:"district",pinyin:"lin shu xian",py:"lsx",prefix:"l"},
    {id:371402,name:"德城区",pid:"371400",type:"district",pinyin:"de cheng qu",py:"dcq",prefix:"d"},
    {id:371421,name:"陵县",pid:"371400",type:"district",pinyin:"ling xian",py:"lx",prefix:"l"},
    {id:371422,name:"宁津县",pid:"371400",type:"district",pinyin:"ning jin xian",py:"njx",prefix:"n"},
    {id:371423,name:"庆云县",pid:"371400",type:"district",pinyin:"qing yun xian",py:"qyx",prefix:"q"},
    {id:371424,name:"临邑县",pid:"371400",type:"district",pinyin:"lin yi xian",py:"lyx",prefix:"l"},
    {id:371425,name:"齐河县",pid:"371400",type:"district",pinyin:"qi he xian",py:"qhx",prefix:"q"},
    {id:371426,name:"平原县",pid:"371400",type:"district",pinyin:"ping yuan xian",py:"pyx",prefix:"p"},
    {id:371427,name:"夏津县",pid:"371400",type:"district",pinyin:"xia jin xian",py:"xjx",prefix:"x"},
    {id:371428,name:"武城县",pid:"371400",type:"district",pinyin:"wu cheng xian",py:"wcx",prefix:"w"},
    {id:371481,name:"乐陵市",pid:"371400",type:"district",pinyin:"le ling shi",py:"lls",prefix:"l"},
    {id:371482,name:"禹城市",pid:"371400",type:"district",pinyin:"yu cheng shi",py:"ycs",prefix:"y"},
    {id:371502,name:"东昌府区",pid:"371500",type:"district",pinyin:"dong chang fu qu",py:"dcfq",prefix:"d"},
    {id:371521,name:"阳谷县",pid:"371500",type:"district",pinyin:"yang gu xian",py:"ygx",prefix:"y"},
    {id:371522,name:"莘县",pid:"371500",type:"district",pinyin:"xin xian",py:"xx",prefix:"x"},
    {id:371523,name:"茌平县",pid:"371500",type:"district",pinyin:"chi ping xian",py:"cpx",prefix:"c"},
    {id:371524,name:"东阿县",pid:"371500",type:"district",pinyin:"dong a xian",py:"dax",prefix:"d"},
    {id:371525,name:"冠县",pid:"371500",type:"district",pinyin:"guan xian",py:"gx",prefix:"g"},
    {id:371526,name:"高唐县",pid:"371500",type:"district",pinyin:"gao tang xian",py:"gtx",prefix:"g"},
    {id:371581,name:"临清市",pid:"371500",type:"district",pinyin:"lin qing shi",py:"lqs",prefix:"l"},
    {id:371602,name:"滨城区",pid:"371600",type:"district",pinyin:"bin cheng qu",py:"bcq",prefix:"b"},
    {id:371621,name:"惠民县",pid:"371600",type:"district",pinyin:"hui min xian",py:"hmx",prefix:"h"},
    {id:371622,name:"阳信县",pid:"371600",type:"district",pinyin:"yang xin xian",py:"yxx",prefix:"y"},
    {id:371623,name:"无棣县",pid:"371600",type:"district",pinyin:"wu di xian",py:"wdx",prefix:"w"},
    {id:371624,name:"沾化县",pid:"371600",type:"district",pinyin:"zhan hua xian",py:"zhx",prefix:"z"},
    {id:371625,name:"博兴县",pid:"371600",type:"district",pinyin:"bo xing xian",py:"bxx",prefix:"b"},
    {id:371626,name:"邹平县",pid:"371600",type:"district",pinyin:"zou ping xian",py:"zpx",prefix:"z"},
    {id:371702,name:"牡丹区",pid:"371700",type:"district",pinyin:"mu dan qu",py:"mdq",prefix:"m"},
    {id:371721,name:"曹县",pid:"371700",type:"district",pinyin:"cao xian",py:"cx",prefix:"c"},
    {id:371722,name:"单县",pid:"371700",type:"district",pinyin:"dan xian",py:"dx",prefix:"d"},
    {id:371723,name:"成武县",pid:"371700",type:"district",pinyin:"cheng wu xian",py:"cwx",prefix:"c"},
    {id:371724,name:"巨野县",pid:"371700",type:"district",pinyin:"ju ye xian",py:"jyx",prefix:"j"},
    {id:371725,name:"郓城县",pid:"371700",type:"district",pinyin:"yun cheng xian",py:"ycx",prefix:"y"},
    {id:371726,name:"鄄城县",pid:"371700",type:"district",pinyin:"juan cheng xian",py:"jcx",prefix:"j"},
    {id:371727,name:"定陶县",pid:"371700",type:"district",pinyin:"ding tao xian",py:"dtx",prefix:"d"},
    {id:371728,name:"东明县",pid:"371700",type:"district",pinyin:"dong ming xian",py:"dmx",prefix:"d"},
    {id:410102,name:"中原区",pid:"410100",type:"district",pinyin:"zhong yuan qu",py:"zyq",prefix:"z"},
    {id:410103,name:"二七区",pid:"410100",type:"district",pinyin:"er qi qu",py:"eqq",prefix:"e"},
    {id:410104,name:"管城回族区",pid:"410100",type:"district",pinyin:"guan cheng hui zu qu",py:"gchzq",prefix:"g"},
    {id:410105,name:"金水区",pid:"410100",type:"district",pinyin:"jin shui qu",py:"jsq",prefix:"j"},
    {id:410106,name:"上街区",pid:"410100",type:"district",pinyin:"shang jie qu",py:"sjq",prefix:"s"},
    {id:410108,name:"惠济区",pid:"410100",type:"district",pinyin:"hui ji qu",py:"hjq",prefix:"h"},
    {id:410122,name:"中牟县",pid:"410100",type:"district",pinyin:"zhong mou xian",py:"zmx",prefix:"z"},
    {id:410181,name:"巩义市",pid:"410100",type:"district",pinyin:"gong yi shi",py:"gys",prefix:"g"},
    {id:410182,name:"荥阳市",pid:"410100",type:"district",pinyin:"ying yang shi",py:"yys",prefix:"y"},
    {id:410183,name:"新密市",pid:"410100",type:"district",pinyin:"xin mi shi",py:"xms",prefix:"x"},
    {id:410184,name:"新郑市",pid:"410100",type:"district",pinyin:"xin zheng shi",py:"xzs",prefix:"x"},
    {id:410185,name:"登封市",pid:"410100",type:"district",pinyin:"deng feng shi",py:"dfs",prefix:"d"},
    {id:410202,name:"龙亭区",pid:"410200",type:"district",pinyin:"long ting qu",py:"ltq",prefix:"l"},
    {id:410203,name:"顺河回族区",pid:"410200",type:"district",pinyin:"shun he hui zu qu",py:"shhzq",prefix:"s"},
    {id:410204,name:"鼓楼区",pid:"410200",type:"district",pinyin:"gu lou qu",py:"glq",prefix:"g"},
    {id:410205,name:"禹王台区",pid:"410200",type:"district",pinyin:"yu wang tai qu",py:"ywtq",prefix:"y"},
    {id:410211,name:"金明区",pid:"410200",type:"district",pinyin:"jin ming qu",py:"jmq",prefix:"j"},
    {id:410221,name:"杞县",pid:"410200",type:"district",pinyin:"qi xian",py:"qx",prefix:"q"},
    {id:410222,name:"通许县",pid:"410200",type:"district",pinyin:"tong xu xian",py:"txx",prefix:"t"},
    {id:410223,name:"尉氏县",pid:"410200",type:"district",pinyin:"wei shi xian",py:"wsx",prefix:"w"},
    {id:410224,name:"开封县",pid:"410200",type:"district",pinyin:"kai feng xian",py:"kfx",prefix:"k"},
    {id:410225,name:"兰考县",pid:"410200",type:"district",pinyin:"lan kao xian",py:"lkx",prefix:"l"},
    {id:410302,name:"老城区",pid:"410300",type:"district",pinyin:"lao cheng qu",py:"lcq",prefix:"l"},
    {id:410303,name:"西工区",pid:"410300",type:"district",pinyin:"xi gong qu",py:"xgq",prefix:"x"},
    {id:410304,name:"瀍河回族区",pid:"410300",type:"district",pinyin:"chan he hui zu qu",py:"chhzq",prefix:"c"},
    {id:410305,name:"涧西区",pid:"410300",type:"district",pinyin:"jian xi qu",py:"jxq",prefix:"j"},
    {id:410306,name:"吉利区",pid:"410300",type:"district",pinyin:"ji li qu",py:"jlq",prefix:"j"},
    {id:410311,name:"洛龙区",pid:"410300",type:"district",pinyin:"luo long qu",py:"llq",prefix:"l"},
    {id:410322,name:"孟津县",pid:"410300",type:"district",pinyin:"meng jin xian",py:"mjx",prefix:"m"},
    {id:410323,name:"新安县",pid:"410300",type:"district",pinyin:"xin an xian",py:"xax",prefix:"x"},
    {id:410324,name:"栾川县",pid:"410300",type:"district",pinyin:"luan chuan xian",py:"lcx",prefix:"l"},
    {id:410325,name:"嵩县",pid:"410300",type:"district",pinyin:"song xian",py:"sx",prefix:"s"},
    {id:410326,name:"汝阳县",pid:"410300",type:"district",pinyin:"ru yang xian",py:"ryx",prefix:"r"},
    {id:410327,name:"宜阳县",pid:"410300",type:"district",pinyin:"yi yang xian",py:"yyx",prefix:"y"},
    {id:410328,name:"洛宁县",pid:"410300",type:"district",pinyin:"luo ning xian",py:"lnx",prefix:"l"},
    {id:410329,name:"伊川县",pid:"410300",type:"district",pinyin:"yi chuan xian",py:"ycx",prefix:"y"},
    {id:410381,name:"偃师市",pid:"410300",type:"district",pinyin:"yan shi shi",py:"yss",prefix:"y"},
    {id:410402,name:"新华区",pid:"410400",type:"district",pinyin:"xin hua qu",py:"xhq",prefix:"x"},
    {id:410403,name:"卫东区",pid:"410400",type:"district",pinyin:"wei dong qu",py:"wdq",prefix:"w"},
    {id:410404,name:"石龙区",pid:"410400",type:"district",pinyin:"shi long qu",py:"slq",prefix:"s"},
    {id:410411,name:"湛河区",pid:"410400",type:"district",pinyin:"zhan he qu",py:"zhq",prefix:"z"},
    {id:410421,name:"宝丰县",pid:"410400",type:"district",pinyin:"bao feng xian",py:"bfx",prefix:"b"},
    {id:410422,name:"叶县",pid:"410400",type:"district",pinyin:"ye xian",py:"yx",prefix:"y"},
    {id:410423,name:"鲁山县",pid:"410400",type:"district",pinyin:"lu shan xian",py:"lsx",prefix:"l"},
    {id:410425,name:"郏县",pid:"410400",type:"district",pinyin:"jia xian",py:"jx",prefix:"j"},
    {id:410481,name:"舞钢市",pid:"410400",type:"district",pinyin:"wu gang shi",py:"wgs",prefix:"w"},
    {id:410482,name:"汝州市",pid:"410400",type:"district",pinyin:"ru zhou shi",py:"rzs",prefix:"r"},
    {id:410502,name:"文峰区",pid:"410500",type:"district",pinyin:"wen feng qu",py:"wfq",prefix:"w"},
    {id:410503,name:"北关区",pid:"410500",type:"district",pinyin:"bei guan qu",py:"bgq",prefix:"b"},
    {id:410505,name:"殷都区",pid:"410500",type:"district",pinyin:"yin dou qu",py:"ydq",prefix:"y"},
    {id:410506,name:"龙安区",pid:"410500",type:"district",pinyin:"long an qu",py:"laq",prefix:"l"},
    {id:410522,name:"安阳县",pid:"410500",type:"district",pinyin:"an yang xian",py:"ayx",prefix:"a"},
    {id:410523,name:"汤阴县",pid:"410500",type:"district",pinyin:"tang yin xian",py:"tyx",prefix:"t"},
    {id:410526,name:"滑县",pid:"410500",type:"district",pinyin:"hua xian",py:"hx",prefix:"h"},
    {id:410527,name:"内黄县",pid:"410500",type:"district",pinyin:"nei huang xian",py:"nhx",prefix:"n"},
    {id:410581,name:"林州市",pid:"410500",type:"district",pinyin:"lin zhou shi",py:"lzs",prefix:"l"},
    {id:410602,name:"鹤山区",pid:"410600",type:"district",pinyin:"he shan qu",py:"hsq",prefix:"h"},
    {id:410603,name:"山城区",pid:"410600",type:"district",pinyin:"shan cheng qu",py:"scq",prefix:"s"},
    {id:410611,name:"淇滨区",pid:"410600",type:"district",pinyin:"qi bin qu",py:"qbq",prefix:"q"},
    {id:410621,name:"浚县",pid:"410600",type:"district",pinyin:"jun xian",py:"jx",prefix:"j"},
    {id:410622,name:"淇县",pid:"410600",type:"district",pinyin:"qi xian",py:"qx",prefix:"q"},
    {id:410702,name:"红旗区",pid:"410700",type:"district",pinyin:"hong qi qu",py:"hqq",prefix:"h"},
    {id:410703,name:"卫滨区",pid:"410700",type:"district",pinyin:"wei bin qu",py:"wbq",prefix:"w"},
    {id:410704,name:"凤泉区",pid:"410700",type:"district",pinyin:"feng quan qu",py:"fqq",prefix:"f"},
    {id:410711,name:"牧野区",pid:"410700",type:"district",pinyin:"mu ye qu",py:"myq",prefix:"m"},
    {id:410721,name:"新乡县",pid:"410700",type:"district",pinyin:"xin xiang xian",py:"xxx",prefix:"x"},
    {id:410724,name:"获嘉县",pid:"410700",type:"district",pinyin:"huo jia xian",py:"hjx",prefix:"h"},
    {id:410725,name:"原阳县",pid:"410700",type:"district",pinyin:"yuan yang xian",py:"yyx",prefix:"y"},
    {id:410726,name:"延津县",pid:"410700",type:"district",pinyin:"yan jin xian",py:"yjx",prefix:"y"},
    {id:410727,name:"封丘县",pid:"410700",type:"district",pinyin:"feng qiu xian",py:"fqx",prefix:"f"},
    {id:410728,name:"长垣县",pid:"410700",type:"district",pinyin:"chang yuan xian",py:"cyx",prefix:"c"},
    {id:410781,name:"卫辉市",pid:"410700",type:"district",pinyin:"wei hui shi",py:"whs",prefix:"w"},
    {id:410782,name:"辉县市",pid:"410700",type:"district",pinyin:"hui xian shi",py:"hxs",prefix:"h"},
    {id:410802,name:"解放区",pid:"410800",type:"district",pinyin:"jie fang qu",py:"jfq",prefix:"j"},
    {id:410803,name:"中站区",pid:"410800",type:"district",pinyin:"zhong zhan qu",py:"zzq",prefix:"z"},
    {id:410804,name:"马村区",pid:"410800",type:"district",pinyin:"ma cun qu",py:"mcq",prefix:"m"},
    {id:410811,name:"山阳区",pid:"410800",type:"district",pinyin:"shan yang qu",py:"syq",prefix:"s"},
    {id:410821,name:"修武县",pid:"410800",type:"district",pinyin:"xiu wu xian",py:"xwx",prefix:"x"},
    {id:410822,name:"博爱县",pid:"410800",type:"district",pinyin:"bo ai xian",py:"bax",prefix:"b"},
    {id:410823,name:"武陟县",pid:"410800",type:"district",pinyin:"wu zhi xian",py:"wzx",prefix:"w"},
    {id:410825,name:"温县",pid:"410800",type:"district",pinyin:"wen xian",py:"wx",prefix:"w"},
    {id:410882,name:"沁阳市",pid:"410800",type:"district",pinyin:"qin yang shi",py:"qys",prefix:"q"},
    {id:410883,name:"孟州市",pid:"410800",type:"district",pinyin:"meng zhou shi",py:"mzs",prefix:"m"},
    {id:410902,name:"华龙区",pid:"410900",type:"district",pinyin:"hua long qu",py:"hlq",prefix:"h"},
    {id:410922,name:"清丰县",pid:"410900",type:"district",pinyin:"qing feng xian",py:"qfx",prefix:"q"},
    {id:410923,name:"南乐县",pid:"410900",type:"district",pinyin:"nan le xian",py:"nlx",prefix:"n"},
    {id:410926,name:"范县",pid:"410900",type:"district",pinyin:"fan xian",py:"fx",prefix:"f"},
    {id:410927,name:"台前县",pid:"410900",type:"district",pinyin:"tai qian xian",py:"tqx",prefix:"t"},
    {id:410928,name:"濮阳县",pid:"410900",type:"district",pinyin:"pu yang xian",py:"pyx",prefix:"p"},
    {id:411002,name:"魏都区",pid:"411000",type:"district",pinyin:"wei dou qu",py:"wdq",prefix:"w"},
    {id:411023,name:"许昌县",pid:"411000",type:"district",pinyin:"xu chang xian",py:"xcx",prefix:"x"},
    {id:411024,name:"鄢陵县",pid:"411000",type:"district",pinyin:"yan ling xian",py:"ylx",prefix:"y"},
    {id:411025,name:"襄城县",pid:"411000",type:"district",pinyin:"xiang cheng xian",py:"xcx",prefix:"x"},
    {id:411081,name:"禹州市",pid:"411000",type:"district",pinyin:"yu zhou shi",py:"yzs",prefix:"y"},
    {id:411082,name:"长葛市",pid:"411000",type:"district",pinyin:"chang ge shi",py:"cgs",prefix:"c"},
    {id:411102,name:"源汇区",pid:"411100",type:"district",pinyin:"yuan hui qu",py:"yhq",prefix:"y"},
    {id:411103,name:"郾城区",pid:"411100",type:"district",pinyin:"yan cheng qu",py:"ycq",prefix:"y"},
    {id:411104,name:"召陵区",pid:"411100",type:"district",pinyin:"zhao ling qu",py:"zlq",prefix:"z"},
    {id:411121,name:"舞阳县",pid:"411100",type:"district",pinyin:"wu yang xian",py:"wyx",prefix:"w"},
    {id:411122,name:"临颍县",pid:"411100",type:"district",pinyin:"lin ying xian",py:"lyx",prefix:"l"},
    {id:411202,name:"湖滨区",pid:"411200",type:"district",pinyin:"hu bin qu",py:"hbq",prefix:"h"},
    {id:411221,name:"渑池县",pid:"411200",type:"district",pinyin:"mian chi xian",py:"mcx",prefix:"m"},
    {id:411222,name:"陕县",pid:"411200",type:"district",pinyin:"shan xian",py:"sx",prefix:"s"},
    {id:411224,name:"卢氏县",pid:"411200",type:"district",pinyin:"lu shi xian",py:"lsx",prefix:"l"},
    {id:411281,name:"义马市",pid:"411200",type:"district",pinyin:"yi ma shi",py:"yms",prefix:"y"},
    {id:411282,name:"灵宝市",pid:"411200",type:"district",pinyin:"ling bao shi",py:"lbs",prefix:"l"},
    {id:411302,name:"宛城区",pid:"411300",type:"district",pinyin:"wan cheng qu",py:"wcq",prefix:"w"},
    {id:411303,name:"卧龙区",pid:"411300",type:"district",pinyin:"wo long qu",py:"wlq",prefix:"w"},
    {id:411321,name:"南召县",pid:"411300",type:"district",pinyin:"nan zhao xian",py:"nzx",prefix:"n"},
    {id:411322,name:"方城县",pid:"411300",type:"district",pinyin:"fang cheng xian",py:"fcx",prefix:"f"},
    {id:411323,name:"西峡县",pid:"411300",type:"district",pinyin:"xi xia xian",py:"xxx",prefix:"x"},
    {id:411324,name:"镇平县",pid:"411300",type:"district",pinyin:"zhen ping xian",py:"zpx",prefix:"z"},
    {id:411325,name:"内乡县",pid:"411300",type:"district",pinyin:"nei xiang xian",py:"nxx",prefix:"n"},
    {id:411326,name:"淅川县",pid:"411300",type:"district",pinyin:"xi chuan xian",py:"xcx",prefix:"x"},
    {id:411327,name:"社旗县",pid:"411300",type:"district",pinyin:"she qi xian",py:"sqx",prefix:"s"},
    {id:411328,name:"唐河县",pid:"411300",type:"district",pinyin:"tang he xian",py:"thx",prefix:"t"},
    {id:411329,name:"新野县",pid:"411300",type:"district",pinyin:"xin ye xian",py:"xyx",prefix:"x"},
    {id:411330,name:"桐柏县",pid:"411300",type:"district",pinyin:"tong bo xian",py:"tbx",prefix:"t"},
    {id:411381,name:"邓州市",pid:"411300",type:"district",pinyin:"deng zhou shi",py:"dzs",prefix:"d"},
    {id:411402,name:"梁园区",pid:"411400",type:"district",pinyin:"liang yuan qu",py:"lyq",prefix:"l"},
    {id:411403,name:"睢阳区",pid:"411400",type:"district",pinyin:"sui yang qu",py:"syq",prefix:"s"},
    {id:411421,name:"民权县",pid:"411400",type:"district",pinyin:"min quan xian",py:"mqx",prefix:"m"},
    {id:411422,name:"睢县",pid:"411400",type:"district",pinyin:"sui xian",py:"sx",prefix:"s"},
    {id:411423,name:"宁陵县",pid:"411400",type:"district",pinyin:"ning ling xian",py:"nlx",prefix:"n"},
    {id:411424,name:"柘城县",pid:"411400",type:"district",pinyin:"zhe cheng xian",py:"zcx",prefix:"z"},
    {id:411425,name:"虞城县",pid:"411400",type:"district",pinyin:"yu cheng xian",py:"ycx",prefix:"y"},
    {id:411426,name:"夏邑县",pid:"411400",type:"district",pinyin:"xia yi xian",py:"xyx",prefix:"x"},
    {id:411481,name:"永城市",pid:"411400",type:"district",pinyin:"yong cheng shi",py:"ycs",prefix:"y"},
    {id:411502,name:"浉河区",pid:"411500",type:"district",pinyin:"shi he qu",py:"shq",prefix:"s"},
    {id:411503,name:"平桥区",pid:"411500",type:"district",pinyin:"ping qiao qu",py:"pqq",prefix:"p"},
    {id:411521,name:"罗山县",pid:"411500",type:"district",pinyin:"luo shan xian",py:"lsx",prefix:"l"},
    {id:411522,name:"光山县",pid:"411500",type:"district",pinyin:"guang shan xian",py:"gsx",prefix:"g"},
    {id:411523,name:"新县",pid:"411500",type:"district",pinyin:"xin xian",py:"xx",prefix:"x"},
    {id:411524,name:"商城县",pid:"411500",type:"district",pinyin:"shang cheng xian",py:"scx",prefix:"s"},
    {id:411525,name:"固始县",pid:"411500",type:"district",pinyin:"gu shi xian",py:"gsx",prefix:"g"},
    {id:411526,name:"潢川县",pid:"411500",type:"district",pinyin:"huang chuan xian",py:"hcx",prefix:"h"},
    {id:411527,name:"淮滨县",pid:"411500",type:"district",pinyin:"huai bin xian",py:"hbx",prefix:"h"},
    {id:411528,name:"息县",pid:"411500",type:"district",pinyin:"xi xian",py:"xx",prefix:"x"},
    {id:411602,name:"川汇区",pid:"411600",type:"district",pinyin:"chuan hui qu",py:"chq",prefix:"c"},
    {id:411621,name:"扶沟县",pid:"411600",type:"district",pinyin:"fu gou xian",py:"fgx",prefix:"f"},
    {id:411622,name:"西华县",pid:"411600",type:"district",pinyin:"xi hua xian",py:"xhx",prefix:"x"},
    {id:411623,name:"商水县",pid:"411600",type:"district",pinyin:"shang shui xian",py:"ssx",prefix:"s"},
    {id:411624,name:"沈丘县",pid:"411600",type:"district",pinyin:"shen qiu xian",py:"sqx",prefix:"s"},
    {id:411625,name:"郸城县",pid:"411600",type:"district",pinyin:"dan cheng xian",py:"dcx",prefix:"d"},
    {id:411626,name:"淮阳县",pid:"411600",type:"district",pinyin:"huai yang xian",py:"hyx",prefix:"h"},
    {id:411627,name:"太康县",pid:"411600",type:"district",pinyin:"tai kang xian",py:"tkx",prefix:"t"},
    {id:411628,name:"鹿邑县",pid:"411600",type:"district",pinyin:"lu yi xian",py:"lyx",prefix:"l"},
    {id:411681,name:"项城市",pid:"411600",type:"district",pinyin:"xiang cheng shi",py:"xcs",prefix:"x"},
    {id:411702,name:"驿城区",pid:"411700",type:"district",pinyin:"yi cheng qu",py:"ycq",prefix:"y"},
    {id:411721,name:"西平县",pid:"411700",type:"district",pinyin:"xi ping xian",py:"xpx",prefix:"x"},
    {id:411722,name:"上蔡县",pid:"411700",type:"district",pinyin:"shang cai xian",py:"scx",prefix:"s"},
    {id:411723,name:"平舆县",pid:"411700",type:"district",pinyin:"ping yu xian",py:"pyx",prefix:"p"},
    {id:411724,name:"正阳县",pid:"411700",type:"district",pinyin:"zheng yang xian",py:"zyx",prefix:"z"},
    {id:411725,name:"确山县",pid:"411700",type:"district",pinyin:"que shan xian",py:"qsx",prefix:"q"},
    {id:411726,name:"泌阳县",pid:"411700",type:"district",pinyin:"mi yang xian",py:"myx",prefix:"m"},
    {id:411727,name:"汝南县",pid:"411700",type:"district",pinyin:"ru nan xian",py:"rnx",prefix:"r"},
    {id:411728,name:"遂平县",pid:"411700",type:"district",pinyin:"sui ping xian",py:"spx",prefix:"s"},
    {id:411729,name:"新蔡县",pid:"411700",type:"district",pinyin:"xin cai xian",py:"xcx",prefix:"x"},
    {id:419001,name:"济源市",pid:"419000",type:"district",pinyin:"ji yuan shi",py:"jys",prefix:"j"},
    {id:420102,name:"江岸区",pid:"420100",type:"district",pinyin:"jiang an qu",py:"jaq",prefix:"j"},
    {id:420103,name:"江汉区",pid:"420100",type:"district",pinyin:"jiang han qu",py:"jhq",prefix:"j"},
    {id:420104,name:"硚口区",pid:"420100",type:"district",pinyin:"qiao kou qu",py:"qkq",prefix:"q"},
    {id:420105,name:"汉阳区",pid:"420100",type:"district",pinyin:"han yang qu",py:"hyq",prefix:"h"},
    {id:420106,name:"武昌区",pid:"420100",type:"district",pinyin:"wu chang qu",py:"wcq",prefix:"w"},
    {id:420107,name:"青山区",pid:"420100",type:"district",pinyin:"qing shan qu",py:"qsq",prefix:"q"},
    {id:420111,name:"洪山区",pid:"420100",type:"district",pinyin:"hong shan qu",py:"hsq",prefix:"h"},
    {id:420112,name:"东西湖区",pid:"420100",type:"district",pinyin:"dong xi hu qu",py:"dxhq",prefix:"d"},
    {id:420113,name:"汉南区",pid:"420100",type:"district",pinyin:"han nan qu",py:"hnq",prefix:"h"},
    {id:420114,name:"蔡甸区",pid:"420100",type:"district",pinyin:"cai dian qu",py:"cdq",prefix:"c"},
    {id:420115,name:"江夏区",pid:"420100",type:"district",pinyin:"jiang xia qu",py:"jxq",prefix:"j"},
    {id:420116,name:"黄陂区",pid:"420100",type:"district",pinyin:"huang po qu",py:"hpq",prefix:"h"},
    {id:420117,name:"新洲区",pid:"420100",type:"district",pinyin:"xin zhou qu",py:"xzq",prefix:"x"},
    {id:420202,name:"黄石港区",pid:"420200",type:"district",pinyin:"huang shi gang qu",py:"hsgq",prefix:"h"},
    {id:420203,name:"西塞山区",pid:"420200",type:"district",pinyin:"xi sai shan qu",py:"xssq",prefix:"x"},
    {id:420204,name:"下陆区",pid:"420200",type:"district",pinyin:"xia lu qu",py:"xlq",prefix:"x"},
    {id:420205,name:"铁山区",pid:"420200",type:"district",pinyin:"tie shan qu",py:"tsq",prefix:"t"},
    {id:420222,name:"阳新县",pid:"420200",type:"district",pinyin:"yang xin xian",py:"yxx",prefix:"y"},
    {id:420281,name:"大冶市",pid:"420200",type:"district",pinyin:"da ye shi",py:"dys",prefix:"d"},
    {id:420302,name:"茅箭区",pid:"420300",type:"district",pinyin:"mao jian qu",py:"mjq",prefix:"m"},
    {id:420303,name:"张湾区",pid:"420300",type:"district",pinyin:"zhang wan qu",py:"zwq",prefix:"z"},
    {id:420321,name:"郧县",pid:"420300",type:"district",pinyin:"yun xian",py:"yx",prefix:"y"},
    {id:420322,name:"郧西县",pid:"420300",type:"district",pinyin:"yun xi xian",py:"yxx",prefix:"y"},
    {id:420323,name:"竹山县",pid:"420300",type:"district",pinyin:"zhu shan xian",py:"zsx",prefix:"z"},
    {id:420324,name:"竹溪县",pid:"420300",type:"district",pinyin:"zhu xi xian",py:"zxx",prefix:"z"},
    {id:420325,name:"房县",pid:"420300",type:"district",pinyin:"fang xian",py:"fx",prefix:"f"},
    {id:420381,name:"丹江口市",pid:"420300",type:"district",pinyin:"dan jiang kou shi",py:"djks",prefix:"d"},
    {id:420502,name:"西陵区",pid:"420500",type:"district",pinyin:"xi ling qu",py:"xlq",prefix:"x"},
    {id:420503,name:"伍家岗区",pid:"420500",type:"district",pinyin:"wu jia gang qu",py:"wjgq",prefix:"w"},
    {id:420504,name:"点军区",pid:"420500",type:"district",pinyin:"dian jun qu",py:"djq",prefix:"d"},
    {id:420505,name:"猇亭区",pid:"420500",type:"district",pinyin:"yao ting qu",py:"ytq",prefix:"y"},
    {id:420506,name:"夷陵区",pid:"420500",type:"district",pinyin:"yi ling qu",py:"ylq",prefix:"y"},
    {id:420525,name:"远安县",pid:"420500",type:"district",pinyin:"yuan an xian",py:"yax",prefix:"y"},
    {id:420526,name:"兴山县",pid:"420500",type:"district",pinyin:"xing shan xian",py:"xsx",prefix:"x"},
    {id:420527,name:"秭归县",pid:"420500",type:"district",pinyin:"zi gui xian",py:"zgx",prefix:"z"},
    {id:420528,name:"长阳土家族自治县",pid:"420500",type:"district",pinyin:"chang yang tu jia zu zi zhi xian",py:"cytjzzzx",prefix:"c"},
    {id:420529,name:"五峰土家族自治县",pid:"420500",type:"district",pinyin:"wu feng tu jia zu zi zhi xian",py:"wftjzzzx",prefix:"w"},
    {id:420581,name:"宜都市",pid:"420500",type:"district",pinyin:"yi dou shi",py:"yds",prefix:"y"},
    {id:420582,name:"当阳市",pid:"420500",type:"district",pinyin:"dang yang shi",py:"dys",prefix:"d"},
    {id:420583,name:"枝江市",pid:"420500",type:"district",pinyin:"zhi jiang shi",py:"zjs",prefix:"z"},
    {id:420602,name:"襄城区",pid:"420600",type:"district",pinyin:"xiang cheng qu",py:"xcq",prefix:"x"},
    {id:420606,name:"樊城区",pid:"420600",type:"district",pinyin:"fan cheng qu",py:"fcq",prefix:"f"},
    {id:420607,name:"襄州区",pid:"420600",type:"district",pinyin:"xiang zhou qu",py:"xzq",prefix:"x"},
    {id:420624,name:"南漳县",pid:"420600",type:"district",pinyin:"nan zhang xian",py:"nzx",prefix:"n"},
    {id:420625,name:"谷城县",pid:"420600",type:"district",pinyin:"gu cheng xian",py:"gcx",prefix:"g"},
    {id:420626,name:"保康县",pid:"420600",type:"district",pinyin:"bao kang xian",py:"bkx",prefix:"b"},
    {id:420682,name:"老河口市",pid:"420600",type:"district",pinyin:"lao he kou shi",py:"lhks",prefix:"l"},
    {id:420683,name:"枣阳市",pid:"420600",type:"district",pinyin:"zao yang shi",py:"zys",prefix:"z"},
    {id:420684,name:"宜城市",pid:"420600",type:"district",pinyin:"yi cheng shi",py:"ycs",prefix:"y"},
    {id:420702,name:"梁子湖区",pid:"420700",type:"district",pinyin:"liang zi hu qu",py:"lzhq",prefix:"l"},
    {id:420703,name:"华容区",pid:"420700",type:"district",pinyin:"hua rong qu",py:"hrq",prefix:"h"},
    {id:420704,name:"鄂城区",pid:"420700",type:"district",pinyin:"e cheng qu",py:"ecq",prefix:"e"},
    {id:420802,name:"东宝区",pid:"420800",type:"district",pinyin:"dong bao qu",py:"dbq",prefix:"d"},
    {id:420804,name:"掇刀区",pid:"420800",type:"district",pinyin:"duo dao qu",py:"ddq",prefix:"d"},
    {id:420821,name:"京山县",pid:"420800",type:"district",pinyin:"jing shan xian",py:"jsx",prefix:"j"},
    {id:420822,name:"沙洋县",pid:"420800",type:"district",pinyin:"sha yang xian",py:"syx",prefix:"s"},
    {id:420881,name:"钟祥市",pid:"420800",type:"district",pinyin:"zhong xiang shi",py:"zxs",prefix:"z"},
    {id:420902,name:"孝南区",pid:"420900",type:"district",pinyin:"xiao nan qu",py:"xnq",prefix:"x"},
    {id:420921,name:"孝昌县",pid:"420900",type:"district",pinyin:"xiao chang xian",py:"xcx",prefix:"x"},
    {id:420922,name:"大悟县",pid:"420900",type:"district",pinyin:"da wu xian",py:"dwx",prefix:"d"},
    {id:420923,name:"云梦县",pid:"420900",type:"district",pinyin:"yun meng xian",py:"ymx",prefix:"y"},
    {id:420981,name:"应城市",pid:"420900",type:"district",pinyin:"ying cheng shi",py:"ycs",prefix:"y"},
    {id:420982,name:"安陆市",pid:"420900",type:"district",pinyin:"an lu shi",py:"als",prefix:"a"},
    {id:420984,name:"汉川市",pid:"420900",type:"district",pinyin:"han chuan shi",py:"hcs",prefix:"h"},
    {id:421002,name:"沙市区",pid:"421000",type:"district",pinyin:"sha shi qu",py:"ssq",prefix:"s"},
    {id:421003,name:"荆州区",pid:"421000",type:"district",pinyin:"jing zhou qu",py:"jzq",prefix:"j"},
    {id:421022,name:"公安县",pid:"421000",type:"district",pinyin:"gong an xian",py:"gax",prefix:"g"},
    {id:421023,name:"监利县",pid:"421000",type:"district",pinyin:"jian li xian",py:"jlx",prefix:"j"},
    {id:421024,name:"江陵县",pid:"421000",type:"district",pinyin:"jiang ling xian",py:"jlx",prefix:"j"},
    {id:421081,name:"石首市",pid:"421000",type:"district",pinyin:"shi shou shi",py:"sss",prefix:"s"},
    {id:421083,name:"洪湖市",pid:"421000",type:"district",pinyin:"hong hu shi",py:"hhs",prefix:"h"},
    {id:421087,name:"松滋市",pid:"421000",type:"district",pinyin:"song zi shi",py:"szs",prefix:"s"},
    {id:421102,name:"黄州区",pid:"421100",type:"district",pinyin:"huang zhou qu",py:"hzq",prefix:"h"},
    {id:421121,name:"团风县",pid:"421100",type:"district",pinyin:"tuan feng xian",py:"tfx",prefix:"t"},
    {id:421122,name:"红安县",pid:"421100",type:"district",pinyin:"hong an xian",py:"hax",prefix:"h"},
    {id:421123,name:"罗田县",pid:"421100",type:"district",pinyin:"luo tian xian",py:"ltx",prefix:"l"},
    {id:421124,name:"英山县",pid:"421100",type:"district",pinyin:"ying shan xian",py:"ysx",prefix:"y"},
    {id:421125,name:"浠水县",pid:"421100",type:"district",pinyin:"xi shui xian",py:"xsx",prefix:"x"},
    {id:421126,name:"蕲春县",pid:"421100",type:"district",pinyin:"qi chun xian",py:"qcx",prefix:"q"},
    {id:421127,name:"黄梅县",pid:"421100",type:"district",pinyin:"huang mei xian",py:"hmx",prefix:"h"},
    {id:421181,name:"麻城市",pid:"421100",type:"district",pinyin:"ma cheng shi",py:"mcs",prefix:"m"},
    {id:421182,name:"武穴市",pid:"421100",type:"district",pinyin:"wu xue shi",py:"wxs",prefix:"w"},
    {id:421202,name:"咸安区",pid:"421200",type:"district",pinyin:"xian an qu",py:"xaq",prefix:"x"},
    {id:421221,name:"嘉鱼县",pid:"421200",type:"district",pinyin:"jia yu xian",py:"jyx",prefix:"j"},
    {id:421222,name:"通城县",pid:"421200",type:"district",pinyin:"tong cheng xian",py:"tcx",prefix:"t"},
    {id:421223,name:"崇阳县",pid:"421200",type:"district",pinyin:"chong yang xian",py:"cyx",prefix:"c"},
    {id:421224,name:"通山县",pid:"421200",type:"district",pinyin:"tong shan xian",py:"tsx",prefix:"t"},
    {id:421281,name:"赤壁市",pid:"421200",type:"district",pinyin:"chi bi shi",py:"cbs",prefix:"c"},
    {id:421303,name:"曾都区",pid:"421300",type:"district",pinyin:"ceng dou qu",py:"cdq",prefix:"c"},
    {id:421321,name:"随县",pid:"421300",type:"district",pinyin:"sui xian",py:"sx",prefix:"s"},
    {id:421381,name:"广水市",pid:"421300",type:"district",pinyin:"guang shui shi",py:"gss",prefix:"g"},
    {id:422801,name:"恩施市",pid:"422800",type:"district",pinyin:"en shi shi",py:"ess",prefix:"e"},
    {id:422802,name:"利川市",pid:"422800",type:"district",pinyin:"li chuan shi",py:"lcs",prefix:"l"},
    {id:422822,name:"建始县",pid:"422800",type:"district",pinyin:"jian shi xian",py:"jsx",prefix:"j"},
    {id:422823,name:"巴东县",pid:"422800",type:"district",pinyin:"ba dong xian",py:"bdx",prefix:"b"},
    {id:422825,name:"宣恩县",pid:"422800",type:"district",pinyin:"xuan en xian",py:"xex",prefix:"x"},
    {id:422826,name:"咸丰县",pid:"422800",type:"district",pinyin:"xian feng xian",py:"xfx",prefix:"x"},
    {id:422827,name:"来凤县",pid:"422800",type:"district",pinyin:"lai feng xian",py:"lfx",prefix:"l"},
    {id:422828,name:"鹤峰县",pid:"422800",type:"district",pinyin:"he feng xian",py:"hfx",prefix:"h"},
    {id:429004,name:"仙桃市",pid:"429000",type:"district",pinyin:"xian tao shi",py:"xts",prefix:"x"},
    {id:429005,name:"潜江市",pid:"429000",type:"district",pinyin:"qian jiang shi",py:"qjs",prefix:"q"},
    {id:429006,name:"天门市",pid:"429000",type:"district",pinyin:"tian men shi",py:"tms",prefix:"t"},
    {id:429021,name:"神农架林区",pid:"429000",type:"district",pinyin:"shen nong jia lin qu",py:"snjlq",prefix:"s"},
    {id:430102,name:"芙蓉区",pid:"430100",type:"district",pinyin:"fu rong qu",py:"frq",prefix:"f"},
    {id:430103,name:"天心区",pid:"430100",type:"district",pinyin:"tian xin qu",py:"txq",prefix:"t"},
    {id:430104,name:"岳麓区",pid:"430100",type:"district",pinyin:"yue lu qu",py:"ylq",prefix:"y"},
    {id:430105,name:"开福区",pid:"430100",type:"district",pinyin:"kai fu qu",py:"kfq",prefix:"k"},
    {id:430111,name:"雨花区",pid:"430100",type:"district",pinyin:"yu hua qu",py:"yhq",prefix:"y"},
    {id:430112,name:"望城区",pid:"430100",type:"district",pinyin:"wang cheng qu",py:"wcq",prefix:"w"},
    {id:430121,name:"长沙县",pid:"430100",type:"district",pinyin:"chang sha xian",py:"csx",prefix:"c"},
    {id:430124,name:"宁乡县",pid:"430100",type:"district",pinyin:"ning xiang xian",py:"nxx",prefix:"n"},
    {id:430181,name:"浏阳市",pid:"430100",type:"district",pinyin:"liu yang shi",py:"lys",prefix:"l"},
    {id:430202,name:"荷塘区",pid:"430200",type:"district",pinyin:"he tang qu",py:"htq",prefix:"h"},
    {id:430203,name:"芦淞区",pid:"430200",type:"district",pinyin:"lu song qu",py:"lsq",prefix:"l"},
    {id:430204,name:"石峰区",pid:"430200",type:"district",pinyin:"shi feng qu",py:"sfq",prefix:"s"},
    {id:430211,name:"天元区",pid:"430200",type:"district",pinyin:"tian yuan qu",py:"tyq",prefix:"t"},
    {id:430221,name:"株洲县",pid:"430200",type:"district",pinyin:"zhu zhou xian",py:"zzx",prefix:"z"},
    {id:430223,name:"攸县",pid:"430200",type:"district",pinyin:"you xian",py:"yx",prefix:"y"},
    {id:430224,name:"茶陵县",pid:"430200",type:"district",pinyin:"cha ling xian",py:"clx",prefix:"c"},
    {id:430225,name:"炎陵县",pid:"430200",type:"district",pinyin:"yan ling xian",py:"ylx",prefix:"y"},
    {id:430281,name:"醴陵市",pid:"430200",type:"district",pinyin:"li ling shi",py:"lls",prefix:"l"},
    {id:430302,name:"雨湖区",pid:"430300",type:"district",pinyin:"yu hu qu",py:"yhq",prefix:"y"},
    {id:430304,name:"岳塘区",pid:"430300",type:"district",pinyin:"yue tang qu",py:"ytq",prefix:"y"},
    {id:430321,name:"湘潭县",pid:"430300",type:"district",pinyin:"xiang tan xian",py:"xtx",prefix:"x"},
    {id:430381,name:"湘乡市",pid:"430300",type:"district",pinyin:"xiang xiang shi",py:"xxs",prefix:"x"},
    {id:430382,name:"韶山市",pid:"430300",type:"district",pinyin:"shao shan shi",py:"sss",prefix:"s"},
    {id:430405,name:"珠晖区",pid:"430400",type:"district",pinyin:"zhu hui qu",py:"zhq",prefix:"z"},
    {id:430406,name:"雁峰区",pid:"430400",type:"district",pinyin:"yan feng qu",py:"yfq",prefix:"y"},
    {id:430407,name:"石鼓区",pid:"430400",type:"district",pinyin:"shi gu qu",py:"sgq",prefix:"s"},
    {id:430408,name:"蒸湘区",pid:"430400",type:"district",pinyin:"zheng xiang qu",py:"zxq",prefix:"z"},
    {id:430412,name:"南岳区",pid:"430400",type:"district",pinyin:"nan yue qu",py:"nyq",prefix:"n"},
    {id:430421,name:"衡阳县",pid:"430400",type:"district",pinyin:"heng yang xian",py:"hyx",prefix:"h"},
    {id:430422,name:"衡南县",pid:"430400",type:"district",pinyin:"heng nan xian",py:"hnx",prefix:"h"},
    {id:430423,name:"衡山县",pid:"430400",type:"district",pinyin:"heng shan xian",py:"hsx",prefix:"h"},
    {id:430424,name:"衡东县",pid:"430400",type:"district",pinyin:"heng dong xian",py:"hdx",prefix:"h"},
    {id:430426,name:"祁东县",pid:"430400",type:"district",pinyin:"qi dong xian",py:"qdx",prefix:"q"},
    {id:430481,name:"耒阳市",pid:"430400",type:"district",pinyin:"lei yang shi",py:"lys",prefix:"l"},
    {id:430482,name:"常宁市",pid:"430400",type:"district",pinyin:"chang ning shi",py:"cns",prefix:"c"},
    {id:430502,name:"双清区",pid:"430500",type:"district",pinyin:"shuang qing qu",py:"sqq",prefix:"s"},
    {id:430503,name:"大祥区",pid:"430500",type:"district",pinyin:"da xiang qu",py:"dxq",prefix:"d"},
    {id:430511,name:"北塔区",pid:"430500",type:"district",pinyin:"bei ta qu",py:"btq",prefix:"b"},
    {id:430521,name:"邵东县",pid:"430500",type:"district",pinyin:"shao dong xian",py:"sdx",prefix:"s"},
    {id:430522,name:"新邵县",pid:"430500",type:"district",pinyin:"xin shao xian",py:"xsx",prefix:"x"},
    {id:430523,name:"邵阳县",pid:"430500",type:"district",pinyin:"shao yang xian",py:"syx",prefix:"s"},
    {id:430524,name:"隆回县",pid:"430500",type:"district",pinyin:"long hui xian",py:"lhx",prefix:"l"},
    {id:430525,name:"洞口县",pid:"430500",type:"district",pinyin:"dong kou xian",py:"dkx",prefix:"d"},
    {id:430527,name:"绥宁县",pid:"430500",type:"district",pinyin:"sui ning xian",py:"snx",prefix:"s"},
    {id:430528,name:"新宁县",pid:"430500",type:"district",pinyin:"xin ning xian",py:"xnx",prefix:"x"},
    {id:430529,name:"城步苗族自治县",pid:"430500",type:"district",pinyin:"cheng bu miao zu zi zhi xian",py:"cbmzzzx",prefix:"c"},
    {id:430581,name:"武冈市",pid:"430500",type:"district",pinyin:"wu gang shi",py:"wgs",prefix:"w"},
    {id:430602,name:"岳阳楼区",pid:"430600",type:"district",pinyin:"yue yang lou qu",py:"yylq",prefix:"y"},
    {id:430603,name:"云溪区",pid:"430600",type:"district",pinyin:"yun xi qu",py:"yxq",prefix:"y"},
    {id:430611,name:"君山区",pid:"430600",type:"district",pinyin:"jun shan qu",py:"jsq",prefix:"j"},
    {id:430621,name:"岳阳县",pid:"430600",type:"district",pinyin:"yue yang xian",py:"yyx",prefix:"y"},
    {id:430623,name:"华容县",pid:"430600",type:"district",pinyin:"hua rong xian",py:"hrx",prefix:"h"},
    {id:430624,name:"湘阴县",pid:"430600",type:"district",pinyin:"xiang yin xian",py:"xyx",prefix:"x"},
    {id:430626,name:"平江县",pid:"430600",type:"district",pinyin:"ping jiang xian",py:"pjx",prefix:"p"},
    {id:430681,name:"汨罗市",pid:"430600",type:"district",pinyin:"mi luo shi",py:"mls",prefix:"m"},
    {id:430682,name:"临湘市",pid:"430600",type:"district",pinyin:"lin xiang shi",py:"lxs",prefix:"l"},
    {id:430702,name:"武陵区",pid:"430700",type:"district",pinyin:"wu ling qu",py:"wlq",prefix:"w"},
    {id:430703,name:"鼎城区",pid:"430700",type:"district",pinyin:"ding cheng qu",py:"dcq",prefix:"d"},
    {id:430721,name:"安乡县",pid:"430700",type:"district",pinyin:"an xiang xian",py:"axx",prefix:"a"},
    {id:430722,name:"汉寿县",pid:"430700",type:"district",pinyin:"han shou xian",py:"hsx",prefix:"h"},
    {id:430723,name:"澧县",pid:"430700",type:"district",pinyin:"li xian",py:"lx",prefix:"l"},
    {id:430724,name:"临澧县",pid:"430700",type:"district",pinyin:"lin li xian",py:"llx",prefix:"l"},
    {id:430725,name:"桃源县",pid:"430700",type:"district",pinyin:"tao yuan xian",py:"tyx",prefix:"t"},
    {id:430726,name:"石门县",pid:"430700",type:"district",pinyin:"shi men xian",py:"smx",prefix:"s"},
    {id:430781,name:"津市市",pid:"430700",type:"district",pinyin:"jin shi shi",py:"jss",prefix:"j"},
    {id:430802,name:"永定区",pid:"430800",type:"district",pinyin:"yong ding qu",py:"ydq",prefix:"y"},
    {id:430811,name:"武陵源区",pid:"430800",type:"district",pinyin:"wu ling yuan qu",py:"wlyq",prefix:"w"},
    {id:430821,name:"慈利县",pid:"430800",type:"district",pinyin:"ci li xian",py:"clx",prefix:"c"},
    {id:430822,name:"桑植县",pid:"430800",type:"district",pinyin:"sang zhi xian",py:"szx",prefix:"s"},
    {id:430902,name:"资阳区",pid:"430900",type:"district",pinyin:"zi yang qu",py:"zyq",prefix:"z"},
    {id:430903,name:"赫山区",pid:"430900",type:"district",pinyin:"he shan qu",py:"hsq",prefix:"h"},
    {id:430921,name:"南县",pid:"430900",type:"district",pinyin:"nan xian",py:"nx",prefix:"n"},
    {id:430922,name:"桃江县",pid:"430900",type:"district",pinyin:"tao jiang xian",py:"tjx",prefix:"t"},
    {id:430923,name:"安化县",pid:"430900",type:"district",pinyin:"an hua xian",py:"ahx",prefix:"a"},
    {id:430981,name:"沅江市",pid:"430900",type:"district",pinyin:"yuan jiang shi",py:"yjs",prefix:"y"},
    {id:431002,name:"北湖区",pid:"431000",type:"district",pinyin:"bei hu qu",py:"bhq",prefix:"b"},
    {id:431003,name:"苏仙区",pid:"431000",type:"district",pinyin:"su xian qu",py:"sxq",prefix:"s"},
    {id:431021,name:"桂阳县",pid:"431000",type:"district",pinyin:"gui yang xian",py:"gyx",prefix:"g"},
    {id:431022,name:"宜章县",pid:"431000",type:"district",pinyin:"yi zhang xian",py:"yzx",prefix:"y"},
    {id:431023,name:"永兴县",pid:"431000",type:"district",pinyin:"yong xing xian",py:"yxx",prefix:"y"},
    {id:431024,name:"嘉禾县",pid:"431000",type:"district",pinyin:"jia he xian",py:"jhx",prefix:"j"},
    {id:431025,name:"临武县",pid:"431000",type:"district",pinyin:"lin wu xian",py:"lwx",prefix:"l"},
    {id:431026,name:"汝城县",pid:"431000",type:"district",pinyin:"ru cheng xian",py:"rcx",prefix:"r"},
    {id:431027,name:"桂东县",pid:"431000",type:"district",pinyin:"gui dong xian",py:"gdx",prefix:"g"},
    {id:431028,name:"安仁县",pid:"431000",type:"district",pinyin:"an ren xian",py:"arx",prefix:"a"},
    {id:431081,name:"资兴市",pid:"431000",type:"district",pinyin:"zi xing shi",py:"zxs",prefix:"z"},
    {id:431102,name:"零陵区",pid:"431100",type:"district",pinyin:"ling ling qu",py:"llq",prefix:"l"},
    {id:431103,name:"冷水滩区",pid:"431100",type:"district",pinyin:"leng shui tan qu",py:"lstq",prefix:"l"},
    {id:431121,name:"祁阳县",pid:"431100",type:"district",pinyin:"qi yang xian",py:"qyx",prefix:"q"},
    {id:431122,name:"东安县",pid:"431100",type:"district",pinyin:"dong an xian",py:"dax",prefix:"d"},
    {id:431123,name:"双牌县",pid:"431100",type:"district",pinyin:"shuang pai xian",py:"spx",prefix:"s"},
    {id:431124,name:"道县",pid:"431100",type:"district",pinyin:"dao xian",py:"dx",prefix:"d"},
    {id:431125,name:"江永县",pid:"431100",type:"district",pinyin:"jiang yong xian",py:"jyx",prefix:"j"},
    {id:431126,name:"宁远县",pid:"431100",type:"district",pinyin:"ning yuan xian",py:"nyx",prefix:"n"},
    {id:431127,name:"蓝山县",pid:"431100",type:"district",pinyin:"lan shan xian",py:"lsx",prefix:"l"},
    {id:431128,name:"新田县",pid:"431100",type:"district",pinyin:"xin tian xian",py:"xtx",prefix:"x"},
    {id:431129,name:"江华瑶族自治县",pid:"431100",type:"district",pinyin:"jiang hua yao zu zi zhi xian",py:"jhyzzzx",prefix:"j"},
    {id:431202,name:"鹤城区",pid:"431200",type:"district",pinyin:"he cheng qu",py:"hcq",prefix:"h"},
    {id:431221,name:"中方县",pid:"431200",type:"district",pinyin:"zhong fang xian",py:"zfx",prefix:"z"},
    {id:431222,name:"沅陵县",pid:"431200",type:"district",pinyin:"yuan ling xian",py:"ylx",prefix:"y"},
    {id:431223,name:"辰溪县",pid:"431200",type:"district",pinyin:"chen xi xian",py:"cxx",prefix:"c"},
    {id:431224,name:"溆浦县",pid:"431200",type:"district",pinyin:"xu pu xian",py:"xpx",prefix:"x"},
    {id:431225,name:"会同县",pid:"431200",type:"district",pinyin:"hui tong xian",py:"htx",prefix:"h"},
    {id:431226,name:"麻阳苗族自治县",pid:"431200",type:"district",pinyin:"ma yang miao zu zi zhi xian",py:"mymzzzx",prefix:"m"},
    {id:431227,name:"新晃侗族自治县",pid:"431200",type:"district",pinyin:"xin huang dong zu zi zhi xian",py:"xhdzzzx",prefix:"x"},
    {id:431228,name:"芷江侗族自治县",pid:"431200",type:"district",pinyin:"zhi jiang dong zu zi zhi xian",py:"zjdzzzx",prefix:"z"},
    {id:431229,name:"靖州苗族侗族自治县",pid:"431200",type:"district",pinyin:"jing zhou miao zu dong zu zi zhi xian",py:"jzmzdzzzx",prefix:"j"},
    {id:431230,name:"通道侗族自治县",pid:"431200",type:"district",pinyin:"tong dao dong zu zi zhi xian",py:"tddzzzx",prefix:"t"},
    {id:431281,name:"洪江市",pid:"431200",type:"district",pinyin:"hong jiang shi",py:"hjs",prefix:"h"},
    {id:431302,name:"娄星区",pid:"431300",type:"district",pinyin:"lou xing qu",py:"lxq",prefix:"l"},
    {id:431321,name:"双峰县",pid:"431300",type:"district",pinyin:"shuang feng xian",py:"sfx",prefix:"s"},
    {id:431322,name:"新化县",pid:"431300",type:"district",pinyin:"xin hua xian",py:"xhx",prefix:"x"},
    {id:431381,name:"冷水江市",pid:"431300",type:"district",pinyin:"leng shui jiang shi",py:"lsjs",prefix:"l"},
    {id:431382,name:"涟源市",pid:"431300",type:"district",pinyin:"lian yuan shi",py:"lys",prefix:"l"},
    {id:433101,name:"吉首市",pid:"433100",type:"district",pinyin:"ji shou shi",py:"jss",prefix:"j"},
    {id:433122,name:"泸溪县",pid:"433100",type:"district",pinyin:"lu xi xian",py:"lxx",prefix:"l"},
    {id:433123,name:"凤凰县",pid:"433100",type:"district",pinyin:"feng huang xian",py:"fhx",prefix:"f"},
    {id:433124,name:"花垣县",pid:"433100",type:"district",pinyin:"hua yuan xian",py:"hyx",prefix:"h"},
    {id:433125,name:"保靖县",pid:"433100",type:"district",pinyin:"bao jing xian",py:"bjx",prefix:"b"},
    {id:433126,name:"古丈县",pid:"433100",type:"district",pinyin:"gu zhang xian",py:"gzx",prefix:"g"},
    {id:433127,name:"永顺县",pid:"433100",type:"district",pinyin:"yong shun xian",py:"ysx",prefix:"y"},
    {id:433130,name:"龙山县",pid:"433100",type:"district",pinyin:"long shan xian",py:"lsx",prefix:"l"},
    {id:440103,name:"荔湾区",pid:"440100",type:"district",pinyin:"li wan qu",py:"lwq",prefix:"l"},
    {id:440104,name:"越秀区",pid:"440100",type:"district",pinyin:"yue xiu qu",py:"yxq",prefix:"y"},
    {id:440105,name:"海珠区",pid:"440100",type:"district",pinyin:"hai zhu qu",py:"hzq",prefix:"h"},
    {id:440106,name:"天河区",pid:"440100",type:"district",pinyin:"tian he qu",py:"thq",prefix:"t"},
    {id:440111,name:"白云区",pid:"440100",type:"district",pinyin:"bai yun qu",py:"byq",prefix:"b"},
    {id:440112,name:"黄埔区",pid:"440100",type:"district",pinyin:"huang pu qu",py:"hpq",prefix:"h"},
    {id:440113,name:"番禺区",pid:"440100",type:"district",pinyin:"fan yu qu",py:"fyq",prefix:"f"},
    {id:440114,name:"花都区",pid:"440100",type:"district",pinyin:"hua dou qu",py:"hdq",prefix:"h"},
    {id:440115,name:"南沙区",pid:"440100",type:"district",pinyin:"nan sha qu",py:"nsq",prefix:"n"},
    {id:440116,name:"萝岗区",pid:"440100",type:"district",pinyin:"luo gang qu",py:"lgq",prefix:"l"},
    {id:440183,name:"增城市",pid:"440100",type:"district",pinyin:"zeng cheng shi",py:"zcs",prefix:"z"},
    {id:440184,name:"从化市",pid:"440100",type:"district",pinyin:"cong hua shi",py:"chs",prefix:"c"},
    {id:440203,name:"武江区",pid:"440200",type:"district",pinyin:"wu jiang qu",py:"wjq",prefix:"w"},
    {id:440204,name:"浈江区",pid:"440200",type:"district",pinyin:"zhen jiang qu",py:"zjq",prefix:"z"},
    {id:440205,name:"曲江区",pid:"440200",type:"district",pinyin:"qu jiang qu",py:"qjq",prefix:"q"},
    {id:440222,name:"始兴县",pid:"440200",type:"district",pinyin:"shi xing xian",py:"sxx",prefix:"s"},
    {id:440224,name:"仁化县",pid:"440200",type:"district",pinyin:"ren hua xian",py:"rhx",prefix:"r"},
    {id:440229,name:"翁源县",pid:"440200",type:"district",pinyin:"weng yuan xian",py:"wyx",prefix:"w"},
    {id:440232,name:"乳源瑶族自治县",pid:"440200",type:"district",pinyin:"ru yuan yao zu zi zhi xian",py:"ryyzzzx",prefix:"r"},
    {id:440233,name:"新丰县",pid:"440200",type:"district",pinyin:"xin feng xian",py:"xfx",prefix:"x"},
    {id:440281,name:"乐昌市",pid:"440200",type:"district",pinyin:"le chang shi",py:"lcs",prefix:"l"},
    {id:440282,name:"南雄市",pid:"440200",type:"district",pinyin:"nan xiong shi",py:"nxs",prefix:"n"},
    {id:440303,name:"罗湖区",pid:"440300",type:"district",pinyin:"luo hu qu",py:"lhq",prefix:"l"},
    {id:440304,name:"福田区",pid:"440300",type:"district",pinyin:"fu tian qu",py:"ftq",prefix:"f"},
    {id:440305,name:"南山区",pid:"440300",type:"district",pinyin:"nan shan qu",py:"nsq",prefix:"n"},
    {id:440306,name:"宝安区",pid:"440300",type:"district",pinyin:"bao an qu",py:"baq",prefix:"b"},
    {id:440307,name:"龙岗区",pid:"440300",type:"district",pinyin:"long gang qu",py:"lgq",prefix:"l"},
    {id:440308,name:"盐田区",pid:"440300",type:"district",pinyin:"yan tian qu",py:"ytq",prefix:"y"},
    {id:440402,name:"香洲区",pid:"440400",type:"district",pinyin:"xiang zhou qu",py:"xzq",prefix:"x"},
    {id:440403,name:"斗门区",pid:"440400",type:"district",pinyin:"dou men qu",py:"dmq",prefix:"d"},
    {id:440404,name:"金湾区",pid:"440400",type:"district",pinyin:"jin wan qu",py:"jwq",prefix:"j"},
    {id:440507,name:"龙湖区",pid:"440500",type:"district",pinyin:"long hu qu",py:"lhq",prefix:"l"},
    {id:440511,name:"金平区",pid:"440500",type:"district",pinyin:"jin ping qu",py:"jpq",prefix:"j"},
    {id:440512,name:"濠江区",pid:"440500",type:"district",pinyin:"hao jiang qu",py:"hjq",prefix:"h"},
    {id:440513,name:"潮阳区",pid:"440500",type:"district",pinyin:"chao yang qu",py:"cyq",prefix:"c"},
    {id:440514,name:"潮南区",pid:"440500",type:"district",pinyin:"chao nan qu",py:"cnq",prefix:"c"},
    {id:440515,name:"澄海区",pid:"440500",type:"district",pinyin:"cheng hai qu",py:"chq",prefix:"c"},
    {id:440523,name:"南澳县",pid:"440500",type:"district",pinyin:"nan ao xian",py:"nax",prefix:"n"},
    {id:440604,name:"禅城区",pid:"440600",type:"district",pinyin:"shan cheng qu",py:"scq",prefix:"s"},
    {id:440605,name:"南海区",pid:"440600",type:"district",pinyin:"nan hai qu",py:"nhq",prefix:"n"},
    {id:440606,name:"顺德区",pid:"440600",type:"district",pinyin:"shun de qu",py:"sdq",prefix:"s"},
    {id:440607,name:"三水区",pid:"440600",type:"district",pinyin:"san shui qu",py:"ssq",prefix:"s"},
    {id:440608,name:"高明区",pid:"440600",type:"district",pinyin:"gao ming qu",py:"gmq",prefix:"g"},
    {id:440703,name:"蓬江区",pid:"440700",type:"district",pinyin:"peng jiang qu",py:"pjq",prefix:"p"},
    {id:440704,name:"江海区",pid:"440700",type:"district",pinyin:"jiang hai qu",py:"jhq",prefix:"j"},
    {id:440705,name:"新会区",pid:"440700",type:"district",pinyin:"xin hui qu",py:"xhq",prefix:"x"},
    {id:440781,name:"台山市",pid:"440700",type:"district",pinyin:"tai shan shi",py:"tss",prefix:"t"},
    {id:440783,name:"开平市",pid:"440700",type:"district",pinyin:"kai ping shi",py:"kps",prefix:"k"},
    {id:440784,name:"鹤山市",pid:"440700",type:"district",pinyin:"he shan shi",py:"hss",prefix:"h"},
    {id:440785,name:"恩平市",pid:"440700",type:"district",pinyin:"en ping shi",py:"eps",prefix:"e"},
    {id:440802,name:"赤坎区",pid:"440800",type:"district",pinyin:"chi kan qu",py:"ckq",prefix:"c"},
    {id:440803,name:"霞山区",pid:"440800",type:"district",pinyin:"xia shan qu",py:"xsq",prefix:"x"},
    {id:440804,name:"坡头区",pid:"440800",type:"district",pinyin:"po tou qu",py:"ptq",prefix:"p"},
    {id:440811,name:"麻章区",pid:"440800",type:"district",pinyin:"ma zhang qu",py:"mzq",prefix:"m"},
    {id:440823,name:"遂溪县",pid:"440800",type:"district",pinyin:"sui xi xian",py:"sxx",prefix:"s"},
    {id:440825,name:"徐闻县",pid:"440800",type:"district",pinyin:"xu wen xian",py:"xwx",prefix:"x"},
    {id:440881,name:"廉江市",pid:"440800",type:"district",pinyin:"lian jiang shi",py:"ljs",prefix:"l"},
    {id:440882,name:"雷州市",pid:"440800",type:"district",pinyin:"lei zhou shi",py:"lzs",prefix:"l"},
    {id:440883,name:"吴川市",pid:"440800",type:"district",pinyin:"wu chuan shi",py:"wcs",prefix:"w"},
    {id:440902,name:"茂南区",pid:"440900",type:"district",pinyin:"mao nan qu",py:"mnq",prefix:"m"},
    {id:440903,name:"茂港区",pid:"440900",type:"district",pinyin:"mao gang qu",py:"mgq",prefix:"m"},
    {id:440923,name:"电白县",pid:"440900",type:"district",pinyin:"dian bai xian",py:"dbx",prefix:"d"},
    {id:440981,name:"高州市",pid:"440900",type:"district",pinyin:"gao zhou shi",py:"gzs",prefix:"g"},
    {id:440982,name:"化州市",pid:"440900",type:"district",pinyin:"hua zhou shi",py:"hzs",prefix:"h"},
    {id:440983,name:"信宜市",pid:"440900",type:"district",pinyin:"xin yi shi",py:"xys",prefix:"x"},
    {id:441202,name:"端州区",pid:"441200",type:"district",pinyin:"duan zhou qu",py:"dzq",prefix:"d"},
    {id:441203,name:"鼎湖区",pid:"441200",type:"district",pinyin:"ding hu qu",py:"dhq",prefix:"d"},
    {id:441223,name:"广宁县",pid:"441200",type:"district",pinyin:"guang ning xian",py:"gnx",prefix:"g"},
    {id:441224,name:"怀集县",pid:"441200",type:"district",pinyin:"huai ji xian",py:"hjx",prefix:"h"},
    {id:441225,name:"封开县",pid:"441200",type:"district",pinyin:"feng kai xian",py:"fkx",prefix:"f"},
    {id:441226,name:"德庆县",pid:"441200",type:"district",pinyin:"de qing xian",py:"dqx",prefix:"d"},
    {id:441283,name:"高要市",pid:"441200",type:"district",pinyin:"gao yao shi",py:"gys",prefix:"g"},
    {id:441284,name:"四会市",pid:"441200",type:"district",pinyin:"si hui shi",py:"shs",prefix:"s"},
    {id:441302,name:"惠城区",pid:"441300",type:"district",pinyin:"hui cheng qu",py:"hcq",prefix:"h"},
    {id:441303,name:"惠阳区",pid:"441300",type:"district",pinyin:"hui yang qu",py:"hyq",prefix:"h"},
    {id:441322,name:"博罗县",pid:"441300",type:"district",pinyin:"bo luo xian",py:"blx",prefix:"b"},
    {id:441323,name:"惠东县",pid:"441300",type:"district",pinyin:"hui dong xian",py:"hdx",prefix:"h"},
    {id:441324,name:"龙门县",pid:"441300",type:"district",pinyin:"long men xian",py:"lmx",prefix:"l"},
    {id:441402,name:"梅江区",pid:"441400",type:"district",pinyin:"mei jiang qu",py:"mjq",prefix:"m"},
    {id:441421,name:"梅县",pid:"441400",type:"district",pinyin:"mei xian",py:"mx",prefix:"m"},
    {id:441422,name:"大埔县",pid:"441400",type:"district",pinyin:"da pu xian",py:"dpx",prefix:"d"},
    {id:441423,name:"丰顺县",pid:"441400",type:"district",pinyin:"feng shun xian",py:"fsx",prefix:"f"},
    {id:441424,name:"五华县",pid:"441400",type:"district",pinyin:"wu hua xian",py:"whx",prefix:"w"},
    {id:441426,name:"平远县",pid:"441400",type:"district",pinyin:"ping yuan xian",py:"pyx",prefix:"p"},
    {id:441427,name:"蕉岭县",pid:"441400",type:"district",pinyin:"jiao ling xian",py:"jlx",prefix:"j"},
    {id:441481,name:"兴宁市",pid:"441400",type:"district",pinyin:"xing ning shi",py:"xns",prefix:"x"},
    {id:441502,name:"城区",pid:"441500",type:"district",pinyin:"cheng qu",py:"cq",prefix:"c"},
    {id:441521,name:"海丰县",pid:"441500",type:"district",pinyin:"hai feng xian",py:"hfx",prefix:"h"},
    {id:441523,name:"陆河县",pid:"441500",type:"district",pinyin:"lu he xian",py:"lhx",prefix:"l"},
    {id:441581,name:"陆丰市",pid:"441500",type:"district",pinyin:"lu feng shi",py:"lfs",prefix:"l"},
    {id:441602,name:"源城区",pid:"441600",type:"district",pinyin:"yuan cheng qu",py:"ycq",prefix:"y"},
    {id:441621,name:"紫金县",pid:"441600",type:"district",pinyin:"zi jin xian",py:"zjx",prefix:"z"},
    {id:441622,name:"龙川县",pid:"441600",type:"district",pinyin:"long chuan xian",py:"lcx",prefix:"l"},
    {id:441623,name:"连平县",pid:"441600",type:"district",pinyin:"lian ping xian",py:"lpx",prefix:"l"},
    {id:441624,name:"和平县",pid:"441600",type:"district",pinyin:"he ping xian",py:"hpx",prefix:"h"},
    {id:441625,name:"东源县",pid:"441600",type:"district",pinyin:"dong yuan xian",py:"dyx",prefix:"d"},
    {id:441702,name:"江城区",pid:"441700",type:"district",pinyin:"jiang cheng qu",py:"jcq",prefix:"j"},
    {id:441721,name:"阳西县",pid:"441700",type:"district",pinyin:"yang xi xian",py:"yxx",prefix:"y"},
    {id:441723,name:"阳东县",pid:"441700",type:"district",pinyin:"yang dong xian",py:"ydx",prefix:"y"},
    {id:441781,name:"阳春市",pid:"441700",type:"district",pinyin:"yang chun shi",py:"ycs",prefix:"y"},
    {id:441802,name:"清城区",pid:"441800",type:"district",pinyin:"qing cheng qu",py:"qcq",prefix:"q"},
    {id:441803,name:"清新区",pid:"441800",type:"district",pinyin:"qing xin qu",py:"qxq",prefix:"q"},
    {id:441821,name:"佛冈县",pid:"441800",type:"district",pinyin:"fo gang xian",py:"fgx",prefix:"f"},
    {id:441823,name:"阳山县",pid:"441800",type:"district",pinyin:"yang shan xian",py:"ysx",prefix:"y"},
    {id:441825,name:"连山壮族瑶族自治县",pid:"441800",type:"district",pinyin:"lian shan zhuang zu yao zu zi zhi xian",py:"lszzyzzzx",prefix:"l"},
    {id:441826,name:"连南瑶族自治县",pid:"441800",type:"district",pinyin:"lian nan yao zu zi zhi xian",py:"lnyzzzx",prefix:"l"},
    {id:441881,name:"英德市",pid:"441800",type:"district",pinyin:"ying de shi",py:"yds",prefix:"y"},
    {id:441882,name:"连州市",pid:"441800",type:"district",pinyin:"lian zhou shi",py:"lzs",prefix:"l"},
    {id:445102,name:"湘桥区",pid:"445100",type:"district",pinyin:"xiang qiao qu",py:"xqq",prefix:"x"},
    {id:445103,name:"潮安区",pid:"445100",type:"district",pinyin:"chao an qu",py:"caq",prefix:"c"},
    {id:445122,name:"饶平县",pid:"445100",type:"district",pinyin:"rao ping xian",py:"rpx",prefix:"r"},
    {id:445202,name:"榕城区",pid:"445200",type:"district",pinyin:"rong cheng qu",py:"rcq",prefix:"r"},
    {id:445203,name:"揭东区",pid:"445200",type:"district",pinyin:"jie dong qu",py:"jdq",prefix:"j"},
    {id:445222,name:"揭西县",pid:"445200",type:"district",pinyin:"jie xi xian",py:"jxx",prefix:"j"},
    {id:445224,name:"惠来县",pid:"445200",type:"district",pinyin:"hui lai xian",py:"hlx",prefix:"h"},
    {id:445281,name:"普宁市",pid:"445200",type:"district",pinyin:"pu ning shi",py:"pns",prefix:"p"},
    {id:445302,name:"云城区",pid:"445300",type:"district",pinyin:"yun cheng qu",py:"ycq",prefix:"y"},
    {id:445321,name:"新兴县",pid:"445300",type:"district",pinyin:"xin xing xian",py:"xxx",prefix:"x"},
    {id:445322,name:"郁南县",pid:"445300",type:"district",pinyin:"yu nan xian",py:"ynx",prefix:"y"},
    {id:445323,name:"云安县",pid:"445300",type:"district",pinyin:"yun an xian",py:"yax",prefix:"y"},
    {id:445381,name:"罗定市",pid:"445300",type:"district",pinyin:"luo ding shi",py:"lds",prefix:"l"},
    {id:450102,name:"兴宁区",pid:"450100",type:"district",pinyin:"xing ning qu",py:"xnq",prefix:"x"},
    {id:450103,name:"青秀区",pid:"450100",type:"district",pinyin:"qing xiu qu",py:"qxq",prefix:"q"},
    {id:450105,name:"江南区",pid:"450100",type:"district",pinyin:"jiang nan qu",py:"jnq",prefix:"j"},
    {id:450107,name:"西乡塘区",pid:"450100",type:"district",pinyin:"xi xiang tang qu",py:"xxtq",prefix:"x"},
    {id:450108,name:"良庆区",pid:"450100",type:"district",pinyin:"liang qing qu",py:"lqq",prefix:"l"},
    {id:450109,name:"邕宁区",pid:"450100",type:"district",pinyin:"yong ning qu",py:"ynq",prefix:"y"},
    {id:450122,name:"武鸣县",pid:"450100",type:"district",pinyin:"wu ming xian",py:"wmx",prefix:"w"},
    {id:450123,name:"隆安县",pid:"450100",type:"district",pinyin:"long an xian",py:"lax",prefix:"l"},
    {id:450124,name:"马山县",pid:"450100",type:"district",pinyin:"ma shan xian",py:"msx",prefix:"m"},
    {id:450125,name:"上林县",pid:"450100",type:"district",pinyin:"shang lin xian",py:"slx",prefix:"s"},
    {id:450126,name:"宾阳县",pid:"450100",type:"district",pinyin:"bin yang xian",py:"byx",prefix:"b"},
    {id:450127,name:"横县",pid:"450100",type:"district",pinyin:"heng xian",py:"hx",prefix:"h"},
    {id:450202,name:"城中区",pid:"450200",type:"district",pinyin:"cheng zhong qu",py:"czq",prefix:"c"},
    {id:450203,name:"鱼峰区",pid:"450200",type:"district",pinyin:"yu feng qu",py:"yfq",prefix:"y"},
    {id:450204,name:"柳南区",pid:"450200",type:"district",pinyin:"liu nan qu",py:"lnq",prefix:"l"},
    {id:450205,name:"柳北区",pid:"450200",type:"district",pinyin:"liu bei qu",py:"lbq",prefix:"l"},
    {id:450221,name:"柳江县",pid:"450200",type:"district",pinyin:"liu jiang xian",py:"ljx",prefix:"l"},
    {id:450222,name:"柳城县",pid:"450200",type:"district",pinyin:"liu cheng xian",py:"lcx",prefix:"l"},
    {id:450223,name:"鹿寨县",pid:"450200",type:"district",pinyin:"lu zhai xian",py:"lzx",prefix:"l"},
    {id:450224,name:"融安县",pid:"450200",type:"district",pinyin:"rong an xian",py:"rax",prefix:"r"},
    {id:450225,name:"融水苗族自治县",pid:"450200",type:"district",pinyin:"rong shui miao zu zi zhi xian",py:"rsmzzzx",prefix:"r"},
    {id:450226,name:"三江侗族自治县",pid:"450200",type:"district",pinyin:"san jiang dong zu zi zhi xian",py:"sjdzzzx",prefix:"s"},
    {id:450302,name:"秀峰区",pid:"450300",type:"district",pinyin:"xiu feng qu",py:"xfq",prefix:"x"},
    {id:450303,name:"叠彩区",pid:"450300",type:"district",pinyin:"die cai qu",py:"dcq",prefix:"d"},
    {id:450304,name:"象山区",pid:"450300",type:"district",pinyin:"xiang shan qu",py:"xsq",prefix:"x"},
    {id:450305,name:"七星区",pid:"450300",type:"district",pinyin:"qi xing qu",py:"qxq",prefix:"q"},
    {id:450311,name:"雁山区",pid:"450300",type:"district",pinyin:"yan shan qu",py:"ysq",prefix:"y"},
    {id:450312,name:"临桂区",pid:"450300",type:"district",pinyin:"lin gui qu",py:"lgq",prefix:"l"},
    {id:450321,name:"阳朔县",pid:"450300",type:"district",pinyin:"yang shuo xian",py:"ysx",prefix:"y"},
    {id:450323,name:"灵川县",pid:"450300",type:"district",pinyin:"ling chuan xian",py:"lcx",prefix:"l"},
    {id:450324,name:"全州县",pid:"450300",type:"district",pinyin:"quan zhou xian",py:"qzx",prefix:"q"},
    {id:450325,name:"兴安县",pid:"450300",type:"district",pinyin:"xing an xian",py:"xax",prefix:"x"},
    {id:450326,name:"永福县",pid:"450300",type:"district",pinyin:"yong fu xian",py:"yfx",prefix:"y"},
    {id:450327,name:"灌阳县",pid:"450300",type:"district",pinyin:"guan yang xian",py:"gyx",prefix:"g"},
    {id:450328,name:"龙胜各族自治县",pid:"450300",type:"district",pinyin:"long sheng ge zu zi zhi xian",py:"lsgzzzx",prefix:"l"},
    {id:450329,name:"资源县",pid:"450300",type:"district",pinyin:"zi yuan xian",py:"zyx",prefix:"z"},
    {id:450330,name:"平乐县",pid:"450300",type:"district",pinyin:"ping le xian",py:"plx",prefix:"p"},
    {id:450331,name:"荔浦县",pid:"450300",type:"district",pinyin:"li pu xian",py:"lpx",prefix:"l"},
    {id:450332,name:"恭城瑶族自治县",pid:"450300",type:"district",pinyin:"gong cheng yao zu zi zhi xian",py:"gcyzzzx",prefix:"g"},
    {id:450403,name:"万秀区",pid:"450400",type:"district",pinyin:"wan xiu qu",py:"wxq",prefix:"w"},
    {id:450405,name:"长洲区",pid:"450400",type:"district",pinyin:"chang zhou qu",py:"czq",prefix:"c"},
    {id:450406,name:"龙圩区",pid:"450400",type:"district",pinyin:"long wei qu",py:"lwq",prefix:"l"},
    {id:450421,name:"苍梧县",pid:"450400",type:"district",pinyin:"cang wu xian",py:"cwx",prefix:"c"},
    {id:450422,name:"藤县",pid:"450400",type:"district",pinyin:"teng xian",py:"tx",prefix:"t"},
    {id:450423,name:"蒙山县",pid:"450400",type:"district",pinyin:"meng shan xian",py:"msx",prefix:"m"},
    {id:450481,name:"岑溪市",pid:"450400",type:"district",pinyin:"cen xi shi",py:"cxs",prefix:"c"},
    {id:450502,name:"海城区",pid:"450500",type:"district",pinyin:"hai cheng qu",py:"hcq",prefix:"h"},
    {id:450503,name:"银海区",pid:"450500",type:"district",pinyin:"yin hai qu",py:"yhq",prefix:"y"},
    {id:450512,name:"铁山港区",pid:"450500",type:"district",pinyin:"tie shan gang qu",py:"tsgq",prefix:"t"},
    {id:450521,name:"合浦县",pid:"450500",type:"district",pinyin:"he pu xian",py:"hpx",prefix:"h"},
    {id:450602,name:"港口区",pid:"450600",type:"district",pinyin:"gang kou qu",py:"gkq",prefix:"g"},
    {id:450603,name:"防城区",pid:"450600",type:"district",pinyin:"fang cheng qu",py:"fcq",prefix:"f"},
    {id:450621,name:"上思县",pid:"450600",type:"district",pinyin:"shang si xian",py:"ssx",prefix:"s"},
    {id:450681,name:"东兴市",pid:"450600",type:"district",pinyin:"dong xing shi",py:"dxs",prefix:"d"},
    {id:450702,name:"钦南区",pid:"450700",type:"district",pinyin:"qin nan qu",py:"qnq",prefix:"q"},
    {id:450703,name:"钦北区",pid:"450700",type:"district",pinyin:"qin bei qu",py:"qbq",prefix:"q"},
    {id:450721,name:"灵山县",pid:"450700",type:"district",pinyin:"ling shan xian",py:"lsx",prefix:"l"},
    {id:450722,name:"浦北县",pid:"450700",type:"district",pinyin:"pu bei xian",py:"pbx",prefix:"p"},
    {id:450802,name:"港北区",pid:"450800",type:"district",pinyin:"gang bei qu",py:"gbq",prefix:"g"},
    {id:450803,name:"港南区",pid:"450800",type:"district",pinyin:"gang nan qu",py:"gnq",prefix:"g"},
    {id:450804,name:"覃塘区",pid:"450800",type:"district",pinyin:"tan tang qu",py:"ttq",prefix:"t"},
    {id:450821,name:"平南县",pid:"450800",type:"district",pinyin:"ping nan xian",py:"pnx",prefix:"p"},
    {id:450881,name:"桂平市",pid:"450800",type:"district",pinyin:"gui ping shi",py:"gps",prefix:"g"},
    {id:450902,name:"玉州区",pid:"450900",type:"district",pinyin:"yu zhou qu",py:"yzq",prefix:"y"},
    {id:450903,name:"福绵区",pid:"450900",type:"district",pinyin:"fu mian qu",py:"fmq",prefix:"f"},
    {id:450921,name:"容县",pid:"450900",type:"district",pinyin:"rong xian",py:"rx",prefix:"r"},
    {id:450922,name:"陆川县",pid:"450900",type:"district",pinyin:"lu chuan xian",py:"lcx",prefix:"l"},
    {id:450923,name:"博白县",pid:"450900",type:"district",pinyin:"bo bai xian",py:"bbx",prefix:"b"},
    {id:450924,name:"兴业县",pid:"450900",type:"district",pinyin:"xing ye xian",py:"xyx",prefix:"x"},
    {id:450981,name:"北流市",pid:"450900",type:"district",pinyin:"bei liu shi",py:"bls",prefix:"b"},
    {id:451002,name:"右江区",pid:"451000",type:"district",pinyin:"you jiang qu",py:"yjq",prefix:"y"},
    {id:451021,name:"田阳县",pid:"451000",type:"district",pinyin:"tian yang xian",py:"tyx",prefix:"t"},
    {id:451022,name:"田东县",pid:"451000",type:"district",pinyin:"tian dong xian",py:"tdx",prefix:"t"},
    {id:451023,name:"平果县",pid:"451000",type:"district",pinyin:"ping guo xian",py:"pgx",prefix:"p"},
    {id:451024,name:"德保县",pid:"451000",type:"district",pinyin:"de bao xian",py:"dbx",prefix:"d"},
    {id:451025,name:"靖西县",pid:"451000",type:"district",pinyin:"jing xi xian",py:"jxx",prefix:"j"},
    {id:451026,name:"那坡县",pid:"451000",type:"district",pinyin:"nei po xian",py:"npx",prefix:"n"},
    {id:451027,name:"凌云县",pid:"451000",type:"district",pinyin:"ling yun xian",py:"lyx",prefix:"l"},
    {id:451028,name:"乐业县",pid:"451000",type:"district",pinyin:"le ye xian",py:"lyx",prefix:"l"},
    {id:451029,name:"田林县",pid:"451000",type:"district",pinyin:"tian lin xian",py:"tlx",prefix:"t"},
    {id:451030,name:"西林县",pid:"451000",type:"district",pinyin:"xi lin xian",py:"xlx",prefix:"x"},
    {id:451031,name:"隆林各族自治县",pid:"451000",type:"district",pinyin:"long lin ge zu zi zhi xian",py:"llgzzzx",prefix:"l"},
    {id:451102,name:"八步区",pid:"451100",type:"district",pinyin:"ba bu qu",py:"bbq",prefix:"b"},
    {id:451121,name:"昭平县",pid:"451100",type:"district",pinyin:"zhao ping xian",py:"zpx",prefix:"z"},
    {id:451122,name:"钟山县",pid:"451100",type:"district",pinyin:"zhong shan xian",py:"zsx",prefix:"z"},
    {id:451123,name:"富川瑶族自治县",pid:"451100",type:"district",pinyin:"fu chuan yao zu zi zhi xian",py:"fcyzzzx",prefix:"f"},
    {id:451202,name:"金城江区",pid:"451200",type:"district",pinyin:"jin cheng jiang qu",py:"jcjq",prefix:"j"},
    {id:451221,name:"南丹县",pid:"451200",type:"district",pinyin:"nan dan xian",py:"ndx",prefix:"n"},
    {id:451222,name:"天峨县",pid:"451200",type:"district",pinyin:"tian e xian",py:"tex",prefix:"t"},
    {id:451223,name:"凤山县",pid:"451200",type:"district",pinyin:"feng shan xian",py:"fsx",prefix:"f"},
    {id:451224,name:"东兰县",pid:"451200",type:"district",pinyin:"dong lan xian",py:"dlx",prefix:"d"},
    {id:451225,name:"罗城仫佬族自治县",pid:"451200",type:"district",pinyin:"luo cheng mu lao zu zi zhi xian",py:"lcmlzzzx",prefix:"l"},
    {id:451226,name:"环江毛南族自治县",pid:"451200",type:"district",pinyin:"huan jiang mao nan zu zi zhi xian",py:"hjmnzzzx",prefix:"h"},
    {id:451227,name:"巴马瑶族自治县",pid:"451200",type:"district",pinyin:"ba ma yao zu zi zhi xian",py:"bmyzzzx",prefix:"b"},
    {id:451228,name:"都安瑶族自治县",pid:"451200",type:"district",pinyin:"dou an yao zu zi zhi xian",py:"dayzzzx",prefix:"d"},
    {id:451229,name:"大化瑶族自治县",pid:"451200",type:"district",pinyin:"da hua yao zu zi zhi xian",py:"dhyzzzx",prefix:"d"},
    {id:451281,name:"宜州市",pid:"451200",type:"district",pinyin:"yi zhou shi",py:"yzs",prefix:"y"},
    {id:451302,name:"兴宾区",pid:"451300",type:"district",pinyin:"xing bin qu",py:"xbq",prefix:"x"},
    {id:451321,name:"忻城县",pid:"451300",type:"district",pinyin:"xin cheng xian",py:"xcx",prefix:"x"},
    {id:451322,name:"象州县",pid:"451300",type:"district",pinyin:"xiang zhou xian",py:"xzx",prefix:"x"},
    {id:451323,name:"武宣县",pid:"451300",type:"district",pinyin:"wu xuan xian",py:"wxx",prefix:"w"},
    {id:451324,name:"金秀瑶族自治县",pid:"451300",type:"district",pinyin:"jin xiu yao zu zi zhi xian",py:"jxyzzzx",prefix:"j"},
    {id:451381,name:"合山市",pid:"451300",type:"district",pinyin:"he shan shi",py:"hss",prefix:"h"},
    {id:451402,name:"江州区",pid:"451400",type:"district",pinyin:"jiang zhou qu",py:"jzq",prefix:"j"},
    {id:451421,name:"扶绥县",pid:"451400",type:"district",pinyin:"fu sui xian",py:"fsx",prefix:"f"},
    {id:451422,name:"宁明县",pid:"451400",type:"district",pinyin:"ning ming xian",py:"nmx",prefix:"n"},
    {id:451423,name:"龙州县",pid:"451400",type:"district",pinyin:"long zhou xian",py:"lzx",prefix:"l"},
    {id:451424,name:"大新县",pid:"451400",type:"district",pinyin:"da xin xian",py:"dxx",prefix:"d"},
    {id:451425,name:"天等县",pid:"451400",type:"district",pinyin:"tian deng xian",py:"tdx",prefix:"t"},
    {id:451481,name:"凭祥市",pid:"451400",type:"district",pinyin:"ping xiang shi",py:"pxs",prefix:"p"},
    {id:460105,name:"秀英区",pid:"460100",type:"district",pinyin:"xiu ying qu",py:"xyq",prefix:"x"},
    {id:460106,name:"龙华区",pid:"460100",type:"district",pinyin:"long hua qu",py:"lhq",prefix:"l"},
    {id:460107,name:"琼山区",pid:"460100",type:"district",pinyin:"qiong shan qu",py:"qsq",prefix:"q"},
    {id:460108,name:"美兰区",pid:"460100",type:"district",pinyin:"mei lan qu",py:"mlq",prefix:"m"},
    {id:460321,name:"西沙群岛",pid:"460300",type:"district",pinyin:"xi sha qun dao",py:"xsqd",prefix:"x"},
    {id:460322,name:"南沙群岛",pid:"460300",type:"district",pinyin:"nan sha qun dao",py:"nsqd",prefix:"n"},
    {id:460323,name:"中沙群岛的岛礁及其海域",pid:"460300",type:"district",pinyin:"zhong sha qun dao de dao jiao ji qi hai yu",py:"zsqdddjjqhy",prefix:"z"},
    {id:469001,name:"五指山市",pid:"469000",type:"district",pinyin:"wu zhi shan shi",py:"wzss",prefix:"w"},
    {id:469002,name:"琼海市",pid:"469000",type:"district",pinyin:"qiong hai shi",py:"qhs",prefix:"q"},
    {id:469003,name:"儋州市",pid:"469000",type:"district",pinyin:"dan zhou shi",py:"dzs",prefix:"d"},
    {id:469005,name:"文昌市",pid:"469000",type:"district",pinyin:"wen chang shi",py:"wcs",prefix:"w"},
    {id:469006,name:"万宁市",pid:"469000",type:"district",pinyin:"wan ning shi",py:"wns",prefix:"w"},
    {id:469007,name:"东方市",pid:"469000",type:"district",pinyin:"dong fang shi",py:"dfs",prefix:"d"},
    {id:469021,name:"定安县",pid:"469000",type:"district",pinyin:"ding an xian",py:"dax",prefix:"d"},
    {id:469022,name:"屯昌县",pid:"469000",type:"district",pinyin:"tun chang xian",py:"tcx",prefix:"t"},
    {id:469023,name:"澄迈县",pid:"469000",type:"district",pinyin:"cheng mai xian",py:"cmx",prefix:"c"},
    {id:469024,name:"临高县",pid:"469000",type:"district",pinyin:"lin gao xian",py:"lgx",prefix:"l"},
    {id:469025,name:"白沙黎族自治县",pid:"469000",type:"district",pinyin:"bai sha li zu zi zhi xian",py:"bslzzzx",prefix:"b"},
    {id:469026,name:"昌江黎族自治县",pid:"469000",type:"district",pinyin:"chang jiang li zu zi zhi xian",py:"cjlzzzx",prefix:"c"},
    {id:469027,name:"乐东黎族自治县",pid:"469000",type:"district",pinyin:"le dong li zu zi zhi xian",py:"ldlzzzx",prefix:"l"},
    {id:469028,name:"陵水黎族自治县",pid:"469000",type:"district",pinyin:"ling shui li zu zi zhi xian",py:"lslzzzx",prefix:"l"},
    {id:469029,name:"保亭黎族苗族自治县",pid:"469000",type:"district",pinyin:"bao ting li zu miao zu zi zhi xian",py:"btlzmzzzx",prefix:"b"},
    {id:469030,name:"琼中黎族苗族自治县",pid:"469000",type:"district",pinyin:"qiong zhong li zu miao zu zi zhi xian",py:"qzlzmzzzx",prefix:"q"},
    {id:500101,name:"万州区",pid:"500100",type:"district",pinyin:"wan zhou qu",py:"wzq",prefix:"w"},
    {id:500102,name:"涪陵区",pid:"500100",type:"district",pinyin:"fu ling qu",py:"flq",prefix:"f"},
    {id:500103,name:"渝中区",pid:"500100",type:"district",pinyin:"yu zhong qu",py:"yzq",prefix:"y"},
    {id:500104,name:"大渡口区",pid:"500100",type:"district",pinyin:"da du kou qu",py:"ddkq",prefix:"d"},
    {id:500105,name:"江北区",pid:"500100",type:"district",pinyin:"jiang bei qu",py:"jbq",prefix:"j"},
    {id:500106,name:"沙坪坝区",pid:"500100",type:"district",pinyin:"sha ping ba qu",py:"spbq",prefix:"s"},
    {id:500107,name:"九龙坡区",pid:"500100",type:"district",pinyin:"jiu long po qu",py:"jlpq",prefix:"j"},
    {id:500108,name:"南岸区",pid:"500100",type:"district",pinyin:"nan an qu",py:"naq",prefix:"n"},
    {id:500109,name:"北碚区",pid:"500100",type:"district",pinyin:"bei bei qu",py:"bbq",prefix:"b"},
    {id:500110,name:"綦江区",pid:"500100",type:"district",pinyin:"qi jiang qu",py:"qjq",prefix:"q"},
    {id:500111,name:"大足区",pid:"500100",type:"district",pinyin:"da zu qu",py:"dzq",prefix:"d"},
    {id:500112,name:"渝北区",pid:"500100",type:"district",pinyin:"yu bei qu",py:"ybq",prefix:"y"},
    {id:500113,name:"巴南区",pid:"500100",type:"district",pinyin:"ba nan qu",py:"bnq",prefix:"b"},
    {id:500114,name:"黔江区",pid:"500100",type:"district",pinyin:"qian jiang qu",py:"qjq",prefix:"q"},
    {id:500115,name:"长寿区",pid:"500100",type:"district",pinyin:"chang shou qu",py:"csq",prefix:"c"},
    {id:500116,name:"江津区",pid:"500100",type:"district",pinyin:"jiang jin qu",py:"jjq",prefix:"j"},
    {id:500117,name:"合川区",pid:"500100",type:"district",pinyin:"he chuan qu",py:"hcq",prefix:"h"},
    {id:500118,name:"永川区",pid:"500100",type:"district",pinyin:"yong chuan qu",py:"ycq",prefix:"y"},
    {id:500119,name:"南川区",pid:"500100",type:"district",pinyin:"nan chuan qu",py:"ncq",prefix:"n"},
    {id:500223,name:"潼南县",pid:"500200",type:"district",pinyin:"tong nan xian",py:"tnx",prefix:"t"},
    {id:500224,name:"铜梁县",pid:"500200",type:"district",pinyin:"tong liang xian",py:"tlx",prefix:"t"},
    {id:500226,name:"荣昌县",pid:"500200",type:"district",pinyin:"rong chang xian",py:"rcx",prefix:"r"},
    {id:500227,name:"璧山县",pid:"500200",type:"district",pinyin:"bi shan xian",py:"bsx",prefix:"b"},
    {id:500228,name:"梁平县",pid:"500200",type:"district",pinyin:"liang ping xian",py:"lpx",prefix:"l"},
    {id:500229,name:"城口县",pid:"500200",type:"district",pinyin:"cheng kou xian",py:"ckx",prefix:"c"},
    {id:500230,name:"丰都县",pid:"500200",type:"district",pinyin:"feng dou xian",py:"fdx",prefix:"f"},
    {id:500231,name:"垫江县",pid:"500200",type:"district",pinyin:"dian jiang xian",py:"djx",prefix:"d"},
    {id:500232,name:"武隆县",pid:"500200",type:"district",pinyin:"wu long xian",py:"wlx",prefix:"w"},
    {id:500233,name:"忠县",pid:"500200",type:"district",pinyin:"zhong xian",py:"zx",prefix:"z"},
    {id:500234,name:"开县",pid:"500200",type:"district",pinyin:"kai xian",py:"kx",prefix:"k"},
    {id:500235,name:"云阳县",pid:"500200",type:"district",pinyin:"yun yang xian",py:"yyx",prefix:"y"},
    {id:500236,name:"奉节县",pid:"500200",type:"district",pinyin:"feng jie xian",py:"fjx",prefix:"f"},
    {id:500237,name:"巫山县",pid:"500200",type:"district",pinyin:"wu shan xian",py:"wsx",prefix:"w"},
    {id:500238,name:"巫溪县",pid:"500200",type:"district",pinyin:"wu xi xian",py:"wxx",prefix:"w"},
    {id:500240,name:"石柱土家族自治县",pid:"500200",type:"district",pinyin:"shi zhu tu jia zu zi zhi xian",py:"sztjzzzx",prefix:"s"},
    {id:500241,name:"秀山土家族苗族自治县",pid:"500200",type:"district",pinyin:"xiu shan tu jia zu miao zu zi zhi xian",py:"xstjzmzzzx",prefix:"x"},
    {id:500242,name:"酉阳土家族苗族自治县",pid:"500200",type:"district",pinyin:"you yang tu jia zu miao zu zi zhi xian",py:"yytjzmzzzx",prefix:"y"},
    {id:500243,name:"彭水苗族土家族自治县",pid:"500200",type:"district",pinyin:"peng shui miao zu tu jia zu zi zhi xian",py:"psmztjzzzx",prefix:"p"},
    {id:510104,name:"锦江区",pid:"510100",type:"district",pinyin:"jin jiang qu",py:"jjq",prefix:"j"},
    {id:510105,name:"青羊区",pid:"510100",type:"district",pinyin:"qing yang qu",py:"qyq",prefix:"q"},
    {id:510106,name:"金牛区",pid:"510100",type:"district",pinyin:"jin niu qu",py:"jnq",prefix:"j"},
    {id:510107,name:"武侯区",pid:"510100",type:"district",pinyin:"wu hou qu",py:"whq",prefix:"w"},
    {id:510108,name:"成华区",pid:"510100",type:"district",pinyin:"cheng hua qu",py:"chq",prefix:"c"},
    {id:510112,name:"龙泉驿区",pid:"510100",type:"district",pinyin:"long quan yi qu",py:"lqyq",prefix:"l"},
    {id:510113,name:"青白江区",pid:"510100",type:"district",pinyin:"qing bai jiang qu",py:"qbjq",prefix:"q"},
    {id:510114,name:"新都区",pid:"510100",type:"district",pinyin:"xin dou qu",py:"xdq",prefix:"x"},
    {id:510115,name:"温江区",pid:"510100",type:"district",pinyin:"wen jiang qu",py:"wjq",prefix:"w"},
    {id:510121,name:"金堂县",pid:"510100",type:"district",pinyin:"jin tang xian",py:"jtx",prefix:"j"},
    {id:510122,name:"双流县",pid:"510100",type:"district",pinyin:"shuang liu xian",py:"slx",prefix:"s"},
    {id:510124,name:"郫县",pid:"510100",type:"district",pinyin:"pi xian",py:"px",prefix:"p"},
    {id:510129,name:"大邑县",pid:"510100",type:"district",pinyin:"da yi xian",py:"dyx",prefix:"d"},
    {id:510131,name:"蒲江县",pid:"510100",type:"district",pinyin:"pu jiang xian",py:"pjx",prefix:"p"},
    {id:510132,name:"新津县",pid:"510100",type:"district",pinyin:"xin jin xian",py:"xjx",prefix:"x"},
    {id:510181,name:"都江堰市",pid:"510100",type:"district",pinyin:"dou jiang yan shi",py:"djys",prefix:"d"},
    {id:510182,name:"彭州市",pid:"510100",type:"district",pinyin:"peng zhou shi",py:"pzs",prefix:"p"},
    {id:510183,name:"邛崃市",pid:"510100",type:"district",pinyin:"qiong lai shi",py:"qls",prefix:"q"},
    {id:510184,name:"崇州市",pid:"510100",type:"district",pinyin:"chong zhou shi",py:"czs",prefix:"c"},
    {id:510302,name:"自流井区",pid:"510300",type:"district",pinyin:"zi liu jing qu",py:"zljq",prefix:"z"},
    {id:510303,name:"贡井区",pid:"510300",type:"district",pinyin:"gong jing qu",py:"gjq",prefix:"g"},
    {id:510304,name:"大安区",pid:"510300",type:"district",pinyin:"da an qu",py:"daq",prefix:"d"},
    {id:510311,name:"沿滩区",pid:"510300",type:"district",pinyin:"yan tan qu",py:"ytq",prefix:"y"},
    {id:510321,name:"荣县",pid:"510300",type:"district",pinyin:"rong xian",py:"rx",prefix:"r"},
    {id:510322,name:"富顺县",pid:"510300",type:"district",pinyin:"fu shun xian",py:"fsx",prefix:"f"},
    {id:510402,name:"东区",pid:"510400",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:510403,name:"西区",pid:"510400",type:"district",pinyin:"xi qu",py:"xq",prefix:"x"},
    {id:510411,name:"仁和区",pid:"510400",type:"district",pinyin:"ren he qu",py:"rhq",prefix:"r"},
    {id:510421,name:"米易县",pid:"510400",type:"district",pinyin:"mi yi xian",py:"myx",prefix:"m"},
    {id:510422,name:"盐边县",pid:"510400",type:"district",pinyin:"yan bian xian",py:"ybx",prefix:"y"},
    {id:510502,name:"江阳区",pid:"510500",type:"district",pinyin:"jiang yang qu",py:"jyq",prefix:"j"},
    {id:510503,name:"纳溪区",pid:"510500",type:"district",pinyin:"na xi qu",py:"nxq",prefix:"n"},
    {id:510504,name:"龙马潭区",pid:"510500",type:"district",pinyin:"long ma tan qu",py:"lmtq",prefix:"l"},
    {id:510521,name:"泸县",pid:"510500",type:"district",pinyin:"lu xian",py:"lx",prefix:"l"},
    {id:510522,name:"合江县",pid:"510500",type:"district",pinyin:"he jiang xian",py:"hjx",prefix:"h"},
    {id:510524,name:"叙永县",pid:"510500",type:"district",pinyin:"xu yong xian",py:"xyx",prefix:"x"},
    {id:510525,name:"古蔺县",pid:"510500",type:"district",pinyin:"gu lin xian",py:"glx",prefix:"g"},
    {id:510603,name:"旌阳区",pid:"510600",type:"district",pinyin:"jing yang qu",py:"jyq",prefix:"j"},
    {id:510623,name:"中江县",pid:"510600",type:"district",pinyin:"zhong jiang xian",py:"zjx",prefix:"z"},
    {id:510626,name:"罗江县",pid:"510600",type:"district",pinyin:"luo jiang xian",py:"ljx",prefix:"l"},
    {id:510681,name:"广汉市",pid:"510600",type:"district",pinyin:"guang han shi",py:"ghs",prefix:"g"},
    {id:510682,name:"什邡市",pid:"510600",type:"district",pinyin:"shen fang shi",py:"sfs",prefix:"s"},
    {id:510683,name:"绵竹市",pid:"510600",type:"district",pinyin:"mian zhu shi",py:"mzs",prefix:"m"},
    {id:510703,name:"涪城区",pid:"510700",type:"district",pinyin:"fu cheng qu",py:"fcq",prefix:"f"},
    {id:510704,name:"游仙区",pid:"510700",type:"district",pinyin:"you xian qu",py:"yxq",prefix:"y"},
    {id:510722,name:"三台县",pid:"510700",type:"district",pinyin:"san tai xian",py:"stx",prefix:"s"},
    {id:510723,name:"盐亭县",pid:"510700",type:"district",pinyin:"yan ting xian",py:"ytx",prefix:"y"},
    {id:510724,name:"安县",pid:"510700",type:"district",pinyin:"an xian",py:"ax",prefix:"a"},
    {id:510725,name:"梓潼县",pid:"510700",type:"district",pinyin:"zi tong xian",py:"ztx",prefix:"z"},
    {id:510726,name:"北川羌族自治县",pid:"510700",type:"district",pinyin:"bei chuan qiang zu zi zhi xian",py:"bcqzzzx",prefix:"b"},
    {id:510727,name:"平武县",pid:"510700",type:"district",pinyin:"ping wu xian",py:"pwx",prefix:"p"},
    {id:510781,name:"江油市",pid:"510700",type:"district",pinyin:"jiang you shi",py:"jys",prefix:"j"},
    {id:510802,name:"利州区",pid:"510800",type:"district",pinyin:"li zhou qu",py:"lzq",prefix:"l"},
    {id:510811,name:"元坝区",pid:"510800",type:"district",pinyin:"yuan ba qu",py:"ybq",prefix:"y"},
    {id:510812,name:"朝天区",pid:"510800",type:"district",pinyin:"chao tian qu",py:"ctq",prefix:"c"},
    {id:510821,name:"旺苍县",pid:"510800",type:"district",pinyin:"wang cang xian",py:"wcx",prefix:"w"},
    {id:510822,name:"青川县",pid:"510800",type:"district",pinyin:"qing chuan xian",py:"qcx",prefix:"q"},
    {id:510823,name:"剑阁县",pid:"510800",type:"district",pinyin:"jian ge xian",py:"jgx",prefix:"j"},
    {id:510824,name:"苍溪县",pid:"510800",type:"district",pinyin:"cang xi xian",py:"cxx",prefix:"c"},
    {id:510903,name:"船山区",pid:"510900",type:"district",pinyin:"chuan shan qu",py:"csq",prefix:"c"},
    {id:510904,name:"安居区",pid:"510900",type:"district",pinyin:"an ju qu",py:"ajq",prefix:"a"},
    {id:510921,name:"蓬溪县",pid:"510900",type:"district",pinyin:"peng xi xian",py:"pxx",prefix:"p"},
    {id:510922,name:"射洪县",pid:"510900",type:"district",pinyin:"she hong xian",py:"shx",prefix:"s"},
    {id:510923,name:"大英县",pid:"510900",type:"district",pinyin:"da ying xian",py:"dyx",prefix:"d"},
    {id:511002,name:"市中区",pid:"511000",type:"district",pinyin:"shi zhong qu",py:"szq",prefix:"s"},
    {id:511011,name:"东兴区",pid:"511000",type:"district",pinyin:"dong xing qu",py:"dxq",prefix:"d"},
    {id:511024,name:"威远县",pid:"511000",type:"district",pinyin:"wei yuan xian",py:"wyx",prefix:"w"},
    {id:511025,name:"资中县",pid:"511000",type:"district",pinyin:"zi zhong xian",py:"zzx",prefix:"z"},
    {id:511028,name:"隆昌县",pid:"511000",type:"district",pinyin:"long chang xian",py:"lcx",prefix:"l"},
    {id:511102,name:"市中区",pid:"511100",type:"district",pinyin:"shi zhong qu",py:"szq",prefix:"s"},
    {id:511111,name:"沙湾区",pid:"511100",type:"district",pinyin:"sha wan qu",py:"swq",prefix:"s"},
    {id:511112,name:"五通桥区",pid:"511100",type:"district",pinyin:"wu tong qiao qu",py:"wtqq",prefix:"w"},
    {id:511113,name:"金口河区",pid:"511100",type:"district",pinyin:"jin kou he qu",py:"jkhq",prefix:"j"},
    {id:511123,name:"犍为县",pid:"511100",type:"district",pinyin:"jian wei xian",py:"jwx",prefix:"j"},
    {id:511124,name:"井研县",pid:"511100",type:"district",pinyin:"jing yan xian",py:"jyx",prefix:"j"},
    {id:511126,name:"夹江县",pid:"511100",type:"district",pinyin:"jia jiang xian",py:"jjx",prefix:"j"},
    {id:511129,name:"沐川县",pid:"511100",type:"district",pinyin:"mu chuan xian",py:"mcx",prefix:"m"},
    {id:511132,name:"峨边彝族自治县",pid:"511100",type:"district",pinyin:"e bian yi zu zi zhi xian",py:"ebyzzzx",prefix:"e"},
    {id:511133,name:"马边彝族自治县",pid:"511100",type:"district",pinyin:"ma bian yi zu zi zhi xian",py:"mbyzzzx",prefix:"m"},
    {id:511181,name:"峨眉山市",pid:"511100",type:"district",pinyin:"e mei shan shi",py:"emss",prefix:"e"},
    {id:511302,name:"顺庆区",pid:"511300",type:"district",pinyin:"shun qing qu",py:"sqq",prefix:"s"},
    {id:511303,name:"高坪区",pid:"511300",type:"district",pinyin:"gao ping qu",py:"gpq",prefix:"g"},
    {id:511304,name:"嘉陵区",pid:"511300",type:"district",pinyin:"jia ling qu",py:"jlq",prefix:"j"},
    {id:511321,name:"南部县",pid:"511300",type:"district",pinyin:"nan bu xian",py:"nbx",prefix:"n"},
    {id:511322,name:"营山县",pid:"511300",type:"district",pinyin:"ying shan xian",py:"ysx",prefix:"y"},
    {id:511323,name:"蓬安县",pid:"511300",type:"district",pinyin:"peng an xian",py:"pax",prefix:"p"},
    {id:511324,name:"仪陇县",pid:"511300",type:"district",pinyin:"yi long xian",py:"ylx",prefix:"y"},
    {id:511325,name:"西充县",pid:"511300",type:"district",pinyin:"xi chong xian",py:"xcx",prefix:"x"},
    {id:511381,name:"阆中市",pid:"511300",type:"district",pinyin:"lang zhong shi",py:"lzs",prefix:"l"},
    {id:511402,name:"东坡区",pid:"511400",type:"district",pinyin:"dong po qu",py:"dpq",prefix:"d"},
    {id:511421,name:"仁寿县",pid:"511400",type:"district",pinyin:"ren shou xian",py:"rsx",prefix:"r"},
    {id:511422,name:"彭山县",pid:"511400",type:"district",pinyin:"peng shan xian",py:"psx",prefix:"p"},
    {id:511423,name:"洪雅县",pid:"511400",type:"district",pinyin:"hong ya xian",py:"hyx",prefix:"h"},
    {id:511424,name:"丹棱县",pid:"511400",type:"district",pinyin:"dan leng xian",py:"dlx",prefix:"d"},
    {id:511425,name:"青神县",pid:"511400",type:"district",pinyin:"qing shen xian",py:"qsx",prefix:"q"},
    {id:511502,name:"翠屏区",pid:"511500",type:"district",pinyin:"cui ping qu",py:"cpq",prefix:"c"},
    {id:511503,name:"南溪区",pid:"511500",type:"district",pinyin:"nan xi qu",py:"nxq",prefix:"n"},
    {id:511521,name:"宜宾县",pid:"511500",type:"district",pinyin:"yi bin xian",py:"ybx",prefix:"y"},
    {id:511523,name:"江安县",pid:"511500",type:"district",pinyin:"jiang an xian",py:"jax",prefix:"j"},
    {id:511524,name:"长宁县",pid:"511500",type:"district",pinyin:"chang ning xian",py:"cnx",prefix:"c"},
    {id:511525,name:"高县",pid:"511500",type:"district",pinyin:"gao xian",py:"gx",prefix:"g"},
    {id:511526,name:"珙县",pid:"511500",type:"district",pinyin:"gong xian",py:"gx",prefix:"g"},
    {id:511527,name:"筠连县",pid:"511500",type:"district",pinyin:"yun lian xian",py:"ylx",prefix:"y"},
    {id:511528,name:"兴文县",pid:"511500",type:"district",pinyin:"xing wen xian",py:"xwx",prefix:"x"},
    {id:511529,name:"屏山县",pid:"511500",type:"district",pinyin:"ping shan xian",py:"psx",prefix:"p"},
    {id:511602,name:"广安区",pid:"511600",type:"district",pinyin:"guang an qu",py:"gaq",prefix:"g"},
    {id:511603,name:"前锋区",pid:"511600",type:"district",pinyin:"qian feng qu",py:"qfq",prefix:"q"},
    {id:511621,name:"岳池县",pid:"511600",type:"district",pinyin:"yue chi xian",py:"ycx",prefix:"y"},
    {id:511622,name:"武胜县",pid:"511600",type:"district",pinyin:"wu sheng xian",py:"wsx",prefix:"w"},
    {id:511623,name:"邻水县",pid:"511600",type:"district",pinyin:"lin shui xian",py:"lsx",prefix:"l"},
    {id:511681,name:"华蓥市",pid:"511600",type:"district",pinyin:"hua ying shi",py:"hys",prefix:"h"},
    {id:511702,name:"通川区",pid:"511700",type:"district",pinyin:"tong chuan qu",py:"tcq",prefix:"t"},
    {id:511703,name:"达川区",pid:"511700",type:"district",pinyin:"da chuan qu",py:"dcq",prefix:"d"},
    {id:511722,name:"宣汉县",pid:"511700",type:"district",pinyin:"xuan han xian",py:"xhx",prefix:"x"},
    {id:511723,name:"开江县",pid:"511700",type:"district",pinyin:"kai jiang xian",py:"kjx",prefix:"k"},
    {id:511724,name:"大竹县",pid:"511700",type:"district",pinyin:"da zhu xian",py:"dzx",prefix:"d"},
    {id:511725,name:"渠县",pid:"511700",type:"district",pinyin:"qu xian",py:"qx",prefix:"q"},
    {id:511781,name:"万源市",pid:"511700",type:"district",pinyin:"wan yuan shi",py:"wys",prefix:"w"},
    {id:511802,name:"雨城区",pid:"511800",type:"district",pinyin:"yu cheng qu",py:"ycq",prefix:"y"},
    {id:511803,name:"名山区",pid:"511800",type:"district",pinyin:"ming shan qu",py:"msq",prefix:"m"},
    {id:511822,name:"荥经县",pid:"511800",type:"district",pinyin:"ying jing xian",py:"yjx",prefix:"y"},
    {id:511823,name:"汉源县",pid:"511800",type:"district",pinyin:"han yuan xian",py:"hyx",prefix:"h"},
    {id:511824,name:"石棉县",pid:"511800",type:"district",pinyin:"shi mian xian",py:"smx",prefix:"s"},
    {id:511825,name:"天全县",pid:"511800",type:"district",pinyin:"tian quan xian",py:"tqx",prefix:"t"},
    {id:511826,name:"芦山县",pid:"511800",type:"district",pinyin:"lu shan xian",py:"lsx",prefix:"l"},
    {id:511827,name:"宝兴县",pid:"511800",type:"district",pinyin:"bao xing xian",py:"bxx",prefix:"b"},
    {id:511902,name:"巴州区",pid:"511900",type:"district",pinyin:"ba zhou qu",py:"bzq",prefix:"b"},
    {id:511903,name:"恩阳区",pid:"511900",type:"district",pinyin:"en yang qu",py:"eyq",prefix:"e"},
    {id:511921,name:"通江县",pid:"511900",type:"district",pinyin:"tong jiang xian",py:"tjx",prefix:"t"},
    {id:511922,name:"南江县",pid:"511900",type:"district",pinyin:"nan jiang xian",py:"njx",prefix:"n"},
    {id:511923,name:"平昌县",pid:"511900",type:"district",pinyin:"ping chang xian",py:"pcx",prefix:"p"},
    {id:512002,name:"雁江区",pid:"512000",type:"district",pinyin:"yan jiang qu",py:"yjq",prefix:"y"},
    {id:512021,name:"安岳县",pid:"512000",type:"district",pinyin:"an yue xian",py:"ayx",prefix:"a"},
    {id:512022,name:"乐至县",pid:"512000",type:"district",pinyin:"le zhi xian",py:"lzx",prefix:"l"},
    {id:512081,name:"简阳市",pid:"512000",type:"district",pinyin:"jian yang shi",py:"jys",prefix:"j"},
    {id:513221,name:"汶川县",pid:"513200",type:"district",pinyin:"wen chuan xian",py:"wcx",prefix:"w"},
    {id:513222,name:"理县",pid:"513200",type:"district",pinyin:"li xian",py:"lx",prefix:"l"},
    {id:513223,name:"茂县",pid:"513200",type:"district",pinyin:"mao xian",py:"mx",prefix:"m"},
    {id:513224,name:"松潘县",pid:"513200",type:"district",pinyin:"song pan xian",py:"spx",prefix:"s"},
    {id:513225,name:"九寨沟县",pid:"513200",type:"district",pinyin:"jiu zhai gou xian",py:"jzgx",prefix:"j"},
    {id:513226,name:"金川县",pid:"513200",type:"district",pinyin:"jin chuan xian",py:"jcx",prefix:"j"},
    {id:513227,name:"小金县",pid:"513200",type:"district",pinyin:"xiao jin xian",py:"xjx",prefix:"x"},
    {id:513228,name:"黑水县",pid:"513200",type:"district",pinyin:"hei shui xian",py:"hsx",prefix:"h"},
    {id:513229,name:"马尔康县",pid:"513200",type:"district",pinyin:"ma er kang xian",py:"mekx",prefix:"m"},
    {id:513230,name:"壤塘县",pid:"513200",type:"district",pinyin:"rang tang xian",py:"rtx",prefix:"r"},
    {id:513231,name:"阿坝县",pid:"513200",type:"district",pinyin:"a ba xian",py:"abx",prefix:"a"},
    {id:513232,name:"若尔盖县",pid:"513200",type:"district",pinyin:"ruo er gai xian",py:"regx",prefix:"r"},
    {id:513233,name:"红原县",pid:"513200",type:"district",pinyin:"hong yuan xian",py:"hyx",prefix:"h"},
    {id:513321,name:"康定县",pid:"513300",type:"district",pinyin:"kang ding xian",py:"kdx",prefix:"k"},
    {id:513322,name:"泸定县",pid:"513300",type:"district",pinyin:"lu ding xian",py:"ldx",prefix:"l"},
    {id:513323,name:"丹巴县",pid:"513300",type:"district",pinyin:"dan ba xian",py:"dbx",prefix:"d"},
    {id:513324,name:"九龙县",pid:"513300",type:"district",pinyin:"jiu long xian",py:"jlx",prefix:"j"},
    {id:513325,name:"雅江县",pid:"513300",type:"district",pinyin:"ya jiang xian",py:"yjx",prefix:"y"},
    {id:513326,name:"道孚县",pid:"513300",type:"district",pinyin:"dao fu xian",py:"dfx",prefix:"d"},
    {id:513327,name:"炉霍县",pid:"513300",type:"district",pinyin:"lu huo xian",py:"lhx",prefix:"l"},
    {id:513328,name:"甘孜县",pid:"513300",type:"district",pinyin:"gan zi xian",py:"gzx",prefix:"g"},
    {id:513329,name:"新龙县",pid:"513300",type:"district",pinyin:"xin long xian",py:"xlx",prefix:"x"},
    {id:513330,name:"德格县",pid:"513300",type:"district",pinyin:"de ge xian",py:"dgx",prefix:"d"},
    {id:513331,name:"白玉县",pid:"513300",type:"district",pinyin:"bai yu xian",py:"byx",prefix:"b"},
    {id:513332,name:"石渠县",pid:"513300",type:"district",pinyin:"shi qu xian",py:"sqx",prefix:"s"},
    {id:513333,name:"色达县",pid:"513300",type:"district",pinyin:"se da xian",py:"sdx",prefix:"s"},
    {id:513334,name:"理塘县",pid:"513300",type:"district",pinyin:"li tang xian",py:"ltx",prefix:"l"},
    {id:513335,name:"巴塘县",pid:"513300",type:"district",pinyin:"ba tang xian",py:"btx",prefix:"b"},
    {id:513336,name:"乡城县",pid:"513300",type:"district",pinyin:"xiang cheng xian",py:"xcx",prefix:"x"},
    {id:513337,name:"稻城县",pid:"513300",type:"district",pinyin:"dao cheng xian",py:"dcx",prefix:"d"},
    {id:513338,name:"得荣县",pid:"513300",type:"district",pinyin:"de rong xian",py:"drx",prefix:"d"},
    {id:513401,name:"西昌市",pid:"513400",type:"district",pinyin:"xi chang shi",py:"xcs",prefix:"x"},
    {id:513422,name:"木里藏族自治县",pid:"513400",type:"district",pinyin:"mu li zang zu zi zhi xian",py:"mlzzzzx",prefix:"m"},
    {id:513423,name:"盐源县",pid:"513400",type:"district",pinyin:"yan yuan xian",py:"yyx",prefix:"y"},
    {id:513424,name:"德昌县",pid:"513400",type:"district",pinyin:"de chang xian",py:"dcx",prefix:"d"},
    {id:513425,name:"会理县",pid:"513400",type:"district",pinyin:"hui li xian",py:"hlx",prefix:"h"},
    {id:513426,name:"会东县",pid:"513400",type:"district",pinyin:"hui dong xian",py:"hdx",prefix:"h"},
    {id:513427,name:"宁南县",pid:"513400",type:"district",pinyin:"ning nan xian",py:"nnx",prefix:"n"},
    {id:513428,name:"普格县",pid:"513400",type:"district",pinyin:"pu ge xian",py:"pgx",prefix:"p"},
    {id:513429,name:"布拖县",pid:"513400",type:"district",pinyin:"bu tuo xian",py:"btx",prefix:"b"},
    {id:513430,name:"金阳县",pid:"513400",type:"district",pinyin:"jin yang xian",py:"jyx",prefix:"j"},
    {id:513431,name:"昭觉县",pid:"513400",type:"district",pinyin:"zhao jue xian",py:"zjx",prefix:"z"},
    {id:513432,name:"喜德县",pid:"513400",type:"district",pinyin:"xi de xian",py:"xdx",prefix:"x"},
    {id:513433,name:"冕宁县",pid:"513400",type:"district",pinyin:"mian ning xian",py:"mnx",prefix:"m"},
    {id:513434,name:"越西县",pid:"513400",type:"district",pinyin:"yue xi xian",py:"yxx",prefix:"y"},
    {id:513435,name:"甘洛县",pid:"513400",type:"district",pinyin:"gan luo xian",py:"glx",prefix:"g"},
    {id:513436,name:"美姑县",pid:"513400",type:"district",pinyin:"mei gu xian",py:"mgx",prefix:"m"},
    {id:513437,name:"雷波县",pid:"513400",type:"district",pinyin:"lei bo xian",py:"lbx",prefix:"l"},
    {id:520102,name:"南明区",pid:"520100",type:"district",pinyin:"nan ming qu",py:"nmq",prefix:"n"},
    {id:520103,name:"云岩区",pid:"520100",type:"district",pinyin:"yun yan qu",py:"yyq",prefix:"y"},
    {id:520111,name:"花溪区",pid:"520100",type:"district",pinyin:"hua xi qu",py:"hxq",prefix:"h"},
    {id:520112,name:"乌当区",pid:"520100",type:"district",pinyin:"wu dang qu",py:"wdq",prefix:"w"},
    {id:520113,name:"白云区",pid:"520100",type:"district",pinyin:"bai yun qu",py:"byq",prefix:"b"},
    {id:520115,name:"观山湖区",pid:"520100",type:"district",pinyin:"guan shan hu qu",py:"gshq",prefix:"g"},
    {id:520121,name:"开阳县",pid:"520100",type:"district",pinyin:"kai yang xian",py:"kyx",prefix:"k"},
    {id:520122,name:"息烽县",pid:"520100",type:"district",pinyin:"xi feng xian",py:"xfx",prefix:"x"},
    {id:520123,name:"修文县",pid:"520100",type:"district",pinyin:"xiu wen xian",py:"xwx",prefix:"x"},
    {id:520181,name:"清镇市",pid:"520100",type:"district",pinyin:"qing zhen shi",py:"qzs",prefix:"q"},
    {id:520201,name:"钟山区",pid:"520200",type:"district",pinyin:"zhong shan qu",py:"zsq",prefix:"z"},
    {id:520203,name:"六枝特区",pid:"520200",type:"district",pinyin:"liu zhi te qu",py:"lztq",prefix:"l"},
    {id:520221,name:"水城县",pid:"520200",type:"district",pinyin:"shui cheng xian",py:"scx",prefix:"s"},
    {id:520222,name:"盘县",pid:"520200",type:"district",pinyin:"pan xian",py:"px",prefix:"p"},
    {id:520302,name:"红花岗区",pid:"520300",type:"district",pinyin:"hong hua gang qu",py:"hhgq",prefix:"h"},
    {id:520303,name:"汇川区",pid:"520300",type:"district",pinyin:"hui chuan qu",py:"hcq",prefix:"h"},
    {id:520321,name:"遵义县",pid:"520300",type:"district",pinyin:"zun yi xian",py:"zyx",prefix:"z"},
    {id:520322,name:"桐梓县",pid:"520300",type:"district",pinyin:"tong zi xian",py:"tzx",prefix:"t"},
    {id:520323,name:"绥阳县",pid:"520300",type:"district",pinyin:"sui yang xian",py:"syx",prefix:"s"},
    {id:520324,name:"正安县",pid:"520300",type:"district",pinyin:"zheng an xian",py:"zax",prefix:"z"},
    {id:520325,name:"道真仡佬族苗族自治县",pid:"520300",type:"district",pinyin:"dao zhen ge lao zu miao zu zi zhi xian",py:"dzglzmzzzx",prefix:"d"},
    {id:520326,name:"务川仡佬族苗族自治县",pid:"520300",type:"district",pinyin:"wu chuan ge lao zu miao zu zi zhi xian",py:"wcglzmzzzx",prefix:"w"},
    {id:520327,name:"凤冈县",pid:"520300",type:"district",pinyin:"feng gang xian",py:"fgx",prefix:"f"},
    {id:520328,name:"湄潭县",pid:"520300",type:"district",pinyin:"mei tan xian",py:"mtx",prefix:"m"},
    {id:520329,name:"余庆县",pid:"520300",type:"district",pinyin:"yu qing xian",py:"yqx",prefix:"y"},
    {id:520330,name:"习水县",pid:"520300",type:"district",pinyin:"xi shui xian",py:"xsx",prefix:"x"},
    {id:520381,name:"赤水市",pid:"520300",type:"district",pinyin:"chi shui shi",py:"css",prefix:"c"},
    {id:520382,name:"仁怀市",pid:"520300",type:"district",pinyin:"ren huai shi",py:"rhs",prefix:"r"},
    {id:520402,name:"西秀区",pid:"520400",type:"district",pinyin:"xi xiu qu",py:"xxq",prefix:"x"},
    {id:520421,name:"平坝县",pid:"520400",type:"district",pinyin:"ping ba xian",py:"pbx",prefix:"p"},
    {id:520422,name:"普定县",pid:"520400",type:"district",pinyin:"pu ding xian",py:"pdx",prefix:"p"},
    {id:520423,name:"镇宁布依族苗族自治县",pid:"520400",type:"district",pinyin:"zhen ning bu yi zu miao zu zi zhi xian",py:"znbyzmzzzx",prefix:"z"},
    {id:520424,name:"关岭布依族苗族自治县",pid:"520400",type:"district",pinyin:"guan ling bu yi zu miao zu zi zhi xian",py:"glbyzmzzzx",prefix:"g"},
    {id:520425,name:"紫云苗族布依族自治县",pid:"520400",type:"district",pinyin:"zi yun miao zu bu yi zu zi zhi xian",py:"zymzbyzzzx",prefix:"z"},
    {id:520502,name:"七星关区",pid:"520500",type:"district",pinyin:"qi xing guan qu",py:"qxgq",prefix:"q"},
    {id:520521,name:"大方县",pid:"520500",type:"district",pinyin:"da fang xian",py:"dfx",prefix:"d"},
    {id:520522,name:"黔西县",pid:"520500",type:"district",pinyin:"qian xi xian",py:"qxx",prefix:"q"},
    {id:520523,name:"金沙县",pid:"520500",type:"district",pinyin:"jin sha xian",py:"jsx",prefix:"j"},
    {id:520524,name:"织金县",pid:"520500",type:"district",pinyin:"zhi jin xian",py:"zjx",prefix:"z"},
    {id:520525,name:"纳雍县",pid:"520500",type:"district",pinyin:"na yong xian",py:"nyx",prefix:"n"},
    {id:520526,name:"威宁彝族回族苗族自治县",pid:"520500",type:"district",pinyin:"wei ning yi zu hui zu miao zu zi zhi xian",py:"wnyzhzmzzzx",prefix:"w"},
    {id:520527,name:"赫章县",pid:"520500",type:"district",pinyin:"he zhang xian",py:"hzx",prefix:"h"},
    {id:520602,name:"碧江区",pid:"520600",type:"district",pinyin:"bi jiang qu",py:"bjq",prefix:"b"},
    {id:520603,name:"万山区",pid:"520600",type:"district",pinyin:"wan shan qu",py:"wsq",prefix:"w"},
    {id:520621,name:"江口县",pid:"520600",type:"district",pinyin:"jiang kou xian",py:"jkx",prefix:"j"},
    {id:520622,name:"玉屏侗族自治县",pid:"520600",type:"district",pinyin:"yu ping dong zu zi zhi xian",py:"ypdzzzx",prefix:"y"},
    {id:520623,name:"石阡县",pid:"520600",type:"district",pinyin:"shi qian xian",py:"sqx",prefix:"s"},
    {id:520624,name:"思南县",pid:"520600",type:"district",pinyin:"si nan xian",py:"snx",prefix:"s"},
    {id:520625,name:"印江土家族苗族自治县",pid:"520600",type:"district",pinyin:"yin jiang tu jia zu miao zu zi zhi xian",py:"yjtjzmzzzx",prefix:"y"},
    {id:520626,name:"德江县",pid:"520600",type:"district",pinyin:"de jiang xian",py:"djx",prefix:"d"},
    {id:520627,name:"沿河土家族自治县",pid:"520600",type:"district",pinyin:"yan he tu jia zu zi zhi xian",py:"yhtjzzzx",prefix:"y"},
    {id:520628,name:"松桃苗族自治县",pid:"520600",type:"district",pinyin:"song tao miao zu zi zhi xian",py:"stmzzzx",prefix:"s"},
    {id:522301,name:"兴义市",pid:"522300",type:"district",pinyin:"xing yi shi",py:"xys",prefix:"x"},
    {id:522322,name:"兴仁县",pid:"522300",type:"district",pinyin:"xing ren xian",py:"xrx",prefix:"x"},
    {id:522323,name:"普安县",pid:"522300",type:"district",pinyin:"pu an xian",py:"pax",prefix:"p"},
    {id:522324,name:"晴隆县",pid:"522300",type:"district",pinyin:"qing long xian",py:"qlx",prefix:"q"},
    {id:522325,name:"贞丰县",pid:"522300",type:"district",pinyin:"zhen feng xian",py:"zfx",prefix:"z"},
    {id:522326,name:"望谟县",pid:"522300",type:"district",pinyin:"wang mo xian",py:"wmx",prefix:"w"},
    {id:522327,name:"册亨县",pid:"522300",type:"district",pinyin:"ce heng xian",py:"chx",prefix:"c"},
    {id:522328,name:"安龙县",pid:"522300",type:"district",pinyin:"an long xian",py:"alx",prefix:"a"},
    {id:522601,name:"凯里市",pid:"522600",type:"district",pinyin:"kai li shi",py:"kls",prefix:"k"},
    {id:522622,name:"黄平县",pid:"522600",type:"district",pinyin:"huang ping xian",py:"hpx",prefix:"h"},
    {id:522623,name:"施秉县",pid:"522600",type:"district",pinyin:"shi bing xian",py:"sbx",prefix:"s"},
    {id:522624,name:"三穗县",pid:"522600",type:"district",pinyin:"san sui xian",py:"ssx",prefix:"s"},
    {id:522625,name:"镇远县",pid:"522600",type:"district",pinyin:"zhen yuan xian",py:"zyx",prefix:"z"},
    {id:522626,name:"岑巩县",pid:"522600",type:"district",pinyin:"cen gong xian",py:"cgx",prefix:"c"},
    {id:522627,name:"天柱县",pid:"522600",type:"district",pinyin:"tian zhu xian",py:"tzx",prefix:"t"},
    {id:522628,name:"锦屏县",pid:"522600",type:"district",pinyin:"jin ping xian",py:"jpx",prefix:"j"},
    {id:522629,name:"剑河县",pid:"522600",type:"district",pinyin:"jian he xian",py:"jhx",prefix:"j"},
    {id:522630,name:"台江县",pid:"522600",type:"district",pinyin:"tai jiang xian",py:"tjx",prefix:"t"},
    {id:522631,name:"黎平县",pid:"522600",type:"district",pinyin:"li ping xian",py:"lpx",prefix:"l"},
    {id:522632,name:"榕江县",pid:"522600",type:"district",pinyin:"rong jiang xian",py:"rjx",prefix:"r"},
    {id:522633,name:"从江县",pid:"522600",type:"district",pinyin:"cong jiang xian",py:"cjx",prefix:"c"},
    {id:522634,name:"雷山县",pid:"522600",type:"district",pinyin:"lei shan xian",py:"lsx",prefix:"l"},
    {id:522635,name:"麻江县",pid:"522600",type:"district",pinyin:"ma jiang xian",py:"mjx",prefix:"m"},
    {id:522636,name:"丹寨县",pid:"522600",type:"district",pinyin:"dan zhai xian",py:"dzx",prefix:"d"},
    {id:522701,name:"都匀市",pid:"522700",type:"district",pinyin:"dou yun shi",py:"dys",prefix:"d"},
    {id:522702,name:"福泉市",pid:"522700",type:"district",pinyin:"fu quan shi",py:"fqs",prefix:"f"},
    {id:522722,name:"荔波县",pid:"522700",type:"district",pinyin:"li bo xian",py:"lbx",prefix:"l"},
    {id:522723,name:"贵定县",pid:"522700",type:"district",pinyin:"gui ding xian",py:"gdx",prefix:"g"},
    {id:522725,name:"瓮安县",pid:"522700",type:"district",pinyin:"weng an xian",py:"wax",prefix:"w"},
    {id:522726,name:"独山县",pid:"522700",type:"district",pinyin:"du shan xian",py:"dsx",prefix:"d"},
    {id:522727,name:"平塘县",pid:"522700",type:"district",pinyin:"ping tang xian",py:"ptx",prefix:"p"},
    {id:522728,name:"罗甸县",pid:"522700",type:"district",pinyin:"luo dian xian",py:"ldx",prefix:"l"},
    {id:522729,name:"长顺县",pid:"522700",type:"district",pinyin:"chang shun xian",py:"csx",prefix:"c"},
    {id:522730,name:"龙里县",pid:"522700",type:"district",pinyin:"long li xian",py:"llx",prefix:"l"},
    {id:522731,name:"惠水县",pid:"522700",type:"district",pinyin:"hui shui xian",py:"hsx",prefix:"h"},
    {id:522732,name:"三都水族自治县",pid:"522700",type:"district",pinyin:"san dou shui zu zi zhi xian",py:"sdszzzx",prefix:"s"},
    {id:530102,name:"五华区",pid:"530100",type:"district",pinyin:"wu hua qu",py:"whq",prefix:"w"},
    {id:530103,name:"盘龙区",pid:"530100",type:"district",pinyin:"pan long qu",py:"plq",prefix:"p"},
    {id:530111,name:"官渡区",pid:"530100",type:"district",pinyin:"guan du qu",py:"gdq",prefix:"g"},
    {id:530112,name:"西山区",pid:"530100",type:"district",pinyin:"xi shan qu",py:"xsq",prefix:"x"},
    {id:530113,name:"东川区",pid:"530100",type:"district",pinyin:"dong chuan qu",py:"dcq",prefix:"d"},
    {id:530114,name:"呈贡区",pid:"530100",type:"district",pinyin:"cheng gong qu",py:"cgq",prefix:"c"},
    {id:530122,name:"晋宁县",pid:"530100",type:"district",pinyin:"jin ning xian",py:"jnx",prefix:"j"},
    {id:530124,name:"富民县",pid:"530100",type:"district",pinyin:"fu min xian",py:"fmx",prefix:"f"},
    {id:530125,name:"宜良县",pid:"530100",type:"district",pinyin:"yi liang xian",py:"ylx",prefix:"y"},
    {id:530126,name:"石林彝族自治县",pid:"530100",type:"district",pinyin:"shi lin yi zu zi zhi xian",py:"slyzzzx",prefix:"s"},
    {id:530127,name:"嵩明县",pid:"530100",type:"district",pinyin:"song ming xian",py:"smx",prefix:"s"},
    {id:530128,name:"禄劝彝族苗族自治县",pid:"530100",type:"district",pinyin:"lu quan yi zu miao zu zi zhi xian",py:"lqyzmzzzx",prefix:"l"},
    {id:530129,name:"寻甸回族彝族自治县",pid:"530100",type:"district",pinyin:"xun dian hui zu yi zu zi zhi xian",py:"xdhzyzzzx",prefix:"x"},
    {id:530181,name:"安宁市",pid:"530100",type:"district",pinyin:"an ning shi",py:"ans",prefix:"a"},
    {id:530302,name:"麒麟区",pid:"530300",type:"district",pinyin:"qi lin qu",py:"qlq",prefix:"q"},
    {id:530321,name:"马龙县",pid:"530300",type:"district",pinyin:"ma long xian",py:"mlx",prefix:"m"},
    {id:530322,name:"陆良县",pid:"530300",type:"district",pinyin:"lu liang xian",py:"llx",prefix:"l"},
    {id:530323,name:"师宗县",pid:"530300",type:"district",pinyin:"shi zong xian",py:"szx",prefix:"s"},
    {id:530324,name:"罗平县",pid:"530300",type:"district",pinyin:"luo ping xian",py:"lpx",prefix:"l"},
    {id:530325,name:"富源县",pid:"530300",type:"district",pinyin:"fu yuan xian",py:"fyx",prefix:"f"},
    {id:530326,name:"会泽县",pid:"530300",type:"district",pinyin:"hui ze xian",py:"hzx",prefix:"h"},
    {id:530328,name:"沾益县",pid:"530300",type:"district",pinyin:"zhan yi xian",py:"zyx",prefix:"z"},
    {id:530381,name:"宣威市",pid:"530300",type:"district",pinyin:"xuan wei shi",py:"xws",prefix:"x"},
    {id:530402,name:"红塔区",pid:"530400",type:"district",pinyin:"hong ta qu",py:"htq",prefix:"h"},
    {id:530421,name:"江川县",pid:"530400",type:"district",pinyin:"jiang chuan xian",py:"jcx",prefix:"j"},
    {id:530422,name:"澄江县",pid:"530400",type:"district",pinyin:"cheng jiang xian",py:"cjx",prefix:"c"},
    {id:530423,name:"通海县",pid:"530400",type:"district",pinyin:"tong hai xian",py:"thx",prefix:"t"},
    {id:530424,name:"华宁县",pid:"530400",type:"district",pinyin:"hua ning xian",py:"hnx",prefix:"h"},
    {id:530425,name:"易门县",pid:"530400",type:"district",pinyin:"yi men xian",py:"ymx",prefix:"y"},
    {id:530426,name:"峨山彝族自治县",pid:"530400",type:"district",pinyin:"e shan yi zu zi zhi xian",py:"esyzzzx",prefix:"e"},
    {id:530427,name:"新平彝族傣族自治县",pid:"530400",type:"district",pinyin:"xin ping yi zu dai zu zi zhi xian",py:"xpyzdzzzx",prefix:"x"},
    {id:530428,name:"元江哈尼族彝族傣族自治县",pid:"530400",type:"district",pinyin:"yuan jiang ha ni zu yi zu dai zu zi zhi xian",py:"yjhnzyzdzzzx",prefix:"y"},
    {id:530502,name:"隆阳区",pid:"530500",type:"district",pinyin:"long yang qu",py:"lyq",prefix:"l"},
    {id:530521,name:"施甸县",pid:"530500",type:"district",pinyin:"shi dian xian",py:"sdx",prefix:"s"},
    {id:530522,name:"腾冲县",pid:"530500",type:"district",pinyin:"teng chong xian",py:"tcx",prefix:"t"},
    {id:530523,name:"龙陵县",pid:"530500",type:"district",pinyin:"long ling xian",py:"llx",prefix:"l"},
    {id:530524,name:"昌宁县",pid:"530500",type:"district",pinyin:"chang ning xian",py:"cnx",prefix:"c"},
    {id:530602,name:"昭阳区",pid:"530600",type:"district",pinyin:"zhao yang qu",py:"zyq",prefix:"z"},
    {id:530621,name:"鲁甸县",pid:"530600",type:"district",pinyin:"lu dian xian",py:"ldx",prefix:"l"},
    {id:530622,name:"巧家县",pid:"530600",type:"district",pinyin:"qiao jia xian",py:"qjx",prefix:"q"},
    {id:530623,name:"盐津县",pid:"530600",type:"district",pinyin:"yan jin xian",py:"yjx",prefix:"y"},
    {id:530624,name:"大关县",pid:"530600",type:"district",pinyin:"da guan xian",py:"dgx",prefix:"d"},
    {id:530625,name:"永善县",pid:"530600",type:"district",pinyin:"yong shan xian",py:"ysx",prefix:"y"},
    {id:530626,name:"绥江县",pid:"530600",type:"district",pinyin:"sui jiang xian",py:"sjx",prefix:"s"},
    {id:530627,name:"镇雄县",pid:"530600",type:"district",pinyin:"zhen xiong xian",py:"zxx",prefix:"z"},
    {id:530628,name:"彝良县",pid:"530600",type:"district",pinyin:"yi liang xian",py:"ylx",prefix:"y"},
    {id:530629,name:"威信县",pid:"530600",type:"district",pinyin:"wei xin xian",py:"wxx",prefix:"w"},
    {id:530630,name:"水富县",pid:"530600",type:"district",pinyin:"shui fu xian",py:"sfx",prefix:"s"},
    {id:530702,name:"古城区",pid:"530700",type:"district",pinyin:"gu cheng qu",py:"gcq",prefix:"g"},
    {id:530721,name:"玉龙纳西族自治县",pid:"530700",type:"district",pinyin:"yu long na xi zu zi zhi xian",py:"ylnxzzzx",prefix:"y"},
    {id:530722,name:"永胜县",pid:"530700",type:"district",pinyin:"yong sheng xian",py:"ysx",prefix:"y"},
    {id:530723,name:"华坪县",pid:"530700",type:"district",pinyin:"hua ping xian",py:"hpx",prefix:"h"},
    {id:530724,name:"宁蒗彝族自治县",pid:"530700",type:"district",pinyin:"ning lang yi zu zi zhi xian",py:"nlyzzzx",prefix:"n"},
    {id:530802,name:"思茅区",pid:"530800",type:"district",pinyin:"si mao qu",py:"smq",prefix:"s"},
    {id:530821,name:"宁洱哈尼族彝族自治县",pid:"530800",type:"district",pinyin:"ning er ha ni zu yi zu zi zhi xian",py:"nehnzyzzzx",prefix:"n"},
    {id:530822,name:"墨江哈尼族自治县",pid:"530800",type:"district",pinyin:"mo jiang ha ni zu zi zhi xian",py:"mjhnzzzx",prefix:"m"},
    {id:530823,name:"景东彝族自治县",pid:"530800",type:"district",pinyin:"jing dong yi zu zi zhi xian",py:"jdyzzzx",prefix:"j"},
    {id:530824,name:"景谷傣族彝族自治县",pid:"530800",type:"district",pinyin:"jing gu dai zu yi zu zi zhi xian",py:"jgdzyzzzx",prefix:"j"},
    {id:530825,name:"镇沅彝族哈尼族拉祜族自治县",pid:"530800",type:"district",pinyin:"zhen yuan yi zu ha ni zu la hu zu zi zhi xian",py:"zyyzhnzlhzzzx",prefix:"z"},
    {id:530826,name:"江城哈尼族彝族自治县",pid:"530800",type:"district",pinyin:"jiang cheng ha ni zu yi zu zi zhi xian",py:"jchnzyzzzx",prefix:"j"},
    {id:530827,name:"孟连傣族拉祜族佤族自治县",pid:"530800",type:"district",pinyin:"meng lian dai zu la hu zu wa zu zi zhi xian",py:"mldzlhzwzzzx",prefix:"m"},
    {id:530828,name:"澜沧拉祜族自治县",pid:"530800",type:"district",pinyin:"lan cang la hu zu zi zhi xian",py:"lclhzzzx",prefix:"l"},
    {id:530829,name:"西盟佤族自治县",pid:"530800",type:"district",pinyin:"xi meng wa zu zi zhi xian",py:"xmwzzzx",prefix:"x"},
    {id:530902,name:"临翔区",pid:"530900",type:"district",pinyin:"lin xiang qu",py:"lxq",prefix:"l"},
    {id:530921,name:"凤庆县",pid:"530900",type:"district",pinyin:"feng qing xian",py:"fqx",prefix:"f"},
    {id:530922,name:"云县",pid:"530900",type:"district",pinyin:"yun xian",py:"yx",prefix:"y"},
    {id:530923,name:"永德县",pid:"530900",type:"district",pinyin:"yong de xian",py:"ydx",prefix:"y"},
    {id:530924,name:"镇康县",pid:"530900",type:"district",pinyin:"zhen kang xian",py:"zkx",prefix:"z"},
    {id:530925,name:"双江拉祜族佤族布朗族傣族自治县",pid:"530900",type:"district",pinyin:"shuang jiang la hu zu wa zu bu lang zu dai zu zi zhi xian",py:"sjlhzwzblzdzzzx",prefix:"s"},
    {id:530926,name:"耿马傣族佤族自治县",pid:"530900",type:"district",pinyin:"geng ma dai zu wa zu zi zhi xian",py:"gmdzwzzzx",prefix:"g"},
    {id:530927,name:"沧源佤族自治县",pid:"530900",type:"district",pinyin:"cang yuan wa zu zi zhi xian",py:"cywzzzx",prefix:"c"},
    {id:532301,name:"楚雄市",pid:"532300",type:"district",pinyin:"chu xiong shi",py:"cxs",prefix:"c"},
    {id:532322,name:"双柏县",pid:"532300",type:"district",pinyin:"shuang bo xian",py:"sbx",prefix:"s"},
    {id:532323,name:"牟定县",pid:"532300",type:"district",pinyin:"mou ding xian",py:"mdx",prefix:"m"},
    {id:532324,name:"南华县",pid:"532300",type:"district",pinyin:"nan hua xian",py:"nhx",prefix:"n"},
    {id:532325,name:"姚安县",pid:"532300",type:"district",pinyin:"yao an xian",py:"yax",prefix:"y"},
    {id:532326,name:"大姚县",pid:"532300",type:"district",pinyin:"da yao xian",py:"dyx",prefix:"d"},
    {id:532327,name:"永仁县",pid:"532300",type:"district",pinyin:"yong ren xian",py:"yrx",prefix:"y"},
    {id:532328,name:"元谋县",pid:"532300",type:"district",pinyin:"yuan mou xian",py:"ymx",prefix:"y"},
    {id:532329,name:"武定县",pid:"532300",type:"district",pinyin:"wu ding xian",py:"wdx",prefix:"w"},
    {id:532331,name:"禄丰县",pid:"532300",type:"district",pinyin:"lu feng xian",py:"lfx",prefix:"l"},
    {id:532501,name:"个旧市",pid:"532500",type:"district",pinyin:"ge jiu shi",py:"gjs",prefix:"g"},
    {id:532502,name:"开远市",pid:"532500",type:"district",pinyin:"kai yuan shi",py:"kys",prefix:"k"},
    {id:532503,name:"蒙自市",pid:"532500",type:"district",pinyin:"meng zi shi",py:"mzs",prefix:"m"},
    {id:532504,name:"弥勒市",pid:"532500",type:"district",pinyin:"mi le shi",py:"mls",prefix:"m"},
    {id:532523,name:"屏边苗族自治县",pid:"532500",type:"district",pinyin:"ping bian miao zu zi zhi xian",py:"pbmzzzx",prefix:"p"},
    {id:532524,name:"建水县",pid:"532500",type:"district",pinyin:"jian shui xian",py:"jsx",prefix:"j"},
    {id:532525,name:"石屏县",pid:"532500",type:"district",pinyin:"shi ping xian",py:"spx",prefix:"s"},
    {id:532527,name:"泸西县",pid:"532500",type:"district",pinyin:"lu xi xian",py:"lxx",prefix:"l"},
    {id:532528,name:"元阳县",pid:"532500",type:"district",pinyin:"yuan yang xian",py:"yyx",prefix:"y"},
    {id:532529,name:"红河县",pid:"532500",type:"district",pinyin:"hong he xian",py:"hhx",prefix:"h"},
    {id:532530,name:"金平苗族瑶族傣族自治县",pid:"532500",type:"district",pinyin:"jin ping miao zu yao zu dai zu zi zhi xian",py:"jpmzyzdzzzx",prefix:"j"},
    {id:532531,name:"绿春县",pid:"532500",type:"district",pinyin:"lv chun xian",py:"lcx",prefix:"l"},
    {id:532532,name:"河口瑶族自治县",pid:"532500",type:"district",pinyin:"he kou yao zu zi zhi xian",py:"hkyzzzx",prefix:"h"},
    {id:532601,name:"文山市",pid:"532600",type:"district",pinyin:"wen shan shi",py:"wss",prefix:"w"},
    {id:532622,name:"砚山县",pid:"532600",type:"district",pinyin:"yan shan xian",py:"ysx",prefix:"y"},
    {id:532623,name:"西畴县",pid:"532600",type:"district",pinyin:"xi chou xian",py:"xcx",prefix:"x"},
    {id:532624,name:"麻栗坡县",pid:"532600",type:"district",pinyin:"ma li po xian",py:"mlpx",prefix:"m"},
    {id:532625,name:"马关县",pid:"532600",type:"district",pinyin:"ma guan xian",py:"mgx",prefix:"m"},
    {id:532626,name:"丘北县",pid:"532600",type:"district",pinyin:"qiu bei xian",py:"qbx",prefix:"q"},
    {id:532627,name:"广南县",pid:"532600",type:"district",pinyin:"guang nan xian",py:"gnx",prefix:"g"},
    {id:532628,name:"富宁县",pid:"532600",type:"district",pinyin:"fu ning xian",py:"fnx",prefix:"f"},
    {id:532801,name:"景洪市",pid:"532800",type:"district",pinyin:"jing hong shi",py:"jhs",prefix:"j"},
    {id:532822,name:"勐海县",pid:"532800",type:"district",pinyin:"meng hai xian",py:"mhx",prefix:"m"},
    {id:532823,name:"勐腊县",pid:"532800",type:"district",pinyin:"meng la xian",py:"mlx",prefix:"m"},
    {id:532901,name:"大理市",pid:"532900",type:"district",pinyin:"da li shi",py:"dls",prefix:"d"},
    {id:532922,name:"漾濞彝族自治县",pid:"532900",type:"district",pinyin:"yang bi yi zu zi zhi xian",py:"ybyzzzx",prefix:"y"},
    {id:532923,name:"祥云县",pid:"532900",type:"district",pinyin:"xiang yun xian",py:"xyx",prefix:"x"},
    {id:532924,name:"宾川县",pid:"532900",type:"district",pinyin:"bin chuan xian",py:"bcx",prefix:"b"},
    {id:532925,name:"弥渡县",pid:"532900",type:"district",pinyin:"mi du xian",py:"mdx",prefix:"m"},
    {id:532926,name:"南涧彝族自治县",pid:"532900",type:"district",pinyin:"nan jian yi zu zi zhi xian",py:"njyzzzx",prefix:"n"},
    {id:532927,name:"巍山彝族回族自治县",pid:"532900",type:"district",pinyin:"wei shan yi zu hui zu zi zhi xian",py:"wsyzhzzzx",prefix:"w"},
    {id:532928,name:"永平县",pid:"532900",type:"district",pinyin:"yong ping xian",py:"ypx",prefix:"y"},
    {id:532929,name:"云龙县",pid:"532900",type:"district",pinyin:"yun long xian",py:"ylx",prefix:"y"},
    {id:532930,name:"洱源县",pid:"532900",type:"district",pinyin:"er yuan xian",py:"eyx",prefix:"e"},
    {id:532931,name:"剑川县",pid:"532900",type:"district",pinyin:"jian chuan xian",py:"jcx",prefix:"j"},
    {id:532932,name:"鹤庆县",pid:"532900",type:"district",pinyin:"he qing xian",py:"hqx",prefix:"h"},
    {id:533102,name:"瑞丽市",pid:"533100",type:"district",pinyin:"rui li shi",py:"rls",prefix:"r"},
    {id:533103,name:"芒市",pid:"533100",type:"district",pinyin:"mang shi",py:"ms",prefix:"m"},
    {id:533122,name:"梁河县",pid:"533100",type:"district",pinyin:"liang he xian",py:"lhx",prefix:"l"},
    {id:533123,name:"盈江县",pid:"533100",type:"district",pinyin:"ying jiang xian",py:"yjx",prefix:"y"},
    {id:533124,name:"陇川县",pid:"533100",type:"district",pinyin:"long chuan xian",py:"lcx",prefix:"l"},
    {id:533321,name:"泸水县",pid:"533300",type:"district",pinyin:"lu shui xian",py:"lsx",prefix:"l"},
    {id:533323,name:"福贡县",pid:"533300",type:"district",pinyin:"fu gong xian",py:"fgx",prefix:"f"},
    {id:533324,name:"贡山独龙族怒族自治县",pid:"533300",type:"district",pinyin:"gong shan du long zu nu zu zi zhi xian",py:"gsdlznzzzx",prefix:"g"},
    {id:533325,name:"兰坪白族普米族自治县",pid:"533300",type:"district",pinyin:"lan ping bai zu pu mi zu zi zhi xian",py:"lpbzpmzzzx",prefix:"l"},
    {id:533421,name:"香格里拉县",pid:"533400",type:"district",pinyin:"xiang ge li la xian",py:"xgllx",prefix:"x"},
    {id:533422,name:"德钦县",pid:"533400",type:"district",pinyin:"de qin xian",py:"dqx",prefix:"d"},
    {id:533423,name:"维西傈僳族自治县",pid:"533400",type:"district",pinyin:"wei xi li su zu zi zhi xian",py:"wxlszzzx",prefix:"w"},
    {id:540102,name:"城关区",pid:"540100",type:"district",pinyin:"cheng guan qu",py:"cgq",prefix:"c"},
    {id:540121,name:"林周县",pid:"540100",type:"district",pinyin:"lin zhou xian",py:"lzx",prefix:"l"},
    {id:540122,name:"当雄县",pid:"540100",type:"district",pinyin:"dang xiong xian",py:"dxx",prefix:"d"},
    {id:540123,name:"尼木县",pid:"540100",type:"district",pinyin:"ni mu xian",py:"nmx",prefix:"n"},
    {id:540124,name:"曲水县",pid:"540100",type:"district",pinyin:"qu shui xian",py:"qsx",prefix:"q"},
    {id:540125,name:"堆龙德庆县",pid:"540100",type:"district",pinyin:"dui long de qing xian",py:"dldqx",prefix:"d"},
    {id:540126,name:"达孜县",pid:"540100",type:"district",pinyin:"da zi xian",py:"dzx",prefix:"d"},
    {id:540127,name:"墨竹工卡县",pid:"540100",type:"district",pinyin:"mo zhu gong ka xian",py:"mzgkx",prefix:"m"},
    {id:542121,name:"昌都县",pid:"542100",type:"district",pinyin:"chang dou xian",py:"cdx",prefix:"c"},
    {id:542122,name:"江达县",pid:"542100",type:"district",pinyin:"jiang da xian",py:"jdx",prefix:"j"},
    {id:542123,name:"贡觉县",pid:"542100",type:"district",pinyin:"gong jue xian",py:"gjx",prefix:"g"},
    {id:542124,name:"类乌齐县",pid:"542100",type:"district",pinyin:"lei wu qi xian",py:"lwqx",prefix:"l"},
    {id:542125,name:"丁青县",pid:"542100",type:"district",pinyin:"ding qing xian",py:"dqx",prefix:"d"},
    {id:542126,name:"察雅县",pid:"542100",type:"district",pinyin:"cha ya xian",py:"cyx",prefix:"c"},
    {id:542127,name:"八宿县",pid:"542100",type:"district",pinyin:"ba su xian",py:"bsx",prefix:"b"},
    {id:542128,name:"左贡县",pid:"542100",type:"district",pinyin:"zuo gong xian",py:"zgx",prefix:"z"},
    {id:542129,name:"芒康县",pid:"542100",type:"district",pinyin:"mang kang xian",py:"mkx",prefix:"m"},
    {id:542132,name:"洛隆县",pid:"542100",type:"district",pinyin:"luo long xian",py:"llx",prefix:"l"},
    {id:542133,name:"边坝县",pid:"542100",type:"district",pinyin:"bian ba xian",py:"bbx",prefix:"b"},
    {id:542221,name:"乃东县",pid:"542200",type:"district",pinyin:"nai dong xian",py:"ndx",prefix:"n"},
    {id:542222,name:"扎囊县",pid:"542200",type:"district",pinyin:"zha nang xian",py:"znx",prefix:"z"},
    {id:542223,name:"贡嘎县",pid:"542200",type:"district",pinyin:"gong ga xian",py:"ggx",prefix:"g"},
    {id:542224,name:"桑日县",pid:"542200",type:"district",pinyin:"sang ri xian",py:"srx",prefix:"s"},
    {id:542225,name:"琼结县",pid:"542200",type:"district",pinyin:"qiong jie xian",py:"qjx",prefix:"q"},
    {id:542226,name:"曲松县",pid:"542200",type:"district",pinyin:"qu song xian",py:"qsx",prefix:"q"},
    {id:542227,name:"措美县",pid:"542200",type:"district",pinyin:"cuo mei xian",py:"cmx",prefix:"c"},
    {id:542228,name:"洛扎县",pid:"542200",type:"district",pinyin:"luo zha xian",py:"lzx",prefix:"l"},
    {id:542229,name:"加查县",pid:"542200",type:"district",pinyin:"jia cha xian",py:"jcx",prefix:"j"},
    {id:542231,name:"隆子县",pid:"542200",type:"district",pinyin:"long zi xian",py:"lzx",prefix:"l"},
    {id:542232,name:"错那县",pid:"542200",type:"district",pinyin:"cuo nei xian",py:"cnx",prefix:"c"},
    {id:542233,name:"浪卡子县",pid:"542200",type:"district",pinyin:"lang ka zi xian",py:"lkzx",prefix:"l"},
    {id:542301,name:"日喀则市",pid:"542300",type:"district",pinyin:"ri ka ze shi",py:"rkzs",prefix:"r"},
    {id:542322,name:"南木林县",pid:"542300",type:"district",pinyin:"nan mu lin xian",py:"nmlx",prefix:"n"},
    {id:542323,name:"江孜县",pid:"542300",type:"district",pinyin:"jiang zi xian",py:"jzx",prefix:"j"},
    {id:542324,name:"定日县",pid:"542300",type:"district",pinyin:"ding ri xian",py:"drx",prefix:"d"},
    {id:542325,name:"萨迦县",pid:"542300",type:"district",pinyin:"sa jia xian",py:"sjx",prefix:"s"},
    {id:542326,name:"拉孜县",pid:"542300",type:"district",pinyin:"la zi xian",py:"lzx",prefix:"l"},
    {id:542327,name:"昂仁县",pid:"542300",type:"district",pinyin:"ang ren xian",py:"arx",prefix:"a"},
    {id:542328,name:"谢通门县",pid:"542300",type:"district",pinyin:"xie tong men xian",py:"xtmx",prefix:"x"},
    {id:542329,name:"白朗县",pid:"542300",type:"district",pinyin:"bai lang xian",py:"blx",prefix:"b"},
    {id:542330,name:"仁布县",pid:"542300",type:"district",pinyin:"ren bu xian",py:"rbx",prefix:"r"},
    {id:542331,name:"康马县",pid:"542300",type:"district",pinyin:"kang ma xian",py:"kmx",prefix:"k"},
    {id:542332,name:"定结县",pid:"542300",type:"district",pinyin:"ding jie xian",py:"djx",prefix:"d"},
    {id:542333,name:"仲巴县",pid:"542300",type:"district",pinyin:"zhong ba xian",py:"zbx",prefix:"z"},
    {id:542334,name:"亚东县",pid:"542300",type:"district",pinyin:"ya dong xian",py:"ydx",prefix:"y"},
    {id:542335,name:"吉隆县",pid:"542300",type:"district",pinyin:"ji long xian",py:"jlx",prefix:"j"},
    {id:542336,name:"聂拉木县",pid:"542300",type:"district",pinyin:"nie la mu xian",py:"nlmx",prefix:"n"},
    {id:542337,name:"萨嘎县",pid:"542300",type:"district",pinyin:"sa ga xian",py:"sgx",prefix:"s"},
    {id:542338,name:"岗巴县",pid:"542300",type:"district",pinyin:"gang ba xian",py:"gbx",prefix:"g"},
    {id:542421,name:"那曲县",pid:"542400",type:"district",pinyin:"nei qu xian",py:"nqx",prefix:"n"},
    {id:542422,name:"嘉黎县",pid:"542400",type:"district",pinyin:"jia li xian",py:"jlx",prefix:"j"},
    {id:542423,name:"比如县",pid:"542400",type:"district",pinyin:"bi ru xian",py:"brx",prefix:"b"},
    {id:542424,name:"聂荣县",pid:"542400",type:"district",pinyin:"nie rong xian",py:"nrx",prefix:"n"},
    {id:542425,name:"安多县",pid:"542400",type:"district",pinyin:"an duo xian",py:"adx",prefix:"a"},
    {id:542426,name:"申扎县",pid:"542400",type:"district",pinyin:"shen zha xian",py:"szx",prefix:"s"},
    {id:542427,name:"索县",pid:"542400",type:"district",pinyin:"suo xian",py:"sx",prefix:"s"},
    {id:542428,name:"班戈县",pid:"542400",type:"district",pinyin:"ban ge xian",py:"bgx",prefix:"b"},
    {id:542429,name:"巴青县",pid:"542400",type:"district",pinyin:"ba qing xian",py:"bqx",prefix:"b"},
    {id:542430,name:"尼玛县",pid:"542400",type:"district",pinyin:"ni ma xian",py:"nmx",prefix:"n"},
    {id:542431,name:"双湖县",pid:"542400",type:"district",pinyin:"shuang hu xian",py:"shx",prefix:"s"},
    {id:542521,name:"普兰县",pid:"542500",type:"district",pinyin:"pu lan xian",py:"plx",prefix:"p"},
    {id:542522,name:"札达县",pid:"542500",type:"district",pinyin:"zha da xian",py:"zdx",prefix:"z"},
    {id:542523,name:"噶尔县",pid:"542500",type:"district",pinyin:"ga er xian",py:"gex",prefix:"g"},
    {id:542524,name:"日土县",pid:"542500",type:"district",pinyin:"ri tu xian",py:"rtx",prefix:"r"},
    {id:542525,name:"革吉县",pid:"542500",type:"district",pinyin:"ge ji xian",py:"gjx",prefix:"g"},
    {id:542526,name:"改则县",pid:"542500",type:"district",pinyin:"gai ze xian",py:"gzx",prefix:"g"},
    {id:542527,name:"措勤县",pid:"542500",type:"district",pinyin:"cuo qin xian",py:"cqx",prefix:"c"},
    {id:542621,name:"林芝县",pid:"542600",type:"district",pinyin:"lin zhi xian",py:"lzx",prefix:"l"},
    {id:542622,name:"工布江达县",pid:"542600",type:"district",pinyin:"gong bu jiang da xian",py:"gbjdx",prefix:"g"},
    {id:542623,name:"米林县",pid:"542600",type:"district",pinyin:"mi lin xian",py:"mlx",prefix:"m"},
    {id:542624,name:"墨脱县",pid:"542600",type:"district",pinyin:"mo tuo xian",py:"mtx",prefix:"m"},
    {id:542625,name:"波密县",pid:"542600",type:"district",pinyin:"bo mi xian",py:"bmx",prefix:"b"},
    {id:542626,name:"察隅县",pid:"542600",type:"district",pinyin:"cha yu xian",py:"cyx",prefix:"c"},
    {id:542627,name:"朗县",pid:"542600",type:"district",pinyin:"lang xian",py:"lx",prefix:"l"},
    {id:610102,name:"新城区",pid:"610100",type:"district",pinyin:"xin cheng qu",py:"xcq",prefix:"x"},
    {id:610103,name:"碑林区",pid:"610100",type:"district",pinyin:"bei lin qu",py:"blq",prefix:"b"},
    {id:610104,name:"莲湖区",pid:"610100",type:"district",pinyin:"lian hu qu",py:"lhq",prefix:"l"},
    {id:610111,name:"灞桥区",pid:"610100",type:"district",pinyin:"ba qiao qu",py:"bqq",prefix:"b"},
    {id:610112,name:"未央区",pid:"610100",type:"district",pinyin:"wei yang qu",py:"wyq",prefix:"w"},
    {id:610113,name:"雁塔区",pid:"610100",type:"district",pinyin:"yan ta qu",py:"ytq",prefix:"y"},
    {id:610114,name:"阎良区",pid:"610100",type:"district",pinyin:"yan liang qu",py:"ylq",prefix:"y"},
    {id:610115,name:"临潼区",pid:"610100",type:"district",pinyin:"lin tong qu",py:"ltq",prefix:"l"},
    {id:610116,name:"长安区",pid:"610100",type:"district",pinyin:"chang an qu",py:"caq",prefix:"c"},
    {id:610122,name:"蓝田县",pid:"610100",type:"district",pinyin:"lan tian xian",py:"ltx",prefix:"l"},
    {id:610124,name:"周至县",pid:"610100",type:"district",pinyin:"zhou zhi xian",py:"zzx",prefix:"z"},
    {id:610125,name:"户县",pid:"610100",type:"district",pinyin:"hu xian",py:"hx",prefix:"h"},
    {id:610126,name:"高陵县",pid:"610100",type:"district",pinyin:"gao ling xian",py:"glx",prefix:"g"},
    {id:610202,name:"王益区",pid:"610200",type:"district",pinyin:"wang yi qu",py:"wyq",prefix:"w"},
    {id:610203,name:"印台区",pid:"610200",type:"district",pinyin:"yin tai qu",py:"ytq",prefix:"y"},
    {id:610204,name:"耀州区",pid:"610200",type:"district",pinyin:"yao zhou qu",py:"yzq",prefix:"y"},
    {id:610222,name:"宜君县",pid:"610200",type:"district",pinyin:"yi jun xian",py:"yjx",prefix:"y"},
    {id:610302,name:"渭滨区",pid:"610300",type:"district",pinyin:"wei bin qu",py:"wbq",prefix:"w"},
    {id:610303,name:"金台区",pid:"610300",type:"district",pinyin:"jin tai qu",py:"jtq",prefix:"j"},
    {id:610304,name:"陈仓区",pid:"610300",type:"district",pinyin:"chen cang qu",py:"ccq",prefix:"c"},
    {id:610322,name:"凤翔县",pid:"610300",type:"district",pinyin:"feng xiang xian",py:"fxx",prefix:"f"},
    {id:610323,name:"岐山县",pid:"610300",type:"district",pinyin:"qi shan xian",py:"qsx",prefix:"q"},
    {id:610324,name:"扶风县",pid:"610300",type:"district",pinyin:"fu feng xian",py:"ffx",prefix:"f"},
    {id:610326,name:"眉县",pid:"610300",type:"district",pinyin:"mei xian",py:"mx",prefix:"m"},
    {id:610327,name:"陇县",pid:"610300",type:"district",pinyin:"long xian",py:"lx",prefix:"l"},
    {id:610328,name:"千阳县",pid:"610300",type:"district",pinyin:"qian yang xian",py:"qyx",prefix:"q"},
    {id:610329,name:"麟游县",pid:"610300",type:"district",pinyin:"lin you xian",py:"lyx",prefix:"l"},
    {id:610330,name:"凤县",pid:"610300",type:"district",pinyin:"feng xian",py:"fx",prefix:"f"},
    {id:610331,name:"太白县",pid:"610300",type:"district",pinyin:"tai bai xian",py:"tbx",prefix:"t"},
    {id:610402,name:"秦都区",pid:"610400",type:"district",pinyin:"qin dou qu",py:"qdq",prefix:"q"},
    {id:610403,name:"杨陵区",pid:"610400",type:"district",pinyin:"yang ling qu",py:"ylq",prefix:"y"},
    {id:610404,name:"渭城区",pid:"610400",type:"district",pinyin:"wei cheng qu",py:"wcq",prefix:"w"},
    {id:610422,name:"三原县",pid:"610400",type:"district",pinyin:"san yuan xian",py:"syx",prefix:"s"},
    {id:610423,name:"泾阳县",pid:"610400",type:"district",pinyin:"jing yang xian",py:"jyx",prefix:"j"},
    {id:610424,name:"乾县",pid:"610400",type:"district",pinyin:"qian xian",py:"qx",prefix:"q"},
    {id:610425,name:"礼泉县",pid:"610400",type:"district",pinyin:"li quan xian",py:"lqx",prefix:"l"},
    {id:610426,name:"永寿县",pid:"610400",type:"district",pinyin:"yong shou xian",py:"ysx",prefix:"y"},
    {id:610427,name:"彬县",pid:"610400",type:"district",pinyin:"bin xian",py:"bx",prefix:"b"},
    {id:610428,name:"长武县",pid:"610400",type:"district",pinyin:"chang wu xian",py:"cwx",prefix:"c"},
    {id:610429,name:"旬邑县",pid:"610400",type:"district",pinyin:"xun yi xian",py:"xyx",prefix:"x"},
    {id:610430,name:"淳化县",pid:"610400",type:"district",pinyin:"chun hua xian",py:"chx",prefix:"c"},
    {id:610431,name:"武功县",pid:"610400",type:"district",pinyin:"wu gong xian",py:"wgx",prefix:"w"},
    {id:610481,name:"兴平市",pid:"610400",type:"district",pinyin:"xing ping shi",py:"xps",prefix:"x"},
    {id:610502,name:"临渭区",pid:"610500",type:"district",pinyin:"lin wei qu",py:"lwq",prefix:"l"},
    {id:610521,name:"华县",pid:"610500",type:"district",pinyin:"hua xian",py:"hx",prefix:"h"},
    {id:610522,name:"潼关县",pid:"610500",type:"district",pinyin:"tong guan xian",py:"tgx",prefix:"t"},
    {id:610523,name:"大荔县",pid:"610500",type:"district",pinyin:"da li xian",py:"dlx",prefix:"d"},
    {id:610524,name:"合阳县",pid:"610500",type:"district",pinyin:"he yang xian",py:"hyx",prefix:"h"},
    {id:610525,name:"澄城县",pid:"610500",type:"district",pinyin:"cheng cheng xian",py:"ccx",prefix:"c"},
    {id:610526,name:"蒲城县",pid:"610500",type:"district",pinyin:"pu cheng xian",py:"pcx",prefix:"p"},
    {id:610527,name:"白水县",pid:"610500",type:"district",pinyin:"bai shui xian",py:"bsx",prefix:"b"},
    {id:610528,name:"富平县",pid:"610500",type:"district",pinyin:"fu ping xian",py:"fpx",prefix:"f"},
    {id:610581,name:"韩城市",pid:"610500",type:"district",pinyin:"han cheng shi",py:"hcs",prefix:"h"},
    {id:610582,name:"华阴市",pid:"610500",type:"district",pinyin:"hua yin shi",py:"hys",prefix:"h"},
    {id:610602,name:"宝塔区",pid:"610600",type:"district",pinyin:"bao ta qu",py:"btq",prefix:"b"},
    {id:610621,name:"延长县",pid:"610600",type:"district",pinyin:"yan chang xian",py:"ycx",prefix:"y"},
    {id:610622,name:"延川县",pid:"610600",type:"district",pinyin:"yan chuan xian",py:"ycx",prefix:"y"},
    {id:610623,name:"子长县",pid:"610600",type:"district",pinyin:"zi chang xian",py:"zcx",prefix:"z"},
    {id:610624,name:"安塞县",pid:"610600",type:"district",pinyin:"an sai xian",py:"asx",prefix:"a"},
    {id:610625,name:"志丹县",pid:"610600",type:"district",pinyin:"zhi dan xian",py:"zdx",prefix:"z"},
    {id:610626,name:"吴起县",pid:"610600",type:"district",pinyin:"wu qi xian",py:"wqx",prefix:"w"},
    {id:610627,name:"甘泉县",pid:"610600",type:"district",pinyin:"gan quan xian",py:"gqx",prefix:"g"},
    {id:610628,name:"富县",pid:"610600",type:"district",pinyin:"fu xian",py:"fx",prefix:"f"},
    {id:610629,name:"洛川县",pid:"610600",type:"district",pinyin:"luo chuan xian",py:"lcx",prefix:"l"},
    {id:610630,name:"宜川县",pid:"610600",type:"district",pinyin:"yi chuan xian",py:"ycx",prefix:"y"},
    {id:610631,name:"黄龙县",pid:"610600",type:"district",pinyin:"huang long xian",py:"hlx",prefix:"h"},
    {id:610632,name:"黄陵县",pid:"610600",type:"district",pinyin:"huang ling xian",py:"hlx",prefix:"h"},
    {id:610702,name:"汉台区",pid:"610700",type:"district",pinyin:"han tai qu",py:"htq",prefix:"h"},
    {id:610721,name:"南郑县",pid:"610700",type:"district",pinyin:"nan zheng xian",py:"nzx",prefix:"n"},
    {id:610722,name:"城固县",pid:"610700",type:"district",pinyin:"cheng gu xian",py:"cgx",prefix:"c"},
    {id:610723,name:"洋县",pid:"610700",type:"district",pinyin:"yang xian",py:"yx",prefix:"y"},
    {id:610724,name:"西乡县",pid:"610700",type:"district",pinyin:"xi xiang xian",py:"xxx",prefix:"x"},
    {id:610725,name:"勉县",pid:"610700",type:"district",pinyin:"mian xian",py:"mx",prefix:"m"},
    {id:610726,name:"宁强县",pid:"610700",type:"district",pinyin:"ning qiang xian",py:"nqx",prefix:"n"},
    {id:610727,name:"略阳县",pid:"610700",type:"district",pinyin:"lve yang xian",py:"lyx",prefix:"l"},
    {id:610728,name:"镇巴县",pid:"610700",type:"district",pinyin:"zhen ba xian",py:"zbx",prefix:"z"},
    {id:610729,name:"留坝县",pid:"610700",type:"district",pinyin:"liu ba xian",py:"lbx",prefix:"l"},
    {id:610730,name:"佛坪县",pid:"610700",type:"district",pinyin:"fo ping xian",py:"fpx",prefix:"f"},
    {id:610802,name:"榆阳区",pid:"610800",type:"district",pinyin:"yu yang qu",py:"yyq",prefix:"y"},
    {id:610821,name:"神木县",pid:"610800",type:"district",pinyin:"shen mu xian",py:"smx",prefix:"s"},
    {id:610822,name:"府谷县",pid:"610800",type:"district",pinyin:"fu gu xian",py:"fgx",prefix:"f"},
    {id:610823,name:"横山县",pid:"610800",type:"district",pinyin:"heng shan xian",py:"hsx",prefix:"h"},
    {id:610824,name:"靖边县",pid:"610800",type:"district",pinyin:"jing bian xian",py:"jbx",prefix:"j"},
    {id:610825,name:"定边县",pid:"610800",type:"district",pinyin:"ding bian xian",py:"dbx",prefix:"d"},
    {id:610826,name:"绥德县",pid:"610800",type:"district",pinyin:"sui de xian",py:"sdx",prefix:"s"},
    {id:610827,name:"米脂县",pid:"610800",type:"district",pinyin:"mi zhi xian",py:"mzx",prefix:"m"},
    {id:610828,name:"佳县",pid:"610800",type:"district",pinyin:"jia xian",py:"jx",prefix:"j"},
    {id:610829,name:"吴堡县",pid:"610800",type:"district",pinyin:"wu bao xian",py:"wbx",prefix:"w"},
    {id:610830,name:"清涧县",pid:"610800",type:"district",pinyin:"qing jian xian",py:"qjx",prefix:"q"},
    {id:610831,name:"子洲县",pid:"610800",type:"district",pinyin:"zi zhou xian",py:"zzx",prefix:"z"},
    {id:610902,name:"汉滨区",pid:"610900",type:"district",pinyin:"han bin qu",py:"hbq",prefix:"h"},
    {id:610921,name:"汉阴县",pid:"610900",type:"district",pinyin:"han yin xian",py:"hyx",prefix:"h"},
    {id:610922,name:"石泉县",pid:"610900",type:"district",pinyin:"shi quan xian",py:"sqx",prefix:"s"},
    {id:610923,name:"宁陕县",pid:"610900",type:"district",pinyin:"ning shan xian",py:"nsx",prefix:"n"},
    {id:610924,name:"紫阳县",pid:"610900",type:"district",pinyin:"zi yang xian",py:"zyx",prefix:"z"},
    {id:610925,name:"岚皋县",pid:"610900",type:"district",pinyin:"lan gao xian",py:"lgx",prefix:"l"},
    {id:610926,name:"平利县",pid:"610900",type:"district",pinyin:"ping li xian",py:"plx",prefix:"p"},
    {id:610927,name:"镇坪县",pid:"610900",type:"district",pinyin:"zhen ping xian",py:"zpx",prefix:"z"},
    {id:610928,name:"旬阳县",pid:"610900",type:"district",pinyin:"xun yang xian",py:"xyx",prefix:"x"},
    {id:610929,name:"白河县",pid:"610900",type:"district",pinyin:"bai he xian",py:"bhx",prefix:"b"},
    {id:611002,name:"商州区",pid:"611000",type:"district",pinyin:"shang zhou qu",py:"szq",prefix:"s"},
    {id:611021,name:"洛南县",pid:"611000",type:"district",pinyin:"luo nan xian",py:"lnx",prefix:"l"},
    {id:611022,name:"丹凤县",pid:"611000",type:"district",pinyin:"dan feng xian",py:"dfx",prefix:"d"},
    {id:611023,name:"商南县",pid:"611000",type:"district",pinyin:"shang nan xian",py:"snx",prefix:"s"},
    {id:611024,name:"山阳县",pid:"611000",type:"district",pinyin:"shan yang xian",py:"syx",prefix:"s"},
    {id:611025,name:"镇安县",pid:"611000",type:"district",pinyin:"zhen an xian",py:"zax",prefix:"z"},
    {id:611026,name:"柞水县",pid:"611000",type:"district",pinyin:"zuo shui xian",py:"zsx",prefix:"z"},
    {id:620102,name:"城关区",pid:"620100",type:"district",pinyin:"cheng guan qu",py:"cgq",prefix:"c"},
    {id:620103,name:"七里河区",pid:"620100",type:"district",pinyin:"qi li he qu",py:"qlhq",prefix:"q"},
    {id:620104,name:"西固区",pid:"620100",type:"district",pinyin:"xi gu qu",py:"xgq",prefix:"x"},
    {id:620105,name:"安宁区",pid:"620100",type:"district",pinyin:"an ning qu",py:"anq",prefix:"a"},
    {id:620111,name:"红古区",pid:"620100",type:"district",pinyin:"hong gu qu",py:"hgq",prefix:"h"},
    {id:620121,name:"永登县",pid:"620100",type:"district",pinyin:"yong deng xian",py:"ydx",prefix:"y"},
    {id:620122,name:"皋兰县",pid:"620100",type:"district",pinyin:"gao lan xian",py:"glx",prefix:"g"},
    {id:620123,name:"榆中县",pid:"620100",type:"district",pinyin:"yu zhong xian",py:"yzx",prefix:"y"},
    {id:620302,name:"金川区",pid:"620300",type:"district",pinyin:"jin chuan qu",py:"jcq",prefix:"j"},
    {id:620321,name:"永昌县",pid:"620300",type:"district",pinyin:"yong chang xian",py:"ycx",prefix:"y"},
    {id:620402,name:"白银区",pid:"620400",type:"district",pinyin:"bai yin qu",py:"byq",prefix:"b"},
    {id:620403,name:"平川区",pid:"620400",type:"district",pinyin:"ping chuan qu",py:"pcq",prefix:"p"},
    {id:620421,name:"靖远县",pid:"620400",type:"district",pinyin:"jing yuan xian",py:"jyx",prefix:"j"},
    {id:620422,name:"会宁县",pid:"620400",type:"district",pinyin:"hui ning xian",py:"hnx",prefix:"h"},
    {id:620423,name:"景泰县",pid:"620400",type:"district",pinyin:"jing tai xian",py:"jtx",prefix:"j"},
    {id:620502,name:"秦州区",pid:"620500",type:"district",pinyin:"qin zhou qu",py:"qzq",prefix:"q"},
    {id:620503,name:"麦积区",pid:"620500",type:"district",pinyin:"mai ji qu",py:"mjq",prefix:"m"},
    {id:620521,name:"清水县",pid:"620500",type:"district",pinyin:"qing shui xian",py:"qsx",prefix:"q"},
    {id:620522,name:"秦安县",pid:"620500",type:"district",pinyin:"qin an xian",py:"qax",prefix:"q"},
    {id:620523,name:"甘谷县",pid:"620500",type:"district",pinyin:"gan gu xian",py:"ggx",prefix:"g"},
    {id:620524,name:"武山县",pid:"620500",type:"district",pinyin:"wu shan xian",py:"wsx",prefix:"w"},
    {id:620525,name:"张家川回族自治县",pid:"620500",type:"district",pinyin:"zhang jia chuan hui zu zi zhi xian",py:"zjchzzzx",prefix:"z"},
    {id:620602,name:"凉州区",pid:"620600",type:"district",pinyin:"liang zhou qu",py:"lzq",prefix:"l"},
    {id:620621,name:"民勤县",pid:"620600",type:"district",pinyin:"min qin xian",py:"mqx",prefix:"m"},
    {id:620622,name:"古浪县",pid:"620600",type:"district",pinyin:"gu lang xian",py:"glx",prefix:"g"},
    {id:620623,name:"天祝藏族自治县",pid:"620600",type:"district",pinyin:"tian zhu zang zu zi zhi xian",py:"tzzzzzx",prefix:"t"},
    {id:620702,name:"甘州区",pid:"620700",type:"district",pinyin:"gan zhou qu",py:"gzq",prefix:"g"},
    {id:620721,name:"肃南裕固族自治县",pid:"620700",type:"district",pinyin:"su nan yu gu zu zi zhi xian",py:"snygzzzx",prefix:"s"},
    {id:620722,name:"民乐县",pid:"620700",type:"district",pinyin:"min le xian",py:"mlx",prefix:"m"},
    {id:620723,name:"临泽县",pid:"620700",type:"district",pinyin:"lin ze xian",py:"lzx",prefix:"l"},
    {id:620724,name:"高台县",pid:"620700",type:"district",pinyin:"gao tai xian",py:"gtx",prefix:"g"},
    {id:620725,name:"山丹县",pid:"620700",type:"district",pinyin:"shan dan xian",py:"sdx",prefix:"s"},
    {id:620802,name:"崆峒区",pid:"620800",type:"district",pinyin:"kong tong qu",py:"ktq",prefix:"k"},
    {id:620821,name:"泾川县",pid:"620800",type:"district",pinyin:"jing chuan xian",py:"jcx",prefix:"j"},
    {id:620822,name:"灵台县",pid:"620800",type:"district",pinyin:"ling tai xian",py:"ltx",prefix:"l"},
    {id:620823,name:"崇信县",pid:"620800",type:"district",pinyin:"chong xin xian",py:"cxx",prefix:"c"},
    {id:620824,name:"华亭县",pid:"620800",type:"district",pinyin:"hua ting xian",py:"htx",prefix:"h"},
    {id:620825,name:"庄浪县",pid:"620800",type:"district",pinyin:"zhuang lang xian",py:"zlx",prefix:"z"},
    {id:620826,name:"静宁县",pid:"620800",type:"district",pinyin:"jing ning xian",py:"jnx",prefix:"j"},
    {id:620902,name:"肃州区",pid:"620900",type:"district",pinyin:"su zhou qu",py:"szq",prefix:"s"},
    {id:620921,name:"金塔县",pid:"620900",type:"district",pinyin:"jin ta xian",py:"jtx",prefix:"j"},
    {id:620922,name:"瓜州县",pid:"620900",type:"district",pinyin:"gua zhou xian",py:"gzx",prefix:"g"},
    {id:620923,name:"肃北蒙古族自治县",pid:"620900",type:"district",pinyin:"su bei meng gu zu zi zhi xian",py:"sbmgzzzx",prefix:"s"},
    {id:620924,name:"阿克塞哈萨克族自治县",pid:"620900",type:"district",pinyin:"a ke sai ha sa ke zu zi zhi xian",py:"akshskzzzx",prefix:"a"},
    {id:620981,name:"玉门市",pid:"620900",type:"district",pinyin:"yu men shi",py:"yms",prefix:"y"},
    {id:620982,name:"敦煌市",pid:"620900",type:"district",pinyin:"dun huang shi",py:"dhs",prefix:"d"},
    {id:621002,name:"西峰区",pid:"621000",type:"district",pinyin:"xi feng qu",py:"xfq",prefix:"x"},
    {id:621021,name:"庆城县",pid:"621000",type:"district",pinyin:"qing cheng xian",py:"qcx",prefix:"q"},
    {id:621022,name:"环县",pid:"621000",type:"district",pinyin:"huan xian",py:"hx",prefix:"h"},
    {id:621023,name:"华池县",pid:"621000",type:"district",pinyin:"hua chi xian",py:"hcx",prefix:"h"},
    {id:621024,name:"合水县",pid:"621000",type:"district",pinyin:"he shui xian",py:"hsx",prefix:"h"},
    {id:621025,name:"正宁县",pid:"621000",type:"district",pinyin:"zheng ning xian",py:"znx",prefix:"z"},
    {id:621026,name:"宁县",pid:"621000",type:"district",pinyin:"ning xian",py:"nx",prefix:"n"},
    {id:621027,name:"镇原县",pid:"621000",type:"district",pinyin:"zhen yuan xian",py:"zyx",prefix:"z"},
    {id:621102,name:"安定区",pid:"621100",type:"district",pinyin:"an ding qu",py:"adq",prefix:"a"},
    {id:621121,name:"通渭县",pid:"621100",type:"district",pinyin:"tong wei xian",py:"twx",prefix:"t"},
    {id:621122,name:"陇西县",pid:"621100",type:"district",pinyin:"long xi xian",py:"lxx",prefix:"l"},
    {id:621123,name:"渭源县",pid:"621100",type:"district",pinyin:"wei yuan xian",py:"wyx",prefix:"w"},
    {id:621124,name:"临洮县",pid:"621100",type:"district",pinyin:"lin tao xian",py:"ltx",prefix:"l"},
    {id:621125,name:"漳县",pid:"621100",type:"district",pinyin:"zhang xian",py:"zx",prefix:"z"},
    {id:621126,name:"岷县",pid:"621100",type:"district",pinyin:"min xian",py:"mx",prefix:"m"},
    {id:621202,name:"武都区",pid:"621200",type:"district",pinyin:"wu dou qu",py:"wdq",prefix:"w"},
    {id:621221,name:"成县",pid:"621200",type:"district",pinyin:"cheng xian",py:"cx",prefix:"c"},
    {id:621222,name:"文县",pid:"621200",type:"district",pinyin:"wen xian",py:"wx",prefix:"w"},
    {id:621223,name:"宕昌县",pid:"621200",type:"district",pinyin:"dang chang xian",py:"dcx",prefix:"d"},
    {id:621224,name:"康县",pid:"621200",type:"district",pinyin:"kang xian",py:"kx",prefix:"k"},
    {id:621225,name:"西和县",pid:"621200",type:"district",pinyin:"xi he xian",py:"xhx",prefix:"x"},
    {id:621226,name:"礼县",pid:"621200",type:"district",pinyin:"li xian",py:"lx",prefix:"l"},
    {id:621227,name:"徽县",pid:"621200",type:"district",pinyin:"hui xian",py:"hx",prefix:"h"},
    {id:621228,name:"两当县",pid:"621200",type:"district",pinyin:"liang dang xian",py:"ldx",prefix:"l"},
    {id:622901,name:"临夏市",pid:"622900",type:"district",pinyin:"lin xia shi",py:"lxs",prefix:"l"},
    {id:622921,name:"临夏县",pid:"622900",type:"district",pinyin:"lin xia xian",py:"lxx",prefix:"l"},
    {id:622922,name:"康乐县",pid:"622900",type:"district",pinyin:"kang le xian",py:"klx",prefix:"k"},
    {id:622923,name:"永靖县",pid:"622900",type:"district",pinyin:"yong jing xian",py:"yjx",prefix:"y"},
    {id:622924,name:"广河县",pid:"622900",type:"district",pinyin:"guang he xian",py:"ghx",prefix:"g"},
    {id:622925,name:"和政县",pid:"622900",type:"district",pinyin:"he zheng xian",py:"hzx",prefix:"h"},
    {id:622926,name:"东乡族自治县",pid:"622900",type:"district",pinyin:"dong xiang zu zi zhi xian",py:"dxzzzx",prefix:"d"},
    {id:622927,name:"积石山保安族东乡族撒拉族自治县",pid:"622900",type:"district",pinyin:"ji shi shan bao an zu dong xiang zu sa la zu zi zhi xian",py:"jssbazdxzslzzzx",prefix:"j"},
    {id:623001,name:"合作市",pid:"623000",type:"district",pinyin:"he zuo shi",py:"hzs",prefix:"h"},
    {id:623021,name:"临潭县",pid:"623000",type:"district",pinyin:"lin tan xian",py:"ltx",prefix:"l"},
    {id:623022,name:"卓尼县",pid:"623000",type:"district",pinyin:"zhuo ni xian",py:"znx",prefix:"z"},
    {id:623023,name:"舟曲县",pid:"623000",type:"district",pinyin:"zhou qu xian",py:"zqx",prefix:"z"},
    {id:623024,name:"迭部县",pid:"623000",type:"district",pinyin:"die bu xian",py:"dbx",prefix:"d"},
    {id:623025,name:"玛曲县",pid:"623000",type:"district",pinyin:"ma qu xian",py:"mqx",prefix:"m"},
    {id:623026,name:"碌曲县",pid:"623000",type:"district",pinyin:"liu qu xian",py:"lqx",prefix:"l"},
    {id:623027,name:"夏河县",pid:"623000",type:"district",pinyin:"xia he xian",py:"xhx",prefix:"x"},
    {id:630102,name:"城东区",pid:"630100",type:"district",pinyin:"cheng dong qu",py:"cdq",prefix:"c"},
    {id:630103,name:"城中区",pid:"630100",type:"district",pinyin:"cheng zhong qu",py:"czq",prefix:"c"},
    {id:630104,name:"城西区",pid:"630100",type:"district",pinyin:"cheng xi qu",py:"cxq",prefix:"c"},
    {id:630105,name:"城北区",pid:"630100",type:"district",pinyin:"cheng bei qu",py:"cbq",prefix:"c"},
    {id:630121,name:"大通回族土族自治县",pid:"630100",type:"district",pinyin:"da tong hui zu tu zu zi zhi xian",py:"dthztzzzx",prefix:"d"},
    {id:630122,name:"湟中县",pid:"630100",type:"district",pinyin:"huang zhong xian",py:"hzx",prefix:"h"},
    {id:630123,name:"湟源县",pid:"630100",type:"district",pinyin:"huang yuan xian",py:"hyx",prefix:"h"},
    {id:630202,name:"乐都区",pid:"630200",type:"district",pinyin:"le dou qu",py:"ldq",prefix:"l"},
    {id:630221,name:"平安县",pid:"630200",type:"district",pinyin:"ping an xian",py:"pax",prefix:"p"},
    {id:630222,name:"民和回族土族自治县",pid:"630200",type:"district",pinyin:"min he hui zu tu zu zi zhi xian",py:"mhhztzzzx",prefix:"m"},
    {id:630223,name:"互助土族自治县",pid:"630200",type:"district",pinyin:"hu zhu tu zu zi zhi xian",py:"hztzzzx",prefix:"h"},
    {id:630224,name:"化隆回族自治县",pid:"630200",type:"district",pinyin:"hua long hui zu zi zhi xian",py:"hlhzzzx",prefix:"h"},
    {id:630225,name:"循化撒拉族自治县",pid:"630200",type:"district",pinyin:"xun hua sa la zu zi zhi xian",py:"xhslzzzx",prefix:"x"},
    {id:632221,name:"门源回族自治县",pid:"632200",type:"district",pinyin:"men yuan hui zu zi zhi xian",py:"myhzzzx",prefix:"m"},
    {id:632222,name:"祁连县",pid:"632200",type:"district",pinyin:"qi lian xian",py:"qlx",prefix:"q"},
    {id:632223,name:"海晏县",pid:"632200",type:"district",pinyin:"hai yan xian",py:"hyx",prefix:"h"},
    {id:632224,name:"刚察县",pid:"632200",type:"district",pinyin:"gang cha xian",py:"gcx",prefix:"g"},
    {id:632321,name:"同仁县",pid:"632300",type:"district",pinyin:"tong ren xian",py:"trx",prefix:"t"},
    {id:632322,name:"尖扎县",pid:"632300",type:"district",pinyin:"jian zha xian",py:"jzx",prefix:"j"},
    {id:632323,name:"泽库县",pid:"632300",type:"district",pinyin:"ze ku xian",py:"zkx",prefix:"z"},
    {id:632324,name:"河南蒙古族自治县",pid:"632300",type:"district",pinyin:"he nan meng gu zu zi zhi xian",py:"hnmgzzzx",prefix:"h"},
    {id:632521,name:"共和县",pid:"632500",type:"district",pinyin:"gong he xian",py:"ghx",prefix:"g"},
    {id:632522,name:"同德县",pid:"632500",type:"district",pinyin:"tong de xian",py:"tdx",prefix:"t"},
    {id:632523,name:"贵德县",pid:"632500",type:"district",pinyin:"gui de xian",py:"gdx",prefix:"g"},
    {id:632524,name:"兴海县",pid:"632500",type:"district",pinyin:"xing hai xian",py:"xhx",prefix:"x"},
    {id:632525,name:"贵南县",pid:"632500",type:"district",pinyin:"gui nan xian",py:"gnx",prefix:"g"},
    {id:632621,name:"玛沁县",pid:"632600",type:"district",pinyin:"ma qin xian",py:"mqx",prefix:"m"},
    {id:632622,name:"班玛县",pid:"632600",type:"district",pinyin:"ban ma xian",py:"bmx",prefix:"b"},
    {id:632623,name:"甘德县",pid:"632600",type:"district",pinyin:"gan de xian",py:"gdx",prefix:"g"},
    {id:632624,name:"达日县",pid:"632600",type:"district",pinyin:"da ri xian",py:"drx",prefix:"d"},
    {id:632625,name:"久治县",pid:"632600",type:"district",pinyin:"jiu zhi xian",py:"jzx",prefix:"j"},
    {id:632626,name:"玛多县",pid:"632600",type:"district",pinyin:"ma duo xian",py:"mdx",prefix:"m"},
    {id:632701,name:"玉树市",pid:"632700",type:"district",pinyin:"yu shu shi",py:"yss",prefix:"y"},
    {id:632722,name:"杂多县",pid:"632700",type:"district",pinyin:"za duo xian",py:"zdx",prefix:"z"},
    {id:632723,name:"称多县",pid:"632700",type:"district",pinyin:"cheng duo xian",py:"cdx",prefix:"c"},
    {id:632724,name:"治多县",pid:"632700",type:"district",pinyin:"zhi duo xian",py:"zdx",prefix:"z"},
    {id:632725,name:"囊谦县",pid:"632700",type:"district",pinyin:"nang qian xian",py:"nqx",prefix:"n"},
    {id:632726,name:"曲麻莱县",pid:"632700",type:"district",pinyin:"qu ma lai xian",py:"qmlx",prefix:"q"},
    {id:632801,name:"格尔木市",pid:"632800",type:"district",pinyin:"ge er mu shi",py:"gems",prefix:"g"},
    {id:632802,name:"德令哈市",pid:"632800",type:"district",pinyin:"de ling ha shi",py:"dlhs",prefix:"d"},
    {id:632821,name:"乌兰县",pid:"632800",type:"district",pinyin:"wu lan xian",py:"wlx",prefix:"w"},
    {id:632822,name:"都兰县",pid:"632800",type:"district",pinyin:"dou lan xian",py:"dlx",prefix:"d"},
    {id:632823,name:"天峻县",pid:"632800",type:"district",pinyin:"tian jun xian",py:"tjx",prefix:"t"},
    {id:640104,name:"兴庆区",pid:"640100",type:"district",pinyin:"xing qing qu",py:"xqq",prefix:"x"},
    {id:640105,name:"西夏区",pid:"640100",type:"district",pinyin:"xi xia qu",py:"xxq",prefix:"x"},
    {id:640106,name:"金凤区",pid:"640100",type:"district",pinyin:"jin feng qu",py:"jfq",prefix:"j"},
    {id:640121,name:"永宁县",pid:"640100",type:"district",pinyin:"yong ning xian",py:"ynx",prefix:"y"},
    {id:640122,name:"贺兰县",pid:"640100",type:"district",pinyin:"he lan xian",py:"hlx",prefix:"h"},
    {id:640181,name:"灵武市",pid:"640100",type:"district",pinyin:"ling wu shi",py:"lws",prefix:"l"},
    {id:640202,name:"大武口区",pid:"640200",type:"district",pinyin:"da wu kou qu",py:"dwkq",prefix:"d"},
    {id:640205,name:"惠农区",pid:"640200",type:"district",pinyin:"hui nong qu",py:"hnq",prefix:"h"},
    {id:640221,name:"平罗县",pid:"640200",type:"district",pinyin:"ping luo xian",py:"plx",prefix:"p"},
    {id:640302,name:"利通区",pid:"640300",type:"district",pinyin:"li tong qu",py:"ltq",prefix:"l"},
    {id:640303,name:"红寺堡区",pid:"640300",type:"district",pinyin:"hong si bao qu",py:"hsbq",prefix:"h"},
    {id:640323,name:"盐池县",pid:"640300",type:"district",pinyin:"yan chi xian",py:"ycx",prefix:"y"},
    {id:640324,name:"同心县",pid:"640300",type:"district",pinyin:"tong xin xian",py:"txx",prefix:"t"},
    {id:640381,name:"青铜峡市",pid:"640300",type:"district",pinyin:"qing tong xia shi",py:"qtxs",prefix:"q"},
    {id:640402,name:"原州区",pid:"640400",type:"district",pinyin:"yuan zhou qu",py:"yzq",prefix:"y"},
    {id:640422,name:"西吉县",pid:"640400",type:"district",pinyin:"xi ji xian",py:"xjx",prefix:"x"},
    {id:640423,name:"隆德县",pid:"640400",type:"district",pinyin:"long de xian",py:"ldx",prefix:"l"},
    {id:640424,name:"泾源县",pid:"640400",type:"district",pinyin:"jing yuan xian",py:"jyx",prefix:"j"},
    {id:640425,name:"彭阳县",pid:"640400",type:"district",pinyin:"peng yang xian",py:"pyx",prefix:"p"},
    {id:640502,name:"沙坡头区",pid:"640500",type:"district",pinyin:"sha po tou qu",py:"sptq",prefix:"s"},
    {id:640521,name:"中宁县",pid:"640500",type:"district",pinyin:"zhong ning xian",py:"znx",prefix:"z"},
    {id:640522,name:"海原县",pid:"640500",type:"district",pinyin:"hai yuan xian",py:"hyx",prefix:"h"},
    {id:650102,name:"天山区",pid:"650100",type:"district",pinyin:"tian shan qu",py:"tsq",prefix:"t"},
    {id:650103,name:"沙依巴克区",pid:"650100",type:"district",pinyin:"sha yi ba ke qu",py:"sybkq",prefix:"s"},
    {id:650104,name:"新市区",pid:"650100",type:"district",pinyin:"xin shi qu",py:"xsq",prefix:"x"},
    {id:650105,name:"水磨沟区",pid:"650100",type:"district",pinyin:"shui mo gou qu",py:"smgq",prefix:"s"},
    {id:650106,name:"头屯河区",pid:"650100",type:"district",pinyin:"tou tun he qu",py:"tthq",prefix:"t"},
    {id:650107,name:"达坂城区",pid:"650100",type:"district",pinyin:"da ban cheng qu",py:"dbcq",prefix:"d"},
    {id:650109,name:"米东区",pid:"650100",type:"district",pinyin:"mi dong qu",py:"mdq",prefix:"m"},
    {id:650121,name:"乌鲁木齐县",pid:"650100",type:"district",pinyin:"wu lu mu qi xian",py:"wlmqx",prefix:"w"},
    {id:650202,name:"独山子区",pid:"650200",type:"district",pinyin:"du shan zi qu",py:"dszq",prefix:"d"},
    {id:650203,name:"克拉玛依区",pid:"650200",type:"district",pinyin:"ke la ma yi qu",py:"klmyq",prefix:"k"},
    {id:650204,name:"白碱滩区",pid:"650200",type:"district",pinyin:"bai jian tan qu",py:"bjtq",prefix:"b"},
    {id:650205,name:"乌尔禾区",pid:"650200",type:"district",pinyin:"wu er he qu",py:"wehq",prefix:"w"},
    {id:652101,name:"吐鲁番市",pid:"652100",type:"district",pinyin:"tu lu fan shi",py:"tlfs",prefix:"t"},
    {id:652122,name:"鄯善县",pid:"652100",type:"district",pinyin:"shan shan xian",py:"ssx",prefix:"s"},
    {id:652123,name:"托克逊县",pid:"652100",type:"district",pinyin:"tuo ke xun xian",py:"tkxx",prefix:"t"},
    {id:652201,name:"哈密市",pid:"652200",type:"district",pinyin:"ha mi shi",py:"hms",prefix:"h"},
    {id:652222,name:"巴里坤哈萨克自治县",pid:"652200",type:"district",pinyin:"ba li kun ha sa ke zi zhi xian",py:"blkhskzzx",prefix:"b"},
    {id:652223,name:"伊吾县",pid:"652200",type:"district",pinyin:"yi wu xian",py:"ywx",prefix:"y"},
    {id:652301,name:"昌吉市",pid:"652300",type:"district",pinyin:"chang ji shi",py:"cjs",prefix:"c"},
    {id:652302,name:"阜康市",pid:"652300",type:"district",pinyin:"fu kang shi",py:"fks",prefix:"f"},
    {id:652323,name:"呼图壁县",pid:"652300",type:"district",pinyin:"hu tu bi xian",py:"htbx",prefix:"h"},
    {id:652324,name:"玛纳斯县",pid:"652300",type:"district",pinyin:"ma na si xian",py:"mnsx",prefix:"m"},
    {id:652325,name:"奇台县",pid:"652300",type:"district",pinyin:"qi tai xian",py:"qtx",prefix:"q"},
    {id:652327,name:"吉木萨尔县",pid:"652300",type:"district",pinyin:"ji mu sa er xian",py:"jmsex",prefix:"j"},
    {id:652328,name:"木垒哈萨克自治县",pid:"652300",type:"district",pinyin:"mu lei ha sa ke zi zhi xian",py:"mlhskzzx",prefix:"m"},
    {id:652701,name:"博乐市",pid:"652700",type:"district",pinyin:"bo le shi",py:"bls",prefix:"b"},
    {id:652702,name:"阿拉山口市",pid:"652700",type:"district",pinyin:"a la shan kou shi",py:"alsks",prefix:"a"},
    {id:652722,name:"精河县",pid:"652700",type:"district",pinyin:"jing he xian",py:"jhx",prefix:"j"},
    {id:652723,name:"温泉县",pid:"652700",type:"district",pinyin:"wen quan xian",py:"wqx",prefix:"w"},
    {id:652801,name:"库尔勒市",pid:"652800",type:"district",pinyin:"ku er le shi",py:"kels",prefix:"k"},
    {id:652822,name:"轮台县",pid:"652800",type:"district",pinyin:"lun tai xian",py:"ltx",prefix:"l"},
    {id:652823,name:"尉犁县",pid:"652800",type:"district",pinyin:"wei li xian",py:"wlx",prefix:"w"},
    {id:652824,name:"若羌县",pid:"652800",type:"district",pinyin:"ruo qiang xian",py:"rqx",prefix:"r"},
    {id:652825,name:"且末县",pid:"652800",type:"district",pinyin:"qie mo xian",py:"qmx",prefix:"q"},
    {id:652826,name:"焉耆回族自治县",pid:"652800",type:"district",pinyin:"yan qi hui zu zi zhi xian",py:"yqhzzzx",prefix:"y"},
    {id:652827,name:"和静县",pid:"652800",type:"district",pinyin:"he jing xian",py:"hjx",prefix:"h"},
    {id:652828,name:"和硕县",pid:"652800",type:"district",pinyin:"he shuo xian",py:"hsx",prefix:"h"},
    {id:652829,name:"博湖县",pid:"652800",type:"district",pinyin:"bo hu xian",py:"bhx",prefix:"b"},
    {id:652901,name:"阿克苏市",pid:"652900",type:"district",pinyin:"a ke su shi",py:"akss",prefix:"a"},
    {id:652922,name:"温宿县",pid:"652900",type:"district",pinyin:"wen su xian",py:"wsx",prefix:"w"},
    {id:652923,name:"库车县",pid:"652900",type:"district",pinyin:"ku che xian",py:"kcx",prefix:"k"},
    {id:652924,name:"沙雅县",pid:"652900",type:"district",pinyin:"sha ya xian",py:"syx",prefix:"s"},
    {id:652925,name:"新和县",pid:"652900",type:"district",pinyin:"xin he xian",py:"xhx",prefix:"x"},
    {id:652926,name:"拜城县",pid:"652900",type:"district",pinyin:"bai cheng xian",py:"bcx",prefix:"b"},
    {id:652927,name:"乌什县",pid:"652900",type:"district",pinyin:"wu shen xian",py:"wsx",prefix:"w"},
    {id:652928,name:"阿瓦提县",pid:"652900",type:"district",pinyin:"a wa ti xian",py:"awtx",prefix:"a"},
    {id:652929,name:"柯坪县",pid:"652900",type:"district",pinyin:"ke ping xian",py:"kpx",prefix:"k"},
    {id:653001,name:"阿图什市",pid:"653000",type:"district",pinyin:"a tu shen shi",py:"atss",prefix:"a"},
    {id:653022,name:"阿克陶县",pid:"653000",type:"district",pinyin:"a ke tao xian",py:"aktx",prefix:"a"},
    {id:653023,name:"阿合奇县",pid:"653000",type:"district",pinyin:"a he qi xian",py:"ahqx",prefix:"a"},
    {id:653024,name:"乌恰县",pid:"653000",type:"district",pinyin:"wu qia xian",py:"wqx",prefix:"w"},
    {id:653101,name:"喀什市",pid:"653100",type:"district",pinyin:"ka shen shi",py:"kss",prefix:"k"},
    {id:653121,name:"疏附县",pid:"653100",type:"district",pinyin:"shu fu xian",py:"sfx",prefix:"s"},
    {id:653122,name:"疏勒县",pid:"653100",type:"district",pinyin:"shu le xian",py:"slx",prefix:"s"},
    {id:653123,name:"英吉沙县",pid:"653100",type:"district",pinyin:"ying ji sha xian",py:"yjsx",prefix:"y"},
    {id:653124,name:"泽普县",pid:"653100",type:"district",pinyin:"ze pu xian",py:"zpx",prefix:"z"},
    {id:653125,name:"莎车县",pid:"653100",type:"district",pinyin:"sha che xian",py:"scx",prefix:"s"},
    {id:653126,name:"叶城县",pid:"653100",type:"district",pinyin:"ye cheng xian",py:"ycx",prefix:"y"},
    {id:653127,name:"麦盖提县",pid:"653100",type:"district",pinyin:"mai gai ti xian",py:"mgtx",prefix:"m"},
    {id:653128,name:"岳普湖县",pid:"653100",type:"district",pinyin:"yue pu hu xian",py:"yphx",prefix:"y"},
    {id:653129,name:"伽师县",pid:"653100",type:"district",pinyin:"jia shi xian",py:"jsx",prefix:"j"},
    {id:653130,name:"巴楚县",pid:"653100",type:"district",pinyin:"ba chu xian",py:"bcx",prefix:"b"},
    {id:653131,name:"塔什库尔干塔吉克自治县",pid:"653100",type:"district",pinyin:"ta shen ku er gan ta ji ke zi zhi xian",py:"tskegtjkzzx",prefix:"t"},
    {id:653201,name:"和田市",pid:"653200",type:"district",pinyin:"he tian shi",py:"hts",prefix:"h"},
    {id:653221,name:"和田县",pid:"653200",type:"district",pinyin:"he tian xian",py:"htx",prefix:"h"},
    {id:653222,name:"墨玉县",pid:"653200",type:"district",pinyin:"mo yu xian",py:"myx",prefix:"m"},
    {id:653223,name:"皮山县",pid:"653200",type:"district",pinyin:"pi shan xian",py:"psx",prefix:"p"},
    {id:653224,name:"洛浦县",pid:"653200",type:"district",pinyin:"luo pu xian",py:"lpx",prefix:"l"},
    {id:653225,name:"策勒县",pid:"653200",type:"district",pinyin:"ce le xian",py:"clx",prefix:"c"},
    {id:653226,name:"于田县",pid:"653200",type:"district",pinyin:"yu tian xian",py:"ytx",prefix:"y"},
    {id:653227,name:"民丰县",pid:"653200",type:"district",pinyin:"min feng xian",py:"mfx",prefix:"m"},
    {id:654002,name:"伊宁市",pid:"654000",type:"district",pinyin:"yi ning shi",py:"yns",prefix:"y"},
    {id:654003,name:"奎屯市",pid:"654000",type:"district",pinyin:"kui tun shi",py:"kts",prefix:"k"},
    {id:654021,name:"伊宁县",pid:"654000",type:"district",pinyin:"yi ning xian",py:"ynx",prefix:"y"},
    {id:654022,name:"察布查尔锡伯自治县",pid:"654000",type:"district",pinyin:"cha bu cha er xi bo zi zhi xian",py:"cbcexbzzx",prefix:"c"},
    {id:654023,name:"霍城县",pid:"654000",type:"district",pinyin:"huo cheng xian",py:"hcx",prefix:"h"},
    {id:654024,name:"巩留县",pid:"654000",type:"district",pinyin:"gong liu xian",py:"glx",prefix:"g"},
    {id:654025,name:"新源县",pid:"654000",type:"district",pinyin:"xin yuan xian",py:"xyx",prefix:"x"},
    {id:654026,name:"昭苏县",pid:"654000",type:"district",pinyin:"zhao su xian",py:"zsx",prefix:"z"},
    {id:654027,name:"特克斯县",pid:"654000",type:"district",pinyin:"te ke si xian",py:"tksx",prefix:"t"},
    {id:654028,name:"尼勒克县",pid:"654000",type:"district",pinyin:"ni le ke xian",py:"nlkx",prefix:"n"},
    {id:654201,name:"塔城市",pid:"654200",type:"district",pinyin:"ta cheng shi",py:"tcs",prefix:"t"},
    {id:654202,name:"乌苏市",pid:"654200",type:"district",pinyin:"wu su shi",py:"wss",prefix:"w"},
    {id:654221,name:"额敏县",pid:"654200",type:"district",pinyin:"e min xian",py:"emx",prefix:"e"},
    {id:654223,name:"沙湾县",pid:"654200",type:"district",pinyin:"sha wan xian",py:"swx",prefix:"s"},
    {id:654224,name:"托里县",pid:"654200",type:"district",pinyin:"tuo li xian",py:"tlx",prefix:"t"},
    {id:654225,name:"裕民县",pid:"654200",type:"district",pinyin:"yu min xian",py:"ymx",prefix:"y"},
    {id:654226,name:"和布克赛尔蒙古自治县",pid:"654200",type:"district",pinyin:"he bu ke sai er meng gu zi zhi xian",py:"hbksemgzzx",prefix:"h"},
    {id:654301,name:"阿勒泰市",pid:"654300",type:"district",pinyin:"a le tai shi",py:"alts",prefix:"a"},
    {id:654321,name:"布尔津县",pid:"654300",type:"district",pinyin:"bu er jin xian",py:"bejx",prefix:"b"},
    {id:654322,name:"富蕴县",pid:"654300",type:"district",pinyin:"fu yun xian",py:"fyx",prefix:"f"},
    {id:654323,name:"福海县",pid:"654300",type:"district",pinyin:"fu hai xian",py:"fhx",prefix:"f"},
    {id:654324,name:"哈巴河县",pid:"654300",type:"district",pinyin:"ha ba he xian",py:"hbhx",prefix:"h"},
    {id:654325,name:"青河县",pid:"654300",type:"district",pinyin:"qing he xian",py:"qhx",prefix:"q"},
    {id:654326,name:"吉木乃县",pid:"654300",type:"district",pinyin:"ji mu nai xian",py:"jmnx",prefix:"j"},
    {id:659001,name:"石河子市",pid:"659000",type:"district",pinyin:"shi he zi shi",py:"shzs",prefix:"s"},
    {id:659002,name:"阿拉尔市",pid:"659000",type:"district",pinyin:"a la er shi",py:"ales",prefix:"a"},
    {id:659003,name:"图木舒克市",pid:"659000",type:"district",pinyin:"tu mu shu ke shi",py:"tmsks",prefix:"t"},
    {id:659004,name:"五家渠市",pid:"659000",type:"district",pinyin:"wu jia qu shi",py:"wjqs",prefix:"w"},
    {id:710101,name:"中正区",pid:"710100",type:"district",pinyin:"zhong zheng qu",py:"zzq",prefix:"z"},
    {id:710102,name:"大同区",pid:"710100",type:"district",pinyin:"da tong qu",py:"dtq",prefix:"d"},
    {id:710103,name:"中山区",pid:"710100",type:"district",pinyin:"zhong shan qu",py:"zsq",prefix:"z"},
    {id:710104,name:"松山区",pid:"710100",type:"district",pinyin:"song shan qu",py:"ssq",prefix:"s"},
    {id:710105,name:"大安区",pid:"710100",type:"district",pinyin:"da an qu",py:"daq",prefix:"d"},
    {id:710106,name:"万华区",pid:"710100",type:"district",pinyin:"wan hua qu",py:"whq",prefix:"w"},
    {id:710107,name:"信义区",pid:"710100",type:"district",pinyin:"xin yi qu",py:"xyq",prefix:"x"},
    {id:710108,name:"士林区",pid:"710100",type:"district",pinyin:"shi lin qu",py:"slq",prefix:"s"},
    {id:710109,name:"北投区",pid:"710100",type:"district",pinyin:"bei tou qu",py:"btq",prefix:"b"},
    {id:710110,name:"内湖区",pid:"710100",type:"district",pinyin:"nei hu qu",py:"nhq",prefix:"n"},
    {id:710111,name:"南港区",pid:"710100",type:"district",pinyin:"nan gang qu",py:"ngq",prefix:"n"},
    {id:710112,name:"文山区",pid:"710100",type:"district",pinyin:"wen shan qu",py:"wsq",prefix:"w"},
    {id:710113,name:"其它区",pid:"710100",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710201,name:"新兴区",pid:"710200",type:"district",pinyin:"xin xing qu",py:"xxq",prefix:"x"},
    {id:710202,name:"前金区",pid:"710200",type:"district",pinyin:"qian jin qu",py:"qjq",prefix:"q"},
    {id:710203,name:"芩雅区",pid:"710200",type:"district",pinyin:"qin ya qu",py:"qyq",prefix:"q"},
    {id:710204,name:"盐埕区",pid:"710200",type:"district",pinyin:"yan cheng qu",py:"ycq",prefix:"y"},
    {id:710205,name:"鼓山区",pid:"710200",type:"district",pinyin:"gu shan qu",py:"gsq",prefix:"g"},
    {id:710206,name:"旗津区",pid:"710200",type:"district",pinyin:"qi jin qu",py:"qjq",prefix:"q"},
    {id:710207,name:"前镇区",pid:"710200",type:"district",pinyin:"qian zhen qu",py:"qzq",prefix:"q"},
    {id:710208,name:"三民区",pid:"710200",type:"district",pinyin:"san min qu",py:"smq",prefix:"s"},
    {id:710209,name:"左营区",pid:"710200",type:"district",pinyin:"zuo ying qu",py:"zyq",prefix:"z"},
    {id:710210,name:"楠梓区",pid:"710200",type:"district",pinyin:"nan zi qu",py:"nzq",prefix:"n"},
    {id:710211,name:"小港区",pid:"710200",type:"district",pinyin:"xiao gang qu",py:"xgq",prefix:"x"},
    {id:710212,name:"其它区",pid:"710200",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710241,name:"苓雅区",pid:"710200",type:"district",pinyin:"ling ya qu",py:"lyq",prefix:"l"},
    {id:710242,name:"仁武区",pid:"710200",type:"district",pinyin:"ren wu qu",py:"rwq",prefix:"r"},
    {id:710243,name:"大社区",pid:"710200",type:"district",pinyin:"da she qu",py:"dsq",prefix:"d"},
    {id:710244,name:"冈山区",pid:"710200",type:"district",pinyin:"gang shan qu",py:"gsq",prefix:"g"},
    {id:710245,name:"路竹区",pid:"710200",type:"district",pinyin:"lu zhu qu",py:"lzq",prefix:"l"},
    {id:710246,name:"阿莲区",pid:"710200",type:"district",pinyin:"a lian qu",py:"alq",prefix:"a"},
    {id:710247,name:"田寮区",pid:"710200",type:"district",pinyin:"tian liao qu",py:"tlq",prefix:"t"},
    {id:710248,name:"燕巢区",pid:"710200",type:"district",pinyin:"yan chao qu",py:"ycq",prefix:"y"},
    {id:710249,name:"桥头区",pid:"710200",type:"district",pinyin:"qiao tou qu",py:"qtq",prefix:"q"},
    {id:710250,name:"梓官区",pid:"710200",type:"district",pinyin:"zi guan qu",py:"zgq",prefix:"z"},
    {id:710251,name:"弥陀区",pid:"710200",type:"district",pinyin:"mi tuo qu",py:"mtq",prefix:"m"},
    {id:710252,name:"永安区",pid:"710200",type:"district",pinyin:"yong an qu",py:"yaq",prefix:"y"},
    {id:710253,name:"湖内区",pid:"710200",type:"district",pinyin:"hu nei qu",py:"hnq",prefix:"h"},
    {id:710254,name:"凤山区",pid:"710200",type:"district",pinyin:"feng shan qu",py:"fsq",prefix:"f"},
    {id:710255,name:"大寮区",pid:"710200",type:"district",pinyin:"da liao qu",py:"dlq",prefix:"d"},
    {id:710256,name:"林园区",pid:"710200",type:"district",pinyin:"lin yuan qu",py:"lyq",prefix:"l"},
    {id:710257,name:"鸟松区",pid:"710200",type:"district",pinyin:"niao song qu",py:"nsq",prefix:"n"},
    {id:710258,name:"大树区",pid:"710200",type:"district",pinyin:"da shu qu",py:"dsq",prefix:"d"},
    {id:710259,name:"旗山区",pid:"710200",type:"district",pinyin:"qi shan qu",py:"qsq",prefix:"q"},
    {id:710260,name:"美浓区",pid:"710200",type:"district",pinyin:"mei nong qu",py:"mnq",prefix:"m"},
    {id:710261,name:"六龟区",pid:"710200",type:"district",pinyin:"liu gui qu",py:"lgq",prefix:"l"},
    {id:710262,name:"内门区",pid:"710200",type:"district",pinyin:"nei men qu",py:"nmq",prefix:"n"},
    {id:710263,name:"杉林区",pid:"710200",type:"district",pinyin:"shan lin qu",py:"slq",prefix:"s"},
    {id:710264,name:"甲仙区",pid:"710200",type:"district",pinyin:"jia xian qu",py:"jxq",prefix:"j"},
    {id:710265,name:"桃源区",pid:"710200",type:"district",pinyin:"tao yuan qu",py:"tyq",prefix:"t"},
    {id:710266,name:"那玛夏区",pid:"710200",type:"district",pinyin:"nei ma xia qu",py:"nmxq",prefix:"n"},
    {id:710267,name:"茂林区",pid:"710200",type:"district",pinyin:"mao lin qu",py:"mlq",prefix:"m"},
    {id:710268,name:"茄萣区",pid:"710200",type:"district",pinyin:"qie ding qu",py:"qdq",prefix:"q"},
    {id:710301,name:"中西区",pid:"710300",type:"district",pinyin:"zhong xi qu",py:"zxq",prefix:"z"},
    {id:710302,name:"东区",pid:"710300",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:710303,name:"南区",pid:"710300",type:"district",pinyin:"nan qu",py:"nq",prefix:"n"},
    {id:710304,name:"北区",pid:"710300",type:"district",pinyin:"bei qu",py:"bq",prefix:"b"},
    {id:710305,name:"安平区",pid:"710300",type:"district",pinyin:"an ping qu",py:"apq",prefix:"a"},
    {id:710306,name:"安南区",pid:"710300",type:"district",pinyin:"an nan qu",py:"anq",prefix:"a"},
    {id:710307,name:"其它区",pid:"710300",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710339,name:"永康区",pid:"710300",type:"district",pinyin:"yong kang qu",py:"ykq",prefix:"y"},
    {id:710340,name:"归仁区",pid:"710300",type:"district",pinyin:"gui ren qu",py:"grq",prefix:"g"},
    {id:710341,name:"新化区",pid:"710300",type:"district",pinyin:"xin hua qu",py:"xhq",prefix:"x"},
    {id:710342,name:"左镇区",pid:"710300",type:"district",pinyin:"zuo zhen qu",py:"zzq",prefix:"z"},
    {id:710343,name:"玉井区",pid:"710300",type:"district",pinyin:"yu jing qu",py:"yjq",prefix:"y"},
    {id:710344,name:"楠西区",pid:"710300",type:"district",pinyin:"nan xi qu",py:"nxq",prefix:"n"},
    {id:710345,name:"南化区",pid:"710300",type:"district",pinyin:"nan hua qu",py:"nhq",prefix:"n"},
    {id:710346,name:"仁德区",pid:"710300",type:"district",pinyin:"ren de qu",py:"rdq",prefix:"r"},
    {id:710347,name:"关庙区",pid:"710300",type:"district",pinyin:"guan miao qu",py:"gmq",prefix:"g"},
    {id:710348,name:"龙崎区",pid:"710300",type:"district",pinyin:"long qi qu",py:"lqq",prefix:"l"},
    {id:710349,name:"官田区",pid:"710300",type:"district",pinyin:"guan tian qu",py:"gtq",prefix:"g"},
    {id:710350,name:"麻豆区",pid:"710300",type:"district",pinyin:"ma dou qu",py:"mdq",prefix:"m"},
    {id:710351,name:"佳里区",pid:"710300",type:"district",pinyin:"jia li qu",py:"jlq",prefix:"j"},
    {id:710352,name:"西港区",pid:"710300",type:"district",pinyin:"xi gang qu",py:"xgq",prefix:"x"},
    {id:710353,name:"七股区",pid:"710300",type:"district",pinyin:"qi gu qu",py:"qgq",prefix:"q"},
    {id:710354,name:"将军区",pid:"710300",type:"district",pinyin:"jiang jun qu",py:"jjq",prefix:"j"},
    {id:710355,name:"学甲区",pid:"710300",type:"district",pinyin:"xue jia qu",py:"xjq",prefix:"x"},
    {id:710356,name:"北门区",pid:"710300",type:"district",pinyin:"bei men qu",py:"bmq",prefix:"b"},
    {id:710357,name:"新营区",pid:"710300",type:"district",pinyin:"xin ying qu",py:"xyq",prefix:"x"},
    {id:710358,name:"后壁区",pid:"710300",type:"district",pinyin:"hou bi qu",py:"hbq",prefix:"h"},
    {id:710359,name:"白河区",pid:"710300",type:"district",pinyin:"bai he qu",py:"bhq",prefix:"b"},
    {id:710360,name:"东山区",pid:"710300",type:"district",pinyin:"dong shan qu",py:"dsq",prefix:"d"},
    {id:710361,name:"六甲区",pid:"710300",type:"district",pinyin:"liu jia qu",py:"ljq",prefix:"l"},
    {id:710362,name:"下营区",pid:"710300",type:"district",pinyin:"xia ying qu",py:"xyq",prefix:"x"},
    {id:710363,name:"柳营区",pid:"710300",type:"district",pinyin:"liu ying qu",py:"lyq",prefix:"l"},
    {id:710364,name:"盐水区",pid:"710300",type:"district",pinyin:"yan shui qu",py:"ysq",prefix:"y"},
    {id:710365,name:"善化区",pid:"710300",type:"district",pinyin:"shan hua qu",py:"shq",prefix:"s"},
    {id:710366,name:"大内区",pid:"710300",type:"district",pinyin:"da nei qu",py:"dnq",prefix:"d"},
    {id:710367,name:"山上区",pid:"710300",type:"district",pinyin:"shan shang qu",py:"ssq",prefix:"s"},
    {id:710368,name:"新市区",pid:"710300",type:"district",pinyin:"xin shi qu",py:"xsq",prefix:"x"},
    {id:710369,name:"安定区",pid:"710300",type:"district",pinyin:"an ding qu",py:"adq",prefix:"a"},
    {id:710401,name:"中区",pid:"710400",type:"district",pinyin:"zhong qu",py:"zq",prefix:"z"},
    {id:710402,name:"东区",pid:"710400",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:710403,name:"南区",pid:"710400",type:"district",pinyin:"nan qu",py:"nq",prefix:"n"},
    {id:710404,name:"西区",pid:"710400",type:"district",pinyin:"xi qu",py:"xq",prefix:"x"},
    {id:710405,name:"北区",pid:"710400",type:"district",pinyin:"bei qu",py:"bq",prefix:"b"},
    {id:710406,name:"北屯区",pid:"710400",type:"district",pinyin:"bei tun qu",py:"btq",prefix:"b"},
    {id:710407,name:"西屯区",pid:"710400",type:"district",pinyin:"xi tun qu",py:"xtq",prefix:"x"},
    {id:710408,name:"南屯区",pid:"710400",type:"district",pinyin:"nan tun qu",py:"ntq",prefix:"n"},
    {id:710409,name:"其它区",pid:"710400",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710431,name:"太平区",pid:"710400",type:"district",pinyin:"tai ping qu",py:"tpq",prefix:"t"},
    {id:710432,name:"大里区",pid:"710400",type:"district",pinyin:"da li qu",py:"dlq",prefix:"d"},
    {id:710433,name:"雾峰区",pid:"710400",type:"district",pinyin:"wu feng qu",py:"wfq",prefix:"w"},
    {id:710434,name:"乌日区",pid:"710400",type:"district",pinyin:"wu ri qu",py:"wrq",prefix:"w"},
    {id:710435,name:"丰原区",pid:"710400",type:"district",pinyin:"feng yuan qu",py:"fyq",prefix:"f"},
    {id:710436,name:"后里区",pid:"710400",type:"district",pinyin:"hou li qu",py:"hlq",prefix:"h"},
    {id:710437,name:"石冈区",pid:"710400",type:"district",pinyin:"shi gang qu",py:"sgq",prefix:"s"},
    {id:710438,name:"东势区",pid:"710400",type:"district",pinyin:"dong shi qu",py:"dsq",prefix:"d"},
    {id:710439,name:"和平区",pid:"710400",type:"district",pinyin:"he ping qu",py:"hpq",prefix:"h"},
    {id:710440,name:"新社区",pid:"710400",type:"district",pinyin:"xin she qu",py:"xsq",prefix:"x"},
    {id:710441,name:"潭子区",pid:"710400",type:"district",pinyin:"tan zi qu",py:"tzq",prefix:"t"},
    {id:710442,name:"大雅区",pid:"710400",type:"district",pinyin:"da ya qu",py:"dyq",prefix:"d"},
    {id:710443,name:"神冈区",pid:"710400",type:"district",pinyin:"shen gang qu",py:"sgq",prefix:"s"},
    {id:710444,name:"大肚区",pid:"710400",type:"district",pinyin:"da du qu",py:"ddq",prefix:"d"},
    {id:710445,name:"沙鹿区",pid:"710400",type:"district",pinyin:"sha lu qu",py:"slq",prefix:"s"},
    {id:710446,name:"龙井区",pid:"710400",type:"district",pinyin:"long jing qu",py:"ljq",prefix:"l"},
    {id:710447,name:"梧栖区",pid:"710400",type:"district",pinyin:"wu qi qu",py:"wqq",prefix:"w"},
    {id:710448,name:"清水区",pid:"710400",type:"district",pinyin:"qing shui qu",py:"qsq",prefix:"q"},
    {id:710449,name:"大甲区",pid:"710400",type:"district",pinyin:"da jia qu",py:"djq",prefix:"d"},
    {id:710450,name:"外埔区",pid:"710400",type:"district",pinyin:"wai pu qu",py:"wpq",prefix:"w"},
    {id:710451,name:"大安区",pid:"710400",type:"district",pinyin:"da an qu",py:"daq",prefix:"d"},
    {id:710507,name:"金沙镇",pid:"710500",type:"district",pinyin:"jin sha zhen",py:"jsz",prefix:"j"},
    {id:710508,name:"金湖镇",pid:"710500",type:"district",pinyin:"jin hu zhen",py:"jhz",prefix:"j"},
    {id:710509,name:"金宁乡",pid:"710500",type:"district",pinyin:"jin ning xiang",py:"jnx",prefix:"j"},
    {id:710510,name:"金城镇",pid:"710500",type:"district",pinyin:"jin cheng zhen",py:"jcz",prefix:"j"},
    {id:710511,name:"烈屿乡",pid:"710500",type:"district",pinyin:"lie yu xiang",py:"lyx",prefix:"l"},
    {id:710512,name:"乌坵乡",pid:"710500",type:"district",pinyin:"wu qiu xiang",py:"wqx",prefix:"w"},
    {id:710614,name:"南投市",pid:"710600",type:"district",pinyin:"nan tou shi",py:"nts",prefix:"n"},
    {id:710615,name:"中寮乡",pid:"710600",type:"district",pinyin:"zhong liao xiang",py:"zlx",prefix:"z"},
    {id:710616,name:"草屯镇",pid:"710600",type:"district",pinyin:"cao tun zhen",py:"ctz",prefix:"c"},
    {id:710617,name:"国姓乡",pid:"710600",type:"district",pinyin:"guo xing xiang",py:"gxx",prefix:"g"},
    {id:710618,name:"埔里镇",pid:"710600",type:"district",pinyin:"pu li zhen",py:"plz",prefix:"p"},
    {id:710619,name:"仁爱乡",pid:"710600",type:"district",pinyin:"ren ai xiang",py:"rax",prefix:"r"},
    {id:710620,name:"名间乡",pid:"710600",type:"district",pinyin:"ming jian xiang",py:"mjx",prefix:"m"},
    {id:710621,name:"集集镇",pid:"710600",type:"district",pinyin:"ji ji zhen",py:"jjz",prefix:"j"},
    {id:710622,name:"水里乡",pid:"710600",type:"district",pinyin:"shui li xiang",py:"slx",prefix:"s"},
    {id:710623,name:"鱼池乡",pid:"710600",type:"district",pinyin:"yu chi xiang",py:"ycx",prefix:"y"},
    {id:710624,name:"信义乡",pid:"710600",type:"district",pinyin:"xin yi xiang",py:"xyx",prefix:"x"},
    {id:710625,name:"竹山镇",pid:"710600",type:"district",pinyin:"zhu shan zhen",py:"zsz",prefix:"z"},
    {id:710626,name:"鹿谷乡",pid:"710600",type:"district",pinyin:"lu gu xiang",py:"lgx",prefix:"l"},
    {id:710701,name:"仁爱区",pid:"710700",type:"district",pinyin:"ren ai qu",py:"raq",prefix:"r"},
    {id:710702,name:"信义区",pid:"710700",type:"district",pinyin:"xin yi qu",py:"xyq",prefix:"x"},
    {id:710703,name:"中正区",pid:"710700",type:"district",pinyin:"zhong zheng qu",py:"zzq",prefix:"z"},
    {id:710704,name:"中山区",pid:"710700",type:"district",pinyin:"zhong shan qu",py:"zsq",prefix:"z"},
    {id:710705,name:"安乐区",pid:"710700",type:"district",pinyin:"an le qu",py:"alq",prefix:"a"},
    {id:710706,name:"暖暖区",pid:"710700",type:"district",pinyin:"nuan nuan qu",py:"nnq",prefix:"n"},
    {id:710707,name:"七堵区",pid:"710700",type:"district",pinyin:"qi du qu",py:"qdq",prefix:"q"},
    {id:710708,name:"其它区",pid:"710700",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710801,name:"东区",pid:"710800",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:710802,name:"北区",pid:"710800",type:"district",pinyin:"bei qu",py:"bq",prefix:"b"},
    {id:710803,name:"香山区",pid:"710800",type:"district",pinyin:"xiang shan qu",py:"xsq",prefix:"x"},
    {id:710804,name:"其它区",pid:"710800",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:710901,name:"东区",pid:"710900",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:710902,name:"西区",pid:"710900",type:"district",pinyin:"xi qu",py:"xq",prefix:"x"},
    {id:710903,name:"其它区",pid:"710900",type:"district",pinyin:"qi ta qu",py:"qtq",prefix:"q"},
    {id:711130,name:"万里区",pid:"711100",type:"district",pinyin:"wan li qu",py:"wlq",prefix:"w"},
    {id:711131,name:"金山区",pid:"711100",type:"district",pinyin:"jin shan qu",py:"jsq",prefix:"j"},
    {id:711132,name:"板桥区",pid:"711100",type:"district",pinyin:"ban qiao qu",py:"bqq",prefix:"b"},
    {id:711133,name:"汐止区",pid:"711100",type:"district",pinyin:"xi zhi qu",py:"xzq",prefix:"x"},
    {id:711134,name:"深坑区",pid:"711100",type:"district",pinyin:"shen keng qu",py:"skq",prefix:"s"},
    {id:711135,name:"石碇区",pid:"711100",type:"district",pinyin:"shi ding qu",py:"sdq",prefix:"s"},
    {id:711136,name:"瑞芳区",pid:"711100",type:"district",pinyin:"rui fang qu",py:"rfq",prefix:"r"},
    {id:711137,name:"平溪区",pid:"711100",type:"district",pinyin:"ping xi qu",py:"pxq",prefix:"p"},
    {id:711138,name:"双溪区",pid:"711100",type:"district",pinyin:"shuang xi qu",py:"sxq",prefix:"s"},
    {id:711139,name:"贡寮区",pid:"711100",type:"district",pinyin:"gong liao qu",py:"glq",prefix:"g"},
    {id:711140,name:"新店区",pid:"711100",type:"district",pinyin:"xin dian qu",py:"xdq",prefix:"x"},
    {id:711141,name:"坪林区",pid:"711100",type:"district",pinyin:"ping lin qu",py:"plq",prefix:"p"},
    {id:711142,name:"乌来区",pid:"711100",type:"district",pinyin:"wu lai qu",py:"wlq",prefix:"w"},
    {id:711143,name:"永和区",pid:"711100",type:"district",pinyin:"yong he qu",py:"yhq",prefix:"y"},
    {id:711144,name:"中和区",pid:"711100",type:"district",pinyin:"zhong he qu",py:"zhq",prefix:"z"},
    {id:711145,name:"土城区",pid:"711100",type:"district",pinyin:"tu cheng qu",py:"tcq",prefix:"t"},
    {id:711146,name:"三峡区",pid:"711100",type:"district",pinyin:"san xia qu",py:"sxq",prefix:"s"},
    {id:711147,name:"树林区",pid:"711100",type:"district",pinyin:"shu lin qu",py:"slq",prefix:"s"},
    {id:711148,name:"莺歌区",pid:"711100",type:"district",pinyin:"ying ge qu",py:"ygq",prefix:"y"},
    {id:711149,name:"三重区",pid:"711100",type:"district",pinyin:"san chong qu",py:"scq",prefix:"s"},
    {id:711150,name:"新庄区",pid:"711100",type:"district",pinyin:"xin zhuang qu",py:"xzq",prefix:"x"},
    {id:711151,name:"泰山区",pid:"711100",type:"district",pinyin:"tai shan qu",py:"tsq",prefix:"t"},
    {id:711152,name:"林口区",pid:"711100",type:"district",pinyin:"lin kou qu",py:"lkq",prefix:"l"},
    {id:711153,name:"芦洲区",pid:"711100",type:"district",pinyin:"lu zhou qu",py:"lzq",prefix:"l"},
    {id:711154,name:"五股区",pid:"711100",type:"district",pinyin:"wu gu qu",py:"wgq",prefix:"w"},
    {id:711155,name:"八里区",pid:"711100",type:"district",pinyin:"ba li qu",py:"blq",prefix:"b"},
    {id:711156,name:"淡水区",pid:"711100",type:"district",pinyin:"dan shui qu",py:"dsq",prefix:"d"},
    {id:711157,name:"三芝区",pid:"711100",type:"district",pinyin:"san zhi qu",py:"szq",prefix:"s"},
    {id:711158,name:"石门区",pid:"711100",type:"district",pinyin:"shi men qu",py:"smq",prefix:"s"},
    {id:711214,name:"宜兰市",pid:"711200",type:"district",pinyin:"yi lan shi",py:"yls",prefix:"y"},
    {id:711215,name:"头城镇",pid:"711200",type:"district",pinyin:"tou cheng zhen",py:"tcz",prefix:"t"},
    {id:711216,name:"礁溪乡",pid:"711200",type:"district",pinyin:"jiao xi xiang",py:"jxx",prefix:"j"},
    {id:711217,name:"壮围乡",pid:"711200",type:"district",pinyin:"zhuang wei xiang",py:"zwx",prefix:"z"},
    {id:711218,name:"员山乡",pid:"711200",type:"district",pinyin:"yuan shan xiang",py:"ysx",prefix:"y"},
    {id:711219,name:"罗东镇",pid:"711200",type:"district",pinyin:"luo dong zhen",py:"ldz",prefix:"l"},
    {id:711220,name:"三星乡",pid:"711200",type:"district",pinyin:"san xing xiang",py:"sxx",prefix:"s"},
    {id:711221,name:"大同乡",pid:"711200",type:"district",pinyin:"da tong xiang",py:"dtx",prefix:"d"},
    {id:711222,name:"五结乡",pid:"711200",type:"district",pinyin:"wu jie xiang",py:"wjx",prefix:"w"},
    {id:711223,name:"冬山乡",pid:"711200",type:"district",pinyin:"dong shan xiang",py:"dsx",prefix:"d"},
    {id:711224,name:"苏澳镇",pid:"711200",type:"district",pinyin:"su ao zhen",py:"saz",prefix:"s"},
    {id:711225,name:"南澳乡",pid:"711200",type:"district",pinyin:"nan ao xiang",py:"nax",prefix:"n"},
    {id:711226,name:"钓鱼台",pid:"711200",type:"district",pinyin:"diao yu tai",py:"dyt",prefix:"d"},
    {id:711314,name:"竹北市",pid:"711300",type:"district",pinyin:"zhu bei shi",py:"zbs",prefix:"z"},
    {id:711315,name:"湖口乡",pid:"711300",type:"district",pinyin:"hu kou xiang",py:"hkx",prefix:"h"},
    {id:711316,name:"新丰乡",pid:"711300",type:"district",pinyin:"xin feng xiang",py:"xfx",prefix:"x"},
    {id:711317,name:"新埔镇",pid:"711300",type:"district",pinyin:"xin pu zhen",py:"xpz",prefix:"x"},
    {id:711318,name:"关西镇",pid:"711300",type:"district",pinyin:"guan xi zhen",py:"gxz",prefix:"g"},
    {id:711319,name:"芎林乡",pid:"711300",type:"district",pinyin:"xiong lin xiang",py:"xlx",prefix:"x"},
    {id:711320,name:"宝山乡",pid:"711300",type:"district",pinyin:"bao shan xiang",py:"bsx",prefix:"b"},
    {id:711321,name:"竹东镇",pid:"711300",type:"district",pinyin:"zhu dong zhen",py:"zdz",prefix:"z"},
    {id:711322,name:"五峰乡",pid:"711300",type:"district",pinyin:"wu feng xiang",py:"wfx",prefix:"w"},
    {id:711323,name:"横山乡",pid:"711300",type:"district",pinyin:"heng shan xiang",py:"hsx",prefix:"h"},
    {id:711324,name:"尖石乡",pid:"711300",type:"district",pinyin:"jian shi xiang",py:"jsx",prefix:"j"},
    {id:711325,name:"北埔乡",pid:"711300",type:"district",pinyin:"bei pu xiang",py:"bpx",prefix:"b"},
    {id:711326,name:"峨眉乡",pid:"711300",type:"district",pinyin:"e mei xiang",py:"emx",prefix:"e"},
    {id:711414,name:"中坜市",pid:"711400",type:"district",pinyin:"zhong li shi",py:"zls",prefix:"z"},
    {id:711415,name:"平镇市",pid:"711400",type:"district",pinyin:"ping zhen shi",py:"pzs",prefix:"p"},
    {id:711416,name:"龙潭乡",pid:"711400",type:"district",pinyin:"long tan xiang",py:"ltx",prefix:"l"},
    {id:711417,name:"杨梅市",pid:"711400",type:"district",pinyin:"yang mei shi",py:"yms",prefix:"y"},
    {id:711418,name:"新屋乡",pid:"711400",type:"district",pinyin:"xin wu xiang",py:"xwx",prefix:"x"},
    {id:711419,name:"观音乡",pid:"711400",type:"district",pinyin:"guan yin xiang",py:"gyx",prefix:"g"},
    {id:711420,name:"桃园市",pid:"711400",type:"district",pinyin:"tao yuan shi",py:"tys",prefix:"t"},
    {id:711421,name:"龟山乡",pid:"711400",type:"district",pinyin:"gui shan xiang",py:"gsx",prefix:"g"},
    {id:711422,name:"八德市",pid:"711400",type:"district",pinyin:"ba de shi",py:"bds",prefix:"b"},
    {id:711423,name:"大溪镇",pid:"711400",type:"district",pinyin:"da xi zhen",py:"dxz",prefix:"d"},
    {id:711424,name:"复兴乡",pid:"711400",type:"district",pinyin:"fu xing xiang",py:"fxx",prefix:"f"},
    {id:711425,name:"大园乡",pid:"711400",type:"district",pinyin:"da yuan xiang",py:"dyx",prefix:"d"},
    {id:711426,name:"芦竹乡",pid:"711400",type:"district",pinyin:"lu zhu xiang",py:"lzx",prefix:"l"},
    {id:711519,name:"竹南镇",pid:"711500",type:"district",pinyin:"zhu nan zhen",py:"znz",prefix:"z"},
    {id:711520,name:"头份镇",pid:"711500",type:"district",pinyin:"tou fen zhen",py:"tfz",prefix:"t"},
    {id:711521,name:"三湾乡",pid:"711500",type:"district",pinyin:"san wan xiang",py:"swx",prefix:"s"},
    {id:711522,name:"南庄乡",pid:"711500",type:"district",pinyin:"nan zhuang xiang",py:"nzx",prefix:"n"},
    {id:711523,name:"狮潭乡",pid:"711500",type:"district",pinyin:"shi tan xiang",py:"stx",prefix:"s"},
    {id:711524,name:"后龙镇",pid:"711500",type:"district",pinyin:"hou long zhen",py:"hlz",prefix:"h"},
    {id:711525,name:"通霄镇",pid:"711500",type:"district",pinyin:"tong xiao zhen",py:"txz",prefix:"t"},
    {id:711526,name:"苑里镇",pid:"711500",type:"district",pinyin:"yuan li zhen",py:"ylz",prefix:"y"},
    {id:711527,name:"苗栗市",pid:"711500",type:"district",pinyin:"miao li shi",py:"mls",prefix:"m"},
    {id:711528,name:"造桥乡",pid:"711500",type:"district",pinyin:"zao qiao xiang",py:"zqx",prefix:"z"},
    {id:711529,name:"头屋乡",pid:"711500",type:"district",pinyin:"tou wu xiang",py:"twx",prefix:"t"},
    {id:711530,name:"公馆乡",pid:"711500",type:"district",pinyin:"gong guan xiang",py:"ggx",prefix:"g"},
    {id:711531,name:"大湖乡",pid:"711500",type:"district",pinyin:"da hu xiang",py:"dhx",prefix:"d"},
    {id:711532,name:"泰安乡",pid:"711500",type:"district",pinyin:"tai an xiang",py:"tax",prefix:"t"},
    {id:711533,name:"铜锣乡",pid:"711500",type:"district",pinyin:"tong luo xiang",py:"tlx",prefix:"t"},
    {id:711534,name:"三义乡",pid:"711500",type:"district",pinyin:"san yi xiang",py:"syx",prefix:"s"},
    {id:711535,name:"西湖乡",pid:"711500",type:"district",pinyin:"xi hu xiang",py:"xhx",prefix:"x"},
    {id:711536,name:"卓兰镇",pid:"711500",type:"district",pinyin:"zhuo lan zhen",py:"zlz",prefix:"z"},
    {id:711727,name:"彰化市",pid:"711700",type:"district",pinyin:"zhang hua shi",py:"zhs",prefix:"z"},
    {id:711728,name:"芬园乡",pid:"711700",type:"district",pinyin:"fen yuan xiang",py:"fyx",prefix:"f"},
    {id:711729,name:"花坛乡",pid:"711700",type:"district",pinyin:"hua tan xiang",py:"htx",prefix:"h"},
    {id:711730,name:"秀水乡",pid:"711700",type:"district",pinyin:"xiu shui xiang",py:"xsx",prefix:"x"},
    {id:711731,name:"鹿港镇",pid:"711700",type:"district",pinyin:"lu gang zhen",py:"lgz",prefix:"l"},
    {id:711732,name:"福兴乡",pid:"711700",type:"district",pinyin:"fu xing xiang",py:"fxx",prefix:"f"},
    {id:711733,name:"线西乡",pid:"711700",type:"district",pinyin:"xian xi xiang",py:"xxx",prefix:"x"},
    {id:711734,name:"和美镇",pid:"711700",type:"district",pinyin:"he mei zhen",py:"hmz",prefix:"h"},
    {id:711735,name:"伸港乡",pid:"711700",type:"district",pinyin:"shen gang xiang",py:"sgx",prefix:"s"},
    {id:711736,name:"员林镇",pid:"711700",type:"district",pinyin:"yuan lin zhen",py:"ylz",prefix:"y"},
    {id:711737,name:"社头乡",pid:"711700",type:"district",pinyin:"she tou xiang",py:"stx",prefix:"s"},
    {id:711738,name:"永靖乡",pid:"711700",type:"district",pinyin:"yong jing xiang",py:"yjx",prefix:"y"},
    {id:711739,name:"埔心乡",pid:"711700",type:"district",pinyin:"pu xin xiang",py:"pxx",prefix:"p"},
    {id:711740,name:"溪湖镇",pid:"711700",type:"district",pinyin:"xi hu zhen",py:"xhz",prefix:"x"},
    {id:711741,name:"大村乡",pid:"711700",type:"district",pinyin:"da cun xiang",py:"dcx",prefix:"d"},
    {id:711742,name:"埔盐乡",pid:"711700",type:"district",pinyin:"pu yan xiang",py:"pyx",prefix:"p"},
    {id:711743,name:"田中镇",pid:"711700",type:"district",pinyin:"tian zhong zhen",py:"tzz",prefix:"t"},
    {id:711744,name:"北斗镇",pid:"711700",type:"district",pinyin:"bei dou zhen",py:"bdz",prefix:"b"},
    {id:711745,name:"田尾乡",pid:"711700",type:"district",pinyin:"tian wei xiang",py:"twx",prefix:"t"},
    {id:711746,name:"埤头乡",pid:"711700",type:"district",pinyin:"pi tou xiang",py:"ptx",prefix:"p"},
    {id:711747,name:"溪州乡",pid:"711700",type:"district",pinyin:"xi zhou xiang",py:"xzx",prefix:"x"},
    {id:711748,name:"竹塘乡",pid:"711700",type:"district",pinyin:"zhu tang xiang",py:"ztx",prefix:"z"},
    {id:711749,name:"二林镇",pid:"711700",type:"district",pinyin:"er lin zhen",py:"elz",prefix:"e"},
    {id:711750,name:"大城乡",pid:"711700",type:"district",pinyin:"da cheng xiang",py:"dcx",prefix:"d"},
    {id:711751,name:"芳苑乡",pid:"711700",type:"district",pinyin:"fang yuan xiang",py:"fyx",prefix:"f"},
    {id:711752,name:"二水乡",pid:"711700",type:"district",pinyin:"er shui xiang",py:"esx",prefix:"e"},
    {id:711919,name:"番路乡",pid:"711900",type:"district",pinyin:"fan lu xiang",py:"flx",prefix:"f"},
    {id:711920,name:"梅山乡",pid:"711900",type:"district",pinyin:"mei shan xiang",py:"msx",prefix:"m"},
    {id:711921,name:"竹崎乡",pid:"711900",type:"district",pinyin:"zhu qi xiang",py:"zqx",prefix:"z"},
    {id:711922,name:"阿里山乡",pid:"711900",type:"district",pinyin:"a li shan xiang",py:"alsx",prefix:"a"},
    {id:711923,name:"中埔乡",pid:"711900",type:"district",pinyin:"zhong pu xiang",py:"zpx",prefix:"z"},
    {id:711924,name:"大埔乡",pid:"711900",type:"district",pinyin:"da pu xiang",py:"dpx",prefix:"d"},
    {id:711925,name:"水上乡",pid:"711900",type:"district",pinyin:"shui shang xiang",py:"ssx",prefix:"s"},
    {id:711926,name:"鹿草乡",pid:"711900",type:"district",pinyin:"lu cao xiang",py:"lcx",prefix:"l"},
    {id:711927,name:"太保市",pid:"711900",type:"district",pinyin:"tai bao shi",py:"tbs",prefix:"t"},
    {id:711928,name:"朴子市",pid:"711900",type:"district",pinyin:"po zi shi",py:"pzs",prefix:"p"},
    {id:711929,name:"东石乡",pid:"711900",type:"district",pinyin:"dong shi xiang",py:"dsx",prefix:"d"},
    {id:711930,name:"六脚乡",pid:"711900",type:"district",pinyin:"liu jiao xiang",py:"ljx",prefix:"l"},
    {id:711931,name:"新港乡",pid:"711900",type:"district",pinyin:"xin gang xiang",py:"xgx",prefix:"x"},
    {id:711932,name:"民雄乡",pid:"711900",type:"district",pinyin:"min xiong xiang",py:"mxx",prefix:"m"},
    {id:711933,name:"大林镇",pid:"711900",type:"district",pinyin:"da lin zhen",py:"dlz",prefix:"d"},
    {id:711934,name:"溪口乡",pid:"711900",type:"district",pinyin:"xi kou xiang",py:"xkx",prefix:"x"},
    {id:711935,name:"义竹乡",pid:"711900",type:"district",pinyin:"yi zhu xiang",py:"yzx",prefix:"y"},
    {id:711936,name:"布袋镇",pid:"711900",type:"district",pinyin:"bu dai zhen",py:"bdz",prefix:"b"},
    {id:712121,name:"斗南镇",pid:"712100",type:"district",pinyin:"dou nan zhen",py:"dnz",prefix:"d"},
    {id:712122,name:"大埤乡",pid:"712100",type:"district",pinyin:"da pi xiang",py:"dpx",prefix:"d"},
    {id:712123,name:"虎尾镇",pid:"712100",type:"district",pinyin:"hu wei zhen",py:"hwz",prefix:"h"},
    {id:712124,name:"土库镇",pid:"712100",type:"district",pinyin:"tu ku zhen",py:"tkz",prefix:"t"},
    {id:712125,name:"褒忠乡",pid:"712100",type:"district",pinyin:"bao zhong xiang",py:"bzx",prefix:"b"},
    {id:712126,name:"东势乡",pid:"712100",type:"district",pinyin:"dong shi xiang",py:"dsx",prefix:"d"},
    {id:712127,name:"台西乡",pid:"712100",type:"district",pinyin:"tai xi xiang",py:"txx",prefix:"t"},
    {id:712128,name:"仑背乡",pid:"712100",type:"district",pinyin:"lun bei xiang",py:"lbx",prefix:"l"},
    {id:712129,name:"麦寮乡",pid:"712100",type:"district",pinyin:"mai liao xiang",py:"mlx",prefix:"m"},
    {id:712130,name:"斗六市",pid:"712100",type:"district",pinyin:"dou liu shi",py:"dls",prefix:"d"},
    {id:712131,name:"林内乡",pid:"712100",type:"district",pinyin:"lin nei xiang",py:"lnx",prefix:"l"},
    {id:712132,name:"古坑乡",pid:"712100",type:"district",pinyin:"gu keng xiang",py:"gkx",prefix:"g"},
    {id:712133,name:"莿桐乡",pid:"712100",type:"district",pinyin:"ci tong xiang",py:"ctx",prefix:"c"},
    {id:712134,name:"西螺镇",pid:"712100",type:"district",pinyin:"xi luo zhen",py:"xlz",prefix:"x"},
    {id:712135,name:"二仑乡",pid:"712100",type:"district",pinyin:"er lun xiang",py:"elx",prefix:"e"},
    {id:712136,name:"北港镇",pid:"712100",type:"district",pinyin:"bei gang zhen",py:"bgz",prefix:"b"},
    {id:712137,name:"水林乡",pid:"712100",type:"district",pinyin:"shui lin xiang",py:"slx",prefix:"s"},
    {id:712138,name:"口湖乡",pid:"712100",type:"district",pinyin:"kou hu xiang",py:"khx",prefix:"k"},
    {id:712139,name:"四湖乡",pid:"712100",type:"district",pinyin:"si hu xiang",py:"shx",prefix:"s"},
    {id:712140,name:"元长乡",pid:"712100",type:"district",pinyin:"yuan chang xiang",py:"ycx",prefix:"y"},
    {id:712434,name:"屏东市",pid:"712400",type:"district",pinyin:"ping dong shi",py:"pds",prefix:"p"},
    {id:712435,name:"三地门乡",pid:"712400",type:"district",pinyin:"san di men xiang",py:"sdmx",prefix:"s"},
    {id:712436,name:"雾台乡",pid:"712400",type:"district",pinyin:"wu tai xiang",py:"wtx",prefix:"w"},
    {id:712437,name:"玛家乡",pid:"712400",type:"district",pinyin:"ma jia xiang",py:"mjx",prefix:"m"},
    {id:712438,name:"九如乡",pid:"712400",type:"district",pinyin:"jiu ru xiang",py:"jrx",prefix:"j"},
    {id:712439,name:"里港乡",pid:"712400",type:"district",pinyin:"li gang xiang",py:"lgx",prefix:"l"},
    {id:712440,name:"高树乡",pid:"712400",type:"district",pinyin:"gao shu xiang",py:"gsx",prefix:"g"},
    {id:712441,name:"盐埔乡",pid:"712400",type:"district",pinyin:"yan pu xiang",py:"ypx",prefix:"y"},
    {id:712442,name:"长治乡",pid:"712400",type:"district",pinyin:"chang zhi xiang",py:"czx",prefix:"c"},
    {id:712443,name:"麟洛乡",pid:"712400",type:"district",pinyin:"lin luo xiang",py:"llx",prefix:"l"},
    {id:712444,name:"竹田乡",pid:"712400",type:"district",pinyin:"zhu tian xiang",py:"ztx",prefix:"z"},
    {id:712445,name:"内埔乡",pid:"712400",type:"district",pinyin:"nei pu xiang",py:"npx",prefix:"n"},
    {id:712446,name:"万丹乡",pid:"712400",type:"district",pinyin:"wan dan xiang",py:"wdx",prefix:"w"},
    {id:712447,name:"潮州镇",pid:"712400",type:"district",pinyin:"chao zhou zhen",py:"czz",prefix:"c"},
    {id:712448,name:"泰武乡",pid:"712400",type:"district",pinyin:"tai wu xiang",py:"twx",prefix:"t"},
    {id:712449,name:"来义乡",pid:"712400",type:"district",pinyin:"lai yi xiang",py:"lyx",prefix:"l"},
    {id:712450,name:"万峦乡",pid:"712400",type:"district",pinyin:"wan luan xiang",py:"wlx",prefix:"w"},
    {id:712451,name:"崁顶乡",pid:"712400",type:"district",pinyin:"kan ding xiang",py:"kdx",prefix:"k"},
    {id:712452,name:"新埤乡",pid:"712400",type:"district",pinyin:"xin pi xiang",py:"xpx",prefix:"x"},
    {id:712453,name:"南州乡",pid:"712400",type:"district",pinyin:"nan zhou xiang",py:"nzx",prefix:"n"},
    {id:712454,name:"林边乡",pid:"712400",type:"district",pinyin:"lin bian xiang",py:"lbx",prefix:"l"},
    {id:712455,name:"东港镇",pid:"712400",type:"district",pinyin:"dong gang zhen",py:"dgz",prefix:"d"},
    {id:712456,name:"琉球乡",pid:"712400",type:"district",pinyin:"liu qiu xiang",py:"lqx",prefix:"l"},
    {id:712457,name:"佳冬乡",pid:"712400",type:"district",pinyin:"jia dong xiang",py:"jdx",prefix:"j"},
    {id:712458,name:"新园乡",pid:"712400",type:"district",pinyin:"xin yuan xiang",py:"xyx",prefix:"x"},
    {id:712459,name:"枋寮乡",pid:"712400",type:"district",pinyin:"fang liao xiang",py:"flx",prefix:"f"},
    {id:712460,name:"枋山乡",pid:"712400",type:"district",pinyin:"fang shan xiang",py:"fsx",prefix:"f"},
    {id:712461,name:"春日乡",pid:"712400",type:"district",pinyin:"chun ri xiang",py:"crx",prefix:"c"},
    {id:712462,name:"狮子乡",pid:"712400",type:"district",pinyin:"shi zi xiang",py:"szx",prefix:"s"},
    {id:712463,name:"车城乡",pid:"712400",type:"district",pinyin:"che cheng xiang",py:"ccx",prefix:"c"},
    {id:712464,name:"牡丹乡",pid:"712400",type:"district",pinyin:"mu dan xiang",py:"mdx",prefix:"m"},
    {id:712465,name:"恒春镇",pid:"712400",type:"district",pinyin:"heng chun zhen",py:"hcz",prefix:"h"},
    {id:712466,name:"满州乡",pid:"712400",type:"district",pinyin:"man zhou xiang",py:"mzx",prefix:"m"},
    {id:712517,name:"台东市",pid:"712500",type:"district",pinyin:"tai dong shi",py:"tds",prefix:"t"},
    {id:712518,name:"绿岛乡",pid:"712500",type:"district",pinyin:"lv dao xiang",py:"ldx",prefix:"l"},
    {id:712519,name:"兰屿乡",pid:"712500",type:"district",pinyin:"lan yu xiang",py:"lyx",prefix:"l"},
    {id:712520,name:"延平乡",pid:"712500",type:"district",pinyin:"yan ping xiang",py:"ypx",prefix:"y"},
    {id:712521,name:"卑南乡",pid:"712500",type:"district",pinyin:"bei nan xiang",py:"bnx",prefix:"b"},
    {id:712522,name:"鹿野乡",pid:"712500",type:"district",pinyin:"lu ye xiang",py:"lyx",prefix:"l"},
    {id:712523,name:"关山镇",pid:"712500",type:"district",pinyin:"guan shan zhen",py:"gsz",prefix:"g"},
    {id:712524,name:"海端乡",pid:"712500",type:"district",pinyin:"hai duan xiang",py:"hdx",prefix:"h"},
    {id:712525,name:"池上乡",pid:"712500",type:"district",pinyin:"chi shang xiang",py:"csx",prefix:"c"},
    {id:712526,name:"东河乡",pid:"712500",type:"district",pinyin:"dong he xiang",py:"dhx",prefix:"d"},
    {id:712527,name:"成功镇",pid:"712500",type:"district",pinyin:"cheng gong zhen",py:"cgz",prefix:"c"},
    {id:712528,name:"长滨乡",pid:"712500",type:"district",pinyin:"chang bin xiang",py:"cbx",prefix:"c"},
    {id:712529,name:"金峰乡",pid:"712500",type:"district",pinyin:"jin feng xiang",py:"jfx",prefix:"j"},
    {id:712530,name:"大武乡",pid:"712500",type:"district",pinyin:"da wu xiang",py:"dwx",prefix:"d"},
    {id:712531,name:"达仁乡",pid:"712500",type:"district",pinyin:"da ren xiang",py:"drx",prefix:"d"},
    {id:712532,name:"太麻里乡",pid:"712500",type:"district",pinyin:"tai ma li xiang",py:"tmlx",prefix:"t"},
    {id:712615,name:"花莲市",pid:"712600",type:"district",pinyin:"hua lian shi",py:"hls",prefix:"h"},
    {id:712616,name:"新城乡",pid:"712600",type:"district",pinyin:"xin cheng xiang",py:"xcx",prefix:"x"},
    {id:712617,name:"太鲁阁",pid:"712600",type:"district",pinyin:"tai lu ge",py:"tlg",prefix:"t"},
    {id:712618,name:"秀林乡",pid:"712600",type:"district",pinyin:"xiu lin xiang",py:"xlx",prefix:"x"},
    {id:712619,name:"吉安乡",pid:"712600",type:"district",pinyin:"ji an xiang",py:"jax",prefix:"j"},
    {id:712620,name:"寿丰乡",pid:"712600",type:"district",pinyin:"shou feng xiang",py:"sfx",prefix:"s"},
    {id:712621,name:"凤林镇",pid:"712600",type:"district",pinyin:"feng lin zhen",py:"flz",prefix:"f"},
    {id:712622,name:"光复乡",pid:"712600",type:"district",pinyin:"guang fu xiang",py:"gfx",prefix:"g"},
    {id:712623,name:"丰滨乡",pid:"712600",type:"district",pinyin:"feng bin xiang",py:"fbx",prefix:"f"},
    {id:712624,name:"瑞穗乡",pid:"712600",type:"district",pinyin:"rui sui xiang",py:"rsx",prefix:"r"},
    {id:712625,name:"万荣乡",pid:"712600",type:"district",pinyin:"wan rong xiang",py:"wrx",prefix:"w"},
    {id:712626,name:"玉里镇",pid:"712600",type:"district",pinyin:"yu li zhen",py:"ylz",prefix:"y"},
    {id:712627,name:"卓溪乡",pid:"712600",type:"district",pinyin:"zhuo xi xiang",py:"zxx",prefix:"z"},
    {id:712628,name:"富里乡",pid:"712600",type:"district",pinyin:"fu li xiang",py:"flx",prefix:"f"},
    {id:712707,name:"马公市",pid:"712700",type:"district",pinyin:"ma gong shi",py:"mgs",prefix:"m"},
    {id:712708,name:"西屿乡",pid:"712700",type:"district",pinyin:"xi yu xiang",py:"xyx",prefix:"x"},
    {id:712709,name:"望安乡",pid:"712700",type:"district",pinyin:"wang an xiang",py:"wax",prefix:"w"},
    {id:712710,name:"七美乡",pid:"712700",type:"district",pinyin:"qi mei xiang",py:"qmx",prefix:"q"},
    {id:712711,name:"白沙乡",pid:"712700",type:"district",pinyin:"bai sha xiang",py:"bsx",prefix:"b"},
    {id:712712,name:"湖西乡",pid:"712700",type:"district",pinyin:"hu xi xiang",py:"hxx",prefix:"h"},
    {id:712805,name:"南竿乡",pid:"712800",type:"district",pinyin:"nan gan xiang",py:"ngx",prefix:"n"},
    {id:712806,name:"北竿乡",pid:"712800",type:"district",pinyin:"bei gan xiang",py:"bgx",prefix:"b"},
    {id:712807,name:"莒光乡",pid:"712800",type:"district",pinyin:"ju guang xiang",py:"jgx",prefix:"j"},
    {id:712808,name:"东引乡",pid:"712800",type:"district",pinyin:"dong yin xiang",py:"dyx",prefix:"d"},
    {id:810101,name:"中西区",pid:"810100",type:"district",pinyin:"zhong xi qu",py:"zxq",prefix:"z"},
    {id:810102,name:"湾仔",pid:"810100",type:"district",pinyin:"wan zi",py:"wz",prefix:"w"},
    {id:810103,name:"东区",pid:"810100",type:"district",pinyin:"dong qu",py:"dq",prefix:"d"},
    {id:810104,name:"南区",pid:"810100",type:"district",pinyin:"nan qu",py:"nq",prefix:"n"},
    {id:810201,name:"九龙城区",pid:"810200",type:"district",pinyin:"jiu long cheng qu",py:"jlcq",prefix:"j"},
    {id:810202,name:"油尖旺区",pid:"810200",type:"district",pinyin:"you jian wang qu",py:"yjwq",prefix:"y"},
    {id:810203,name:"深水埗区",pid:"810200",type:"district",pinyin:"shen shui bu qu",py:"ssbq",prefix:"s"},
    {id:810204,name:"黄大仙区",pid:"810200",type:"district",pinyin:"huang da xian qu",py:"hdxq",prefix:"h"},
    {id:810205,name:"观塘区",pid:"810200",type:"district",pinyin:"guan tang qu",py:"gtq",prefix:"g"},
    {id:810301,name:"北区",pid:"810300",type:"district",pinyin:"bei qu",py:"bq",prefix:"b"},
    {id:810302,name:"大埔区",pid:"810300",type:"district",pinyin:"da pu qu",py:"dpq",prefix:"d"},
    {id:810303,name:"沙田区",pid:"810300",type:"district",pinyin:"sha tian qu",py:"stq",prefix:"s"},
    {id:810304,name:"西贡区",pid:"810300",type:"district",pinyin:"xi gong qu",py:"xgq",prefix:"x"},
    {id:810305,name:"元朗区",pid:"810300",type:"district",pinyin:"yuan lang qu",py:"ylq",prefix:"y"},
    {id:810306,name:"屯门区",pid:"810300",type:"district",pinyin:"tun men qu",py:"tmq",prefix:"t"},
    {id:810307,name:"荃湾区",pid:"810300",type:"district",pinyin:"quan wan qu",py:"qwq",prefix:"q"},
    {id:810308,name:"葵青区",pid:"810300",type:"district",pinyin:"kui qing qu",py:"kqq",prefix:"k"},
    {id:810309,name:"离岛区",pid:"810300",type:"district",pinyin:"li dao qu",py:"ldq",prefix:"l"}
];

var cityData={
    hots:[
        {id:110100,name:"北京市",pid:"110000",type:"city",pinyin:"bei jing shi",py:"bjs",prefix:"b"},
        {id:310100,name:"上海市",pid:"310000",type:"city",pinyin:"shang hai shi",py:"shs",prefix:"s"},
        {id:440100,name:"广州市",pid:"440000",type:"city",pinyin:"guang zhou shi",py:"gzs",prefix:"g"},
        {id:440300,name:"深圳市",pid:"440000",type:"city",pinyin:"shen zhen shi",py:"szs",prefix:"s"},
        {id:330100,name:"杭州市",pid:"330000",type:"city",pinyin:"hang zhou shi",py:"hzs",prefix:"h"},
        {id:120000,name:"天津市",pid:"86",type:"province",pinyin:"tian jin shi",py:"tjs",prefix:"t"},
        {id:320500,name:"苏州市",pid:"320000",type:"city",pinyin:"su zhou shi",py:"szs",prefix:"s"},
        {id:330200,name:"宁波市",pid:"330000",type:"city",pinyin:"ning bo shi",py:"nbs",prefix:"n"},
        {id:450300,name:"桂林市",pid:"450000",type:"city",pinyin:"gui lin shi",py:"gls",prefix:"g"},
        {id:510100,name:"成都市",pid:"510000",type:"city",pinyin:"cheng dou shi",py:"cds",prefix:"c"},
        {id:341003,name:"黄山区",pid:"341000",type:"district",pinyin:"huang shan qu",py:"hsq",prefix:"h"},
        {id:610100,name:"西安市",pid:"610000",type:"city",pinyin:"xi an shi",py:"xas",prefix:"x"},
        {id:230100,name:"哈尔滨市",pid:"230000",type:"city",pinyin:"ha er bin shi",py:"hebs",prefix:"h"},
        {id:330700,name:"金华市",pid:"330000",type:"city",pinyin:"jin hua shi",py:"jhs",prefix:"j"},
        {id:500100,name:"重庆市",pid:"500000",type:"city",pinyin:"chong qing shi",py:"cqs",prefix:"c"},
        {id:370200,name:"青岛市",pid:"370000",type:"city",pinyin:"qing dao shi",py:"qds",prefix:"q"},
        {id:370600,name:"烟台市",pid:"370000",type:"city",pinyin:"yan tai shi",py:"yts",prefix:"y"},
        {id:350100,name:"福州市",pid:"350000",type:"city",pinyin:"fu zhou shi",py:"fzs",prefix:"f"},
        {id:320300,name:"徐州市",pid:"320000",type:"city",pinyin:"xu zhou shi",py:"xzs",prefix:"x"}
    ],
    AList:[],
    BList:[],
    CList:[],
    DList:[],
    EList:[],
    FList:[],
    GList:[],
    HList:[],
    IList:[],
    JList:[],
    KList:[],
    LList:[],
    MList:[],
    NList:[],
    OList:[],
    PList:[],
    QList:[],
    RList:[],
    SList:[],
    TList:[],
    UList:[],
    VList:[],
    WList:[],
    XList:[],
    YList:[],
    ZList:[]
};

var cityAllList={
    AList:[],
    BList:[],
    CList:[],
    DList:[],
    EList:[],
    FList:[],
    GList:[],
    HList:[],
    IList:[],
    JList:[],
    KList:[],
    LList:[],
    MList:[],
    NList:[],
    OList:[],
    PList:[],
    QList:[],
    RList:[],
    SList:[],
    TList:[],
    UList:[],
    VList:[],
    WList:[],
    XList:[],
    YList:[],
    ZList:[]
};


angular.forEach(areaData, function(city){
    if(city.type=="city"){
        switch (city.prefix)
        {
            case "a":
                cityData.AList.push(city);
                cityAllList.AList.push(city);
                break;
            case "b":
                cityData.BList.push(city);
                cityAllList.BList.push(city);
                break;
            case "c":
                cityData.CList.push(city);
                cityAllList.CList.push(city);
                break;
            case "d":
                cityData.DList.push(city);
                cityAllList.DList.push(city);
                break;
            case "e":
                cityData.EList.push(city);
                cityAllList.EList.push(city);
                break;
            case "f":
                cityData.FList.push(city);
                cityAllList.FList.push(city);
                break;
            case "g":
                cityData.GList.push(city);
                cityAllList.GList.push(city);
                break;
            case "h":
                cityData.HList.push(city);
                cityAllList.HList.push(city);
                break;
            case "i":
                cityData.IList.push(city);
                cityAllList.IList.push(city);
                break;
            case "j":
                cityData.JList.push(city);
                cityAllList.JList.push(city);
                break;
            case "k":
                cityData.KList.push(city);
                cityAllList.KList.push(city);
                break;
            case "l":
                cityData.LList.push(city);
                cityAllList.LList.push(city);
                break;
            case "m":
                cityData.MList.push(city);
                cityAllList.MList.push(city);
                break;
            case "n":
                cityData.NList.push(city);
                cityAllList.NList.push(city);
                break;
            case "o":
                cityData.OList.push(city);
                cityAllList.OList.push(city);
                break;
            case "p":
                cityData.PList.push(city);
                cityAllList.PList.push(city);
                break;
            case "q":
                cityData.QList.push(city);
                cityAllList.QList.push(city);
                break;
            case "r":
                cityData.RList.push(city);
                cityAllList.RList.push(city);
                break;
            case "s":
                cityData.SList.push(city);
                cityAllList.SList.push(city);
                break;
            case "t":
                cityData.TList.push(city);
                cityAllList.TList.push(city);
                break;
            case "u":
                cityData.UList.push(city);
                cityAllList.UList.push(city);
                break;
            case "v":
                cityData.VList.push(city);
                cityAllList.VList.push(city);
                break;
            case "w":
                cityData.WList.push(city);
                cityAllList.WList.push(city);
                break;
            case "x":
                cityData.XList.push(city);
                cityAllList.XList.push(city);
                break;
            case "y":
                cityData.YList.push(city);
                cityAllList.YList.push(city);
                break;
            case "z":
                cityData.ZList.push(city);
                cityAllList.ZList.push(city);
                break;
        }
    }else if(city.type=="country"||city.type=="province"){

    }else{
        return;
    }
});


//地址指令
angular.module("xn/template/location/location.html",[])
    .run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("xn/template/location/location.html",
            "<div class=\"xn-location\">" +
            "    <div class=\"xn-input-line clearfix\">" +
            "       <div class='xn-location-select'> "+
            "            <select class=\"form-control  \" ng-required='province' name=\"provinceId\" ng-model=\"location.provinceId\">" +
            "                <option value=\"\">省份</option>" +
            "                <option ng-selected=\"area.id==location.provinceId\"" +
            "                        ng-repeat=\"area in provinceList=(areaList | filter:provinceListFilter)\"" +
            "                        value=\"{{area.id}}\">" +
            "                    {{area.name}}" +
            "                </option>" +
            "            </select>" +
            "       </div> "+
            "       <div class='xn-location-select'> "+
            "            <select class=\"form-control  \" ng-required='city' name=\"cityId\" ng-model=\"location.cityId\">" +
            "                <option value=\"\">城市</option>" +
            "                <option ng-selected=\"area.id==location.cityId\"" +
            "                        ng-repeat=\"area in cityList=(areaList | filter:cityListFilter)\"" +
            "                        value=\"{{area.id}}\">" +
            "                    {{area.name}}" +
            "                </option>" +
            "            </select>" +
            "       </div> "+
            "       <div class='xn-location-select'> "+
            "            <select class=\"form-control \" ng-required='district' name=\"districtId\" ng-model=\"location.districtId\">" +
            "                <option value=\"\">区县</option>" +
            "                <option ng-selected=\"area.id==location.districtId\"" +
            "                        ng-repeat=\"area in districtList=(areaList | filter:districtListFilter)\"" +
            "                        value=\"{{area.id}}\">" +
            "                    {{area.name}}" +
            "                </option>" +
            "            </select>" +
            "        </div>" +
            "       <div class='xn-location-input'>" +
            "           <input class=\"form-control\" ng-required='address' type=\"text\" name=\"address\" ng-model=\"location.address\" name=\"address\"" +
            "           placeholder=\"详细地址\">" +
            "        </div>" +
            "    </div>"+
            "</div>"
    );


}]);

//单选城市指令
angular.module("xn/template/location/locationCity.html",[])
    .run(["$templateCache", function($templateCache) {
    "use strict";

	$templateCache.put("xn/template/location/locationCity.html",
            "<div class=\"xn-location-city\">\n"+
            "    <input type=\"text\" class=\"form-control\"  name=\"locationCity\"  id='locationCity_input_id' ng-model=\"locationCity.name\" " +
            "    ng-click=\"doSelectCity()\"  ng-required=\"vm.required \" >\n"+
            "        <div class=\"open-city\" ng-show=\"openCity\">"+
            "            <button type=\"button\" class=\"close\" ng-click=\"openCity=!openCity;\">×</button>\n"+
            "              <h4>城市列表</h4>\n"+
            "            <tabset justified=\"true\"  class=\"auto\">\n"+
            "                <tab heading=\"热门\">\n"+
            "                    <span class='open-city-span' title=\"{{city.name}}\"  ng-repeat=\"city in areaList.hots\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                </tab>\n"+
            "                <tab heading=\"ABCDEF\">\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>A</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.AList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>B</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.BList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>C</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.CList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>D</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.DList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>E</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.EList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>F</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.FList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                </tab>\n"+
            "                <tab heading=\"GHIJKL\">\n" +
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>G</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.GList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\"  ng-show=\"areaList.HList.length>0\">\n"+
            "                        <dt>H</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.HList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\" ng-show=\"areaList.IList.length>0\">\n"+
            "                        <dt>I</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.IList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>J</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.JList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>K</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.KList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>L</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.LList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "               </tab>\n"+
            "               <tab heading=\"MNOPQRS\">\n" +
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>M</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.MList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>N</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.NList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>O</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.QList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>P</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.PList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>Q</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.QList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>R</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.RList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>S</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.SList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "              </tab>\n"+
            "				<tab heading=\"TWXYZ\">\n" +
            "					<dl class=\"clearfix\">\n"+
            "                       <dt>T</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.TList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>W</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.WList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>X</dt>\n"+
            "                       <dd>\n"+
            "                       	<span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.XList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>Y</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.YList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>Z</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' title=\"{{city.name}}\" ng-repeat=\"city in areaList.ZList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "               </tab>\n"+
            "           </tabset>\n"+
            "       </div>\n"+
            "</div>"
    );
}]);

//多选城市指令
angular.module("xn/template/location/xnLocationCityList.html",[])
    .run(["$templateCache", function($templateCache) {
    "use strict";

    $templateCache.put("xn/template/location/xnLocationCityList.html",
            "<div class=\"xn-location-city\" id=\"{{xncityId}}\">\n" +
            "<div class='xn-location-select-box' ng-click=\"doSelectCity()\">\n" +
                "<span class='xn-location-select-span' ng-repeat=\"city in locationCity.cityList\" >{{city.name}} ;</span>"+
                "    <input type=\"text\" class=\"form-control\"  name=\"locationCity\"  id='locationCity_input_id' ng-model=\"locationCity.name\" " +
                "      ng-required=\"vm.required \" >\n"+
            "</div>\n"+
            "        <div class=\"open-city\" ng-show=\"openCity\">"+
            "            <button type=\"button\" class=\"close\" ng-click=\"openCity=!openCity;\">×</button>\n"+
            "              <h4>城市列表</h4>\n"+
            "            <tabset justified=\"true\"  class=\"auto\">\n"+
/*            "                <tab heading=\"热门\">\n"+
            "                    <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\"  ng-repeat=\"city in areaList.hots\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                </tab>\n"+*/
            "                <tab heading=\"ABCDEF\">\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>A</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\"  title=\"{{city.name}}\" ng-repeat=\"city in areaList.AList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>B</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\"  title=\"{{city.name}}\" ng-repeat=\"city in areaList.BList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>C</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.CList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>D</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.DList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>E</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.EList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>F</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.FList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                </tab>\n"+
            "                <tab heading=\"GHIJKL\">\n" +
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>G</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.GList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\"  ng-show=\"areaList.HList.length>0\">\n"+
            "                        <dt>H</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.HList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\" ng-show=\"areaList.IList.length>0\">\n"+
            "                        <dt>I</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.IList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>J</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.JList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>K</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.KList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>L</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.LList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "               </tab>\n"+
            "               <tab heading=\"MNOPQRS\">\n" +
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>M</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.MList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>N</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.NList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>O</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.QList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>P</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.PList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>Q</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.QList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>R</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\"  title=\"{{city.name}}\" ng-repeat=\"city in areaList.RList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "                    <dl class=\"clearfix\">\n"+
            "                        <dt>S</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.SList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                        </dd>\n"+
            "                    </dl>\n"+
            "              </tab>\n"+
            "				<tab heading=\"TWXYZ\">\n" +
            "					<dl class=\"clearfix\">\n"+
            "                       <dt>T</dt>\n"+
            "                       <dd>\n"+
            "                            <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.TList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>W</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.WList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>X</dt>\n"+
            "                       <dd>\n"+
            "                       	<span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.XList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>Y</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\" title=\"{{city.name}}\" ng-repeat=\"city in areaList.YList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "                   <dl class=\"clearfix\">\n"+
            "                       <dt>Z</dt>\n"+
            "                       <dd>\n"+
            "                           <span class='open-city-span' ng-class=\"{'open-city-span-select':city.state}\"  title=\"{{city.name}}\" ng-repeat=\"city in areaList.ZList\"  ng-click=\"getSelectCity(city)\">{{city.name}}</span>\n"+
            "                       </dd>\n"+
            "                   </dl>\n"+
            "               </tab>\n"+
            "           </tabset>\n"+
            "       </div>\n"+
            "</div>"
    );
}]);

//物流城市指令
angular.module("xn/template/location/xnProvinceCity.html",[])
    .run(["$templateCache", function($templateCache) {
    "use strict";

    $templateCache.put("xn/template/location/xnProvinceCity.html",
            "<div class=\"xn-location-city\" id=\"{{ProvinceId}}\">\n" +
                "<div class='xn-location-province-city'>\n" +
                    "<div class='city-edit' ng-click=\"doOpen()\">{{openName}}</div>\n" +
                    "<ul class='city-list clearfix'>\n" +
                        "<li class='list-span'  ng-repeat=\"city in selectCity.cityList\"  >" +
                            "<span ng-if=\"city.province.isSelected && city.isProvinceShow\">{{city.province.name}} ;</span>" +
                            "<span ng-if=\"!city.province.isSelected\" >{{city.name}} ;</span>" +
                        "</li>"+
                    "</ul>\n"+
                "</div>\n"+
            "   <div class=\"open-city\" ng-show=\"openCity\">"+
            "       <button type=\"button\" class=\"close\" ng-click=\"closeCity()\">×</button>\n"+
            "       <h4>请选择</h4>\n"+
            "       <ul class='province-city-contect clearfix'>" +
            "           <li class='province-line clearfix' ng-repeat=\"province in provinceList\" >" +
            "             <div class='province-line-box'   ng-class=\"{'province-line-box-hover':province.openChild}\">" +
            "               <label class=\" xn-label-checkbox\" ng-click=\"selectProvince(province)\">" +
            "                <i class=\"xn-checkbox\"></i> " +
            "                   <i class=\"icon icon-right_3\" ng-show=\"province.isSelected\"></i>" +
            "                     <div class='name'>{{province.name}}</div>" +
            "               </label>" +
            "               <i class=\"icon icon-downward-1\"   ng-click=\"openChild(province)\" ></i>" +
            "             </div>" +
            "               <ul class='child-list clearfix' ng-show=\"province.openChild\">" +
            "                  <li class='list clearfix'  ng-repeat=\"city in province.childList\">" +
            "                   <label class=\" xn-label-checkbox\" ng-click=\"doCity(city)\">" +
            "                       <i class=\"xn-checkbox\"></i> " +
            "                       <i class=\"icon icon-right_3\" ng-show=\"city.isSelected\"></i>" +
            "                       <div class='name'>{{city.name}}</div>" +
            "                       </label>" +
            "                </li>" +
            "             </ul>"+
            "          </li>" +
            "       </ul>\n"+
            "  </div>\n"+
            "</div>"
    );
}]);

//城市指令
angular.module("xn/template/location.html",[
    "xn/template/location/location.html",
    "xn/template/location/locationCity.html",
    "xn/template/location/xnLocationCityList.html",
    "xn/template/location/xnProvinceCity.html"
    ]);


var xnLocation = function ($http, $filter, AreaData) {
    return {
        restrict: "A",
        templateUrl: "xn/template/location/location.html",
        scope: {
            location: '=ngModel',
            requiredFiled: '@'
        },
        replace: true,
        require: "?ngModel",
        link: function (scope, elem, attrs, ngModel) {
            if (!ngModel) return;
            scope.isAddress=true;
            if(attrs.address){
                scope.isAddress=false;
            }

            scope.nation = false;
            scope.province = false;
            scope.city = false;
            scope.district = false;
            scope.address = false;
            if(scope.requiredFiled) {
                switch(scope.requiredFiled) {
                    case "country" :
                        scope.nation = true;
                        break;
                    case "province" :
                        scope.nation = true;
                        scope.province = true;
                        break;
                    case "city" :
                        scope.nation = true;
                        scope.province = true;
                        scope.city = true;
                        break;
                    case "district" :
                        scope.nation = true;
                        scope.province = true;
                        scope.city = true;
                        scope.district = true;
                        break;
                    case "address" :
                        scope.nation = true;
                        scope.province = true;
                        scope.city = true;
                        scope.district = true;
                        scope.address = true;
                    break;
                };
            }
            var location = scope.location = {default: {countryId: "", provinceId: "", cityId: "", districtId: ""},name: {countryName: "", provinceName: "", cityName: "",districtName:"", address: "",postCode:""},
                countryId:"", provinceId: "", cityId: "", districtId: "",postCode:""};
            //在此处设置默认值可能会导致监控不变化，注意
            scope.areaList = AreaData;
            scope.countryListFilter=function(item){
                return item.type=="country" && item.pid=="";
            };
            scope.provinceListFilter=function(item){
                return item.type=="province" && item.pid==location.countryId;
            };
            scope.cityListFilter=function(item){
                return item.type=="city" && item.pid==location.provinceId;
            };
            scope.districtListFilter=function(item){
                return item.type=="district" && item.pid==location.cityId;
            };

            attrs.$observe("locationId", function (value) {
                if (value == null || value == undefined || value === "") {
                    return;
                }
                var url = "/api/foundation.do";
                $http({
	                    method: 'POST',
	                    url: url,
	                    params: {"method": "api.foundation.location.get"},
	                    data: {"id": value}
                	}).success(function (data) {
                        if (data.errors == null || data.errors.length > 0) {
                            console.error(data);
                        } else {
                            //先重置为空
                            location.countryId = "";
                            location.default.countryId = data.location.countryId;
                            location.default.provinceId = data.location.provinceId;
                            location.default.cityId = data.location.cityId;
                            location.default.districtId = data.location.districtId;
                            location.default.address = data.location.address;
                            location.default.postCode = data.location.postCode;

                            //地址名称：
                            location.name.countryName=data.location.countryName;
                            location.name.provinceName=data.location.provinceName;
                            location.name.cityName=data.location.cityName;
                            location.name.address=data.location.address;
                            location.name.postCode = data.location.postCode;

                            var countries = $filter("filter")(scope.areaList,scope.countryListFilter);
                            if (countries.length === 1) {
                                location.countryId = countries[0].id;
                            }else if (countries.length > 1 && _.find(countries, function (item) {
                                         return item.id == location.default.countryId
                                    })
                                ) {
                                location.countryId = location.default.countryId;
                            }else {
                                location.countryId = "";
                            }
                            if (location.default.address) {
                                location.address = location.default.address;
                            }
                            //邮编赋值
                            if (location.default.postCode) {
                                location.postCode = location.default.postCode;
                            }
                        }
                    }
                );
            });

            // 更换国家的时候重置省
            scope.location.countryId = '86';
            scope.$watch('location.countryId', function (newValue) {
                //国家列表
                var country = scope.country= $filter("filter")(scope.areaList, scope.countryListFilter);
                //取名字
                angular.forEach(scope.country,function(data){
                    if(newValue==data.id){
                        location.name.countryName=data.name;
                    }
                });
                var provinces = scope.provinces= $filter("filter")(scope.areaList, scope.provinceListFilter);
                if (provinces.length === 1) {
                    location.provinceId = provinces[0].id;
                }else if (provinces.length > 1 && _.find(provinces, function (item) {
                    return item.id == location.default.provinceId
                })){
                    location.provinceId = location.default.provinceId;
                }
                else {
                    location.provinceId = "";

                }
            });
            // 更换省的时候重置城市
            scope.$watch('location.provinceId', function (newValue) {
                //取名字
                angular.forEach(scope.provinces,function(data){
                    if(newValue==data.id){
                        location.name.provinceName=data.name;
                    }
                });
                var cities =scope.cities=  $filter("filter")(scope.areaList,scope.cityListFilter);
                if (cities.length === 1) {
                    location.cityId = cities[0].id;
                    //取名字
                    location.name.cityName= cities[0].name;
                } else if (cities.length > 1 && _.find(cities, function (item) {
                    return item.id == location.default.cityId
                })) {
                    location.cityId = location.default.cityId;
                } else {
                    location.cityId = "";
                    location.name.cityName="";
                }
            });
            // 更换城市的时候重置区县
            scope.$watch('location.cityId', function (newValue) {
                //取名字
                angular.forEach(scope.cities,function(data){
                    if(newValue==data.id){
                        location.name.cityName=data.name;
                    }
                });
                var districts = scope.districts= $filter("filter")(scope.areaList,scope.districtListFilter);

                if (districts.length === 1) {
                    location.districtId = districts[0].id;
                    location.name.districtName=districts[0].name;
                } else if (districts.length > 1 && _.find(districts, function (item) {
                    return item.id == location.default.districtId
                })) {
                    location.districtId = location.default.districtId;
                } else {
                    location.districtId = "";
                    location.name.districtName="";
                }

            });
            scope.$watch('location.districtId', function (newValue) {
                //取名字
                angular.forEach(scope.districts,function(data){
                    if(newValue==data.id){
                        location.name.districtName=data.name;
                    }
                });
            });
            scope.$watch('location.address', function (newValue) {
                //取名字
                location.name.address=newValue;
            });
        }
    };
};

var xnLocationCity = function ($http, $filter, CityData) {
    return {
        restrict: "A",
        templateUrl: "xn/template/location/locationCity.html",
        scope: {locationCity: '=ngModel'},
        replace: true,
        require: "?ngModel",
        link: function (scope, elem, attrs, ngModel) {
            if (!ngModel) return;
            var locationCity = scope.locationCity = {default: { cityId:""},cityId: ""};
            //在此处设置默认值可能会导致监控不变化，注意
            scope.areaList = CityData;
            //修改显示与隐藏
            scope.doSelectCity=function(){
                scope.openCity=true;
            };
            //选择
            scope.getSelectCity=function(data){
                scope.locationCity=angular.copy(data);
                scope.openCity=false;
            };
            var cityList= [];
            for (var key  in scope.areaList) {
                cityList= cityList.concat(scope.areaList[key]);
            };
            //是否必填
            if(attrs.required=="required"){
                scope.vm={
                    required:true
                }
            };
            if(attrs.disabled!=undefined){
                $("#locationCity_input_id").attr("disabled", "disabled");
            };
            attrs.$observe("cityId", function (value) {
                if (value == null || value == undefined || value === "") {
                    return;
                }
                locationCity.default.cityId =angular.copy(value);
                if (locationCity.default.cityId){
                    for(var index=0; index<cityList.length;index++){
                        if(cityList[index].id ==locationCity.default.cityId){
                            scope.locationCity=angular.copy(cityList[index]);
                            return ;
                        }
                    }
                }
            });
            scope.$watch(function(){
                return scope.locationCity.name;
            },function(newValue,oldValue){
                if(!newValue){
                    scope.locationCity={default: { id:""},id: ""};
                }
            })
        }
    };
};

    //多选地址指令
var xnLocationCityList = function ($http, $filter, cityAllList) {
    return {
        restrict: "A",
        templateUrl: "xn/template/location/xnLocationCityList.html",
        scope: {
            locationCity: '=ngModel',
            cityIdList:"=cityIdList"
        },
        replace: true,
        require: "?ngModel",
        link: function (scope, elem, attrs, ngModel) {
            if (!ngModel) return;
            var locationCity = scope.locationCity = {idList: [],cityList:[]};
            //在此处设置默认值可能会导致监控不变化，注意
            scope.areaList = cityAllList;
            //修改显示与隐藏
            scope.doSelectCity=function(){
                scope.openCity=true;
            };
            //选择
            scope.getSelectCity=function(data){
                if(!data.state){
                    data.state=!data.state;
                    var city=angular.copy(data);
                    scope.locationCity.idList.push(city.id);
                    scope.locationCity.cityList.push(city);


                }else{
                    angular.forEach(scope.locationCity.idList,function(id,index){
                        if(id==data.id){
                            scope.locationCity.idList.splice(index,1);
                            scope.locationCity.cityList.splice(index,1);
                            data.state=!data.state;
                        }
                    })
                }
            };


            var cityList= [];
            for (var key  in scope.areaList) {
                cityList= cityList.concat(scope.areaList[key]);
            };


            //是否必填
            if(attrs.required=="required"){
                scope.vm={
                    required:true
                }
            };

            if(attrs.disabled!=undefined){
                $("#locationCity_input_id").attr("disabled", "disabled");
            };


            var first=true;
            scope.$watch("cityIdList",function(newVal,oldVal){
                if(newVal.length && first){
                    var cityListLength=cityList.length;
                    var cityIdLength=newVal.length;
                    scope.locationCity.idList=[];
                    scope.locationCity.cityList=[];
                    for(var i=0; i<cityListLength;i++){
                        for(var j=0;j<cityIdLength;j++){
                            if(cityList[i].id ==newVal[j]){
                                cityList[i].state=true;
                                var city=angular.copy(cityList[i]);
                                scope.locationCity.idList.push(city.id);
                                scope.locationCity.cityList.push(city);

                            }
                        }

                    }
                    first = false;
                }
            });

            scope.xncityId="cityId"+new Date().getTime();
            var getPar = function(tar) {
                if(tar.id==scope.xncityId){
                    scope.count++;
                }
                if(tar.parentElement){
                    getPar(tar.parentElement);
                }
            };
            angular.element(document).bind("click", function(e) {
                scope.count = 0;
                getPar(e.target);
                if(scope.count == 0) {
                    scope.$apply(function(){
                        scope.openCity=false;
                        angular.element("#"+scope.xncityId+" .open-city ").addClass("ng-hide");
                    });
                }
            });
        }
    };
};

     //多选地址指令
var xnProvinceCity = function ($http, $filter, AreaData) {
    return {
        restrict: "A",
        templateUrl: "xn/template/location/xnProvinceCity.html",
        scope: {
            selectCityId: '=ngModel',
            cityIdList:"=cityIdList"
        },
        replace: true,
        require: "?ngModel",
        link: function (scope, elem, attrs, ngModel) {
            if (!ngModel) return;

            scope.openName="编辑";
            if(attrs.name){
                scope.openName=attrs.name;
            }


            //所有数据
            scope.areaList = angular.copy(AreaData);

            scope.provinceList=[];
            scope.cityList=[];


            scope.selectCity={
                idList:[],
                cityList:[]
            };

            scope.selectCityId=scope.selectCity.idList;
           angular.forEach(scope.areaList,function(area){
               if(area.type=="province"){
                   area.isSelected=false;
                   area.openChild=false;
                   area.selectNumber=0;
                   area.childList=[];
                   scope.provinceList.push(area)
               }else if(area.type=="city"){
                   angular.forEach(scope.provinceList,function(province){
                        if(province.id==area.pid){
                            area.isSelected=false;
                            area.isProvinceShow=false;
                            area.province=province;
                            //push到 scope.provinceList里的chikdlist里面
                            province.childList.push(area);
                            scope.cityList.push(area);
                        }
                   })
               }
           });


            var first=true;
            scope.$watch("cityIdList",function(newVal,oldVal){
                if(!(newVal=="" ||newVal==null || newVal==undefined)){
                    if(newVal.length && first){
                        angular.forEach(scope.cityList,function(city){
                            angular.forEach(scope.cityIdList,function(cityId){
                                if(city.id==cityId){
                                    scope.selectCity.cityList.push(city);
                                    scope.selectCity.idList.push(city.id);
                                    city.isSelected=true;
                                    city.province.selectNumber++;
                                    if( city.province.selectNumber==city.province.childList.length){
                                        city.province.isSelected=true;

                                        //省份下第一条状态变为true
                                        city.province.childList[0].isProvinceShow=true;
                                    }
                                }

                            })

                        });
                        first = false;

                    }
                }

            });

            //打开方法
            scope.doOpen=function(){
                scope.openCity=true;
            };
             //打开方法
            scope.closeCity=function(){
                angular.forEach(scope.provinceList,function(data){
                    data.openChild=false;
                });
                scope.openCity=false;
            };

            //打开child列表

            scope.openChild=function(province){
                if(!province.openChild){
                    angular.forEach(scope.provinceList,function(data){
                        data.openChild=false;
                    });
                    province.openChild=true;
                }else{
                    province.openChild=!province.openChild;
                }

            };


            //点击省份列表
            scope.selectProvince=function(data){
                if(data.isSelected){
                    //取消选中循环减少有问题，。
                    for(var index=0;index<data.childList.length;index++){
                        for(var selectIndex=scope.selectCity.cityList.length-1;selectIndex>=0;selectIndex--){
                            if(scope.selectCity.cityList[selectIndex].id==data.childList[index].id){
                                scope.selectCity.cityList.splice(selectIndex,1);
                                scope.selectCity.idList.splice(selectIndex,1);
                                data.childList[index].isSelected=false;
                            }
                        }
                    }
                    data.isSelected=!data.isSelected;
                    //省份下第一条为false
                    data.childList[0].isProvinceShow=false;
                    data.selectNumber=0;
                }else{
                    //选中
                    angular.forEach(data.childList,function(child,index){
                        if(!child.isSelected){
                            scope.selectCity.cityList.push(child);
                            scope.selectCity.idList.push(child.id);
                            child.isSelected=!child.isSelected;
                            data.selectNumber++;
                        }
                    });
                    data.isSelected=!data.isSelected;
                    //省份下第一条为true
                    data.childList[0].isProvinceShow=true;
                }



                //关闭子栏目

                angular.forEach(scope.provinceList,function(province){
                    if(!(data.id==province.id)){
                        province.openChild=false;
                    }

                });

            };
            //点击市区
            scope.doCity=function(data){
                if(data.isSelected){
                    //取消选中循环减少有问题，。
                    for(var selectIndex=scope.selectCity.cityList.length-1;selectIndex>=0;selectIndex--){
                        if(scope.selectCity.cityList[selectIndex].id==data.id){
                            scope.selectCity.cityList.splice(selectIndex,1);
                            scope.selectCity.idList.splice(selectIndex,1);
                            data.isSelected=!data.isSelected;
                            data.province.selectNumber--;
                            data.province.isSelected=false;
                            //省份下第一条为true
                            data.province.childList[0].isProvinceShow=false;
                            break;
                        }
                    }
                }else{
                    //选中
                    scope.selectCity.cityList.push(data);
                    scope.selectCity.idList.push(data.id);
                    data.isSelected=!data.isSelected;
                    data.province.selectNumber++;
                   if(data.province.selectNumber==data.province.childList.length){
                       data.province.isSelected=true;
                       //省份下第一条为true
                       data.province.childList[0].isProvinceShow=true;
                   }
                }
            };





            scope.ProvinceId="ProvinceId"+new Date().getTime();
            var getPar = function(tar) {
                if(tar.id==scope.ProvinceId){
                    scope.count++;
                }
                if(tar.parentElement){
                    getPar(tar.parentElement);
                }
            };
            angular.element(document).bind("click", function(e) {
                scope.count = 0;
                getPar(e.target);
                if(scope.count == 0) {
                    scope.$apply(function(){
                        scope.closeCity();
                    });
                }
            });
        }
    };
};

angular.module("xn.directive.location",["xn/template/location.html"])
    .constant('AreaData', areaData)
    .constant('CityData', cityData)
    .constant('cityAllList', cityAllList)
    .directive('xnLocation', ["$http", "$filter", "AreaData", xnLocation])
    .directive('xnLocationCity', ["$http", "$filter", "CityData", xnLocationCity])
    .directive('xnLocationCityList', ["$http", "$filter", "cityAllList", xnLocationCityList])
    .directive('xnProvinceCity', ["$http", "$filter","AreaData", xnProvinceCity]);

/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery),function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=e.pageX,l=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,h,l,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,v=m+p.helperProportions.width,_=i.offset.top,b=_+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,h=r+p.snapElements[u].width,l=p.snapElements[u].top,c=l+p.snapElements[u].height,r-g>v||m>h+g||l-g>b||_>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(l-b),n=g>=Math.abs(c-_),o=g>=Math.abs(r-v),a=g>=Math.abs(h-m),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(l-_),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(i)?i:function(t){return t.is(i)
},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},t.ui.ddmanager.droppables[e.scope]=t.ui.ddmanager.droppables[e.scope]||[],t.ui.ddmanager.droppables[e.scope].push(this),e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=a+t.helperProportions.width,h=(t.positionAbs||t.position.absolute).top,l=h+t.helperProportions.height,c=i.offset.left,u=c+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return a>=c&&u>=r&&h>=d&&p>=l;case"intersect":return a+t.helperProportions.width/2>c&&u>r-t.helperProportions.width/2&&h+t.helperProportions.height/2>d&&p>l-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,d,i.proportions.height)&&e(n,c,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(a>=c&&u>=a||r>=c&&u>=r||c>a&&r>u);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions.height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions={width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight})}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}}(jQuery),function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=a.parentData.left),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(e.size.width=d,e.size.height=p,e.position.top=o.top-u,e.position.left=o.left-c)}})}(jQuery),function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||o>i.right||i.top>h||a>i.bottom):"fit"===n.tolerance&&(l=i.left>o&&r>i.right&&i.top>a&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,o,a=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&r.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){a.push(this)});return t(a)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})}(jQuery),function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),o=function(){t.each(n,function(t,i){e[i]&&a[i+"Class"](e[i])})},o(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,o,a,r){return"boolean"==typeof n||n===e?o?t.effects.animateClass.call(this,n?{add:s}:{remove:s},o,a,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,o,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,o;for(o=0;s.length>o;o++)null!==s[o]&&(n=t.data(i+s[o]),n===e&&(n=""),t.css(s[o],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):a.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,o=i.queue,a=t.effects.effect[i.effect];return t.fx.off||!a?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,o=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),o=n.attr("id");s||(s=a+"-header-"+e,i.attr("id",s)),o||(o=a+"-panel-"+e,n.attr("id",o)),i.attr("aria-controls",o),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=o.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var o,a,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(a=d),a=a||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(o=t.show().outerHeight(),e.animate(i,{duration:r,easing:a,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:a,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(o-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,a,p):t.animate(s,r,a,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})}(jQuery),function(t){var e=0;t.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var t=this,i=++e;return function(s){i===e&&t.__response(s),t.pending--,t.pending||t.element.removeClass("ui-autocomplete-loading")}},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})}(jQuery),function(t){var e,i,s,n,o="ui-button ui-widget ui-state-default ui-corner-all",a="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var a=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){a.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){a.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||a.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),a.buttonElement.attr("aria-pressed","true");var e=a.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,a.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+a+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(o.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):o.push("ui-button-text-only"),e.addClass(o.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.3"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;
case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},k=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},x=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?D():y=!1;else switch(i.charAt(o)){case"d":_=k("d");break;case"D":x("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=x("M",f,g);break;case"y":m=k("y");break;case"@":h=new Date(k("@")),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(v=1,_=b;;){if(a=this._getDaysInMonth(m,v-1),a>=_)break;v++,_-=a}if(h=this._daylightSavingAdjust(new Date(m,v-1,_)),h.getFullYear()!==m||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,v,_,b,y,w,k,x,D,C,I,P,T,M,S,z,A,H,E,N,W,O,F,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),q=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],$=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-q,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+Q,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?$:j,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,D=0;U[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",P="",X){if(P+="<div class='ui-datepicker-group",U[1]>1)switch(D){case 0:P+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:P+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:P+=" ui-datepicker-group-middle",I=""}P+="'>"}for(P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,G,J,k>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,T+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(P+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((z+S)/7),H=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=H,E=this._daylightSavingAdjust(new Date(te,Z,1-z)),N=0;H>N;N++){for(P+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(E)+"</td>":"",w=0;7>w;w++)O=m?m.apply(t.input?t.input[0]:null,[E]):[!0,""],F=E.getMonth()!==Z,R=F&&!_||!O[0]||G&&G>E||J&&E>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(E.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===E.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(E.getTime()===$.getTime()?" "+this._currentClass:"")+(E.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+E.getMonth()+"' data-year='"+E.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+E.getDate()+"</span>":"<a class='ui-state-default"+(E.getTime()===j.getTime()?" ui-state-highlight":"")+(E.getTime()===$.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+E.getDate()+"</a>")+"</td>",E.setDate(E.getDate()+1),E=this._daylightSavingAdjust(E);P+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),P+="</tbody></table>"+(X?"</div>"+(U[0]>0&&D===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=P}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.3"}(jQuery),function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}
}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})}(jQuery),function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var o,a,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),o=t.effects.createWrapper(h).css({overflow:"hidden"}),a=o[p](),r=parseFloat(o.css(f))||0,m[p]=v?a:0,g||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:a+r),v&&(o.css(p,0),g||o.css(f,r+a)),o.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}}(jQuery),function(t){t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=a.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),c&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,g,m)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m).animate(o,g,m),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()}}(jQuery),function(t){t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?l*v:0),top:h+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:l*v),top:h+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}}(jQuery),function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),function(t){t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})}}(jQuery),function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})}}(jQuery),function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(_=_.concat(u),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(_=_.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,u,o.from.y,i.from),i.to=t.effects.setTransition(i,u,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,g[d]=(p?"+=":"-=")+2*h,m[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery),function(t){t.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,o,a,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",o=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),o===n?a=!0:o=n+o,r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=a&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(o=String.fromCharCode(e.keyCode),r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})}(jQuery),function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),k=(e.collision||"flip").split(" "),x={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),o=i(x.at,p,g),v.left+=o[0],v.top+=o[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,C=d+_+s(this,"marginBottom")+w.height,I=t.extend({},v),P=i(x.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[k[i]]&&t.ui.position[k[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:C,offset:[o[0]+P[0],o[1]+P[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,h={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>g&&g>r(n+o)&&(h.vertical="middle"),h.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(I,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),function(t,e){t.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()
},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})}(jQuery),function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i,!0))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,o,a,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(a=this.options.step,n=o=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:o=this._valueMin();break;case t.ui.keyCode.END:o=this._valueMax();break;case t.ui.keyCode.PAGE_UP:o=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;o=this._trimAlignValue(n+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;o=this._trimAlignValue(n-a)}this._slide(i,r,o)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})}(jQuery),function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(t,e){function i(){return++n}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);
if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})}(jQuery);
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
        push             = ArrayProto.push,
        slice            = ArrayProto.slice,
        concat           = ArrayProto.concat,
        toString         = ObjProto.toString,
        hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.7.0';

    // Internal function that returns an efficient (for current engines) version
    // of the passed-in callback, to be repeatedly applied in other Underscore
    // functions.
    var createCallback = function(func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
            case 1: return function(value) {
                return func.call(context, value);
            };
            case 2: return function(value, other) {
                return func.call(context, value, other);
            };
            case 3: return function(value, index, collection) {
                return func.call(context, value, index, collection);
            };
            case 4: return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
        }
        return function() {
            return func.apply(context, arguments);
        };
    };

    // A mostly-internal function to generate callbacks that can be applied
    // to each element in a collection, returning the desired result — either
    // identity, an arbitrary callback, a property matcher, or a property accessor.
    _.iteratee = function(value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return createCallback(value, context, argCount);
        if (_.isObject(value)) return _.matches(value);
        return _.property(value);
    };

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles raw objects in addition to array-likes. Treats all
    // sparse array-likes as if they were dense.
    _.each = _.forEach = function(obj, iteratee, context) {
        if (obj == null) return obj;
        iteratee = createCallback(iteratee, context);
        var i, length = obj.length;
        if (length === +length) {
            for (i = 0; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };

    // Return the results of applying the iteratee to each element.
    _.map = _.collect = function(obj, iteratee, context) {
        if (obj == null) return [];
        iteratee = _.iteratee(iteratee, context);
        var keys = obj.length !== +obj.length && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length),
            currentKey;
        for (var index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };

    var reduceError = 'Reduce of empty array with no initial value';

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`.
    _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
        if (obj == null) obj = [];
        iteratee = createCallback(iteratee, context, 4);
        var keys = obj.length !== +obj.length && _.keys(obj),
            length = (keys || obj).length,
            index = 0, currentKey;
        if (arguments.length < 3) {
            if (!length) throw new TypeError(reduceError);
            memo = obj[keys ? keys[index++] : index++];
        }
        for (; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
    };

    // The right-associative version of reduce, also known as `foldr`.
    _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
        if (obj == null) obj = [];
        iteratee = createCallback(iteratee, context, 4);
        var keys = obj.length !== + obj.length && _.keys(obj),
            index = (keys || obj).length,
            currentKey;
        if (arguments.length < 3) {
            if (!index) throw new TypeError(reduceError);
            memo = obj[keys ? keys[--index] : --index];
        }
        while (index--) {
            currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        predicate = _.iteratee(predicate, context);
        _.some(obj, function(value, index, list) {
            if (predicate(value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Return all the elements that pass a truth test.
    // Aliased as `select`.
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        predicate = _.iteratee(predicate, context);
        _.each(obj, function(value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(_.iteratee(predicate)), context);
    };

    // Determine whether all of the elements match a truth test.
    // Aliased as `all`.
    _.every = _.all = function(obj, predicate, context) {
        if (obj == null) return true;
        predicate = _.iteratee(predicate, context);
        var keys = obj.length !== +obj.length && _.keys(obj),
            length = (keys || obj).length,
            index, currentKey;
        for (index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    };

    // Determine if at least one element in the object matches a truth test.
    // Aliased as `any`.
    _.some = _.any = function(obj, predicate, context) {
        if (obj == null) return false;
        predicate = _.iteratee(predicate, context);
        var keys = obj.length !== +obj.length && _.keys(obj),
            length = (keys || obj).length,
            index, currentKey;
        for (index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
    };

    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (obj.length !== +obj.length) obj = _.values(obj);
        return _.indexOf(obj, target) >= 0;
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function(obj, attrs) {
        return _.filter(obj, _.matches(attrs));
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matches(attrs));
    };

    // Return the maximum element (or element-based computation).
    _.max = function(obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = obj.length === +obj.length ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value;
                }
            }
        } else {
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Return the minimum element (or element-based computation).
    _.min = function(obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = obj.length === +obj.length ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value;
                }
            }
        } else {
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Shuffle a collection, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
    _.shuffle = function(obj) {
        var set = obj && obj.length === +obj.length ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };

    // Sample **n** random values from a collection.
    // If **n** is not specified, returns a single random element.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function(obj, n, guard) {
        if (n == null || guard) {
            if (obj.length !== +obj.length) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // Sort the object's values by a criterion produced by an iteratee.
    _.sortBy = function(obj, iteratee, context) {
        iteratee = _.iteratee(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function(behavior) {
        return function(obj, iteratee, context) {
            var result = {};
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key].push(value); else result[key] = [value];
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function(result, value, key) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key]++; else result[key] = 1;
    });

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = _.iteratee(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >>> 1;
            if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
    };

    // Safely create a real, live array from anything iterable.
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function(obj) {
        if (obj == null) return 0;
        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
    };

    // Split a collection into two arrays: one whose elements all satisfy the given
    // predicate, and one whose elements all do not satisfy the predicate.
    _.partition = function(obj, predicate, context) {
        predicate = _.iteratee(predicate, context);
        var pass = [], fail = [];
        _.each(obj, function(value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        if (n < 0) return [];
        return slice.call(array, 0, n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N. The **guard** check allows it to work with
    // `_.map`.
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return slice.call(array, Math.max(array.length - n, 0));
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array. The **guard**
    // check allows it to work with `_.map`.
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function(input, shallow, strict, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        for (var i = 0, length = input.length; i < length; i++) {
            var value = input[i];
            if (!_.isArray(value) && !_.isArguments(value)) {
                if (!strict) output.push(value);
            } else if (shallow) {
                push.apply(output, value);
            } else {
                flatten(value, shallow, strict, output);
            }
        }
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, false, []);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (array == null) return [];
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        if (iteratee != null) iteratee = _.iteratee(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = array.length; i < length; i++) {
            var value = array[i];
            if (isSorted) {
                if (!i || seen !== value) result.push(value);
                seen = value;
            } else if (iteratee) {
                var computed = iteratee(value, i, array);
                if (_.indexOf(seen, computed) < 0) {
                    seen.push(computed);
                    result.push(value);
                }
            } else if (_.indexOf(result, value) < 0) {
                result.push(value);
            }
        }
        return result;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function() {
        return _.uniq(flatten(arguments, true, true, []));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function(array) {
        if (array == null) return [];
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = array.length; i < length; i++) {
            var item = array[i];
            if (_.contains(result, item)) continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item)) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function(array) {
        var rest = flatten(slice.call(arguments, 1), true, true, []);
        return _.filter(array, function(value){
            return !_.contains(rest, value);
        });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function(array) {
        if (array == null) return [];
        var length = _.max(arguments, 'length').length;
        var results = Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, i);
        }
        return results;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // Return the position of the first occurrence of an item in an array,
    // or -1 if the item is not included in the array.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted == 'number') {
                i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        for (; i < length; i++) if (array[i] === item) return i;
        return -1;
    };

    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var idx = array.length;
        if (typeof from == 'number') {
            idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
        }
        while (--idx >= 0) if (array[idx] === item) return idx;
        return -1;
    };

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Reusable constructor function for prototype setting.
    var Ctor = function(){};

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
        args = slice.call(arguments, 2);
        bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            Ctor.prototype = func.prototype;
            var self = new Ctor;
            Ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (_.isObject(result)) return result;
            return self;
        };
        return bound;
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context. _ acts
    // as a placeholder, allowing any combination of arguments to be pre-filled.
    _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        return function() {
            var position = 0;
            var args = boundArgs.slice();
            for (var i = 0, length = args.length; i < length; i++) {
                if (args[i] === _) args[i] = arguments[position++];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return func.apply(this, args);
        };
    };

    // Bind a number of an object's methods to that object. Remaining arguments
    // are the method names to be bound. Useful for ensuring that all callbacks
    // defined on an object belong to it.
    _.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache;
            var address = hasher ? hasher.apply(this, arguments) : key;
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function(){
            return func.apply(null, args);
        }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = _.now() - timestamp;

            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };

        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
    };

    // Returns a negated version of the passed-in predicate.
    _.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };

    // Returns a function that will only be executed after being called N times.
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Returns a function that will only be executed before being called N times.
    _.before = function(times, func) {
        var memo;
        return function() {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            } else {
                func = null;
            }
            return memo;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = _.partial(_.before, 2);

    // Object Functions
    // ----------------

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function(obj) {
        if (!_.isObject(obj)) return obj;
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                if (hasOwnProperty.call(source, prop)) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function(obj, iteratee, context) {
        var result = {}, key;
        if (obj == null) return result;
        if (_.isFunction(iteratee)) {
            iteratee = createCallback(iteratee, context);
            for (key in obj) {
                var value = obj[key];
                if (iteratee(value, key, obj)) result[key] = value;
            }
        } else {
            var keys = concat.apply([], slice.call(arguments, 1));
            obj = new Object(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                if (key in obj) result[key] = obj[key];
            }
        }
        return result;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee);
        } else {
            var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
            iteratee = function(value, key) {
                return !_.contains(keys, key);
            };
        }
        return _.pick(obj, iteratee, context);
    };

    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        if (!_.isObject(obj)) return obj;
        for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
                if (obj[prop] === void 0) obj[prop] = source[prop];
            }
        }
        return obj;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
            case '[object RegExp]':
            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return '' + a === '' + b;
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive.
                // Object(NaN) is equivalent to NaN
                if (+a !== +a) return +b !== +b;
                // An `egal` comparison is performed for other numeric values.
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a === +b;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] === a) return bStack[length] === b;
        }
        // Objects with different constructors are not equivalent, but `Object`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (
            aCtor !== bCtor &&
            // Handle Object.create(x) cases
            'constructor' in a && 'constructor' in b &&
            !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                _.isFunction(bCtor) && bCtor instanceof bCtor)
            ) {
            return false;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        var size, result;
        // Recursively compare objects and arrays.
        if (className === '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result = size === b.length;
            if (result) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            // Deep compare objects.
            var keys = _.keys(a), key;
            size = keys.length;
            // Ensure that both objects contain the same number of properties before comparing deep equality.
            result = _.keys(b).length === size;
            if (result) {
                while (size--) {
                    // Deep compare each member
                    key = keys[size];
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return result;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };

    // Is a given value a DOM element?
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
        _['is' + name] = function(obj) {
            return toString.call(obj) === '[object ' + name + ']';
        };
    });

    // Define a fallback version of the method in browsers (ahem, IE), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return _.has(obj, 'callee');
        };
    }

    // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
    if (typeof /./ !== 'function') {
        _.isFunction = function(obj) {
            return typeof obj == 'function' || false;
        };
    }

    // Is a given object a finite number?
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function(obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function(obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iteratees.
    _.identity = function(value) {
        return value;
    };

    // Predicate-generating functions. Often useful outside of Underscore.
    _.constant = function(value) {
        return function() {
            return value;
        };
    };

    _.noop = function(){};

    _.property = function(key) {
        return function(obj) {
            return obj[key];
        };
    };

    // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
    _.matches = function(attrs) {
        var pairs = _.pairs(attrs), length = pairs.length;
        return function(obj) {
            if (obj == null) return !length;
            obj = new Object(obj);
            for (var i = 0; i < length; i++) {
                var pair = pairs[i], key = pair[0];
                if (pair[1] !== obj[key] || !(key in obj)) return false;
            }
            return true;
        };
    };

    // Run a function **n** times.
    _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = createCallback(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function() {
        return new Date().getTime();
    };

    // List of HTML entities for escaping.
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };
    var unescapeMap = _.invert(escapeMap);

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function(map) {
        var escaper = function(match) {
            return map[match];
        };
        // Regexes for identifying a key that needs to be escaped
        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function(string) {
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? object[property]() : value;
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'":      "'",
        '\\':     '\\',
        '\r':     'r',
        '\n':     'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function(match) {
        return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }

            // Adobe VMs need the match returned to produce the correct offest.
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source + 'return __p;\n';

        try {
            var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        var template = function(data) {
            return render.call(this, data, _);
        };

        // Provide the compiled source as a convenience for precompilation.
        var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function. Start chaining a wrapped Underscore object.
    _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    _.each(['concat', 'join', 'slice'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });

    // Extracts the result from a wrapped and chained object.
    _.prototype.value = function() {
        return this._wrapped;
    };

    // AMD registration happens at the end for compatibility with AMD loaders
    // that may not enforce next-turn semantics on modules. Even though general
    // practice for AMD registration is to be anonymous, underscore registers
    // as a named module because, like jQuery, it is a base library that is
    // popular enough to be bundled in a third party lib, but not be part of
    // an AMD load request. Those cases could generate an error when an
    // anonymous define() is called outside of a loader request.
    if (typeof define === 'function' && define.amd) {
        define('underscore', [], function() {
            return _;
        });
    }
}.call(this));