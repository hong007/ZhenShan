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
