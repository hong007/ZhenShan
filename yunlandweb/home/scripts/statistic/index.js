$(function(){

    $("#money").click(function(){
        $("#money").attr("class","click");
        $("#totalArea").removeClass("click");
        $("#price").removeClass("click");
        $("#orderBy").val("MONEY");
        $("#query").click();
    });
    $("#totalArea").click(function(){
        $("#totalArea").attr("class","click");
        $("#money").removeClass("click");
        $("#price").removeClass("click");
        $("#orderBy").val("TOTAL_AREA");
        $("#query").click();
    });
    $("#price").click(function(){
        $("#price").attr("class","click");
        $("#totalArea").removeClass("click");
        $("#money").removeClass("click");
        $("#orderBy").val("PRICE");
        $("#query").click();
    });

    var data;

    $("#query").click(function(){
        var orderBy = $("#orderBy").val();
        var landType = $("#landType").val();
        var sellMethod = $("#sellWay").val();
        var startDate = $("#d4311").val();
        var endDate = $("#d4312").val();
       /* var provinceId = $("#cmbProvinces  option:selected").attr("id");
        var cityId = $("#cmbCitys  option:selected").attr("id");
        var areaId =  $("#cmbAreas  option:selected").attr("id");*/
        var provinceId = $("#cmbProvinces").val();
        var cityId = $("#cmbCitys").val();
        var areaId = $("#cmbAreas").val();
        data = "{'orderBy':\""+orderBy+"\",'landType':\""+landType+"\",'sellMethod':\""+sellMethod+"\",'startDate':\""+startDate+"\",'endDate':\""+endDate+"\",'provinceId':\""+provinceId+"\",'cityId':\""+cityId+"\",'areaId':\""+areaId+"\"}";
        mmg.load({data:data});
    });

    var cols = [
        { title:'地块名称', name:'name' , align:'center',width:180,renderer:function(val){
            return '<span title="'+val+'">'+val+'</span>';
        }},
        { title:'面积', name:'totalArea' , align:'center',width:80},
        { title:'规划用途', name:'planUse' , align:'center',width:80,renderer:function(val){
            if(val){
                var value = getLandPurose(val);
                if(value){
                    return '<span title="'+value+'">'+value+'</span>';
                }else{
                    return "";
                }

            }else{
                return "";
            }
        }},
        {title: '出让方式',name:'supplyType', align: 'floorSpace',width:80,renderer:function(val){
            if(val){
                var value = getSellSupplyMethods(val);
                return '<span title="'+value+'">'+value+'</span>';
            }else{
                return "";
            }
        }},
        { title:'出让期限', name:'sellYear' , align:'center',width:80,   type: 'number',renderer:function(val){
            return '<span title="'+val+'">'+val+'</span>';
        }},
        { title:'成交总价(万元)', name:'money' ,align:'center',width:110, type: 'number'},
        { title:'土地使用权人', name:'user' ,align:'center',width:100, type: 'number'},
        { title:'楼面价', name:'price' ,align:'center',width:80, type: 'number'}
    ];

    paginationBar = $('#pg').mmPaginator({limitList:[20]});

    var mmg = $('.mmg').mmGrid({
        width:940,
        height: 1080,
        cols: cols,
        url: '/sell/api.do',
        method: 'post',
        remoteSort:true,
        nowrap:true,
        root:'result',
        fullWidthRows: true,
        loadErrorText:'云地网提醒您,数据加载异常...',
        autoLoad: true,
        indexCol:true,
        indexColWidth:30,
        plugins: [
            //$('#pg').mmPaginator({limitList:[10,20,30,40]})
            //$('#pg').mmPaginator({})
            paginationBar
        ],
        params: function(){
            return {
                method: 'api.statistic.result.find',
                data:data
            }
        }
    });

    $("#money").click();

});