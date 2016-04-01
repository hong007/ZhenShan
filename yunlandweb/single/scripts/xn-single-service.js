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



