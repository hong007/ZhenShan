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