var myChart;
var theUnit = "块";
var theName = "成交数量";
require.config({
    paths: {
        echarts: '../home/vendor/echarts'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec){
        // 基于准备好的dom，初始化echarts图表
        myChart = ec.init(document.getElementById('mainAmount'));
        var option = {
            title : {
                text: '成交数量',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['成交数量']
            },
            toolbox: {
                show : true,
                feature : {
//                    mark : {show: true},
//                    dataView : {show: true, readOnly: false},
//                    magicType : {show: true, type: ['line', 'bar']},
//                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} 块'
                    }
                }
            ],
            series : [
                {
                    name:'成交数量',
                    type:'line',

                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option,true);
    }

);


$(function(){

    // 展示类型
    $("#monthAmount").click(function(){
        $("#monthAmount").attr("class","click");
        $("#monthAmount").siblings().removeClass("click");
        $(".content-main").hide();
        $("#mainAmount").show();
        $("#monthType").val("monthAmount");
        theUnit = "块";
        //doSearch("#monthAmount",'成交数量');
        doSearch("块",'成交数量');
    });

    $("#monthArea").click(function(){
        $("#monthArea").attr("class","click");
        $("#monthArea").siblings().removeClass("click");
        $(".content-main").hide();
        $("#mainAmount").show();
        $("#monthType").val("monthArea");
        theUnit = "万平方米";
        theName = "成交面积";
        //doSearch("#monthArea",'成交面积');
        doSearch("万平方米",'成交面积');
    });

    $("#monthMoney").click(function(){
        $("#monthMoney").attr("class","click");
        $("#monthMoney").siblings().removeClass("click");
        $(".content-main").hide();
        $("#mainAmount").show();
        $("#monthType").val("monthMoney");
        theUnit = "万元";
        theName = "成交金额"
        //doSearch('#monthMoney','成交金额');
        doSearch('万元','成交金额');
    });

    $("#monthPrice").click(function(){
        $("#monthPrice").attr("class","click");
        $("#monthPrice").siblings().removeClass("click");
        $(".content-main").hide();
        $("#mainAmount").show();
        $("#monthType").val("monthPrice");
        theUnit = "万元";
        theName = "平均楼面价";
        //doSearch('#monthPrice','平均楼面价');
        doSearch('万元','平均楼面价');
    });

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var endMonth = year + month;
    var startMonth = year + '01';
    //alert(endMonth);

    //var startMonth = '';
    //var endMonth = '';

    $("#query").click(function(){
        doSearch(theUnit,theName);
    });

    function doSearch(unit,name){
        var monthType = $("#monthType").val();
        var landType = $("#landType").val();
        if($("#startmonth").val() != '' && $("#endmonth").val() !=''){
            startMonth = $("#startmonth").val();
            endMonth = $("#endmonth").val();
        }

        /*var provinceId = $("#cmbProvinces  option:selected").attr("id");
        var cityId = $("#cmbCitys  option:selected").attr("id");
        var areaId =  $("#cmbAreas  option:selected").attr("id");*/
        var provinceId = $("#cmbProvinces").val();
        var cityId = $("#cmbCitys").val();
        var areaId = $("#cmbAreas").val();
        var data = "{'monthType':\""+monthType+"\",'landType':\""+landType+"\",'startMonth':\""+startMonth+"\",'endMonth':\""+endMonth+"\",'provinceId':\""+provinceId+"\",'cityId':\""+cityId+"\",'areaId':\""+areaId+"\"}";
        var monthX = [];
        var monthY_str = "";
        var monthY = [];

        $.ajax({ type: "post",//使用get方法访问后台
            dataType: "json",//返回json格式的数据
            url:'/sell/api.do',
            data:{method:'api.statistic.trendchart.find',data:data},
            success: function(msg){
                console.log(msg);
                if(!msg.result||msg.result.length == 0) {
                    monthX.length = 0;
                    monthY.length = 0;
                    monthX.push('2015-09');
                    monthY.push('0');
                }else{
                    monthX.length = 0;
                    monthY.length = 0;
                        for(i=0; i < msg.result.length ; i++){
                            monthX.push(msg.result[i].month);
                        }
                        for(i=0; i < msg.result.length; i++){
                            monthY_str = msg.result[i].monthAmount + msg.result[i].monthArea + msg.result[i].monthMoney + msg.result[i].monthPrice;
                            monthY.push(monthY_str);
                        }
                }
                console.log("monthX"+monthX);
                console.log("monthY"+monthY);
                myChart.setOption({
                    title : {
                        text: name,
                        subtext: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:[name]
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : true,
                            data : monthX
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel : {
                                formatter: '{value} ' + unit
                            }
                        }
                    ],
                    series : [
                        {
                            name:name,
                            type:'line',
                            data: monthY,
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                },true);

                myChart.refresh;

            }
        })
    }


    $("#query").click();

});