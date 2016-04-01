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