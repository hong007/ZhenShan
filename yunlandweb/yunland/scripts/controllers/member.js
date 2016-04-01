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